import React, { useState } from 'react';

const SearchPost = () => {
  const [searchInput, setSearchInput] = useState('');
  const [post, setPost] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchInput}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  return (
    <div>
      <h2>Search Post by ID</h2>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {post && <p>{post.title}</p>}
    </div>
  );
};

export default SearchPost;