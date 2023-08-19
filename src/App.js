import React, {useState, useEffect} from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";
import Header from "./Components/Header";

const App = () => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');
    const url = `https://pixabay.com/api/?key=38897710-6fcf904c2b8371f9f105ad63f&q=${term}&image_type=photo&pretty=true`;

    const fetchInfo = () =>{
        return fetch(url)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits)
            setIsLoading(false);
    })
        .catch(err => console.log(err));
    }

    useEffect(()=> {        
           fetchInfo();
    }, [term]);

    return ( 
        <div className="container mx-auto">
                <Header />
                <ImageSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && <h1 className="font-semibold text-3xl text-center mt-44 text-red-600"> No Image Found!! </h1> }

          { isLoading ? <h1 className="font-semibold text-3xl text-center mt-44 "> Loading..... </h1>  : <div className="grid sm:grid-cols-3 gap-5 grid-cols-1">
                {images.map(image =>(
                    <ImageCard key={image.id} image={image} />
                ))}
            </div> }
        </div>
     );
}
 
export default App;