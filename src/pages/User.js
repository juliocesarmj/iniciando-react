import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
//NOTA IMP0RTANTE: Em map, ao retornar uma linha, nao é necessário encadear com parenteses()
// Caso queria retornar mais de um retorno, é necessário encadear a logica dentro de parenteses
// exemplo arr.map(a => (<div><p>Titulo 1</p> <p>Titulo 2</p> etc...</div>))
const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then((json) => {
        setUser(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Loading visible={isLoading} />
      {user.map(({ name, username, website, email, phone, id }) => (
        <ul key={id}>
          <li>Nome: {name}</li>
          <li>Usuário: {username}</li>
          <li>Email: {email}</li>
          <li>Tel: {phone}</li>
          <li>Website: {website}</li>
        </ul>
      ))}
    </>
  );
};
export default Users;
