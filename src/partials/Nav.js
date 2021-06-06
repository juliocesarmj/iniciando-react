import React from 'react';

const Nav = ({ onChangePage, pages }) => {
  const pageNames = Object.keys(pages); // retorna um array de strings contendo as chaves presentes no objeto
  return (
    <nav>
      {pageNames.map((pageName) => (
        <button key={pageName} onClick={() => onChangePage(pageName)}>
          {pages[pageName].text}
        </button>
      ))}
    </nav>
  );
};
export default Nav;
