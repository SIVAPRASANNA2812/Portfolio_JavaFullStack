# 🚀 Siva Prasanna — Java Full Stack & Oracle PL/SQL Developer Portfolio

A modern, fast, zero-build developer portfolio showcasing **6+ years of enterprise database experience at Tata Consultancy Services (TCS)** combined with modern **Java Full Stack Development** mastered through the **Executive Program at HCL / GUVI Zen Class (IIT Madras Research Park)**.

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visit_Website-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://sivaprasanna2812.github.io/Portfolio_JavaFullStack/)
[![GitHub Profile](https://img.shields.io/badge/GitHub-SIVAPRASANNA2812-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SIVAPRASANNA2812)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Siva_Prasanna-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sivaprasanna2812)
[![Email](https://img.shields.io/badge/Email-sivaprasanna28@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sivaprasanna28@gmail.com)

---

## 👨‍💻 Professional Summary

Senior Systems Engineer with **6+ years of mission-critical enterprise experience at Tata Consultancy Services (TCS)**, specialized in architecting high-throughput **Oracle 19c PL/SQL batch systems**, complex database procedures, and legacy mainframe modernization for tier-1 European clients. Recognized as **Best Performer of the Year** at TCS for engineering excellence and zero-downtime production cutovers.

Strategically expanded into **Full-Stack Distributed Systems** via the **Executive Program at HCL / GUVI Zen Class (IIT Madras Research Park)**. Combines deep database internals (`BULK COLLECT`, `FORALL`, analytical functions, and ACID transaction boundaries) with modern **Java 21, Spring Boot 3, Spring Security 6 (JJWT Token Rotation), MongoDB Atlas, and Docker containerization**.

---

## 🌟 Featured Projects

### 1. [CareerNest — Enterprise Full-Stack Job Portal Platform](projects.html)
* **Category:** HCL / GUVI Full Stack Capstone • Java 21
* **Tech Stack:** `Java 21`, `Spring Boot`, `MongoDB Atlas`, `Spring Security 6`, `JWT (Token Rotation)`, `Twilio Cloud SMS`, `HTML5/CSS3/Vanilla JS`, `Docker`, `Nginx Alpine`, `Render`
* **Highlights:**
  * Real-time job discovery with keyword/location filtering, 1-click modal applications, and live status tracker (`APPLIED`, `UNDER_REVIEW`, `ACCEPTED`, `REJECTED`).
  * Stateless security via Spring Security 6 & JJWT featuring 15-minute access tokens and single-use 7-day refresh tokens with automated revocation in MongoDB Atlas.
  * Asynchronous dual-mode Twilio Cloud SMS engine broadcasting real-time review alerts directly to candidates' mobile phones.
  * Multi-stage Docker builds (Temurin JDK 21 backend + Nginx Alpine frontend) deployed to Render Cloud with OpenAPI 3 / Swagger documentation.

### 2. [E-Commerce Backend System REST API](projects.html)
* **Category:** HCL / GUVI Full Stack Capstone • Backend & Cloud API
* **Tech Stack:** `Java 21`, `Spring Boot`, `MongoDB`, `Spring Security`, `JWT / RBAC`, `AWS EC2`, `Render`, `Docker`
* **Highlights:**
  * Role-Based Access Control (RBAC) across `USER`, `ADMIN`, and `MANAGER` roles with BCrypt password hashing.
  * Zero-lock concurrency control using MongoDB conditional atomic updates (`findAndModify`) preventing race conditions and inventory overselling during peak checkouts.
  * 4-step transactional workflow (`stock validation` &rarr; `atomic deduction` &rarr; `order creation` &rarr; `cart clearing`) with price locking (`priceAtPurchase`) and auto-replenishment on cancellation.
  * Idempotent payment simulation service with safe retry policies, hosted on AWS EC2 & Render with RFC-compliant global exception handling.

### 3. [PRR Time & Attendance Migration System](projects.html)
* **Category:** Enterprise Oracle PL/SQL • TCS Production System
* **Tech Stack:** `Oracle 19c`, `PL/SQL`, `Bulk Collect & FORALL`, `Performance Tuning`, `TCS Enterprise`
* **Highlights:**
  * Migrated legacy mainframe time-and-attendance calculation logic into optimized Oracle 19c PL/SQL packages, stored procedures, and triggers for Colruyt Group.
  * Engineered automated auditing queries used by third-party regulatory agencies to validate employee absence and working hours.
  * Leveraged high-speed batch execution using `BULK COLLECT` and `FORALL` constructs for large-scale enterprise data processing.

### 4. [Logistics Workers Tax Reduction & Compliance Engine](projects.html)
* **Category:** Enterprise Oracle PL/SQL • Project Lead (TCS)
* **Tech Stack:** `Oracle PL/SQL`, `PeopleTools`, `Control-M`, `Large Datasets`, `TCS Best Performer Award`
* **Highlights:**
  * Served as Project Lead defining business rules and engineering PL/SQL procedures to extract, filter, and process massive datasets against statutory tax reduction criteria.
  * Awarded **Best Performer of the Year** at TCS for converting legacy SQR cycles to modern, high-throughput PL/SQL.

---

## 🛠️ Technical Competencies

| Domain | Technologies & Methodologies |
| :--- | :--- |
| **Languages** | Java 21, Oracle SQL, PL/SQL, JavaScript (ES6+), HTML5, CSS3 |
| **Frameworks & Backend** | Spring Boot 3, Spring Data JPA, Spring Security 6, Hibernate ORM, RESTful Web Services |
| **Databases & Cloud** | Oracle Database 19c, MongoDB Atlas, Snowflake, MySQL |
| **Database Engineering** | Stored Procedures, Packages, Functions, Triggers, Views, Cursors, Bulk Collect & FORALL, Query Optimization |
| **Security & Architecture** | JJWT Token Rotation & Revocation, RBAC, Microservices, MVC Architecture, Clean Architecture |
| **DevOps & Tools** | Docker, Docker Compose, Nginx, Git, GitHub, Jenkins (CI/CD), Maven, Postman, Swagger / OpenAPI 3, AWS EC2, Render |
| **Testing & Quality** | JUnit 5, Mockito, MockMvc, Automated Unit & Integration Testing, Agile/Scrum, SDLC |

---

## 📁 Repository Structure

```text
Portfolio_JavaFullStack/
│
├── index.html                   # Home Page: Crisp executive pitch, tech badges, photo blob, resume CTA
├── about.html                   # About Page: 6+ yrs TCS experience, HCL/GUVI transition, bento grid, timeline
├── projects.html                # Projects Page: Live category filtering (HCL/GUVI Capstones vs. TCS Enterprise)
├── resume.html                  # Resume Page: Interactive embedded PDF viewer, summary cards, direct download
├── contact.html                 # Contact Page: Direct details (email, phone, LinkedIn, GitHub) & message form
│
├── style.css                    # Master Stylesheet: Unified Dark/Light theme, blob animation, mobile-first
├── script.js                    # Master JavaScript: Theme toggle, mobile drawer, project filtering, contact form
│
├── profile.jpg                  # Profile Picture
├── SivaPrasanna_Resume.pdf      # PDF Resume Document
├── .gitignore                   # Git Ignore Configuration
└── README.md                    # Project Documentation & Architecture Overview
```

---

## ⚡ Key Highlights of This Portfolio Website

1. **Zero-Build & Ultra-Fast:** Built using semantic HTML5, clean CSS3, and modular Vanilla JavaScript—delivering sub-second load times without heavy bundler overhead.
2. **Native Dark / Light Mode:** Instant theme switcher with `localStorage` memory and system preference detection.
3. **Live Projects Filtering:** Client-side JavaScript filtering by category (*All Projects, HCL / GUVI Full Stack Capstones, TCS Enterprise Systems*).
4. **Interactive Embedded Resume:** View [`SivaPrasanna_Resume.pdf`](SivaPrasanna_Resume.pdf) directly in the browser or download it with one click.
5. **Mobile-First Responsive Design:** Optimized for desktops, tablets, and smartphones with an animated slide-over mobile drawer.

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SIVAPRASANNA2812/Portfolio_JavaFullStack.git
   cd Portfolio_JavaFullStack
   ```
2. **Open in browser:**
   - Double-click `index.html`, OR
   - In VS Code, right-click `index.html` $\rightarrow$ **Open with Live Server**.

---

## 📬 Contact & Connect

* **Developer:** Siva Prasanna
* **Role:** Senior Systems Engineer | Java Full Stack & Oracle PL/SQL
* **Email:** [sivaprasanna28@gmail.com](mailto:sivaprasanna28@gmail.com)
* **Phone:** +91-8754198575
* **LinkedIn:** [linkedin.com/in/sivaprasanna2812](https://www.linkedin.com/in/sivaprasanna2812)
* **GitHub:** [github.com/SIVAPRASANNA2812](https://github.com/SIVAPRASANNA2812)
* **Live Site:** [https://sivaprasanna2812.github.io/Portfolio_JavaFullStack/](https://sivaprasanna2812.github.io/Portfolio_JavaFullStack/)

---
© 2026 **Siva Prasanna**. All rights reserved.
