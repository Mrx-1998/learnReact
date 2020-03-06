import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Details from './routes/Details'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={Details}></Route>
      </Router>
    </div>
  );
}

export default App;
