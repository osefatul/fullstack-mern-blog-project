# Full-Stack MERN Blog

## Creating Blog from Scratch

We used ReactJs, NodeJs, Node-Api, React Hooker and many more technologies.

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

## Connnecting Rest API and MongoDB (Backend) to React (Frontend)

### Fetching Data from API to Components:

- To fetch data we used Axios library
- Go to package.json and at the end add "proxy":"http://localhost:5000/api"
- Make sure to enable CORS: This post shows how to enable Cross Origin Resource Sharing (CORS) in Node. CORS essentially means cross-domain requests. for example we are using different domains for client (localhost:3000) and API (localhost:5000)https://dzone.com/articles/cors-in-node
- We added CORS enabling snippet in the index.js in the client side
- proxy didn't work for me, so i used the domain link rather in the fetchPost in the Home page.
- Assigned the data from the API to the posts and then assigned it to the posts prop in the Post component. went ahead to the Post component and mapped through the posts props for each post in the posts array we again assign a Post component and the prop.
- In the Post component we fetched all the infos - title, desc, createdAT, etc - we also used Link as well where it direct us to the single page of the post using the post.\_id
- In the single page we fetched data again from the link of "http://localhost:5000/api/posts/id", remember we are using link because proxy doesnt work. if it worked we would only use "/posts/ id", we got id form the useLocation hook.
- In the single page the data is fetched as all.

### Working on Sidebar

- Fetch data from the "http://localhost:5000/api/categories" and show all the categories that exists in the sidebar.

### Woking on Fetching Data from the Author

- Go to Home and use useLocation again, in the useLocation there is a method "search" where it gives you the params for query. we used that one for query of user.
- Updated the fetchpost with adding + search. and also updated the useEffect with search variable. if we dont use "search", the link not gonna let us search the parameter we want which for example user=username. we add "search" because it will fecth whatever we query from API. it is mandatory.
- Remember we already defined "user" for query in the postsJs routes --> req.query.user
- Now, whenever we click on Author it will fetch data as "http:localhost:3000?user=post.username".. where localhost:3000 is linked with localhost:5000/api/posts domain for the API feching.
- So, so localhost:3000?user=username is equal to localhost:5000/api/posts?user=username
- In the Singel post we also update the Author and add a Link where it directs us to "/?user=${post.username}".. remember this will direct it to localhost:3000?user=username...as "/" or localhost:3000 === localhost:5000/api/posts?user=post.username becoz we wired from the moment we are fetching data from the API

### Fetching Data from Category

- use same concept as above. when we click on any category, it will fetch all posts that belong to that category.
- However, we already defined cat in the postsJs Routes file as --> req.query.cat

### Work on Write page: Register

- Before we work on Write page we need to make sure user is already logged in if not user has to get registered.
- So, lets work on register page and login page. in the register page we will not use ContextApi. in the log in page we will.
- set username, email and password for form and also added an error variable for catching error and then show it on page as well.
- once everyting is submitted successfully, then redirect to login page

### work on Login page

- We used Redux for authentication management tools such as registration and login.
- It is better to have it on a separate layer than usin props drilling on every component.
- we use login of a user to be there in every page the user goes. that why we need Redux.
- We created a directories of feature having userSlice.js and app having store.js
- we Introduced three initials for reducers - error:false, users:null and isFetching:false - with the given values
- We then have four reducers to dispatch actions.
  1- login: this reducer will dispatch an action where the user value will be loaded on.
  2- logout: this reducer will dispatch an action where the user will have the null value.
  3- credentialsFetched: this will turn isFetching on.
  4- loginError: this will turn error on.

- In the Login page we fetched the above reducers and selectors from userSlice.
- if isFetching is true, the login button will be disabled... check out the codes for further understanding.

### App Page

- import user into this page from the redux using useSelector, this will make sure, if the user is already there then consistent the page even the page is refreshed.

### Write page

#### Uploading File

- We will define three state hooks: title, description and file for photo.
- We can upload this photo picture to somewhere in database through formData() , where in our case it is in the images direcory located in the api direcotry.
- Add filename, file itself to the form and upload it using axios.post("http://localhost:5000/api/upload", data);
- Add the filename of the uploaded file to the object consists of {username, title, desc} and then pass this object to be posted through axios.post("http://localhost:5000/api/posts", newPost)
- Go to index.js and use a static path for the directory where the uploaded file will be stored:

      -  app.use("/images", express.static(path.join(__dirname, "/images")));

- This means use this /images link as static connected to the images directory in the api folder. thats where all the uploaded file will be stored.
- Go to the Post.jsx and add a Public filename as "PF" and appended to the source of image there. the PF link is actually identified in the index.js as static path.
- Also add the PF to the singlePost.jsx as well.

#### Deleting file

- First if the post doesn't belong to the user it should not show them the edit and delete buttons
- Go to SinglePost.jsx thats where the post buttons show. and add logic if the post user is same as the user logged in. then show otherwise dont.
- in the Delete method, I was faced a problem whenever I would delete a post it couldn't be deleted because CORS wouldn't allow me, for that I added the below code:

      - res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

#### Editing file

- In order to updat the post we introduce a state hook for [title, desc and updateMode].
- if the updateMode is true then we can update the title, and description.
- use those hooks for changing data and then render it.
- Two new inputs are introduced just for title and description altering. these input should take their value from the title and desc hook.
- Remember all the values in the input should be taken from the hook not the post.[title or desc]

### Setting page

- The usage setting page is to modify the user credentials. So, the idea of setting page with the write page is same, both are modifying something, one a post another a user's credentials.
- Defined file as the file will act for the profile picture. as in the write page it was the post itself.
- Defined three hooks = [username, email, password], each will be setting a their correspondent values.
- Defined the static path for those uploaded-pictures storage that we initiated in the api/index.js.... app.use("/images", express.static(path.join(\_\_dirname, "/images")));
- Add filename, file itself which is the profilePic to the form and upload it using axios.post("http://localhost:5000/api/upload", data);
- Add the filename of the uploaded file's name to the object consists of {username, email, password} and then pass this object to be updated through PUT method using --> axios.put("http://localhost:5000/api/users/" + user.\_id, updatedUser).
- Once they are updated, now it is a time to fetche the data again. we dont fetch the data, we are dispatchinG login credentials, just change the user credential who is logged in.
- As we dispatch the login we at the same time set the localStorage.setItem with the new data. so the user will get changed.
- If we dont dispatch login we cannot set/update user credentials. We have to first set/update and then replace those updated credentials with the old ones in the localStorage.
- For the profile picture update. If user selected a picture then show the selected picture otherwise show the old ones. For the new one the source should be an object where it creates a URL for the selected file(picture).
- However if the file is not selected which means we dont wanna change it then the source of that image will be uploaded picture directory + the picture id which is stored in the user credentials.
