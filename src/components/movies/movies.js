import { useEffect, useState } from 'react';
import './movies.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { addTofavoriteList, deleteFromfavoriteList} from '../../store/actions';

function Movie() {
    const apiKey = '15191d6e037f9aa7729f76d2d53b6390';
    const [allMovies, setAllMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const fav = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    const IDs = [...fav].map((movie) => movie.id);
    const [change, setChange] = useState(false);
    
    
    const add = function (movie) {
        IDs.includes(movie.id)? dispatch(deleteFromfavoriteList(movie.id)):dispatch(addTofavoriteList(movie));
        setChange(!change);
    }
    

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNumber}`)
        .then((response) => {
            setAllMovies(response.data.results);
        }).catch((err) => {
            console.log(`ERROR ${err}`);
        })
    }, [pageNumber])
    
    return (
        <div className="movie">
            <div className="container w-50">
                {allMovies.map((movie) => {
                    return (<div className="card">
                        <div className="image">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                        </div>
                        <div className="name">{movie.title}</div>

                        <Link href="" className="btn" to={`/moviedetails/${movie.id}`}>Show Details</ Link>
                    </div>
                    );
                }
                )
                }
            </div>
            <div>
                <div className="btn" onClick={() => { setPageNumber(pageNumber + 1) }}>next</ div>
                <div className="page-number">{pageNumber}</div>
                <div className="btn" onClick={()=>{  pageNumber > 1?setPageNumber(pageNumber - 1):setPageNumber(pageNumber)}} style={{opacity: pageNumber === 1? '0.5':''}}>prev</div>
            </div>
        </div>
    );
}

export default Movie;