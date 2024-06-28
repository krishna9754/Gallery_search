import { useEffect, useState } from 'react';
import "./components/ImageCard.css";
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Loader from './components/Loader';

function App() {
  const [images, setImage] = useState([])
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState('')


  const API = `https://pixabay.com/api/?key=44245164-ac2a063a6c33ca374e115816d&q=${term}&image_type=photo&pretty=true`

  useEffect(() => {
    fetch(API).then(res => res.json())
      .then(data => {
        setImage(data.hits);
        setLoading(false)
      }
      )
      .catch(err => console.error(err))
  }, [term])

  return (
    <div className="container">
      {
        loading ?<div style={{ justifyContent: "center", display: "flex", marginTop: "45%" }}><Loader /></div> :
          <div style={{ display: "grid" }}>
            <ImageSearch searchText={(text) => setTerm(text)} />
            {
              images.map(items => (
                <ImageCard key={items.id} items={items} />
              ))}
          </div> 
      }

    </div>
  );
}

export default App;
