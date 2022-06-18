# REST API in Node/Express using Sequelize,mysql


## PreRequisites
 [mysql](https://www.mysql.com/downloads/)

 [Node](https://nodejs.org/en/download/)
My version of nodejs
v16.15.0
### Setup
---
 $ npm install
 To install all dependences used in this application

---
Create a Database `ReferaApi` in mysql Dashboard

---
$ cd server && node_modules/.bin/sequelize db:migrate      
To create tables

---
#### To Run Application

$ npm run dev or node index.js

---
##### To deploy Aplication


Version control system 
I will use Git together with Github to put the code on a development platform in a repository.
I create a new repository for the api
git init
git remote add origin the name of the repository
git add .
git commit -m "uploading the project'
git push --set-upstream origin master

Link the repository with Heroku

Create an application on Heroku and follow the steps for the platform:
At the top in the navigation you have Overview, Resources, Deploy, Metrics and so on. 
I selected Deploy. 
Then I clicked on the GitHub icon and searched for the repository that I sent my code to.

Once the app on GitHub is successfully connected to my Heroku account, I clicked on Deploy Branch to Deploy the app.

And I selected the Enable Automatic Deploys option, this will make every time I perform a push to the GitHub repository it will update on Heroku as well.


---
###### Describe how you would structure the database to account for 
    • Real estate agency registration data 
    • Company registration data 
    • Contact registration data 


Database structure considering the above points
[Database Structure]

<img src="https://github.com/lmatusse/ReferaAPIConcept/blob/master/Estruturadb.png" width="300px" heigth="300px">


NB: I put the basic attributes just for the illustration already in the development would have more attributes.

---
###### Describe what needs to be changed on the API you implemented

I would need to create models and migrations to create the tables with the proper relationships specified in model in the referaApi database.
With the relationship between ordem and company it is from ManyToMany as specified in the diagram above and we will have a model and a company_order migration that will have the ids of the entities involved to reference them.
In the order model, the following code would be increased in the associate function for association between models

order.belongsToMany(models.company_order,{

foreignKey:orderId

})
I would create the controllers that will have the functions so that from an endpoint we can make queries, register and update our database.

In the routes/index file I would add the endpoints referring to the created controllers that allow us to execute the queries.




---
###### Difficulties:
I had some difficulties in building the api but nothing that I couldn't solve, but I couldn't return the category name in the table.
