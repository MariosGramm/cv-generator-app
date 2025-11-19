# 📄 CV Generator App

A dynamic CV generator built with **React + TypeScript**, designed to create resumes through an interactive form interface and export them as clean PDF documents.

This project was built with production-ready structure, feature-based branching strategy, reusable components, and CI/CD deployment using Azure Static Web Apps.

Project is live on : https://green-sea-0038cae03.3.azurestaticapps.net

---

## 🚀 Features

### **🔧 Dynamic Form Editing**
- Left side: **Sidebar Forms** where the user inputs personal info, education, experience, skills, languages, certifications & projects.
- The state is fully managed using custom React hooks.

### **👀 Real-time CV Preview**
- Right side: **Paginated CV Preview**
- Updates instantly as the user edits the form
- Fully styled layout ready for export

### **📎 PDF Export**
- The preview converts into a properly formatted multi-page PDF
- Designed with separate print styling (`pdf.css`)

### **🌍 Deployment**
The application is deployed on **Azure Static Web Apps** and automatically redeployed on pushes to `main` using **GitHub Actions (CI/CD)**.

This demonstrates real DevOps workflow integration in front-end projects.

---

## 🌳 Branching Strategy (Professional Workflow)

Each feature was developed in its own dedicated branch following industry best practices:

| Branch Name | Purpose |
|-------------|---------|
| `feature/forms-and-state` | Implements state management and form logic |
| `feature/layout-structure` | Establishes UI structure & layout |
| `feature/pagination-and-pdf-export` | Adds multi-page preview & PDF export logic |
| `feature/project-structure` | Sets up folder structure, components & architecture |
| `fix/eliminate-bugs` | Final bug fixes & polish before deployment |

This approach improves maintainability, readability, and reflects real-world teamwork workflows.

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React, TypeScript, Bootstrap |
| State Logic | Custom hooks + controlled forms |
| PDF Export | html2pdf.js |
| Deployment | Azure Static Web Apps |
| CI/CD | GitHub Actions |

---

## 📦 Install & Run

```sh
npm install
npm run dev
