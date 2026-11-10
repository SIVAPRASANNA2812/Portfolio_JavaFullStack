# 🚀 Siva Prasanna - Java Full Stack Developer Portfolio

A modern, high-performance portfolio application designed specifically for **Java Full Stack Developers**. Built with **HTML5, CSS3, and JavaScript** on the frontend, powered by a **Java & Spring Boot** REST API backend.

![Portfolio Preview Banner](https://img.shields.io/badge/Stack-Java%20%7C%20Spring%20Boot%20%7C%20MySQL%20%7C%20HTML%20%7C%20CSS%20%7C%20JS-38bdf8?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-10b981?style=for-the-badge)

---

## 👨‍💻 Developer Profile

- **Developer:** Siva Prasanna
- **Title:** Java Full Stack Developer
- **GitHub:** [github.com/SIVAPRASANNA2812](https://github.com/SIVAPRASANNA2812)
- **LinkedIn:** [linkedin.com/in/sivaprasanna2812](https://www.linkedin.com/in/sivaprasanna2812)
- **Email:** [sivaprasanna28@gmail.com](mailto:sivaprasanna28@gmail.com)

---

## 🌟 Key Features

1. **Enterprise 5-Layer System Architecture Section**:
   - Visual breakdown illustrating: `Client UI (HTML/CSS/JS)` $\rightarrow$ `REST Controller (@RestController)` $\rightarrow$ `Service Layer (@Service)` $\rightarrow$ `ORM (@Repository/JPA)` $\rightarrow$ `Database (MySQL)`.
2. **Featured Projects Showcase with Architecture Modals**:
   - Detailed project case studies for:
     - **E-Commerce Full Stack Web Application** (Spring Boot, MySQL, REST, Vanilla JS)
     - **Employee Management System (EMS)** (Spring Boot, Hibernate, MySQL, Bootstrap)
     - **Secure Banking & Fund Transfer REST API** (Spring Boot, JWT Security, ACID transactions)
     - **Developer Portfolio & Inquiry System** (HTML5, CSS3, JS, Spring Boot REST API)
   - Interactive modal popup with **system architecture flow diagrams** and **sample REST endpoints**.
3. **Dynamic Filtering**:
   - Filter projects instantly by category: `All`, `Full Stack`, or `Backend & REST APIs`.
4. **Theme Switcher**:
   - Smooth Dark Mode & Light Mode toggle with persistence via `localStorage`.
5. **Interactive Contact System**:
   - Connects directly to the Spring Boot REST backend (`POST /api/contact`) with Jakarta Bean Validation.
   - Intelligent fallback: If running statically without the backend running, automatically provides an instant direct email compose option.
6. **Mobile First & Fully Responsive**:
   - Optimized for desktop, tablets, and smartphones with mobile navigation drawer.

---

## 📁 Repository Structure

```text
PortFolio_FSD/
│
├── frontend/                                # Frontend Single-Page Application
│   ├── index.html                           # Main semantic HTML5 document
│   ├── css/
│   │   ├── themes.css                       # Dark & Light mode theme variables
│   │   └── style.css                        # Responsive styles, glassmorphism, animations
│   ├── js/
│   │   ├── app.js                           # UI interactions, modals, filtering, theme toggle
│   │   ├── projects-data.js                 # Central project and skill definitions (easy to customize)
│   │   └── api.js                           # REST API client connecting to Spring Boot
│   └── assets/
│       ├── icons/                           # Tech icons
│       └── resume/
│           ├── README.txt
│           └── Siva_Prasanna_Resume.pdf     # Place your PDF resume here
│
├── backend/                                 # Spring Boot REST API Application
│   ├── pom.xml                              # Maven build file with Spring Boot 3 & Java 17+
│   └── src/main/
│       ├── java/com/portfolio/
│       │   ├── PortfolioApplication.java    # Spring Boot Main Entry Point
│       │   ├── config/WebConfig.java        # CORS configuration for cross-origin access
│       │   ├── controller/
│       │   │   ├── ContactController.java   # POST & GET /api/contact endpoints
│       │   │   ├── HealthController.java    # GET /api/health check endpoint
│       │   │   └── ProjectController.java   # GET /api/projects REST endpoint
│       │   ├── model/
│       │   │   ├── ContactMessage.java      # JPA Entity for contact inquiries
│       │   │   └── Project.java             # Project POJO model
│       │   ├── repository/
│       │   │   └── ContactMessageRepository.java # Spring Data JPA repository
│       │   └── service/
│       │       └── ContactService.java      # Transactional business logic
│       └── resources/
│           └── application.properties       # H2 (in-memory) & MySQL configurations
│
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Running the Frontend (Static / Local)

You can launch the frontend immediately with no build steps required:

- **Option A (VS Code Live Server)**:
  Right-click `frontend/index.html` $\rightarrow$ Select **"Open with Live Server"**.
- **Option B (Direct Browser)**:
  Double-click `frontend/index.html` to open it in Chrome, Edge, or Firefox.
- **Option C (Node.js)**:
  ```bash
  npx serve frontend
  ```

---

### 2. Running the Spring Boot Backend

The backend is configured with an in-memory **H2 Database** by default, meaning it runs instantly without requiring a local database server installation.

```bash
cd backend
mvn spring-boot:run
```

Once running:
- **API Base URL:** `http://localhost:8080/api`
- **Health Check:** `http://localhost:8080/api/health`
- **Inquiries API:** `http://localhost:8080/api/contact`
- **H2 Database Console:** `http://localhost:8080/h2-console`
  - JDBC URL: `jdbc:h2:mem:portfoliodb`
  - Username: `sa`
  - Password: *(blank)*

*(Optional: To use a MySQL database, open `backend/src/main/resources/application.properties` and uncomment the MySQL block with your credentials).*

---

### 3. How to Customize Your Projects

All projects and skill tags are stored in [`frontend/js/projects-data.js`](frontend/js/projects-data.js).

To add a new project or change a GitHub link:
1. Open `frontend/js/projects-data.js`.
2. Update the project title, description, or `githubUrl`:
   ```javascript
   {
     id: "my-custom-project",
     title: "My Super Project",
     category: "fullstack",
     githubUrl: "https://github.com/SIVAPRASANNA2812/my-custom-project",
     ...
   }
   ```
3. Refresh `index.html` in your browser. The changes will update immediately!

---

### 4. Deploying to the Web (Free)

#### Frontend:
- **GitHub Pages:**
  1. Push this repository to `https://github.com/SIVAPRASANNA2812/portfolio`.
  2. Go to **Settings $\rightarrow$ Pages**.
  3. Under **Branch**, select `main` and folder `/frontend` (or move files to root).
  4. Your portfolio will be live at `https://sivaprasanna2812.github.io/portfolio/`!

#### Backend:
- Deploy the `backend/` folder to free cloud platforms like **Render**, **Railway**, or **Fly.io**.
- Update `API_CONFIG.baseUrl` in [`frontend/js/api.js`](frontend/js/api.js) to your deployed backend URL.
