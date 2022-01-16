
import './App.css';
// import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Employe from './components/Employees/Employe';
// Provider

function App() {
  return (
    <Provider store={store} >
    <div className="App">

      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Employe />} />
        </Routes>
      </BrowserRouter>

    </div>
    </Provider>
  );
}

export default App;
