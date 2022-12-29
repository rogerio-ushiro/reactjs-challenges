import './App.css';
import React, { useState, useLayoutEffect } from 'react';

export default function App() {

  let [onlineNumber, setOnlineNumber] = useState(0);
  let [users, setUsers] = useState([
    { name: "Angular Dev" },
    { name: "ReactJS Dev", status: true },
    { name: "Node Dev" },
    { name: "Javascript Dev" },
    { name: "Java Dev" },
    { name: "Electron Dev" },
    { name: "ActionScript Dev" },
    { name: "Flutter Dev" }
  ]);

  useLayoutEffect(() => {
    document.title = `We have ${onlineNumber} users online`;
    setOnlineNumber(users.filter(user => user.status).length)
  }, []);

  function Buttons() {
    return (<ol>
      {users.map((user, index) =>
        <button key={"b" + user.name + index} onClick={() => { setOnline(index) }}>{index+1}</button>
      )}
    </ol>)
  }

  function Items() {
    return (<ol>
      {users.map((user, index) =>
        user.status ?
          <li className='online' key={user.name + index}>{`${user.name} (online)`}</li> :
          <li className='offline' key={user.name + index}>{`${user.name} (offline)`}</li>
      )}
    </ol>)
  }

  function setOnline(index) {
    const newUsers = users.map((user, index2) => {
      return index === index2 ? { ...user, status: !user.status } : user
    })
    setOnlineNumber(newUsers.filter(user => user.status).length)
    setUsers(newUsers)
  }

  return (
    <div>
      <p>We have {onlineNumber} users online</p>
      <Buttons />
      <Items />
    </div>
  );

}