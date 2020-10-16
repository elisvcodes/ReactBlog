import React from 'react';
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import AddPost from './componenets/AddPost'
import { Route, Switch } from 'react-router';
import Post from './componenets/Post';
import EditPost from './componenets/EditPost';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/addpost' component={AddPost} />
        <Route path='/post/:id' component={Post} />
        <Route path='/edit/:id' component={EditPost} />
      </Switch>
    </>
  );
}

export default App;
