import React from 'react';

const Loading = ({ visible }) => {
  return (
    //alguma coisa aqui
    // outra aqui
    <div>{visible ? 'Carregando...' : ''}</div>
  );
};
export default Loading;
