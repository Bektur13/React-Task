import React from 'react'
import PostTableItem from './PostTableItem';
import './PostTable.css';
import Pagination from '../Pagination/Pagination';

const PostTable = ({posts, postsPerPage, totalPosts, paginate}) => {

    return (
        <div>
            <h1 className='post__title'>Posts</h1>
            <table className='post__table'>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {posts.map(item => <PostTableItem posts={item}/>)}
            </table>
            <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={totalPosts}/>
        </div>
    )
}

export default PostTable