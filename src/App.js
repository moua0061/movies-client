import './App.css';
import { Layout } from './components/Layout';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
//import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const [moves, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      //console.log(response.data);
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
