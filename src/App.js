
import './App.css';
import Header from './Header';
import Hello from './Hello';
import Lenght from './Lenght';
import Range from './Range';
import Form from './Form';
import Converter from './Converter';
import Posts from './posts/Posts';
import React from 'react';

class App extends React.Component {
  state = {
    posts:
    [
      { id: '1', title: 'C++ proc', content: 'Процедурное программирование на языке С++' },
      { id: '2', title: 'C++ OOP', content: 'Объектно-ориентированное программирование на языке С++' },
      { id: '3', title: 'Windows Desktop Development', content: 'Разработка настольных приложений для операционных систем Windows' }
    ]
  }
  removePost = (id) => {
    alert(id);
    //posts = this.state.posts.filter(post => post.id !== id);
    this.setState({posts: this.state.posts.filter(post => post.id !== id)});
  }

 render() 
 {
   return (
    <div className="App">
      {
        /* 
        <Header />
        <Hello />
        <Lenght />
        <Range />
        <Form />
        <Converter /> 
        */
      }
      <Posts posts={this.state.posts} removePost={this.removePost} />
    </div>
     );
  }
}
export default App;
