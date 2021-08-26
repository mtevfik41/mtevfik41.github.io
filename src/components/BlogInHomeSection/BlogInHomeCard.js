import React from 'react';
import {Link} from 'react-router-dom';
import {FaArrowCircleRight} from 'react-icons/all';

const BlogInHomeCard = ({header, date, description}) => {
  return (
      <div className="blog-card">
        <div className="blog-inline-group">
          <h3 className="blog-card-header">{header}</h3>
          <small className="blog-card-date">{date}</small>
        </div>
        <p className="blog-card-content">{description.substr(0, 120)}...</p>
        <div className="read-more-helper">
          <Link to="/blog/:id" className="blog-card-read-more" href="#">Read
            more &nbsp; <FaArrowCircleRight/></Link>
        </div>
      </div>
  );
};

export default BlogInHomeCard;