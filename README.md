# **StudyFlow**

## What kind of project is this?
    StudyFlow is a React-based web application designed for students to track and manage their study sessions. It allows students to add new sessions, view all past sessions, and delete sessions to maintain a record of what they have learned.


## Features

![StudyFlow Screenshot](src/component/Photos/Features.png)


- **Add Study Sessions:** Record the subject, hours studied, date, and optional notes.
![All Sessions](src/component/Photos/addsessions.png)
- **Dashboard Overview:** View total, weekly, and monthly study hours, as well as most and least studied subjects.
![All Sessions](src/component/Photos/Dashboard.png)
- **All Sessions:** Browse and manage all recorded study sessions, with search and sorting options.
![All Sessions](src/component/Photos/All_sessions.png)
- **Settings:** Manage subjects by adding or removing them, and clear all data if needed.
![All Sessions](src/component/Photos/setting.png)
- **Responsive Design:** User-friendly interface with Tailwind CSS styling.

## Technologies Used

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Icons:** Remix Icon library

**State Management:** Each component keeps track of its own data without using extra libraries.

- **File Structure:** Modular components (`Dashboard`, `Add`, `AllSessions`, `Settings`, `Welcome`, `Study`)




# Folder path 

TaskFlow_Project/
├── src/
│   └── component/
│       ├── Add_Sessions
            └──add.jsx
│       ├── All_Session
            └──All_Sessions.jsx
        ├──Settings
            └──Setting.jsx
        ├──Content.jsx
        ├──Rightcontent.jsx
        ├──Dashboard_Folder
            └──Dashboard.jsx
            └──Study.jsx
            └──Welcome.jsx
│       
│       
│       
│      
│       
│       
├── App.jsx
├── main.jsx