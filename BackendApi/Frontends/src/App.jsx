import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/products');
        console.log(response.data);
        
        setProducts(response.data);  // Update products state with API response
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    })();
  }, []);

  return (
    <>
      <h1>Chai Aur Api in React</h1>
      <h2>Number of Products: {products.length}</h2>
    </>
  );
}

export default App;
