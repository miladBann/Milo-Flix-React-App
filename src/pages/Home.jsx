import Navigation from "../components/Navigation.jsx";
import FeaturedMovies from "../components/FeaturedMovies.jsx";
import React, {useState} from "react";


function Home()
{

    const [inputValue, setInputValue] = useState('');

    const handleSearch = (value) => {
        setInputValue(value);
      };

    return (
        <div>
            <Navigation onSearch={handleSearch}/>
            <FeaturedMovies searchValue={inputValue}/>
        </div>
    );
}

export default Home;