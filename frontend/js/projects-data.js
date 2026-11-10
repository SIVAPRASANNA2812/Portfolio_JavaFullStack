/**
 * ============================================================================
 * SIVA PRASANNA - PORTFOLIO PROJECTS DATA
 * ============================================================================
 * Centralized project configurations for Siva Prasanna.
 * GitHub: https://github.com/SIVAPRASANNA2812
 */

const projectsData = [
  {
    id: "ecommerce-fsd",
    title: "E-Commerce Full Stack Web Application",
    tagline: "End-to-End Enterprise Shopping Platform with Spring Boot & MySQL",
    category: "fullstack",
    categoryLabel: "Full Stack",
    image: null,
    summary: "A complete Full Stack e-commerce application featuring product catalog management, shopping cart operations, user authentication, and order processing with automated inventory updates.",
    techStack: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Hibernate", "HTML5", "CSS3", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/SIVAPRASANNA2812/Ecommerce-Spring-Boot",
    liveDemoUrl: "#",
    highlights: [
      "Designed normalized relational database schema with tables for Users, Products, Categories, Orders, and OrderItems.",
      "Implemented RESTful endpoints for catalog browsing, cart persistence, and order placement.",
      "Built clean, responsive frontend using HTML5, CSS3, and modern JavaScript Fetch API for asynchronous state updates.",
      "Integrated Spring Data JPA with transactional consistency (@Transactional) for order checkouts.",
      "Comprehensive error handling and input validation using Bean Validation (Jakarta Validation)."
    ],
    architecture: {
      client: "HTML5, CSS3, Vanilla JS (Fetch API, DOM rendering, Cart State)",
      apiLayer: "Spring Boot @RestController with DTO request/response mapping",
      businessLayer: "Spring Service Layer (@Service) handling business rules & validations",
      dataAccess: "Spring Data JPA Repositories with Hibernate ORM",
      database: "MySQL 8.0 relational database with foreign key constraints",
      flowDiagram: `[User Browser: HTML/CSS/JS]
       │
       ▼ (HTTP REST JSON)
[Spring Boot Controller: ProductController / OrderController]
       │
       ▼ (DTO Validation & Service Call)
[Service Layer: OrderServiceImpl with @Transactional]
       │
       ▼ (JPA Queries / Entity Mapping)
[Spring Data JPA Repository: ProductRepository / OrderRepository]
       │
       ▼ (JDBC Connection Pool / HikariCP)
[MySQL Database: ecom_db]`
    },
    sampleEndpoints: [
      "GET /api/products - Retrieve paginated catalog with filters",
      "GET /api/products/{id} - Get detailed product specification",
      "POST /api/cart/items - Add item to cart with quantity check",
      "POST /api/orders/checkout - Place order and decrement inventory atomically"
    ]
  },
  {
    id: "ems-spring-boot",
    title: "Employee Management System (EMS)",
    tagline: "Enterprise HR & Department CRUD Portal",
    category: "fullstack",
    categoryLabel: "Full Stack",
    image: null,
    summary: "Full-stack enterprise CRUD platform designed to streamline corporate workforce administration, departmental assignments, salary tracking, and real-time record filtering.",
    techStack: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "JavaScript ES6", "HTML5", "CSS3", "Bootstrap"],
    githubUrl: "https://github.com/SIVAPRASANNA2812/Employee-Management-System",
    liveDemoUrl: "#",
    highlights: [
      "Developed robust CRUD functionality for employee profiles, roles, and department allocations.",
      "Built interactive dynamic frontend tables with real-time client-side search, filtering, and sorting in Vanilla JS.",
      "Implemented custom global exception handler with @ControllerAdvice returning standardized error responses.",
      "Configured database migrations and schema generation using Hibernate DDL and Spring Data JPA."
    ],
    architecture: {
      client: "Responsive Web UI (HTML5, Bootstrap, ES6 JavaScript Fetch)",
      apiLayer: "EmployeeController & DepartmentController (@CrossOrigin)",
      businessLayer: "EmployeeService interface & implementation with validation",
      dataAccess: "JpaRepository<Employee, Long>",
      database: "MySQL Database",
      flowDiagram: `[HR Admin Browser UI]
       │
       ▼ (REST API / JSON)
[EmployeeController: @GetMapping, @PostMapping, @PutMapping, @DeleteMapping]
       │
       ▼
[EmployeeServiceImpl: Business rules, duplicate email check]
       │
       ▼
[EmployeeRepository: JpaRepository]
       │
       ▼
[MySQL: employees_db]`
    },
    sampleEndpoints: [
      "GET /api/employees - Fetch list of all active personnel",
      "POST /api/employees - Register new employee record with validation",
      "PUT /api/employees/{id} - Update role or salary data",
      "DELETE /api/employees/{id} - Soft-delete / deactivate employee"
    ]
  },
  {
    id: "banking-api",
    title: "Secure Banking & Fund Transfer REST API",
    tagline: "ACID-compliant Transaction Engine with Spring Boot & JWT",
    category: "backend",
    categoryLabel: "Backend / Spring Boot",
    image: null,
    summary: "High-integrity banking backend service capable of managing customer accounts, secure authentication, deposit/withdrawal operations, and atomic peer-to-peer fund transfers.",
    techStack: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL / H2", "Swagger / OpenAPI"],
    githubUrl: "https://github.com/SIVAPRASANNA2812/Banking-Fund-Transfer-API",
    liveDemoUrl: "#",
    highlights: [
      "Engineered atomic fund transfer logic with strict ACID guarantees using Spring @Transactional rollback mechanisms.",
      "Integrated Spring Security and JSON Web Tokens (JWT) for stateless, role-based access control (USER / ADMIN).",
      "Designed comprehensive audit logging tracking every financial transaction with timestamps and balances.",
      "Created interactive OpenAPI / Swagger documentation for all REST endpoints."
    ],
    architecture: {
      client: "Postman / Frontend Client / Swagger UI",
      apiLayer: "Spring Boot REST Controllers with JWT Authentication Filter",
      businessLayer: "AccountService & TransactionService with concurrency handling",
      dataAccess: "Spring Data JPA with optimistic locking (@Version)",
      database: "Relational Database (PostgreSQL / H2 in-memory test suite)",
      flowDiagram: `[Client Request + Bearer JWT]
       │
       ▼
[JwtAuthenticationFilter -> SecurityContextHolder]
       │
       ▼
[AccountController / TransactionController]
       │
       ▼
[TransactionService.transferFunds() -> @Transactional(isolation = READ_COMMITTED)]
       │
       ▼ (Check Balances -> Deduct Sender -> Credit Receiver -> Insert Audit Log)
[AccountRepository & TransactionLogRepository]
       │
       ▼
[Relational Database: Accounts & Transactions tables]`
    },
    sampleEndpoints: [
      "POST /api/auth/login - Authenticate user and issue JWT",
      "GET /api/accounts/{accNo}/balance - View current ledger balance",
      "POST /api/transactions/transfer - Perform atomic inter-account transfer",
      "GET /api/transactions/history - Retrieve statement of transactions"
    ]
  },
  {
    id: "portfolio-inquiry-engine",
    title: "Developer Portfolio & Inquiry System",
    tagline: "Dynamic Portfolio with Spring Boot Contact & Project REST APIs",
    category: "fullstack",
    categoryLabel: "Full Stack",
    image: null,
    summary: "This very portfolio platform! Crafted with a lightweight, accessible HTML5/CSS3/JS frontend connected to a Spring Boot REST API for inquiries, project delivery, and theme persistence.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Java 17", "Spring Boot", "Spring Data JPA", "H2 / MySQL"],
    githubUrl: "https://github.com/SIVAPRASANNA2812/Portfolio_FSD",
    liveDemoUrl: "#",
    highlights: [
      "Zero heavyweight frontend framework overhead: lightning-fast load times with native Vanilla JS.",
      "Dual-mode architecture: can operate 100% statically on GitHub Pages or connect to Spring Boot backend.",
      "Integrated Spring Boot REST backend with message persistence, CORS handling, and validation.",
      "Custom responsive design, dark/light theme switching, and interactive architecture diagrams."
    ],
    architecture: {
      client: "Modular Vanilla JavaScript with async Fetch API",
      apiLayer: "ContactController & ProjectController (@CrossOrigin)",
      businessLayer: "ContactService validation & persistence",
      dataAccess: "Spring Data JPA Repository",
      database: "H2 in-memory or MySQL database",
      flowDiagram: `[Portfolio Visitor UI: HTML5/CSS3/JS]
       │
       ▼ (Fetch POST /api/contact)
[Spring Boot REST Controller]
       │
       ▼ (Jakarta Validation)
[ContactService: Log & Save Message]
       │
       ▼
[ContactMessageRepository]
       │
       ▼
[H2 / MySQL Database: contact_messages]`
    },
    sampleEndpoints: [
      "GET /api/projects - Retrieve dynamic projects list",
      "POST /api/contact - Submit inquiry with name, email, subject, message",
      "GET /api/contact - Retrieve all inquiries (Admin endpoint)"
    ]
  }
];

