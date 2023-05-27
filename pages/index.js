import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { articles } from '../database/articles';
import { authors } from '../database/authors';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daily Dose of Space</title>
      </Head>
      <div id="page-wrapper">
        <header id="header" class="alt">
          <h1>
            <a href="index.html">Daily Dose of Space</a>
          </h1>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

        <nav id="menu">
          <div class="inner">
            <h2>Menu</h2>
            <ul class="links">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="generic.html">Generic</a>
              </li>
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li>
                <a href="#">Log In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
            <a href="#" class="close">
              Close
            </a>
          </div>
        </nav>

        <section id="banner">
          <div class="inner">
            <div class="logo">
              <span class="icon fa-gem"></span>
            </div>
            <h2>Daily Dose of Space</h2>
            <p>
              Here to provide you daily news about interesting facts and events
              regarding the vast world of space{' '}
            </p>
          </div>
        </section>

        <section id="wrapper">
          {articles.map((article) => {
            return (
              <section
                class={
                  'wrapper spotlight style1 ' +
                  (article.side == 'right' ? 'alt' : '')
                }
              >
                <div class="inner">
                  <a href="#" class="image">
                    <img src={article.img} alt="" />
                  </a>
                  <div class="content">
                    <h2 class="major">{article.title}</h2>
                    <h5>
                      <a href={'/author/' + article.author}>
                        {authors[article.author - 1].name}
                      </a>
                    </h5>
                    <p>{article.description}</p>
                    <a href={'/article/' + article.id} class="special">
                      Learn more
                    </a>
                  </div>
                </div>
              </section>
            );
          })}

          <section id="four" class="wrapper alt style1">
            <div class="inner">
              <h2 class="major">| Categories |</h2>
              <p>
                Explore our collection of articles in the latest topics around
                space and scientific community
              </p>
              <section class="features">
                <article>
                  <a href="#" class="image">
                    <img
                      src="https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg"
                      alt=""
                    />
                  </a>
                  <h3 class="major">Stars, Suns & Darfs</h3>
                  <p>
                    How are these warm giants survive and exist in the cold and
                    dark cosmos from their birth to their death
                  </p>
                  <a href="#" class="special">
                    Learn more
                  </a>
                </article>
                <article>
                  <a href="#" class="image">
                    <img
                      src="https://epsilon.aeon.co/images/78ba87e7-7198-4468-81b5-500c505d5bc8/header_essay-gettyimages-1237093074.jpg"
                      alt=""
                    />
                  </a>
                  <h3 class="major">Blackholes and their secrets</h3>
                  <p>
                    What secrets does the mysterious world of blackholes contain
                    and their possibilities
                  </p>
                  <a href="#" class="special">
                    Learn more
                  </a>
                </article>
                <article>
                  <a href="#" class="image">
                    <img
                      src="https://www.innovationnewsnetwork.com/wp-content/uploads/2022/09/%C2%A9-iStock%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%9B%D0%B0%D1%80%D0%B8%D1%87%D0%B5%D0%B2-1161504223-696x392.jpg"
                      alt=""
                    />
                  </a>
                  <h3 class="major">The hidden world of EXO Planets</h3>
                  <p>
                    Come along as we search for the new "Earth" for the future
                    of humanitys expansion to the stars but also the search of
                    our cosmic neighbors
                  </p>
                  <a href="#" class="special">
                    Learn more
                  </a>
                </article>
                <article>
                  <a href="#" class="image">
                    <img
                      src="https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg"
                      alt=""
                    />
                  </a>
                  <h3 class="major">In a future near us, Mars</h3>
                  <p>
                    Learn about our red brother in the solar system and what the
                    futures hold for him
                  </p>
                  <a href="#" class="special">
                    Learn more
                  </a>
                </article>
              </section>
              <ul class="actions">
                <li>
                  <a href="#" class="button">
                    Browse Archive
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section id="footer">
          <div class="inner">
            <h2 class="major">Get in touch</h2>
            <p>
              Contact us via our socials and be updated about everything new we
              do! If you wish to leave us a message, refer to the below:
            </p>
            <form method="post" action="#">
              <div class="fields">
                <div class="field">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div class="field">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div class="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
            <ul class="contact">
              <li class="icon solid fa-home">
                RobotSetGo
                <br />
                Μεγ. Αλεξανδρου 68, Τρίλοφος 575 00
                <br />
                Thessaloniki, TN 2392 400370
              </li>
              <li class="icon solid fa-phone">(+30) 6944140426</li>
              <li class="icon solid fa-envelope">
                <a href="robotsetgo@gmail.com">robotsetgo@gmail.com</a>
              </li>
              <li class="icon brands fa-twitter">
                <a href="twitter.com/Rodot_Set_go">twitter.com/Rodot_Set_go</a>
              </li>
              <li class="icon brands fa-facebook-f">
                <a href="facebook.com/robotsetgo">facebook.com/robotsetgo</a>
              </li>
              <li class="icon brands fa-instagram">
                <a href="instagram.com/robot_set_go">
                  instagram.com/robot_set_go
                </a>
              </li>
            </ul>
            <ul class="copyright">
              <li>
                &copy; RobotSetGo. All rights reserved. | Made by Adam
                Papadopoulos
              </li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
