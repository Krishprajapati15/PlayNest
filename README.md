<div align="center">
  <h1>🎯 PlayNest</h1>
  <p>The Ultimate Turf & Sports Booking Platform</p>
  
  [![User Portal](https://img.shields.io/badge/User_Portal-Visit%20Site-4F46E5?style=for-the-badge)](https://play-nest.vercel.app/)
  [![Owner Portal](https://img.shields.io/badge/Owner_Portal-Visit%20Site-10B981?style=for-the-badge)](https://play-nest-owner.vercel.app/)
  
  ![Made with React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
</div>

---

## 🌟 Overview

PlayNest is a comprehensive turf booking platform designed to streamline the process for users, owners, and administrators. It's divided into three distinct modules: **Admin**, **Owner**, and **User**, ensuring a tailored experience for every participant. Whether you're looking to book a turf, manage your facility, or oversee the entire ecosystem, PlayNest has you covered.

---

## 🚀 Experience the Live Demo

Ready to see PlayNest in action? Explore our live portals:

-   **User Portal**: [https://play-nest.vercel.app/](https://play-nest.vercel.app/)
-   **Owner Portal**: [https://play-nest-owner.vercel.app/](https://play-nest-owner.vercel.app/)

---

## 💡 Tech Stack Spotlight

PlayNest is built with a robust and modern tech stack, ensuring high performance and a seamless user experience.

| Category   | Technologies                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Frontend** | ⚛️ **React** (Component-based UI), 🎨 **Tailwind CSS** & **DaisyUI** (Rapid Styling), 📦 **Redux** (State Management)   |
| **Backend** | 🟢 **Node.js** (Runtime Environment), 🚀 **Express.js** (Web Application Framework)                                        |
| **Database** | 🍃 **MongoDB** (NoSQL Database)                                                                                           |
| **Services** | 💳 **Razorpay** (Secure Payment Gateway), 🖼️ **Cloudinary** (Optimized Image Hosting)                                    |
| **AI** | 🤖 **OpenAI** (Text & Language Intelligence), 🗣️ **Vapi AI** (Voice Interaction & Assistant Integration)  |

---

## ✨ Key Features

PlayNest offers a rich set of features tailored to each module:

### 👤 User Module

- **Browse & Discover**: Effortlessly explore a curated list of available turfs, view detailed venue information, and select from a dropdown of pre-filled venues.
- **View Availability**: Instantly check available time slots for your chosen venue on a specific date, ensuring a seamless scheduling experience.
- **Effortless Booking with Email Notifications**: Securely reserve your preferred slot by submitting a simple form with your name, date, selected slot, and sport. Upon successful booking, receive an instant confirmation email containing all booking details and a unique QR code for easy access.
- **Login Email Alerts**: Receive notification emails each time you log in to your account, keeping your profile secure and informed.
- **Instant Messaging System**: Connect directly with turf owners or support staff through an integrated chat system for prompt assistance.
- **AI Voice Assistance**: Utilize the built-in intelligent voice assistant to find venues, make bookings, answer inquiries, and navigate the platform hands-free.
- **Rate & Review**: Provide feedback and share your experiences by rating and reviewing turfs you have booked.
- **Ownership Application**: Submit applications to become a turf owner directly through the platform, with each application subject to admin review and approval.

## Mail System

The platform incorporates a comprehensive mail system that automatically sends important notifications to users:
- **Booking Confirmation**: After a successful booking, users receive a detailed confirmation email with booking specifics and a unique QR code.
- **Login Alerts**: Users are notified via email every time they log in, adding an extra layer of security.
- **Other Notifications**: The system can be extended to send password resets, updates, and promotional emails as needed.

### 👑 Owner Module

-   **Comprehensive Turf Management**: Add new turfs, update existing listings, and gain full visibility into all related booking details.
-   **Insightful Dashboard**: Access a dynamic dashboard presenting transaction data and booking statistics in clear, graphical formats.
-   **Review Oversight**: View and manage user reviews for your turfs, fostering better engagement.

### 🛠️ Admin Module

-   **Streamlined Owner Requests**: Efficiently approve or reject applications from potential owners. Approved users receive an email with a direct registration link to the owner portal.
-   **Holistic Management**: Oversee all registered users and owners on the platform.
-   **Turf Supervision**: View and manage all turfs listed by owners, ensuring platform quality and consistency.
-   **Financial Overview**: Access a complete record of all platform transactions, with monthly transaction data presented in intuitive graph formats.

---

## ⚙️ Installation Guide

Get PlayNest up and running on your local machine with these simple steps:

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/krishprajapati15/PlayNest.git](https://github.com/krishprajapati15/PlayNest.git)
    ```

2.  **Install Dependencies**
    Navigate into the respective directories and install the necessary packages:

    ```bash
    # Install root dependencies
    cd PlayNest
    npm install

    # Install server dependencies
    cd server
    npm install

    # Install owner client dependencies
    cd ../client/owner
    npm install

    # Install user client dependencies
    cd ../client/user
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file within the `server` directory and populate it with the following essential variables:

    ```env
    PORT = your_port
    MONGO_URI = your_mongo_uri
    CLOUDINARY_CLOUD_NAME = your_cloudinary_cloud_name
    CLOUDINARY_API_KEY = your_cloudinary_api_key
    CLOUDINARY_API_SECRET = your_cloudinary_api_secret
    OWNER_URL = your_owner_url
    USER_URL = your_user_url
    EMAIL = your_email
    PASSWORD = your_password
    RAZORPAY_KEY_ID = your_razorpay_key_id
    RAZORPAY_SECRET_KEY = your_razorpay_secret_key
    JWT_SECRET = your_jwt_secret
    ```

---

## ▶️ How to Run

Follow these steps to launch PlayNest locally:

1.  **Start the Backend Server**
    Navigate to the `server` directory and run:
    ```bash
    cd server
    npm run server
    ```
    The server will start on the port you specified in your `.env` file.

2.  **Start the Owner Portal**
    From the `client/owner` directory, execute:
    ```bash
    cd client/owner
    npm run dev
    ```
    The owner portal will typically run on `http://localhost:5173`.

3.  **Start the User Portal**
    From the `client/user` directory, execute:
    ```bash
    cd client/user
    npm run dev
    ```
    The user portal will typically run on `http://localhost:5174`.

4.  **Access Your Applications**
    -   **Backend**: `http://localhost:your_port`
    -   **Owner Portal**: `http://localhost:5173`
    -   **User Portal**: `http://localhost:5174`

---

## 🤝 Contribution Guidelines

We welcome contributions to PlayNest! Here's how you can get involved:

1.  **Fork** the repository.
2.  Create a new branch: `git checkout -b feature/your-feature`.
3.  **Commit** your changes: `git commit -m 'Add some feature'`.
4.  **Push** to the branch: `git push origin feature/your-feature`.
5.  Open a **new Pull Request**.

---

## 👨‍💻 Author

**Krish Prajapati**
<br>
GitHub: [@krishprajapati15](https://github.com/krishprajapati15)

---

<div align="center">
  <sub>Last Updated: 2025-05-23 16:15:08 UTC</sub>
</div>
