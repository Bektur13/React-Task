import React from 'react';
import Table from '../../components/Table/Table';
import './Users.css';

const Users = ({users}) => {
  return (
    <div>
        <h1 className='user__title'>Users</h1>
        <Table users={users} />
    </div>
  )
}

export default Users