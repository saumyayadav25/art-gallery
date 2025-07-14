import './App.css';
import Navbar from './components/Navbar';

import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import artworksData from './data/artworksData';
import filterData from './data/filterData';

import Gallery from './components/Gallery';

import HallOfFame from './components/HallOfHame';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SocialMedia from './components/SocialMedia';

import Footer from './components/Footer';


function App() {
  const [category, setCategory] = useState('All'); // Default category is 'All'
  const [filteredArtworks, setFilteredArtworks] = useState(artworksData);

  // update artworks when category changes
  useEffect(() => {
    console.log("Category changed to:", category);
    if (category === 'All') {
      setFilteredArtworks(artworksData);
    } else {
      const filtered = artworksData.filter(
        (art) => art.category === category
      );
      setFilteredArtworks(filtered);
    }
  }, [category]);


  return (
    <div className="App">
      <Navbar />

      <main>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <Gallery artworks={filteredArtworks} />
        <HallOfFame />
        <SocialMedia />
      </main>

      <Footer />
    </div>
  );
}

export default App;