This is the final version of the CMS CRUD with React, Firebase, and Auth0.

When you download these files and saved it to a folder of your choice, you need to do the following:

    You're on the /Projects folder. In the command line, make sure you're on the /Projects folder.
    Then type npx create-react-app cms where cms is the name of the react application.
    When installation is complete, copy the downloaded files to the /Projects/cms folder. Make sure you are allowing the existing files to be overwritten.
    Type npm install to install all dependencies.
    You need go to firebase.com to setup an account, create a project. On project settings, you will find a code that has this snippet after you register your web app.
    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "your api key goes here",
    authDomain: "your-project-name.randomnumber.firebaseapp.com",
    databaseURL: "your database url goes here",
    projectId: "your project id goes here.",
    storageBucket: "your storage bucket goes here",
    messagingSenderId: "your messaging sender id goes here",
    appId: "your app id."
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

You replace the code that's in there with your code.

    Make sure you run npm start to load the react app. It shouild look like what you see now. You will click on login and sign up for an account through Auth0. facebook, gmail, or other email address should work.
    In order to add, edit, or delete a contact, you must be logged in.
    To add a contact, just click on the Add Contact tab. All fields are required. Note the phone numbers can only be in the form of 1234567890 instead of 123-456-7890 or a validation alert comes out.
    Once you add a contact, you should be able to edit, delete, or view the contact.
    To edit an existing contact, click on the contact you want to edit where the edit button is right next to the contact.
    To view an existing contact with notes, click on the view button next to the contact.
    To delete an existing contact, click on the delete button. You will get a warning whether you want to carry it out or cancel. Clicking on OK deletes the contact while clicking on cancel retains the contact.
    All data manipulations occur on a Firebase database.
    That's all you need. If you have any questions, please send email to sjsreact@gmail.com. Thank you.
