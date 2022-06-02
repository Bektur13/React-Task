import React from 'react'
import TableItem from './TableItem';
import './Table.css';

const Table = ({users}) => {
    return (
        <table className='table'>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>City</th>
                <th>ZipCode</th>
            </tr>
            {users.map(item => <TableItem users={item} />)}
        </table>
    )
}

export default Table