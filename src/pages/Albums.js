import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
        setAlbums(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {albums.map((el) => (
        <article>
          <h1 className="post-title">{el.title}</h1>
          <p>
            <button onClick={() => navigate(`/albums/${el.id}`)}>View</button>
          </p>
        </article>
      ))}
    </div>
  );
};

export default Albums;