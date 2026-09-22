# Playwright With TypeScript Learning

A comprehensive Playwright Automation Framework built using **TypeScript** following the **Page Object Model (POM)** design pattern.

This repository contains various UI automation examples and reusable framework components to help understand Playwright from beginner to intermediate level.

---

## 🚀 Features

- Playwright with TypeScript
- Page Object Model (POM)
- Custom Fixtures
- Environment Configuration (.env)
- Multiple Environment Support
- Cross Browser Execution
- Auto Waiting
- Assertions using Playwright Test
- Reusable Utilities



---

## 📂 Project Structure

```text
Playwright_With_Typescript_Learning
│
├── .github/
│   └── workflows/
│
├── config/
│   ├── env.ts
│   └── ...
│
├── fixtures/
│   ├── page.fixture.ts
│   └── ...
│
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── ...
│
├── test-data/
│
├── tests/
│   └── ui/
│
├── playwright.config.ts
├── package.json
├── test.env
├── uat.env
└── README.md
```

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner
- Git & GitHub

---

# Framework Design

The framework follows the **Page Object Model (POM)** architecture.
```
Tests
   │
   ▼
Fixtures
   │
   ▼
Page Objects
   │
   ▼
Browser
```

This approach provides:

- Better Maintainability
- Reusability
- Clean Code
- Easy Test Management

---


# Installation

Clone the repository
```bash
git clone https://github.com/your-username/Playwright_With_Typescript_Learning.git
```

Move inside the project

```bash
cd Playwright_With_Typescript_Learning
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/ui/LoginPageTest.spec.ts
```

Run in headed mode

```bash
npx playwright test --headed
```

Run on Chrome

```bash
npx playwright test --project=chrome
```

Run on Firefox

```bash
npx playwright test --project=firefox
```

Run on Edge

```bash
npx playwright test --project=msedge
```

---

# Execute Tests with Environment

Test Environment

```bash
set ENV=test && npx playwright test
```

UAT Environment

```bash
set ENV=uat && npx playwright test
```

---

# Generate HTML Report

```bash
npx playwright show-report
```

---

# Sample Test Flow

```
Launch Browser
        │
        ▼
Navigate to Application
        │
        ▼
Login
        │
        ▼
Perform Actions
        │
        ▼
Validate Results
        │
        ▼
Close Browser
```

---

# Learning Purpose

This project is created for learning and practicing Playwright Automation using TypeScript. It includes different automation scenarios that help understand Playwright concepts from basic to advanced level.

---
