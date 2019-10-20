# TaskMe

TaskMe is a task manager that can be used by anyone. It can be used to help users to organize and categorize their tasks.


# Getting Started

There is 2 folders

```
    .
    ├── Client                   # Client folder where Angular files are stored
    ├── Server                   # Server folder where NodeJS files are stored
    └── README.md
```

To start the server, cd in to the Server folder.

To run the server in `Development Mode`, use this command: `npm run dev`.

This is what the output should look like*.
```
> set NODE_ENV=development && nodemon server

[nodemon] 1.18.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port: 5000
DB connection to MLAB successful
```
***
To start the server in `Production Mode`, use this command `npm run prod`

```
> set NODE_ENV=production&&nodemon server

[nodemon] 1.18.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port: 5000
SSH connection successful
DB connection to DigitalOcean successful
```
***
To start the Client, cd in to the Client folder.

Run the client with the command `ng serve`.

This should be the expected output*: 
```
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Date: 2019-01-24T06:19:32.691Z
Hash: 4eb70734357703a792b3
Time: 21868ms
chunk {main} main.js, main.js.map (main) 101 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 223 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.08 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 1.09 MB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 5.04 MB [initial] [rendered]
i ｢wdm｣: Compiled successfully.
```

`*Your output may differ from what is shown`

There are 2 user accounts that have been created in both the production and also development:

`Normal user`
```
Username: user
Password: user
```

`Admin user`
```
Username: admin
Password: admin
```