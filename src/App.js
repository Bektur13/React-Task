import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Users from './pages/users/Users';
import PostTable from './components/PostTable/PostTable';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  });
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  })

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<PostTable posts={currentPosts} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>} />
            <Route path='users' element={<Users users={users} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;