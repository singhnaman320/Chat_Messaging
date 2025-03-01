# Chat Messaging :

## Tech Stacks :
### Frontend: Vite + React JS
### Backend: Node JS
### Database: Mongo DB

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
### PORT=5000
### MONGO_URI=PORT=5000
### MONGO_URI=mongodb+srv://singhnaman320:3l9X5kKVOLoPaTm3@cluster0.9uoww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
### Note: This database URI can not be used for security reasons as your IP address is not white listed to use this database. So, you can used your database URI. 
### JWT_SECRET=P2pChaTmesSaGInGJWT18SecREt
### TCP_PORT=6000
### FRONTEND_URL=http://localhost:5173

## Note: Installed packages can be seen in package.json

