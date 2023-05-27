import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { authors } from '../../database/authors';
import { articles } from '../../database/articles';
import { useRouter } from 'next/router';

export default function Archive() {
  const router = useRouter();
  const posts = articles.filter((post) => post.author == router.query.id);
  return (
    <div>
      <h1 className="archivetitle"> Archive </h1>
      <h2 className="archivesubcateg"> Sorted by author(s) </h2>
      <section>
        {posts.map((article) => {
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
                  <p>{article.description}</p>
                  <a href={'/article/' + article.id} class="special">
                    Learn more
                  </a>
                </div>
              </div>
            </section>
          );
        })}{' '}
      </section>
      <a className="returnhome" href="/">
        {' '}
        Return to main page{' '}
      </a>
    </div>
  );
}
