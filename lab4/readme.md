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

## REST API(Representational State Transfer Application Programmm)
- majority backend server return only the data not html file 
- REST API uses(get ,post ,put,patch,delete) method to communicate with client
- any broswer can cheak only get method 
- for other method type we use third party API Tester like EchoAPI  

## Request Type
    1.GET-Get all ,Get by ID
    GET:/api/products/--> get all is used when you want to get add data
    GET:/api/products/101--> get by id selected by  particular ID
    2.POST-/api/products --> is used to add product into the Database 
    data will be shared by echoAPI body
    3.PATCH/PUT-/api/products/201 -->both ID and echoAPI  body is used.
    [Patch is used when 1-2 products want to changes .
     put method is used  when more than 50% of changes want to perform.]
    4.DELETE-/api/products/301 -->single product is deleted from database
