
import './App.css';
import { Component } from 'react';


class Blogform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleAddBlog = this.handleAddBlog.bind(this);
  }
  handleInput(event) {
  this.setState({ [event.target.name]: event.target.value });
  }
  handleAddBlog(event) {
    event.preventDefault()
    this.props.saveBlog({
      title: this.state.title,
      body: this.state.body,
    });
    this.setState({ title: '', body: '' });
  }

  render(){
    return (
      <form onSubmit={this.handleAddBlog}>
        <input type="text" name="title" placeholder="Blog's Title" value={this.state.title}onChange={this.handleInput}/>
        <input className="form-body" name="body" value={this.state.body} type="text"onChange={this.handleInput}/>
        <button type="submit">Save Blog Post</button>
      </form>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: [],
      counter: 1,
    }
    this.saveBlog = this.saveBlog.bind(this);
  }

saveBlog(blog) {
  blog.id = this.state.counter;
  const blogs = [ ...this.state.blogs ];
  blogs.push(blog);
  this.setState((state) => ({blogs, counter: state.counter + 1}));
}

  render() {
    console.log(this.state.blogs)
    return (
      <>
      <h1>Save Your Favorite Blogs!</h1>
      <Blogform saveBlog={this.saveBlog}/>
      </>
    )
  }
}

export default App;
