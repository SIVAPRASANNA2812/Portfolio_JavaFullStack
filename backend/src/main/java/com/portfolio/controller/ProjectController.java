package com.portfolio.controller;

import com.portfolio.model.Project;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @GetMapping
    public ResponseEntity<List<Project>> getFeaturedProjects() {
        List<Project> projects = Arrays.asList(
            new Project(
                "ecommerce-fsd",
                "E-Commerce Full Stack Web Application",
                "End-to-End Enterprise Shopping Platform with Spring Boot & MySQL",
                "fullstack",
                "Full Stack",
                "A complete Full Stack e-commerce application featuring product catalog management, shopping cart operations, user authentication, and order processing with automated inventory updates.",
                Arrays.asList("Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Hibernate", "HTML5", "CSS3", "JavaScript", "REST APIs"),
                "https://github.com/SIVAPRASANNA2812/Ecommerce-Spring-Boot",
                "#",
                Arrays.asList(
                    "Designed normalized relational database schema with tables for Users, Products, Categories, Orders, and OrderItems.",
                    "Implemented RESTful endpoints for catalog browsing, cart persistence, and order placement.",
                    "Built clean, responsive frontend using HTML5, CSS3, and modern JavaScript Fetch API.",
                    "Integrated Spring Data JPA with transactional consistency (@Transactional) for checkouts."
                )
            ),
            new Project(
                "ems-spring-boot",
                "Employee Management System (EMS)",
                "Enterprise HR & Department CRUD Portal",
                "fullstack",
                "Full Stack",
                "Full-stack enterprise CRUD platform designed to streamline corporate workforce administration, departmental assignments, and real-time record filtering.",
                Arrays.asList("Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "JavaScript ES6", "HTML5", "CSS3", "Bootstrap"),
                "https://github.com/SIVAPRASANNA2812/Employee-Management-System",
                "#",
                Arrays.asList(
                    "Developed robust CRUD functionality for employee profiles, roles, and department allocations.",
                    "Built interactive dynamic frontend tables with real-time client-side search and filtering.",
                    "Implemented custom global exception handler with @ControllerAdvice returning standardized errors."
                )
            ),
            new Project(
                "banking-api",
                "Secure Banking & Fund Transfer REST API",
                "ACID-compliant Transaction Engine with Spring Boot & JWT",
                "backend",
                "Backend / Spring Boot",
                "High-integrity banking backend service capable of managing customer accounts, secure authentication, deposit/withdrawal operations, and atomic peer-to-peer fund transfers.",
                Arrays.asList("Java 17", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL / H2", "Swagger / OpenAPI"),
                "https://github.com/SIVAPRASANNA2812/Banking-Fund-Transfer-API",
                "#",
                Arrays.asList(
                    "Engineered atomic fund transfer logic with strict ACID guarantees using Spring @Transactional.",
                    "Integrated Spring Security and JSON Web Tokens (JWT) for stateless, role-based access control.",
                    "Created interactive OpenAPI / Swagger documentation for all REST endpoints."
                )
            ),
            new Project(
                "portfolio-inquiry-engine",
                "Developer Portfolio & Inquiry System",
                "Dynamic Portfolio with Spring Boot Contact & Project REST APIs",
                "fullstack",
                "Full Stack",
                "This very portfolio platform! Crafted with a lightweight, accessible HTML5/CSS3/JS frontend connected to a Spring Boot REST API for inquiries and project delivery.",
                Arrays.asList("HTML5", "CSS3", "JavaScript", "Java 17", "Spring Boot", "Spring Data JPA", "H2 / MySQL"),
                "https://github.com/SIVAPRASANNA2812/Portfolio_FSD",
                "#",
                Arrays.asList(
                    "Zero heavyweight frontend framework overhead: lightning-fast load times with native Vanilla JS.",
                    "Dual-mode architecture: can operate statically on GitHub Pages or connect to Spring Boot backend.",
                    "Custom responsive design, dark/light theme switching, and interactive architecture diagrams."
                )
            )
        );

        return ResponseEntity.ok(projects);
    }
}
