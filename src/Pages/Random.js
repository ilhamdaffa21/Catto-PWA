import React, {useState, useEffect} from "react";
import './Random.css'
const apiKey = '231cf931-5f2b-4fe3-a699-bf4e2d6b488d';
const url = 'https://api.thecatapi.com/v1/images/search';

function Random(){
  const [catUrl, setCatUrl] = useState('https://api.thecatapi.com/v1/images/search');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getCat();
  }, []);

  const getCat = () => {

    fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then((res) => res.json())
      .then((cats) => {
        const catUrl = cats[0].url;
        setCatUrl(catUrl);
        setLoading(false)
      })
      .catch((error) => {
      });
  }

  if(loading){
    return <h2>Loading....</h2>
  }

  return(
    <div className = "random-content">
      <img className = "random-img" src= {catUrl} alt=""/>
      <button onClick={getCat}>Get Random Cat Image</button>
    </div>
  );

}

export default Random;