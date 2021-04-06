# COVID Companion

## Description

This is the final project for the UConn Coding Boot Camp.

A React application that...

## Table of Contents

- [Goals](#goals)
- [Technologies Used](#technologies-used)
- [Instructions](#instructions)
- [File Structure ](#file-structure)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Presentation Requirements](#presentation-requirements)
- [Definitions](#definitions)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributors](#contributors)
- [License](#license)

## Technologies Used

- Node
- React
- Express
- MongoDB
- Mongoose
- MongoDB Atlas
- Axios
- Amplify (aws)
- Tachyon
- Miro
- Heroku

## File Structure

### Component Hierarchy

- App
  - Container
  - NavBar
  - Footer
    - Home/About
      - Sign-In
      - Sign-Up (contains form)
    - Profile (Signed in home)
      - SearchBar
      - AvatarBio
      - Covid Info
      - (Covid Statistics - API)
      - Friend Circle
        - SingleFriend
      - ProfileFooter
        - AddToCircle
          - SearchBar (aka SearchFriend)
          - SearchedList
            - SearchedItem (aka single searched friend)
        - **EditProfile (page/button to sign-up form)**
        - ProfileHome (button to profile page/ sign-in home)
        - Sign-Out (button to home/about page)

### Buttons:

- Sign-In (Home-About)
  - Sign-In > (SignIn)
- Sign-Up (Home-About)
  - Continue > (sign-up form)
- Upload Image (AvatarBio)
- AddToCircle (ProfileFooter)
  - SearchFriends (AddToCircle)
  - AddFriend + (AddToCircle)
- EditProfile (ProfileFooter)
  - Save (EditProfile)
- ProfileHome (ProfileFooter)

### MVC Structure

```
.covid-companion
|
├── client
|    └── public
|         ├── favicon.ico
|         ├── index.html
|         ├── logo192.png
|         ├── logo512.png
|         ├── manifest.json
|         └── robots.txt
|    └── src
|        └── components
|               ├── Container.js
|               ├── Navbar.js
|               ├── Footer.js
|               ├── SearchBar.js
|               ├── SearchResults.js
|               ├── FriendCard.js
|               ├── FriendCircle.js
|               ├── CardBtn.js (+)
|               ├── ProfileBtn.js (profile footer btns)
|               ├── (SubmitBtn.js)
|               ├── (ContinueBtn.js)

|               ├── ProfileFooter.js
|               ├── Question.js
|               ├──
|               ├──
|               ├──
|               ├──
|               ├──
|               ├──
|               └──
│        └── pages
|               ├──── Home-About.js
|               ├──── Profile.js
|               ├──── SignIn.js
|               ├──── SignUp.js
|               ├──── Questionnaire.js
|               └──── SearchFriends.js
|
|               ├──
|               ├──
|               ├──
|               ├──
|               ├──
|               ├──
|               ├──
│               └──
│
|        ├── App.js
|        ├── index.js
|        └── index.css
|                       ├────
|                       ├────
|                       ├────
|                       └────
├── backend
|       └── models
│           └── dbUsers.js
|       └──utils
|           └── API.js
│
├── node_modules
├── .gitignore
├── (.eslintignore)
├── .eslintrc.json
|
├── package.json
├── (package-lock.json)
|
├── server.js
│

```

### Presentation Requirements

![COVID-Companion](google drive link)

- Elevator pitch: a one minute description of your application

- Concept: What is your user story? What was your motivation for development?

- Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

- Demo: Show your stuff!

- Directions for Future Development

- Links to to the deployed application and the GitHub repository. Use this guide for deploying your application to Heroku if you need a reminder on how to deploy!

## Credits

- [Miro]()
- [Tachyon]()
- [Passport]()

## Contributors

[Bruno Borges](githublink)
[Ryan Curtin]()
[Cris Franco]()
[Julie Ann Iwinski]()
[Pete Izzo](https://github.com/peter-izzo)
[Danny Smooke]()

## License

[MIT](MITLicense.txt)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
