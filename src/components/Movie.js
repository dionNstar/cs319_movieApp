import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({id, image, title, storyline, language}) => {
    return (
        <>
            <div className="card w-120 bg-black shadow-xl">
                <figure><img src={image} alt={title} /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-white">
                    {title}
                        <div className="badge badge-secondary text-sm">NEW</div>
                    </h2>
                    <p>{storyline}</p>
                    <div className="card-actions justify-between h-8 items-center">
                        <div className="badge badge-outline h-10 text-white">Movie</div> 
                        <div className="badge badge-outline h-8 text-white">{language}</div>
                        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full" to="/movie-details">Movie Detail</Link>
                    </div>
                </div>
            </div>
        </>
    );    
}
export default Movie