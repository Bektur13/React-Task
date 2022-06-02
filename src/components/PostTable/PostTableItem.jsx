import React from 'react';

const PostTableItem = ({posts}) => {
  return (
      <tr>
          <th>{posts.id}. {posts.title}</th>
          <th>{posts.body}</th>
      </tr>
  )
}

export default PostTableItem;