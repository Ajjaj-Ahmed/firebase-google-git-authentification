/**
 ================ Install setup =================
 * 
 * 1.visit: console.firebase.google.com
 * 2. create a project (skipp google analytics)
 * 3. register app  (create config)
 * 4. install firebase : npm install firebase
 * 5. add config file to project
 * 6. Danger: do not publish or make config to public by pushing them to github
 
 =============== Intrigration ======================
 
 * 7. Go to Docs> build > authentication > web > get started . 
 * 8. export app from the firebase.config.js file: export default app
 * 9. login.jsx: import getAuth from firebase/auth
 * 10. create const auth =  getAuth(app)
 
=============== Provider setup ===================

 * 11. import google auth provider and create new provider.
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign in method (google, facebook, github, etc)
 * 14. sing out button . Use sing Out google auth
 * 15. tootle button between log in and log out
 * 
 * ==== More auth Provider
 * 1. Active the auth provider (create app, provide redirect url, client id,    client server)
 * 2. 
 */