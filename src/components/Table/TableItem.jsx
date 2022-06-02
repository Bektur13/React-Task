import React from 'react';

const TableItem = ({users}) => {

    return (
        <tr>
            <th>{users.id}. {users.name}</th>
            <th>{users.username}</th>
            <th>{users.address.city}</th>
            <th>{users.address.zipcode}</th>
        </tr>
    )
}

export default TableItem;