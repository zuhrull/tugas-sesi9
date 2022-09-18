import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(data);
      } catch (err) {
        console.error(err);
      }

    };
    
    fetch();
  }, []);
  
  return (
    <>
      <h1 className="title">Posts</h1>
      {posts.map((el) => (
        <article key={el.id}>
          <h1 className="post-title">{el.title}</h1>
          <p>
            {el.body}
            <button onClick={() => navigate(`/post/${el.id}`)}>Read more</button>
          </p>

        </article>
      ))}
    </>
  );
};

export default Home;