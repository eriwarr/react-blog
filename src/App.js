
import './App.css';
import { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.savePost = this.savePost.bind(this);
  }

handleInput(event) {
this.setState({ [event.target.name]: event.target.value });

}

savePost(event) {
  event.preventDefault();
  console.log(this.state)
  this.setState({ title: '', body: ''})
}

  render() {
    return (
      <>
      <form onSubmit={this.savePost}>
        <input type="text" name="title" placeholder="Blog's Title" value={this.state.title}onChange={this.handleInput}/>
        <input className="form-body" name="body" value={this.state.body} type="text"onChange={this.handleInput}/>
        <button type="submit">Save Blog Post</button>
      </form>

      </>
    )
  }
}

export default App;
