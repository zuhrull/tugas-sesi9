import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Comments from "../components/Comments";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, SetPost] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        SetPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [id]);
  return (
    <div>
      <article>
        <h1 className="title">Post</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <br />
        <button onClick={() => navigate("/")}>Go back</button>
        <br />
      </article>
      <Comments />
    </div>
  );
};

export default Post;