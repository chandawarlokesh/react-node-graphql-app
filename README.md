# Terminal 1
```
cd server
npm run start
```
visit - http://localhost:4000/

NOTE - you can test using "Query your server" button
Example:-
Operation:
```
query GetUsers($userName: String!) {
  users(userName: $userName) {
    id
    login
    avatar_url
    url
  }
}
```

Variables:
```
{
  "userName": "chandawar"
}
```

# Terminal 2
```
cd client-app
npm run start
```
visit - http://localhost:3000/

![image](https://github.com/chandawarlokesh/react-node-graphql-app/assets/15119623/80a50cdc-3b60-4e05-a8f4-38e1838142c4)
