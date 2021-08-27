import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import blogDatas from '../BlogInHomeSection/blogInHomeData.json';
import Footer from '../Footer/Footer';

const BlogItem = ({match}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const route = match.params.blogRoute;
    blogDatas.map(data => data.blogRoute === route ? setData(data) : {});
    // eslint-disable-next-line
  }, []);
  const {
    blogHeader,
    blogDate,
    blogDescription,
    blogContent1,
    blogContent2,
    blogContent3,
  } = data;
  return (
      <div className="main-home">
        <Navbar/>
        <div className="blog-page-content">
          <div className="blog-page-header-group">
            <h1 className="blog-page-header-group-h1">{blogHeader}</h1>
            <small className="blog-page-header-group-small">{blogDate}</small>
          </div>
          <p style={{color: '#333', fontSize: '15px'}}
             className="blog-p">{blogDescription}</p>
          <br/>
          <div className="article-group">
            <article className="article-item">
              {blogContent1}
            </article>
            <br/>
            <article className="article-item">
              {blogContent2}
            </article>
            <br/>
            <article className="article-item">
              {blogContent3}
            </article>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default BlogItem;