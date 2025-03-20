import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Blog.css';
import '../Animation.css';

const Blog = () => {
  const description = 'ss';

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

          <div className="blog-item">
            <div className="title-post"> First post</div>
            <div className="subtitle-post">This is a subtitle of this post</div>
            <div className="image-post"></div>
            <div className="description"> {description} </div>
          </div>
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
