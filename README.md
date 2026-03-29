# 🛡️ Secure Web Application

A full-featured, highly secure web application built with **React** and **Firebase**. This project seamlessly integrates e-commerce functionality with robust user account management, role-based access control (RBAC), and multi-layered security protocols. It is designed to provide a modern, interactive user experience while strictly guarding sensitive routes and data.

## ✨ Key Features

* **Multi-Method Authentication:** Supports traditional Email/Password login alongside Google Sign-In, unified under a single user management workflow.
* **E-Commerce & Gamification:** Includes a fully functional shop interface, cart management, a digital wallet system, and a unique interactive gameplay route.
* **Role-Based Access Control (RBAC):** Distinct permission levels separate standard users from administrators, with a dedicated, protected Admin Panel.
* **Modular Architecture:** Built with a clean separation of concerns using React components, Context providers for state management, and utility helpers.

## 🔐 Security & Protection

Security is a primary focus of this project, going far beyond basic login functionality to include practical cybersecurity mechanisms:

* **Mandatory Email Verification:** Account creation does not grant immediate access. Users are blocked from logging in until their email address is fully verified, preventing fake accounts.
* **Two-Factor Authentication (2FA):** A secondary verification layer requiring a time-sensitive, database-backed code before access is granted.
* **CSRF Protection:** Generates, stores (via `localStorage` and `sessionStorage`), and validates Cross-Site Request Forgery tokens during login and sensitive requests. Invalid tokens block the request and trigger an automatic regeneration.
* **Strict Route Guards:** Utilizes React Router to wrap sensitive pages (Shop, Cart, Profile, Gameplay, Admin) in protected route components. These guards verify authentication, session validity, and 2FA status before rendering.
* **Advanced Session Handling:** Manages active sessions using stored tokens and cookies, complete with automatic timeout logouts and reauthentication flows.

## 🗄️ Architecture & Data Management

### State Management
A centralized **Authentication Context** handles all security logic, making it highly reusable. It manages:
* Current user state, roles, and wallet value.
* Loading states and error handling.
* Functions for signup, login, logout, Google Auth, password resets, and 2FA verification.

### Database (Firebase Firestore)
User data is persistently stored and rich in detail, moving beyond simple auth credentials to include:
* `email` & `name`
* `role` (User/Admin)
* `wallet_value` (Account balance logic)
* `cart_items` (Shopping state)
* `date_of_birth` & `profile_picture`

## 🛤️ The User Journey

1.  **Onboarding:** A user creates an account and immediately receives a verification email.
2.  **Verification:** The user clicks the link to verify their identity. (Unverified login attempts are blocked).
3.  **Authentication:** The user logs in via Email/Password (protected by CSRF validation) or Google Sign-In. 
4.  **2FA Check:** If enabled, the user is redirected to a secure screen to input their Two-Factor Authentication code.
5.  **Full Access:** Upon successful verification, the user accesses the protected application to browse the shop, manage their cart, play games, or view their profile.

---
*Built with attention to both user experience and modern web security.*
