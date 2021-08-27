import React from 'react';
import Navbar from '../Navbar/Navbar';
import blogDatas from '../BlogInHomeSection/blogInHomeData.json';
import BlogInHomeCard from '../BlogInHomeSection/BlogInHomeCard';
import Footer from '../Footer/Footer';

const Blog = () => {
  return (
      <div className="main-home">
        <Navbar/>
        <div style={{height: '83vh'}} className="blog-in-home-section">
          <div style={{marginTop: '20px'}} className="blogs-description">
            <h1 className="blogs-description-header"><span
                style={{color: '#9FD3C7'}}>$</span> Blogs</h1>
          </div>
          <div className="recent-blogs">
            {blogDatas.slice(0, 3)
                .map(data => <BlogInHomeCard key={data.id}
                                             data={data}
                                             header={data.blogHeader}
                                             date={data.blogDate}
                                             description={data.blogDescription}/>)}
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default Blog;