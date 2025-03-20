import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
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
        <h1 className="title_h1">Blog</h1>
        <div className="line"></div>

        <section className="section-blog"></section>
      </div>
    </>
  );
};

export default Blog;
