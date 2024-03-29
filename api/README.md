# Full-Stack MERN Blog

## Creating Blog from Scratch

We have use ReactJs, NodeJs, Node-Api, React Hooker and many more packages.

- We have created first multiple pages, as each page is composed of react component
  - #### Write: this page will be used in order to write a post.
  - #### Home: this page is the home page of the blog. here you will be able to see all the posts and mani menue.
  - #### Login: login page is used in order to login if you are alrady registered.
  - #### Register: this page is used for registering.
  - #### Settings: this page is used to update settings as u want.
  - #### Single: this page is used for a single post, so we can get track of the postID.

## Rest API with MongoDB

We used express for server, mongoose for linking mongoDB with the backend, env for all those url to hide. - mongoDB: we used atlasMDB for databas and users. create a new cluster and user account. - env: in the env file of api we saved the link of connection that we got from the cluster. - multer: nodeJs library to upload file.. generally we use firebase or amazon s3 .... but here we will use multer to upload file from locally

In order to understand mongoose in details click on the link https://mongoosejs.com/docs/connections.html
After connection to MongoDB, we created models - POST,CATEGORY AND USER, and Routes - post,categories,user and authentication.

### MongoDB

MongoDB is a database that stores your data as documents. Most commonly these documents resemble a JSON-like structure.

### What Is Mongoose?

Mongoose is an Object Document Mapper (ODM). This means that Mongoose allows you to define objects with a strongly-typed schema that is mapped to a MongoDB document.
Mongoose provides an incredible amount of functionality around creating and working with schemas. Mongoose currently contains eight SchemaTypes that a property is saved as when it is persisted to MongoDB. They are:

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array

Each data type allows you to specify:

- a default value
- a custom validation function
- indicate a field is required
- a get function that allows you to manipulate the data before it is returned as an object
- a set function that allows you to manipulate the data before it is saved to the database
- create indexes to allow data to be fetched faster

For further study and details visit:

    - https://medium.com/chingu/an-overview-of-mongodb-mongoose-b980858a8994
    - https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527

### Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −

    - Allows to set up middlewares to respond to HTTP Requests.
    - Defines a routing table which is used to perform different actions based on HTTP Method and URL.
    - Allows to dynamically render HTML Pages based on passing arguments to templates.

### Postman

This is a software that we are using actually for the server side router or HTTP request. we are going to use for GET, POST, UPDATE, DELETE and USE requests so we can see what we are receiving in the req.body
we also have the postman agent for the client side testing of the web server.

### bcrypt

we are using this library so the password that is posting in the database should be encrypted.

### routes/auths

In the routes/Users file using URL of: localhost:/5000/api/auths/register or login

Here, we used two things. if there is no user in the DB we will register the user and store its info using POST("/register") method, for the user that already exist we used a POST("/login")
1 - In the Registeration process: POST mehtod is used and we provide three things -- username, email, password.
2 - password is getting hashed by bycrypto library, using salt method.
3 - In the Login process, POST method is used -- we provide username and password,

### routes/users

In the routes/users file using URL of: localhost:/5000/api/users/:id.

To Update users we used - router.PUT("/:id") - mehtod, where "/:id" will indicate the user id. "req.params.id", means if the id in the URL parameter of "users/id" for example: localhost:/5000/api/users/1234987986 -- is same as in the request of the body:

1 - First, Check the userId that a user is giving in the body and compare it to the URL/userId or the params.id.
2 - Second, if the userId is right then change the new password given by the user with the old ones.
3 - Third, update the user account with all the information that user is giving in the body, using the userId.

To Delete a user: we almost do the same process as we did with update, however, we are deleting the user posts as well:

    1 - Find a user by ID from the URL
    2 - If the user is there then Try to Delete Post first as the parameter should be the object where the username in the post should match with the username that was found in User model from URL params.
    3 - Delete the user given the ID from the URL params

To Get a user: Same process: the URL should be - localhost:/5000/api/auth/users/id
1 - provide username, email and password, once we retrieve th information we ignore or hide the password using: const {password, ...others} = user.\_doc

### routes/posts

In the routes/posts file using URL of: localhost:/5000/api/posts

To Create a Post, we create a new object from the Post model. and then save everythin (that is given in the body based on the information of Post schema) in that newly created object. you can access that save the post in the database, minimum using username, title and desc properties. We know this because in the Post model we have created a schecma where desc and username is required.

To Update a Post, we used - router.post("/:id") - mehtod, where "/:id" will indicate the post Id. "req.params.id", means if the id in the URL parameter of "posts/id" for example: localhost:/5000/api/posts/1234987986 -- is same as the requested username's id then:

1 - First, Check the userId that a username is giving in the body and find its id and compare it to the URL/postId or the params.id.
2 - Second, if the postId is right then update the everything given by the user with the old ones.
3 - Third, update the post with all the information that user is giving in the body.

To Delete a post: we almost do the same process as we did with update, however, we are deleting the post:

    1 - Find the post by ID from the URL
    2 - If the username in the post is same as the one in the body, then Try to Delete Post directly.
    3 - Send the update to user.

To Get a post: same process: the URL should be - localhost:/5000/api/auth/users/id - only provide post Id in the URL parameter.

To Get all posts, or a categorical post that belong to one group or a user. we use QUERY in URL that is indicator of - req.query.<queryname> - the use of query is as below:

    1 - Syntax:  URL?categoryName=<searching in the category>
    2-  localhost:5000/api/posts?user=omar

### routes/categories

In the routes/categories file using URL of: localhost:/5000/api/categories

To Create a Category, we create a new object from the Category model. and then save everythin (that is given in the body based on the information of Category schema) in that newly created object. you can access that save the category in the database, using <name>. We know this because in the Category model we have created a schecma where only "name" is required.

### multer

We are using this library for uploading files.

There are some steps for that:
1 - First we created an image folder in the api directory and saved an image there, our files will be uploaded from this "image" directory.
2 - In the index file create a storage for uploading file using multer library. in the object as a parameter of it we used "distanation" and its name as a callback. the other one is used for file name to be uploaded. We typically take the file name from the user, using - req.body.name -
3 - To upload a file, we used multer library passing the above defined storage in the parameter.
4 - To make it happen, execute a post method. where the middleware is the above upload variable where the file is stored and the callback function will send a json file for saying the file is uploaded successfully.
5 - In the Postman, go to the link: localhost:5000/api/upload
6 - If we are getting file name from the body then in the body write - {"name":"<filename>"}
7 - However, to upload the file, the body should be in the "form-data" select file as a key and in the value choose the file form the api/images directory. and then send the request
