# CryptX

A responsive cryptocurrency dashboard built with **React** and **Tailwind CSS**, based on a provided Figma design.

## 📌 About the Project

CryptX is a front-end cryptocurrency dashboard designed to recreate a provided Figma reference as closely as possible.

The project was built to practice React fundamentals, reusable components, Tailwind CSS styling, responsive design, and rendering UI from structured data.

The dashboard includes cryptocurrency statistics, a BTC price chart, a live market section, and recent transactions.

## ✨ Features

* Responsive dashboard layout
* Fixed desktop sidebar
* Responsive mobile navigation
* Search bar
* User profile section
* Cryptocurrency metric cards
* BTC price chart
* Live Market section
* Recent Transactions section
* Positive and negative market indicators
* Font Awesome icons
* Reusable React components
* Data-driven UI rendering with `.map()`

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **Tailwind CSS**
* **Font Awesome**
* **Vite**

## 📱 Responsive Design

CryptX was designed to work across different screen sizes.

### Desktop

* Sidebar remains fixed on the left
* Dashboard uses a multi-column layout
* Cards and dashboard sections use the available screen space

### Mobile

* Sidebar changes into a top navigation layout
* Main content uses the full screen width
* Dashboard sections stack when necessary
* Header elements adjust to fit smaller screens

## 🧩 React Components

The dashboard is divided into reusable components to keep the project organized.

### `Sidebar`

Handles the main dashboard navigation and responsive sidebar layout.

### `Header`

Contains the search bar, notifications, help icon, and user profile.

### `MainContent`

Combines the main dashboard sections and manages the cryptocurrency data.

### `MetricCard`

Displays individual cryptocurrency statistics such as price and percentage change.

### `ChartVisual`

Displays the BTC price chart using SVG.

### `LiveMarket`

Displays cryptocurrency market information and mini charts.

### `TransactionTable`

Displays recent cryptocurrency transactions and their corresponding action icons.

## 🎯 Learning Objectives

This project helped me practice:

* Building reusable React components
* Passing data through props
* Rendering lists using JavaScript `.map()`
* Using conditional rendering
* Styling interfaces with Tailwind CSS
* Creating responsive layouts
* Working with SVG elements
* Using Font Awesome icons
* Recreating a design from a Figma reference
* Organizing a React project into reusable components


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
