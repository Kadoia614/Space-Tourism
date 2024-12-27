import Header from './components/Header';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import ErrorRoute from './components/ErrorRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App container">
        <Header />
        <div className='Main'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/destination' element={<Destination />}></Route>
            <Route path='/crew' element={<Crew />}></Route>
            <Route path='*' element={<ErrorRoute />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
