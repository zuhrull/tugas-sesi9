import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        setComments(data);
      } catch (err) {
        console.error(err);
      }

    };
    
    fetch();
  }, [id]);
  
  return (
    <>
      <h1 className="title">Comments</h1>
      {comments.map((el) => (
        <article key={el.id}>
          <p className="comm-name">{el.name}</p>
          <p className="comm-email">{el.email}</p>
          <p className="comm-body">{el.body}</p>
        </article>
      ))}
    </>
  );
};

export default Comments;