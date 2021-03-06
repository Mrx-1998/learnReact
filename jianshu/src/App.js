import React from 'react';
import Header from './common/header'
import store from './store/index'
import {Provider} from 'react-redux' 
import { Route , BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
      </BrowserRouter>
    </Provider>   
  )  
}

export default App;
