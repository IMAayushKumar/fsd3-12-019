## Express
    Step 1. Create project folder.
    Step 2. Create 2 folder Frontend,Backend in root folder (lab5 )
    Step 3. open the terminal to backend by cd lab5 and cd backend
    Step 4. type npm init -y
    step 5. install nodemon `npm i nodemon -D`
    step 6. install express `npm install express`
    step 7. update backend/package.json

     -change type: "type":"module'
     -change script:
        script:{
            "start":"node app.js"
            "dev":"nodemon prg1.js"
        }

## Static Import
    In Express we can add any static HTML pages with the help of express.static method

    Express supports middleWare,When we have to execute some function before server execution thenwe use middleWare 
    App.use always apply to insert any middle ware             

