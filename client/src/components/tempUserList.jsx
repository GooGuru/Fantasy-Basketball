import React, { useState, useEffect } from 'react'
  // temp data
const UserList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
 
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];

    setTimeout(() => {
      setUsers(mockUsers)
    }, 1000)
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.length === 0 ? <p>Loading...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList
