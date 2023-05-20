import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { articles } from '../../database/articles';

export default function Article() {
  const router = useRouter();
  const [id, setId] = useState(router.query.id);

  console.log(id);

  return <h1 class="articletitle">{articles[id]?.title}</h1>;
  return <img class="articleimage" src={article[id]?.image} />;
  return <h2 class="articleauthor">{article[id]?.author}</h2>;
  return <p class="articlebody">{article[id]?.body}</p>;
}
