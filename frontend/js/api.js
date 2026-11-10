/**
 * ============================================================================
 * API SERVICE - SPRING BOOT INTEGRATION
 * ============================================================================
 * Handles REST communication with the Spring Boot backend server.
 * Gracefully falls back to local data / mailto when running statically.
 */

const API_CONFIG = {
  baseUrl: 'http://localhost:8080/api',
  timeoutMs: 4000
};

const ApiService = {
  /**
   * Check if Spring Boot backend is active
   */
  async checkBackendStatus() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeoutMs);
      
      const response = await fetch(`${API_CONFIG.baseUrl}/health`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response.ok;
    } catch (err) {
      return false;
    }
  },

  /**
   * Submit Contact Form
   * @param {Object} formData { name, email, subject, message }
   */
  async sendContactMessage(formData) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeoutMs);

      const response = await fetch(`${API_CONFIG.baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const result = await response.json();
        return { success: true, mode: 'backend', data: result };
      } else {
        const errorData = await response.json().catch(() => ({}));
        return { 
          success: false, 
          message: errorData.message || 'Server error while submitting message' 
        };
      }
    } catch (err) {
      // Backend not running (e.g. static hosting)
      console.warn('Backend unavailable, falling back to static mail handling:', err);
      return { 
        success: true, 
        mode: 'fallback', 
        message: 'Backend server is offline. Direct email link prepared!' 
      };
    }
  },

  /**
   * Fetch projects from Spring Boot backend, fallback to local projectsData
   */
  async getProjects() {
    try {
      const response = await fetch(`${API_CONFIG.baseUrl}/projects`);
      if (response.ok) {
        const serverProjects = await response.json();
        if (Array.isArray(serverProjects) && serverProjects.length > 0) {
          return serverProjects;
        }
      }
    } catch (err) {
      // Ignore and use local projectsData
    }
    return typeof projectsData !== 'undefined' ? projectsData : [];
  }
};
