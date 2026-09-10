#   NPM project 
    1.Go to project folder (by cd)
    2.type " npm init -y"
    3.open package.json
    4.update "type:module"
    5.install nodemon by `npm i nodemon -D`
    6.update script in pacakge .json


    script{
        "start":"node app.js",
        "dev":"nodemon prg7.js"
    }

    7.add node module in the gitignore
    8.to use npm run dev

## REST API
- majority backend server return only the data not html file 
- RESST API uses(get ,post ,put,patch,delete) method to communicate with client
- any broswer can cheak only get method 
- for other method type we use third party API Tester like EchOAPI   