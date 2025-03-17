import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Resume.css";
import "../Animation.css";
import { Link } from "react-router-dom";

const Resume = () => {
  const [languageLevels] = useState({
    polish: "C2", // Polski - C2
    english: "B2", // Angielski - B2
    ukrainian: "C2", // Ukraiński - A2
    russian: "B2", // Rosyjski - B1
  });

  // Funkcja do obliczenia, które segmenty mają być pomarańczowe, a które szare
  const getLevelColor = (level) => {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    if (!levels.includes(level)) {
      level = "A1"; // Domyślny poziom, jeśli nie znaleziono
    }
    const levelIndex = levels.indexOf(level);
    return levels.map((_, index) => (index <= levelIndex ? "orange" : "gray"));
  };

  // Funkcja renderująca pasek postępu dla każdego języka
  const renderProgressBar = (level) => {
    const colors = getLevelColor(level);

    return (
      <div className="progress-bar">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`progress-segment ${color}`}
            style={{ width: `${100 / 6}%` }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>Resume - Portfolio Web Developera</title>
        <meta
          name="description"
          content="Sprawdź moje portfolio web developera, w tym doświadczenie zawodowe w React, Node.js, C#, oraz projekty związane z tworzeniem aplikacji webowych i systemów. Zobacz moje umiejętności programistyczne, osiągnięcia i edukację."
        />
        <meta
          name="keywords"
          content="resume, web developer, portfolio, React, Node.js, C#, front-end, back-end, JavaScript, HTML, CSS, PostgreSQL"
        />
        <meta property="og:title" content="Resume - Portfolio Web Developera" />
        <meta
          property="og:description"
          content="Zapoznaj się z moimi doświadczeniami, umiejętnościami i projektami programistycznymi. Portfolio obejmuje zarówno projekty front-endowe, jak i back-endowe."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://mikolajmelnyk.com.pl/Resume" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="resume-container">
        <div className="content">
          <h1 className="title_h1">Resume</h1>
          <div className="line"></div>

          <section className="education">
            <h2 className="subtitle_r">Edukacja</h2>
            <div className="education-item">
              <div className="col_photo1">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://weii.prz.edu.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
              <div className="col_text">
                <h3 className="subsubtitle_r">
                  Politechnika Rzeszowska Im. Ignacego Łukasiewicza
                </h3>
                <span className="date_r"> 2022 — now</span>
                <p>
                  Obecnie jestem studentem kierunku Informatyka, specjalizując
                  się w technologii internetowych oraz systemach zarządzania. W
                  ramach studiów nabywam umiejętności z zakresu programowania,
                  analizy danych oraz projektowania systemów informatycznych.
                </p>
                <p>
                  Zajmuję się także zagadnieniami związanymi z tworzeniem
                  nowoczesnych aplikacji internetowych, zarządzaniem bazami
                  danych oraz rozwiązywaniem problemów związanych z
                  optymalizacją i bezpieczeństwem systemów informatycznych.
                </p>
                <p>
                  Moje studia pozwalają mi na pogłębianie wiedzy teoretycznej i
                  praktycznej, co stanowi solidną podstawę do dalszego rozwoju w
                  branży IT.
                </p>
              </div>
            </div>

            <div className="education-item">
              <div className="col_photo2">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://most3.licey.org.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
              <div className="col_text">
                <h3 className="subsubtitle_r">
                  Liceum nr 3 imienia Św. Królowej Jadwigi w Mościskach
                </h3>
                <span className="date_r"> 2016 - 2022</span>
                <p>
                  W latach 2016–2022 uczęszczałem do Ogólnokształcącej Szkoły
                  Średniej nr 3 im. Królowej Jadwigi w Mościskach, gdzie
                  zdobyłem szeroką wiedzę ogólnokształcącą.
                </p>
                <p>
                  Jest to szkoła, która łączy tradycję polskiego nauczania z
                  nowoczesnym podejściem do edukacji, co umożliwiło mi rozwój
                  zarówno w zakresie przedmiotów ścisłych, jak i
                  humanistycznych. Program nauczania realizowany w języku
                  polskim pozwolił mi utrzymać silne więzi z moją kulturą i
                  tradycjami.
                </p>
              </div>
            </div>
          </section>

          <section className="experience">
            <h2 className="subtitle_r">Doświadczenie</h2>
            <div className="experience-item">
              <div className="col_text">
                <h3 className="subsubtitle_r">Suntrail</h3>
                <span className="date_r"> 2023 — 2024</span>
                <p>
                  Jako Front-end Developer w projekcie realizowanym przez
                  Politechnikę we współpracy z firmą Suntrail, w ramach
                  przedmiotu *Ideas and Computer Engineering*, prowadziłem
                  całość projektu z zakresu front-endu dla firmy Suntrail.
                </p>
                <p>
                  Moje główne zadania obejmowały stworzenie i implementację
                  interfejsów użytkownika z wykorzystaniem technologii takich
                  jak React oraz CSS. Odpowiadałem za pełną część front-endową,
                  projektując responsywne, intuicyjne i estetyczne widoki
                  aplikacji.
                </p>
              </div>
              <div className="col_photo3">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://w.prz.edu.pl/uczelnia/aktualnosci/suntrail-pierwszy-spin-off-w-ramach-politechniki-rzeszowskiej-2371.html"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>

            <div className="experience-item">
              <div className="col_text">
                <h3 className="subsubtitle_r">Słodka Chwila</h3>
                <span className="date_r"> 2024 — 2025</span>
                <p>
                  W ramach projektu "Słodka Chwila" stworzyłem stronę wizytówkę
                  cukierni, która zapewnia użytkownikom szybki dostęp do
                  kluczowych informacji, takich jak menu, aktualności, kontakt
                  oraz formularz wiadomości.
                </p>
                <p>
                  Zastosowałem React oraz Tailwind CSS do budowy front-endu,
                  używając React Router do routingu i React Hook Form do obsługi
                  formularzy. Strona jest responsywna i przyjazna użytkownikowi.
                </p>
                <p>
                  Backend oparty na Node.js i Express.js umożliwia obsługę
                  formularzy kontaktowych i przechowywanie danych w bazie danych
                  PostgreSQL. Projekt korzysta z usług takich jak Netlify i
                  Render do hostowania front-endu i back-endu.
                </p>
              </div>
              <div className="col_photo4">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://slodkachwila.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </section>

          <section className="achievement">
            <h2 className="subtitle_r">Osiągnięcia</h2>
            <div className="col_3_achievement">
              <div className="col_photo5">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://zsz.prz.edu.pl/dzialalnosc-naukowa/projekty"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
              <div className="col_text">
                <h3 className="subsubtitle_r">Nauczajka</h3>
                <span className="date_r">2023 - 2024</span>
                <p>
                  Brałem udział w projekcie "Nauczajka", który zdobył 1. miejsce
                  w konkursie VIA Express do sukcesu w lipcu 2023 roku. Projekt
                  polegał na stworzeniu aplikacji edukacyjnej wspierającej
                  proces korepetycji, która miała na celu pomoc uczniom oraz
                  studentom w organizacji nauki.
                </p>
                <p>
                  W ramach działalności studenckiej, projekt "Nauczajka" nie
                  tylko zyskał uznanie w konkursie, ale także umożliwił mi
                  rozwój w zakresie zarządzania projektem, pracy zespołowej oraz
                  tworzenia aplikacji webowych. Dzięki zaangażowaniu całego
                  zespołu udało się zaprezentować innowacyjne rozwiązanie, które
                  znalazło pozytywne opinie.
                </p>
              </div>
            </div>
          </section>

          <div className="title-aside-r-low">
            <h1>Skills & Language</h1>
          </div>

          <div className="aside-content-low">
            <div className="skills">
              <h2>Umiejętności</h2>
              <div className="line"></div>

              <div className="skills-column">
                <div className="skill-col">
                  <div className="min-image-skill1"></div>
                  <li className="name-skill">HTML</li>
                  <div className="min-image-skill2"></div>
                  <li className="name-skill">CSS</li>
                  <div className="min-image-skill3"></div>
                  <li className="name-skill">JavaScript</li>
                  <div className="min-image-skill4"></div>
                  <li className="name-skill">React</li>
                  <div className="min-image-skill5"></div>
                  <li className="name-skill">Node.js</li>
                  <div className="min-image-skill6"></div>
                  <li className="name-skill">Express.js</li>
                  <div className="min-image-skill7"></div>
                  <li className="name-skill">PostgreSQL</li>
                  <div className="min-image-skill8"></div>
                  <li className="name-skill">Git</li>
                  <div className="min-image-skill9"></div>
                  <li className="name-skill">GitHub</li>
                </div>
              </div>
            </div>
            <div className="lang">
              <h2>Znajomość języków</h2>
              <div className="line"></div>
              <div className="lang-column">
                <div className="name-lang">
                  <li className="left-li">
                    <strong>Język Polski:</strong> {languageLevels.polish}
                    {renderProgressBar(languageLevels.polish)}
                  </li>
                  <li className="right-li">
                    <strong>Język Angielski:</strong> {languageLevels.english}
                    {renderProgressBar(languageLevels.english)}
                  </li>
                  <li className="left-li">
                    <strong>Język Ukraiński:</strong> {languageLevels.ukrainian}
                    {renderProgressBar(languageLevels.ukrainian)}
                  </li>
                  <li className="right-li">
                    <strong>Język Rosyjski:</strong> {languageLevels.russian}
                    {renderProgressBar(languageLevels.russian)}
                  </li>
                </div>
              </div>
            </div>
          </div>

          <section className="info-section">
            <h2 className="subtitle_r">Informacje dodatkowe</h2>
            <div className="info-item">
              <div className="left-info">
                <div className="col_photo6"></div>
                <div className="col_text_info">
                  <Link to="/Projects" className="subsubtitle_info">
                    <h3 className="contact-click-info">
                      Kliknij tutaj, aby zobaczyć moje projekty
                    </h3>
                  </Link>
                  <p>
                    Odkryj moje najnowsze projekty, które pokazują moje
                    umiejętności w programowaniu i rozwiązywaniu problemów.
                    Znajdziesz tam aplikacje webowe, projekty frontendowe i
                    backendowe.
                  </p>
                </div>
              </div>
              <div className="right-info">
                <div className="col_photo7"></div>
                <div className="col_text_info">
                  <Link to="/Contact" className="subsubtitle_info">
                    <h3 className="contact-click-info">
                      Kliknij tutaj, aby się skontaktować
                    </h3>
                  </Link>
                  <p>
                    Chcesz porozmawiać lub współpracować? Kliknij, aby
                    skontaktować się ze mną. Jestem otwarty na nowe wyzwania,
                    projekty i możliwości współpracy.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="aside-content">
          <div className="title-aside-r">
            <h1>Skills & Language</h1>
          </div>
          <div className="skills">
            <h2>Umiejętności</h2>
            <div className="line"></div>

            <div className="skills-column">
              <div className="skill-col">
                <div className="min-image-skill1"></div>
                <li className="name-skill">HTML</li>
                <div className="min-image-skill2"></div>
                <li className="name-skill">CSS</li>
                <div className="min-image-skill3"></div>
                <li className="name-skill">JavaScript</li>
                <div className="min-image-skill4"></div>
                <li className="name-skill">React</li>
                <div className="min-image-skill5"></div>
                <li className="name-skill">Node.js</li>
                <div className="min-image-skill6"></div>
                <li className="name-skill">Express.js</li>
                <div className="min-image-skill7"></div>
                <li className="name-skill">PostgreSQL</li>
                <div className="min-image-skill8"></div>
                <li className="name-skill">Git</li>
                <div className="min-image-skill9"></div>
                <li className="name-skill">GitHub</li>
              </div>
            </div>
          </div>
          <div className="lang">
            <h2>Znajomość języków</h2>
            <div className="line"></div>
            <div className="lang-column">
              <div className="name-lang">
                <li className="left-li">
                  <strong>Język Polski:</strong> {languageLevels.polish}
                  {renderProgressBar(languageLevels.polish)}
                </li>
                <li className="right-li">
                  <strong>Język Angielski:</strong> {languageLevels.english}
                  {renderProgressBar(languageLevels.english)}
                </li>
                <li className="left-li">
                  <strong>Język Ukraiński:</strong> {languageLevels.ukrainian}
                  {renderProgressBar(languageLevels.ukrainian)}
                </li>
                <li className="right-li">
                  <strong>Język Rosyjski:</strong> {languageLevels.russian}
                  {renderProgressBar(languageLevels.russian)}
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
