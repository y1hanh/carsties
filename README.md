## Carstie - Auction Platform
Carstie is a full-stack web application that lets users explore car listings, place real-time bids, and receive instant updates during live auctions. 
Built with a microservices architecture and event-driven communication, Carstie ensures a scalable and responsive experience on website.

## 🏗️ System Progress Overview

| Component | Status | Notes |
|-----------|--------|-------|
| **Auction Service (Auction-svc)** | ✅ Done | Core functionality (create, manage auctions) completed. |
| **Search Service (Search-svc)** | ✅ Done | Search indexing and querying implemented. |
| **Event Bus (RabbitMQ Integration)** | ✅ Done | Publish/Subscribe infrastructure in place. |
| **Identity Service (Identity-svc)** | 🔄 Doing | User authentication and authorization (Postgres) planned. |
| **Bidding Service (Bidding-svc)** | 🔜 To Do | Real-time bidding logic under development. |
| **Notification Service (Notification-svc)** | 🔜 To Do | Real-time user notifications via SignalR to be implemented. |
| **Gateway Service** | ✅ Done | API Gateway routing to microservices pending. |
| **Web Application (Next.js)** | 🔄 Doing | Frontend interface for browsing and bidding to be developed. |
| **Postman Tests (Full Coverage)** | ✅ Done | Expansion of API test cases for new services planned. |
| **Docker Compose Setup** | ✅ Done  | Infrastructure orchestration for local development planned. |

---

### ✅ Done
- Auction Service
- Search Service
- Event Bus (RabbitMQ)
- Postman Test Coverage
- Identity Service (Login/Signup, OAuth2)
- Docker Compose orchestration
- Gateway setup

### 🔄 Doing
- Frontend (Next.js WebApp)

### 🔜 To Do
- Bidding Service (Real-time bid handling)
- Notification Service



