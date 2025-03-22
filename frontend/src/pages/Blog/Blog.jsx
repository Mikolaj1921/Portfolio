import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import './Blog.css';
import '../Animation.css';

const Blog = () => {
  //state for post
  const [blog, setBlog] = useState([]);
  //connection bd dataget
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blog/dataget');
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>Blog - Portfolio Web Developera</title>
        <meta
          name="description"
          content="Skontaktuj się ze mną za pomocą formularza lub znajdź mnie na mapie. Frontend Developer, specjalizuję się w React.js, Node.js i Tailwind CSS."
        />
        <meta
          name="keywords"
          content="resume, web developer, portfolio, React, Node.js, C#, front-end, back-end, JavaScript, HTML, CSS, PostgreSQL"
        />
        <meta
          property="og:title"
          content="Kontakt - Portfolio Frontend Developera"
        />
        <meta
          property="og:description"
          content="Napisz do mnie wiadomość lub odwiedź mnie w biurze w Rzeszowie."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://mikolajmelnyk.com.pl/Contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="blog-container">
        <div className="contentblog">
          <h1 className="title_h1">Blog</h1>
          <div className="line"></div>
          <h2 className="subtitle_r">Aktualności</h2>

          <button className="adminPanel">AdmPanel</button>

          {blog.length > 0 ? (
            blog.map((post, index) => (
              <div key={index} className="blog-item">
                <div className="title-post">Post</div>
                <div className="subtitle-post">Opis posta:</div>
                <div className="image-post"></div>
                <div className="description">{post.opis}</div>
              </div>
            ))
          ) : (
            <div>Brak postów</div>
          )}
        </div>

        <div className="aside-contentblog">
          <div className="title-aside-r">
            <h1>Co nowego?</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
