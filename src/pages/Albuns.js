import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
const Albuns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((r) => r.json())
      .then((json) => {
        setAlbums(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Loading visible={isLoading} />
      {albums.map((album) => (
        <div key={album.id}>
          <span>
            Title: {album.title} - id: {album.id}
          </span>
        </div>
      ))}
    </>
  );
};
export default Albuns;
