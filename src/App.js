
import './App.css';
import Header from './Header';
import Hello from './Hello';
import Lenght from './Lenght';
import Range from './Range';
import Form from './Form';
import Converter from './Converter';
import Posts from './posts/Posts';

let posts = 
 [
   {id:'1', title:'C++ proc', content:'Процедурное программирование на языке С++'},
   {id:'2', title:'C++ OOP', content:'Объектно-ориентированное программирование на языке С++'},
   {id:'3', title:'Windows Desktop Development', content:'Разработка настольных приложений для операционных систем Windows'}
 ]
function removePost(id)
{
 posts = posts.filter(post => post.id !== id);
}

function App() {
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
      <Posts posts = {posts} removePost = {removePost}/>
    </div>
  );
}

export default App;
