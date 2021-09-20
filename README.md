# Node.JS Workshop 2021

Presentation slides: https://docs.google.com/presentation/d/1kuAz55-MzLZ4XiA8_v8sKeM6_LCNSqgwauZJU2DKaWk/edit?usp=sharing&resourcekey=0-G2uSlsX1LnXchE9hSE2laA

## Assignments

### Assignment 1: Standard Libraries
Using node's standard library `fs`  and read in a comma-seprated file of key-value pairs and print them. Use `data.txt` present in Assignment Resources.

<b>BONUS</b>: Create a JSON object of these key-value pairs before printing

### Assignment 2: Using npm packages
Create a game where you ask user a question and the application randomly answers the question with either yes or no. Use the package https://www.npmjs.com/package/yes-no-words while building this application.

<b>TIP</b>: You might have to search how to take user input.

### Assignment 3: Express and Request Routing
Create an Express application which responds to an HTTP `GET` request, and renders an HTML page. This HTML page should contain a form, which issues a `POST` action to login a user, then redirect back to the same page.

The `POST` action should store the user's username somehow.  On every `GET` request to the form, the app should check for a logged-in user.  If the username has been stored i.e. a user is logged in, it should be show the username of the logged in user.

### Assignment 4: Persistence with Mongoose
Sign up for and create a free MongoDB instance at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  Use this connection string to authorize a Mongoose application that will have a single model, a blog post with a `title` and a `body`.  Using Express, create a simple application that will save a new blog post, and list out all existing blog posts on an HTML page.

TIP: MongoDB wasn't something that we covered in the workshop however is an important tool to persist your data. Mongoose is the npm package most preferred to work with MongoDB so go through its documentation to understand how to implement this.

### Assignment 5: Chatting with Socket.io
Create a simple chat room application using socket.io.  Starting with the simple chat example, add the ability for each user to add a nickname for themselves. Consult the [socket.io docs](http://socket.io/#how-to-use) for guidance on how to do this.

TIP: This is a little advanced stuff and you'll have to understand a lot of concepts and theory behind web sockets to build this. However, this is _the_ gateway to real time applications and is something that every software developer should know about.
