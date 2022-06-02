import React from 'react';
import './Pagination.css';

 const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index);
    }

  return (
      <nav className='pagination__content'>
          <ul className='pagination__ul'>
              {pageNumbers.map(number => (
                  <li key={number} className="pagination__list">
                      <a onClick={() => paginate(number)} className='pagination__item'>
                          {number}
                      </a>
                  </li>
              ))}
          </ul>
      </nav>
  )
}

export default Pagination;