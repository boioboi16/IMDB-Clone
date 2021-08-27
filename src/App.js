import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return <Switch>
    <Route path ="/boioboi16/IMDB-Clone/" exact>
      <Home></Home>
    </Route>
    <Route path="/boioboi16/IMDB-Clone/movies/:id" children={<Movie></Movie>}>

    </Route>
  </Switch> 
}

export default App
