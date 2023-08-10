"use client"
import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jd.brightbridgeinfotech.com/wp-json/wp/v2/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