// Technical Skills Data
const skillsData = [
  {
    category: "Backend & Core Java",
    icon: "☕",
    skills: [
      "Java (OOPs, Collections, Streams, Multithreading)",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate ORM",
      "RESTful API Design",
      "Microservices Architecture",
      "Spring Security Basics"
    ]
  },
  {
    category: "Frontend Development",
    icon: "🌐",
    skills: [
      "HTML5 (Semantic UI)",
      "CSS3 (Flexbox, Grid, Animations)",
      "JavaScript (ES6+, DOM, Fetch API)",
      "Responsive Web Design",
      "Bootstrap / Tailwind Concepts",
      "AJAX & Async Programming",
      "Client-side Form Validation"
    ]
  },
  {
    category: "Database & Persistence",
    icon: "🗄️",
    skills: [
      "MySQL",
      "PostgreSQL",
      "H2 In-Memory Database",
      "Relational Schema Design & Normalization",
      "Complex SQL Queries & Joins",
      "Database Indexing & Transactions (ACID)"
    ]
  },
  {
    category: "Tools, DevOps & Practices",
    icon: "🛠️",
    skills: [
      "Git & GitHub",
      "Apache Maven",
      "Postman (API Testing)",
      "Docker Fundamentals",
      "IntelliJ IDEA & VS Code",
      "Unit Testing (JUnit 5, Mockito)",
      "Clean Code & SOLID Principles",
      "Agile / Scrum Workflow"
    ]
  }
];
