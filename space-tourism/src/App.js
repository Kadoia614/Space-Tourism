import Header from './components/Header';
import Home from './components/Home';
import ErrorRoute from './components/ErrorRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App container">
      <Header />
      <div className='Main'>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='*' element={<ErrorRoute/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
