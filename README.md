# Chat Messaging :

## Tech Stacks :
1. Frontend: Vite + React JS
2. Backend: Node JS
3. Database: Mongo DB

## Overview: 
First user will signup, When signed up successfully, user will reach to login screen. After logging In successfully a token will be generated which will be stored in local storage(to reduce burden on database) and this token will be valid for 1 hr only. Now, to previously generated user, this user can send message and also can see these messages on his/her chat window. All the generated user can be seen on left sidebar but user who is logged in can only see his/her messages, not of others and if there are many generated users then we have functionality to search for user you want. At the extreme right we have profile panel where loggedIn user can see his/her details.  

## Main Functionalities: 
1. Signup and Login functionalities
2. Chat functionality
3. View list of user
4. Search functionality
5. LoggedIn user Profile view

## Run: 
Frontend and Backend can be run using "npm run dev" seperately (For simplicity, "cuncurrently" not used)

## .env details:
1. PORT=5000
2. MONGO_URI=PORT=5000
3. MONGO_URI=mongodb+srv://singhnaman320:3l9X5kKVOLoPaTm3@cluster0.9uoww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   <p>Note: This database URI can not be used for security reasons as your IP address is not white listed to use this database. So, you can used your database URI.<p/> 
4. JWT_SECRET=P2pChaTmesSaGInGJWT18SecREt
5. TCP_PORT=6000
6. FRONTEND_URL=http://localhost:5173

 <p>Note: Installed packages can be seen in package.json<p/>

## Dependencies Installed:
1. [] For Backend:
1.1 bcryptjs (^3.0.2) - For hashing passwords.
1.2 cors (^2.8.5) - Enables Cross-Origin Resource Sharing.
1.3 dotenv (^16.4.7) - Loads environment variables from a .env file.
1.4 express (^4.21.2) - Web framework for Node.js.
1.5 jsonwebtoken (^9.0.2) - For handling JWT authentication.
1.6 mongoose (^8.10.2) - ODM (Object Data Modeling) for MongoDB.
1.7 multer (^1.4.5-lts.1) - Middleware for handling file uploads.
1.8 net (^1.0.2) - Networking module for TCP socket communication.
1.9 socket.io (^4.8.1) - Real-time WebSocket communication.

2. [] For Frontend:
2.1 UI & Styling:
2.1.1 @emotion/react & @emotion/styled - For CSS-in-JS styling.
2.1.2 @mui/icons-material & @mui/material - Material UI components.
2.1.3 tailwind - Likely a misconfigured package, should be tailwindcss.

2.2 State Management:
2.2.1 @reduxjs/toolkit - Redux state management.
2.2.2 react-redux - React bindings for Redux.

2.3 Routing & Networking:
2.3.1 react-router-dom - For routing in React.
2.3.2 axios - For making HTTP requests.

2.4 Real-time Communication:
2.4.1 socket.io-client - For WebSocket communication.

2.5Core React:
2.5.1 react & react-dom - The main React library.

2.6 DevDependencies (For Development)
2.6.1 Build & Tooling:
vite - Fast frontend build tool.
@vitejs/plugin-react - React plugin for Vite.

2.6.2 Linting & Code Quality:
eslint, @eslint/js - JavaScript linting.
eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh - Linting plugins for React.

2.6.3 TypeScript Support:
@types/react, @types/react-dom - Type definitions for React.

2.6.4 CSS Processing:
tailwindcss - Correct package for Tailwind.
