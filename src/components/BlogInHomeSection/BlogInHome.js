import React from 'react';
import BlogInHomeCard from './BlogInHomeCard';
import blogDatas from './blogInHomeData.json';
import {FaArrowCircleRight} from 'react-icons/all';
import {Link} from 'react-router-dom';

const BlogInHome = () => {

  return (
      <div className="blog-in-home-section">
        <div className="blogs-description">
          <h1 className="blogs-description-header"><span
              style={{color: '#9FD3C7'}}>$</span> Blogs</h1>
          <p className="blogs-description-text">
            In this section you can see my recent blog writings. For more, you
            can
            visit the blog page.
          </p>
        </div>
        <div className="recent-blogs">
          {blogDatas.slice(0, 3)
              .map(data => <BlogInHomeCard key={data.id}
                                           data={data}
                                           header={data.blogHeader}
                                           date={data.blogDate}
                                           description={data.blogDescription}/>)}
        </div>
        <Link to="/blog" className="see-more-tag">See More&nbsp;
          <FaArrowCircleRight/></Link>
      </div>
  );
};

export default BlogInHome;