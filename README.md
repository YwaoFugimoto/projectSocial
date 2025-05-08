<div align="center"><img src="banner/banner-musify.png"></img></div>
<hr>

# Musify – Simulation of a social network for song lyrics posting

This project is a simulation of a social network focused on sharing song lyrics. The application allows users to register, log in, and publish posts containing song lyrics. In addition, users can update their profile information, such as their password, and view a feed of recent posts.

## Features

- **User Registration (Sign In):**  
Allows the registration of new users. Passwords are encrypted using bcrypt to ensure data security.

- **Authentication (Login):**  
Users can access the platform using their credentials (user_login and password) via a simple authentication mechanism using JWT and Passport.

- **Post Feed:**  
 View a paginated feed of song lyrics posts.

- **Profile Update:**  
Users can update their profile details, such as their password, via dedicated endpoints.

- **Modern and Responsive Interface:**  
The front-end is developed with React (using Vite and TypeScript) and styled with Bootstrap, ensuring a dynamic and responsive user experience.

## Technologies Used

### Back-End

- **Node.js & Express:**  
Creation of the REST API that manages CRUD operations.
- **MySQL & mysql2/promise:**  
 A relational database used to store user and post information.
- **Middleware de Segurança:**  
Password encryption and authentication (user login and password).

### Front-End

- **React with TypeScript:**  
Development of the user interface.
- **Vite:**  
A fast and efficient development tool.
- **Bootstrap:**  
For styling and responsive components.

### Considerations

This project serves as a foundation for developing a social network focused on song lyrics. Although the current authentication is simple (username/password) and passwords are encrypted, the system can be expanded to include more robust features such as JWT authentication, session management, and additional functionalities.
