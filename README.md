# CRUD OPERATIONS IN MONGODB

This repository contains all methods except the `deprecated` ones that can be used to perform basic CRUD operations in MongoDB.

## INSTALLATION

> Before you can use this project, make sure you have a MongoDB provision available. 

Install the dependencies using the command below on your terminal.

```shell
$ npm i
```

After you must have installed the dependencies, head over to `utils/database.js` and replace the connection url in `mongoose.connect()` method with your own.

```javascript
mongoose.connect(CONNECTION_URL, {dbName : "courseDB"})
```

Now start the server.

```shell
$ node index.js
```
If you can see the datatype of what the `users model` inherits and the `collection name` for the model logged on your terminal, then it means that installation was successful and you can proceed with exploring the code.

This is a sample message logged on my terminal.

```shell
App is listening on port 5000
The user model inherits datatype object from the model prototype
The collection name associated with this model is users
database is connected
```

You may uncomment any function invocation that you would like to test out and you should see the result after its execution on your terminal.

## BUY THE BOOK

All the functions and test cases within the ebook [CRUD OPERATIONS IN MONGODB](https://a.com) are contained in this repository. 

So if you want a clearer explanation on how to perform **CRUD operations in MongoDB**, I suggest that you have a look at the ebook [CRUD OPERATIONS IN MONGODB](https://a.com)