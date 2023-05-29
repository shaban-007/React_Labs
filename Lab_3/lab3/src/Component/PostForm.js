import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId:'',
      title: '',
      body: '',

    };
  }

  handleSubmit = (e) => {
    console.log("My name is Ahmed")
    e.preventDefault();

    const postData = {
        userId: this.state.UserId, 
    title: this.state.title,
      body: this.state.body,
      
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post created:', data);
        
        this.setState({ title: '', body: '' });
      })
      .catch((error) => console.log(error));
  };
  handleIdChange = (e) => {
    this.setState({ UserId: e.target.value });
  };
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  render() {
    const {UserId, title, body } = this.state;

    return (
      <div>
        <h2>Create a Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserId:</label>
            <input type="text" value={UserId} onChange={this.handleIdChange} />
          </div>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={this.handleTitleChange} />
          </div>
          <div>
            <label>Body:</label>
            <textarea value={body} onChange={this.handleBodyChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;