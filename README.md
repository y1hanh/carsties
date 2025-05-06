## Carstie - Auction Platform
Carstie is designed with a modern, event-driven microservices architecture to ensure scalability, resilience, and real-time auction updates.

## 🏗️ System Progress Overview

| Component | Status | Notes |
|-----------|--------|-------|
| **Auction Service (Auction-svc)** | ✅ Done | Core functionality (create, manage auctions) completed. |
| **Search Service (Search-svc)** | ✅ Done | Search indexing and querying implemented. |
| **Event Bus (RabbitMQ Integration)** | ✅ Done | Publish/Subscribe infrastructure in place. |
| **Identity Service (Identity-svc)** | 🔄 Doing | User authentication and authorization (Postgres) planned. |
| **Bidding Service (Bidding-svc)** | 🔜 To Do | Real-time bidding logic under development. |
| **Notification Service (Notification-svc)** | 🔜 To Do | Real-time user notifications via SignalR to be implemented. |
| **Gateway Service** | 🔜 To Do | API Gateway routing to microservices pending. |
| **Web Application (Next.js)** | 🔜 To Do | Frontend interface for browsing and bidding to be developed. |
| **Postman Tests (Full Coverage)** | ✅ Done | Expansion of API test cases for new services planned. |
| **Docker Compose Setup** | 🔄 Doing | Infrastructure orchestration for local development planned. |

---

### ✅ Done
- Auction Service
- Search Service
- Event Bus (RabbitMQ)
- Postman Test Coverage

### 🔄 Doing
- Identity Service (Login/Signup, OAuth2)
- Docker Compose orchestration

### 🔜 To Do
- Bidding Service (Real-time bid handling)
- Identity Service (Login/Signup)
- Notification Service (SignalR integration)
- Gateway setup
- Frontend (Next.js WebApp)



---

## 🚀 Next Steps

- Complete Bidding Service and integrate with Auction updates.
- Build Identity Service for secure user authentication.
- Develop Notification Service with SignalR for real-time alerts.
- Set up API Gateway for unified request routing.
- Develop the Next.js frontend client.
- Expand Postman test coverage across all endpoints.
- Create Docker Compose file for easier local environment setup.

---

## 🚧 Project Status

> **Carstie** is an active project under development!  
> Follow the repository for updates as new features roll out.

