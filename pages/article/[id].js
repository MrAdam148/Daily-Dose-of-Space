import Head from 'next/head';
import { useRouter } from 'next/router';
import { articles } from '../../database/articles';

export default function Article() {
  const router = useRouter();
  const article = articles.filter((post) => post.id == router.query.id)[0];

  return (
    <div>
      <h1 className="articletitle">{article?.title}</h1>
      <img className="articleimage" src={article?.img} alt="" />
      <h2 className="articleauthor">{article?.author}</h2>
      ------------------------------------------------------------------------------
      <div className="container">
        <p className="articlebody">
          <strong>{article?.description}</strong>
        </p>
        <p className="articlemainbody">{article?.body}</p>
      </div>
      <a
        className="returnhome"
        href="https://nextjs6yykgn-gdii--3000--272d3407.local-credentialless.webcontainer.io/"
      >
        {' '}
        Return to main page{' '}
      </a>
    </div>
  );
}
