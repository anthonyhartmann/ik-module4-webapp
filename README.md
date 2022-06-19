# ik-module4-webapp

This is a web app created for educational purposes. It is used in module 4 of Interview Kickstart's full stack curriculum.

<img width="1439" alt="Screen Shot 2022-04-30 at 10 51 49 PM" src="https://user-images.githubusercontent.com/23429365/166134032-63a352f3-ff27-4cd6-8f47-f911eae41efc.png">

# Prerequisites
Node.js (v14.15.1) https://nodejs.org/en/download/

# Basic Setup

1. Clone this repo using git clone.
2. cd ik-module4-webapp/kickposter
3. npm install
4. npm run start

# Steps to set up the Drive Examiner example

One of the examples present in this project is contained within the "Drive Examiner" file, and shows off the oAuth2 integration pathway. In order to set this up, you'll need to create a Google Cloud project. Guides are available in the Google Developers documentation, but the steps to set it up for this project in particular are as follows.

1. Signing into https://console.cloud.google.com/, create a new project with a preferred name.
2. Once the project is created, open the left sidebar, and select "Enabled APIs and Services". Then, search for the Google Drive API, and enable it.
3. In the top, you'll be presented with a prompt to "Create Credentials". Click this to begin creating the credentials for your project.
4. Under "Credential Type", select "User Data".
5. Add the desired name and contact email (these would be viewable by students during a demo).
6. For scopes, you'll only need to enable the ".../auth/drive.metadata" scope for the Google Drive API.
7. Fill in whatever desired client ID for the OAuth Client ID, select "Web Application" under Application Type, and add "http://localhost:3000" to the authorized JavaScript origins. After hitting create, you'll get an option to download your credentials. Download them, and make a note of the client ID.
9. Back on the credentials page for your project, create an API key via the "+ Create Credentials" button. This will create a new API key.
10. As a last step, select "OAuth Consent Screen" via the left sidebar, and add yourself via email as a "Test User" to the screen. This will allow you to use the app without needing to publish it fully.
11. Finally, using the client id as "CLIENT_ID" and the API key as "API_KEY", fill in the credentials.json file to make use of the Drive Examiner.

# How to run the Web Sockets example.

The web sockets example uses a website at https://socketsbay.com/test-websockets. When you've enabled the web socket connection to begin on start-up in your example, you'll be able to run the example by first clicking "Connect" on this page, and then typing whatever message you specified to pass your filter (e.g. "IKPROJ Test!") into the chat on the site! Note that due to the nature of the site as an echo communication and being 2 way, the app will populate with two copies of any message.
