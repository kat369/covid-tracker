import './App.css';

import { UserProvider } from './Usercontext';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('list');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://keralastats.coronasafe.live/latest.json`);
      const covidData = await res.json();
      const covidDataModified = Object.keys(covidData.summary).map(key => {
        return { area: key, ...covidData.summary[key] }
      })
      setData(covidDataModified);
    } catch (error) {
      console.log(error); 
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <UserProvider
      value={{ setView, view, data, setData, fetchData, loading }}
    >
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </UserProvider>
  );
}

export default App;
