# Yellow Postal's Tracking App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This react application was developed as part of the cirriculum at SDA9. My goals with this implementation were to understand and use Recoil, functional components, hooks and to seamlessly use external components.

## Description

The website immediately fetches data from a mock API concerning a single user and therefore requires no login. The profile page displays the user's phone number and name. On the tracking page, all the parcels are listed for an easy overview. Clicking on any of the parcels will take you to a detailed view of the parcel.

## Dependencies

- React 17.0.2
- Recoil 0.2.0
- React Tabs 3.2.1
- React Moment 1.1.1
- React Confirm Alert 2.7.0
- React Router DOM 5.2.0

## Setup

To run this application 

- Clone this repository

  `git clone git@github.com:NeuralAlchemist/sda-tracking-app.git`

-  Navigate to the project folder on your machine and install the dependencies with `npm install` . This takes a few minutes to complete.
- After the installation is finished, run the NPM script `start ` via IDE or console. Console command is `npm run start`. This will locally host the application at [localhost](http://localhost:3000) and may open automatically as soon as the start script is run.

## Approach

The application's major goal was simplistic and minimal UI without taking away any useful information from the application. 

- The application opens into the profile page so the user is immediately aware of the login credentials used. Many tracking application open up directly to tracking page, they often require login authentication. Since this application does not use authentication, it seemed a good idea to immediately show who the application thinks is logged in.
- The tracking page is very simply laid out with crucial information that a user would like to see at a glance. One thing that can definitely be improved here is adding the option of archiving delivered parcels.
- The detailed information that shows up after clicking on a parcel is also minimal at this point. A functionality that is very much in the future work is adding a simple interactive map to show the location of the parcel in this page.
- To keep the header minimal, a tabbed header was used which will always show the user immediately where they are within the application.

