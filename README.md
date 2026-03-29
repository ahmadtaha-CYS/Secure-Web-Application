# 🔐 Secure Web Application

A **secure, full-featured web application** built using **React** for the frontend and **Firebase** for authentication and database management.  
This project focuses on delivering a modern user experience while prioritizing **security, access control, and account protection**.

---

## 🚀 Features

- 🔑 Authentication System (Email/Password + Google Sign-In)
- 📧 Email Verification Enforcement
- 🔐 Two-Factor Authentication (2FA)
- 🛡️ CSRF Protection
- 👤 User Profiles & Persistent Data
- 🛒 E-commerce Functionality (Shop & Cart)
- 🎮 Gameplay Module
- 🧑‍💼 Admin Panel with Role-Based Access Control
- 🔒 Protected Routes & Session Management

---

## 🏗️ Architecture Overview

The application is divided into multiple modules:

### 👥 User Module
- Login, Sign Up, Forgot Password
- Email verification flow
- Two-Factor Authentication (2FA)
- Profile management

### 🛍️ Application Pages
- Shop
- Cart
- Contact Page
- Gameplay Page
- User Profile

### 🧑‍💼 Admin Module
- Dedicated admin panel
- Role-based access control (RBAC)
- Restricted routes for authorized users only

---

## 🔐 Security Features

### 1. Authentication & Verification
- Built with **Firebase Authentication**
- Email verification required before full access
- Prevents unverified or fake accounts

### 2. CSRF Protection
- Tokens generated and validated on requests
- Stored in `localStorage` and `sessionStorage`
- Automatically regenerated on mismatch

### 3. Two-Factor Authentication (2FA)
- Additional verification step after login
- Code generation with expiration time
- Secure validation before granting access

### 4. Session Management
- Tracks active sessions using tokens/cookies
- Automatic logout after inactivity
- Continuous validation of authentication state

---

## 🔑 Authentication Flow

1. User signs up  
2. Email verification is sent  
3. User verifies email  
4. User logs in (Email/Password or Google)  
5. (Optional) 2FA verification  
6. Access to protected routes is granted  

---

## 🧠 Role-Based Access Control

- Users are assigned roles (e.g., `user`, `admin`)
- Admins can access:
  - Admin panel
  - Restricted functionality
- Regular users are limited to standard features

---

## 🗄️ Database (Firestore)

Each user document includes:

- Email
- Name & Profile Info
- Wallet Balance
- Cart Items
- Role (User/Admin)
- Date of Birth
- Profile Picture

---

## 🧭 Routing & Navigation

- Built with **React Router**
- Protected routes enforce:
  - Authentication
  - Email verification
  - 2FA completion
- Unauthorized access is automatically redirected

---

## ⚙️ State Management

A centralized **Authentication Context** handles:

- Current user state
- Authentication status
- Wallet & user data
- Errors & loading states
- 2FA requirements

### Provided Functions:
- Sign Up / Login / Logout
- Google Sign-In
- 2FA Verification
- Password Reset
- Email Update
- Wallet Management

---

## 🧩 Tech Stack

- **Frontend:** React  
- **Routing:** React Router  
- **Backend Services:** Firebase  
  - Authentication  
  - Firestore Database  
- **Security:** CSRF Tokens, 2FA, Session Handling  

---

## 🎯 Project Highlights

- Combines **e-commerce**, **authentication**, and **security**
- Implements **real-world security practices**
- Demonstrates **modular and scalable architecture**
- Goes beyond a basic CRUD app with:
  - Multi-step authentication
  - Role-based access
  - Protected navigation
  - Persistent user data

---

## 📌 Summary

This project showcases a **secure, scalable, and modern web application** that integrates:

- Advanced authentication flows  
- Strong security practices  
- Clean architecture design  

It highlights both **full-stack development skills** and **cybersecurity awareness**, making it a strong example of a production-style application.
