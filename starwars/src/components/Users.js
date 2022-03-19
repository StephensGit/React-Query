import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import User from './User';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}

const Users = () => {
  const queryClient = useQueryClient();
  const { data, status } = useQuery('users', fetchUsers)
  console.log(data);

  return (
    <div>
      <h2>Users</h2>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.map(user => <User key={user.id}  user={user} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default Users;