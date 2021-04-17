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
|               ├── AvatarBio.js
|               ├── CardBtn.js (+)
|               ├── Container.js
|               ├── **(ContinueBtn.js)**
|               ├── CovidInfo.js
|               ├── Footer.js
|               ├── FriendCard.js
|               ├── FriendCircle.js
|               ├── Navbar.js
|               ├── ProfileBtn.js (profile footer btns)
|               ├── Question.js
|               ├── SearchBar.js
|               ├── SearchResults.js
|               ├── **(SubmitBtn.js)**
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
|        ├── App.js
|        ├── index.js
|        └── index.css
|
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

## Installation

## Credits

- [Miro]()
- [Tachyon](http://tachyons.io/components/)
- [Who's at higher risk of serious symptoms](https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-who-is-at-risk/art-20483301)
- [US COVID-19 Risk Level Based on Conditions](https://www.npr.org/sections/health-shots/2020/04/01/824874977/underlying-health-disparities-could-mean-coronavirus-hits-some-communities-harde)
- [Common immunodeficiency diseases](https://www.google.com/search?q=common+immunodeficiency+diseases&rlz=1C5CHFA_enUS728US728&sxsrf=ALeKk02FGsMH2pKumokGimguNMjzBtUKtQ%3A1617756260267&ei=ZABtYI7lD6WKggejspDwBw&oq=immunocompromised+conditions+list&gs_lcp=Cgdnd3Mtd2l6EAEYBTIHCCMQsAMQJzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQsAMQQ1AAWABgjYoBaAFwAngAgAHhFIgB4RSSAQM5LTGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz)
- [Chronic Respiratory Diseases](https://www.google.com/search?q=chronic+respiratory+diseases&rlz=1C5CHFA_enUS728US728&sxsrf=ALeKk038PWoPm9zdjnsDmriiMwOHRUmyOw%3A1617754745451&ei=efpsYNKBG8G9ggfKjo-4CA&oq=chronic+respiratory+diseases&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6BwgAELEDEEM6BAgAEEM6BwgAEIcCEBRQgIQBWMeSAWDpmgFoA3ACeACAAc8KiAGNEJIBBzYuMi43LTGYAQCgAQGqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwiSor6H7urvAhXBnuAKHUrHA4cQ4dUDCA0&uact=5)
- [Cardiovascular Diseases](https://www.google.com/search?q=cardiovascular+diseases&rlz=1C5CHFA_enUS728US728&oq=cardiovascular+diseases&aqs=chrome..69i57j0l2j0i20i263j0l3j0i20i263j0l2.3698j0j7&sourceid=chrome&ie=UTF-8)
- [Chronic Renal Diseases](https://www.google.com/search?q=chronic+renal+diseiases&rlz=1C5CHFA_enUS728US728&oq=chronic+renal+diseiases&aqs=chrome..69i57j0i13j0i10i22i30l2j0i5i10i13i30j0i5i13i30j0i8i10i13i30j0i8i13i30l3.3775j0j7&sourceid=chrome&ie=UTF-8)
- [Covid Pandemic Mortality Risk Estimator](https://www.economist.com/graphic-detail/covid-pandemic-mortality-risk-estimator)
- [How to Connect AWS Amplify with React Native Application](https://hackernoon.com/how-to-connect-aws-amplify-with-react-native-application-8t1p3twj)
- [Customizing the Built-in Sign-in and Sign-up Webpages](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-ui-customization.html)
- [Customizing AWS Amplify Signin Page in React](https://medium.com/@kavyababu/customizing-aws-amplify-signin-page-in-react-94d95983d0c)

## Contributors

[Bruno Borges](https://github.com/BrunoBBorges)
[Ryan Curtin](https://github.com/rpc08002)
[Cris Franco](https://github.com/Cris-Franco)
[Julie Ann Iwinski](https://github.com/JulieAnnI)
[Pete Izzo](https://github.com/peter-izzo)
[Danny Smooke](https://github.com/dsmooke)

Special thanks to [Chris Bonafacio](https://github.com/chrisbonifacio) and [Nathan Sartain](https://github.com/NatePad) for helping with AWS Amplify and authentication.

## License

[MIT](MITLicense.txt)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
