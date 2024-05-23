import React, { useState } from "react"
import { useQuery, gql } from '@apollo/client';
import "./App.css"

const GET_USERS = gql`
  query GetUsers($userName: String!) {
    users(userName: $userName) {
      id
      login
      avatar_url
    }
  }
`;

const User = ({ user: { login, avatar_url } }) => (
  <div className="card">
    <a href={`https://github.com/${login}`} className="link">
    <div>
      <img alt="avatar" className="avatar" src={avatar_url} />
      <h1 className="name">{login}</h1>
    </div>
    </a>
  </div>
)

const Search = ({userName}) => {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { userName },
  });

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <h1 className="search-title">Fetch Github Users for {userName}</h1>
      <div className="search-result">

      {data.users.map(user => (
        <User key={user.id} user={user} />
      ))}
      </div>
    </>
  )
}

function App() {
  const [searchKey, setSearchKey] = useState("")
  const [userName, setuserName] = useState("")

  return (
    <main className="App inputForm" id="userInput">
      <div className="search-input">
      <input type="text" value={searchKey} onChange={e => setSearchKey(e.target.value)} placeholder="Search github user here..."/>
      <button disabled={!searchKey} onClick={() => setuserName(searchKey)}> Search</button>
      </div>
      {!!userName && <Search userName={userName}/>}
      
    </main>
  )
}

export default App