import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Photos = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        setPhotos(data);
      } catch (err) {
        console.error(err);
      }

    };
    
    fetch();
  }, [id]);
  
  return (
    <>
      <h1 className="title">Photos</h1>
      <div className="col">
        {photos.map((el) => (
          <article key={el.id}>
            <img src={el.url} alt="photos" style={{maxWidth: '400px',  display: "block", marginLeft: "auto", marginRight: "auto"}}  />
            <p style={{textAlign: "center"}} >{el.title}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Photos;