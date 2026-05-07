# Attendance Tracking System

## Overview
A DevOps-based Attendance Tracking System built using Node.js and basic web technologies. The project demonstrates the implementation of CI/CD pipelines, Docker containerization, automated testing, and deployment automation using GitHub Actions and Render.

---

## Problem Statement
Students often struggle to manually track attendance percentages, which can result in attendance shortages and academic penalties.

This system provides a simple solution to monitor attendance and maintain attendance records efficiently.

---

## Features
- Attendance tracking interface
- Backend server using Node.js
- Automated test cases
- CI/CD pipeline using GitHub Actions
- Docker containerization support
- Cloud deployment integration

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js

### DevOps Tools
- Docker
- GitHub Actions
- Render

---

## Project Structure

```text
Attendance-tracker/
│
├── .github/workflows/   # GitHub Actions CI/CD workflows
├── __tests__/           # Automated test files
├── Dockerfile           # Docker container configuration
├── .dockerignore        # Docker ignore rules
├── .gitignore           # Git ignore rules
├── server.js            # Node.js backend server
├── index.html           # Frontend interface
├── package.json         # Dependencies and npm scripts
└── README.md            # Project documentation
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Smruti2205/Attendance-tracker.git
cd Attendance-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Application

```bash
node server.js
```

### 4. Open in Browser

```text
http://localhost:3000
```

---

## Run Tests

```bash
npm test
```

---

## Docker Usage

### Build Docker Image

```bash
docker build -t attendance-tracker .
```

### Run Docker Container

```bash
docker run -p 3000:3000 attendance-tracker
```

---

## CI/CD Pipeline
GitHub Actions is used for:
- Installing dependencies
- Running automated tests
- Building Docker images

Workflow configuration files are located in:

```text
.github/workflows/
```

---

## Deployment
The application is deployed on Render with automatic deployment enabled through GitHub integration.

Live URL:
```text
https://attendance-tracker-3b44.onrender.com/
```

---

## DevOps Concepts Used
- Continuous Integration (CI)
- Continuous Deployment (CD)
- Docker Containerization
- Automated Testing
- Version Control using Git and GitHub

---

## DevOps Lifecycle Implemented
- Version Control using GitHub
- Automated Build using npm
- Continuous Integration using GitHub Actions
- Automated Testing
- Containerization using Docker
- Cloud Deployment using Render

---

## Future Improvements
- Add MongoDB database integration
- Implement authentication and authorization
- Improve frontend UI/UX
- Add attendance analytics dashboard
- Deploy using cloud platforms such as AWS or Azure

---

## Conclusion
This project demonstrates the implementation of a complete DevOps workflow integrating development, testing, automation, containerization, and deployment into a single pipeline.

---

## License
This project is licensed under the MIT License.
