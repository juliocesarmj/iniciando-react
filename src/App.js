import React, { useState } from 'react';

import Template from './templates/Template';
import Counter from './pages/Counter';
import Albuns from './pages/Albuns';
import Users from './pages/User';

const defaultPage = 'albuns';
const pages = {
  albuns: {
    text: 'Álbuns',
    component: Albuns,
  },
  counter: {
    text: 'Counter',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component: Users,
  },
};
function App() {
  const [page, setPage] = useState(defaultPage);

  const handleOnChangePage = (page) => {
    setPage(page);
  };
  const Page = pages[page].component;

  return (
    <Template activePage={page} pages={pages} onChangePage={handleOnChangePage}>
      {Page && <Page />}
    </Template>
  );
}

export default App;
