import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Fetchdata = ({cat}) => {
  const [data, setData] = useState('');
  const fetchData = async () => {
    await axios
      .get(
        cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=3fce3797a92d4d8685e00c1fd66c9932`

       : "https://newsapi.org/v2/top-headlines?country=in&apiKey=3fce3797a92d4d8685e00c1fd66c9932"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div>
      <div className='container my-4 '>
        <p className='font-semibold text-3xl my-3 text-left underline'>TOP HEADLINES</p>
        <div className='my-3  mt-3 justify-items-center align-middle flex-col'>
          {data ? (
            data.map((item, index) => (
                <>
                <div className='container my-3 w-[600px]   bg-gray-200 hover:bg-gray-400 shadow hover:shadow-lg'>
                 <h4 className='my-2 font-semibold text-[22px]' >{item.title}</h4>
                 {/* <img className='img-fluid w-[200px] h-[300px] object-cover' src={item.urlToImage} alt="Image" /> */}
                 <img
                  className='object-cover h-[300px] w-[100%]  rounded-lg mb-2'
                  src={item.urlToImage}
                  alt="image not found"
                />
                
                 <p >{item.content}</p>
                 <Link className='text-blue-500' target='_self' to={item.url}>View more</Link>

                
                </div>
                </>
             
            )) 
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </div>
  );
};

export default Fetchdata;
