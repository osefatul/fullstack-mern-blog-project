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
 After connection to MongoDB, we created models - POST,CATEGORY AND USER, and Routes - post,categories,user and authentication