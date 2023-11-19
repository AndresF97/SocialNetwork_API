# Social Network API MongoDB

## Description

This is just a small project, that demostaites the my knowledge of mongodb/moongose. This porject is just the basic structure of a REST application.


## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)

## Installation

Install using your package manager.

```
npm install
```

## Usage
1. Before your run the application make sure to type this command on your CLI, to add some seeds in your database:
```
npm run seeds
```
2. Start the application by typing this command:
```
npm start
```
3. Open your favorite API-testing tool to and hit the specific routes shown below.
 #### User Routes
 - http://localhost:3001/api/users (GET Route)
 - http://localhost:3001/api/users/:userId (GET Route)
 - http://localhost:3001/api/users (POST Route)
 - http://localhost:3001/api/users/:userId (PUT Route)
 - http://localhost:3001/api/users/:userId (DELETE Route)
 #### Friends
- http://localhost:3001/api/users/:userId/friend/:friendId (POST Route)
- http://localhost:3001/api/users/:userId/friend/:friendId (DELETE Route)
#### Though Routes
- http://localhost:3001/api/thoughs/ (GET Route)
- http://localhost:3001/api/thoughs/:thoughId (GET Route)
- http://localhost:3001/api/thoughs (POST Route)
- http://localhost:3001/api/thoughs/:thoughId (PUT Route)
- http://localhost:3001/api/thoughs/:thoughId (DELETE Route)
#### Reaction Routes (Sub-Document to Thoughs Model)
- http://localhost:3001/api/thoughs/:thoughId/reaction/ (POST Route)
- http://localhost:3001/api/thoughs/:thoughId/reaction/:reactionId (DELETE Route)
#### Likes (Sub-Document to Thoughs Model)
- http://localhost:3001/api/thoughs/:thoughId/likes/ (POST Route)
- http://localhost:3001/api/thoughs/:thoughId/likes/:likeId (DELETE Route)

## Authors 

- **Andres Jimenez** [Github](https://github.com/AndresF97)

