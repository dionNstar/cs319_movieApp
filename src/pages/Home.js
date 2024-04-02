import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import axios from 'axios';
import Movie from '../components/Movie';
import MovieDetails from './MovieDetails';


export default function Home() {
    const [movies, setMovie] = useState(null)
    const url = "https://showtimes.everyday.in.th/api/v2/movie/?limit=6&filter=nowshowing"
    useEffect(() => {
        
       axios.get(url).then((response) => {
            //handle success
            console.log(response)
            setMovie(response.data.results)
       })
        .catch((error) => {
            //handle error
            console.log(error)
        });
    },[]);

    if(!movies) return null;

    return (
        <Layout>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary btn-lg">Get Started</button>
                    </div>
                </div>
            </div>
            {/* movie list */}
            <div className='py-20 max-w-7xl mx-auto bg-'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {movies.map((movie) => (
                        //id, image, title, details.storyline
                        <Movie
                            key={movie.id}
                            id={movie.id} 
                            image={movie.images[0].url}
                            title={movie.title}
                            storyline={movie.details.storyline}
                            language={movie.language}
                        />
                    

                    ))}                  
                </div>
            </div>
        </Layout>
    );
}