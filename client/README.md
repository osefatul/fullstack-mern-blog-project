# Full-Stack MERN Blog

## Creating Blog from the Scratch
 We have use ReactJs, NodeJs, Node-Api, React Hooker and many more packages.
 - We have created first multiple pages, as each page is composed of react component
	- #### Write: this page will be used in order to write a post.
	- #### Home: this page is the home page of the blog. here you will be able to see all the posts and mani menue.
	- #### Login: login page is used in order to login if you are alrady registered.
	- #### Register: this page is used for registering.
	- #### Settings: this page is used to update settings as u want.
	- #### Single: this page is used for a single post, so we can get track of the postID.

## Rest API with MongoDB
 We used express for server, mongoose for linking mongoDB with the backend, env for all those url to hide.
	- mongoDB: we used atlasMDB for databas and users. create a new cluster and user account.
	- env: in the env file of api we saved the link of connection that we got from the cluster.
 
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
 
 ### bcrypt
 we are using this library so the password that is posting in the database should be encrypted.