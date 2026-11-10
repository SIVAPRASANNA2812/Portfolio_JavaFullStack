package com.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
        System.out.println("==============================================================");
        System.out.println("🚀 Siva Prasanna Portfolio Backend is LIVE!");
        System.out.println("🔗 REST API Endpoint : http://localhost:8080/api");
        System.out.println("🔗 Health Check      : http://localhost:8080/api/health");
        System.out.println("🔗 Contact Endpoint  : http://localhost:8080/api/contact");
        System.out.println("🔗 H2 Database Console: http://localhost:8080/h2-console");
        System.out.println("==============================================================");
    }
}
