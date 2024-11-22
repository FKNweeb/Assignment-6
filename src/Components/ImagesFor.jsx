import { useState, useEffect } from "react";

function ImagesFor({id}){
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        const apiKey = "9b7b63dc32674b6a775fbc61bf528ccb";
        const baseUrl = "https://image.tmdb.org/t/p/";
        const fileSize = "w200";
  
        try {
          const response = await fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`);
          const data = await response.json();
          const imagePaths = data.profiles.map(profile =>`${baseUrl}${fileSize}${profile.file_path}`)
          setImages(imagePaths)
        } catch (error) { console.log("Failed to fetch images: ", error) }
      };
      
    if (id) fetchImages();
    }, [id]);
  
    if (!images.length) { return <p>Images not found</p> }
  
    return (
      <div>
        <p>Images: </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Profile ${index + 1}`} style={{ width: "100px", height: "auto"}} />
          ))}
        </div>
      </div>
    );
  }

  export default ImagesFor;