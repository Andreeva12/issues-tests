# 🚀 GitHub Issues Management Autotests

![Playwright](https://img.shields.io/badge/Playwright-EA2845?logo=playwright&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-Report-orange)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-blue)


---

## 📌 Project Overview

This project demonstrates a **production-like end-to-end UI test automation framework** for managing **GitHub Issues**, built with **Playwright** and **Allure Reports**, following modern QA automation practices.

The repository is designed as a **portfolio project for a Middle QA Automation Engineer** and highlights:
- Thoughtful test architecture
- Maintainable and scalable automation framework
- CI/CD integration
- Industry-standard design patterns and tooling

---

## 🎯 Project Goals

- Build a reliable UI automation framework from scratch
- Demonstrate clean separation of concerns in test code
- Apply best practices used in real-world automation projects
- Showcase CI integration and test reporting

---

## 🧪 Test Coverage

- Creating GitHub issues
- Editing and updating existing issues
- Verifying issue state, labels, and metadata
- UI validations and assertions
- Negative and edge case scenarios
- Reusable and maintainable Page Objects

---

## 🛠️ Tech Stack

- **JavaScript / TypeScript**
- **Playwright**
- **Allure Report**
- **Node.js**
- **Page Object Model (POM)**
- **GitHub Actions (CI)**

---

## ⚙️ Getting Started

### 🔧 Prerequisites
Make sure you have installed:
- **Node.js** (LTS recommended)
- **npm**
- **Allure Commandline**

### 📦 Install Dependencies
```bash
npm install
```

## ▶️ Run Tests
```bash
npx playwright test
```

## 📊 Generate and View Allure Report
```bash
allure serve allure-results
```

## 🗂️ Project Structure

```
github-issues-tests/
├── tests/                  # Test specifications
│   └── issues.spec.ts
├── pages/                  # Page Object classes
│   ├── login.page.ts
│   ├── issues.page.ts
│   └── base.page.ts
├── utils/                  # Helpers and utilities
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── allure-results/         # Allure test results
```

## 🔄 CI Pipeline (GitHub Actions)

**This project uses **GitHub Actions** to run automated tests in a CI environment.

## 📍 CI Workflow Triggers
- `push`
- `pull_request`

## ⚙️ CI Steps

```
┌─────────────────────────────┐
│        CI Pipeline          │
├─────────────────────────────┤
│ Checkout repository         │
│ Install Node.js dependencies│
│ Install Playwright browsers │
│ Run Playwright test suite   │
│ Collect Allure results      │
└─────────────────────────────┘
```

### ✅ CI Value
- Early regression detection
- Fast feedback for code changes
- CI-ready automation framework suitable for team environments

---

## 🧩 Architecture & Best Practices

- Page Object Model for scalability and maintainability
- Single responsibility principle for Page Objects
- Clear separation of concerns:
  - test logic
  - UI interactions
  - configuration and utilities
- Reusable components and helper functions
- Readable, business-oriented test scenarios
- Ready for parallel and cross-browser execution

---

## 📊 Reporting & Observability

All test runs generate **Allure Reports**, providing:
- Detailed test execution statistics
- Step-by-step actions and assertions
- Screenshots for failed steps
- Improved failure investigation and debugging

---

## 🔗 Useful Links

- Project Repository:
  https://github.com/Andreeva12/github-issues-tests

- GitHub Issues API:
  https://docs.github.com/en/rest/issues/issues

- Playwright Documentation:  
  https://playwright.dev/

- Allure Report Documentation: 
  https://docs.qameta.io/allure/

---

## 👩‍💻 Author

**QA Automation Engineer (Middle level)**  

This project is part of a professional portfolio demonstrating strong skills in test automation, framework design, CI integration, and modern QA engineering practices.
