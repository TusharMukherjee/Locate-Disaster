import Map from "./components/Map";
import {useState, useEffect} from 'react'
import Loader from "./components/Loader";
import Header from "./components/Header";
import List from "./components/List";


function App() {

  const [eventdata, setEventdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async() => {
      setLoading(true);

      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json();

      setEventdata(events);
      setLoading(false);
    }

    fetchEvents();

    console.log(eventdata);
  }, [])

  return (
    <>
      <Header/>
      <List/>
      {!loading ? <Map eventdata = {eventdata}/> : <Loader/>}
    </>
  );
}

export default App;
