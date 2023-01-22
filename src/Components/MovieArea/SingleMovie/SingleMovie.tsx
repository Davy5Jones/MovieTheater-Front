import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieModelDto } from "../../../Models/MovieModel";
import webApi from "../../../Services/WebApi";
import MovieScreenings from "../MovieScreenings/MovieScreenings";
import "./SingleMovie.css";


function SingleMovie(): JSX.Element {
    const [movie,setMovie] = useState<MovieModelDto>(Object);
    const params = useParams();
    useEffect(()=>{
        const id =params.id||"0"
        webApi.singleMovie(id).then((res) => {
          setMovie(res.data);
        });
    },[])

    return (
      <div className="SingleMovie">
        <h2>Name: {movie.name}</h2>
        <div className="media">
            <img src={movie.img} /><iframe src={movie.trailer}/></div>
        <div className="Details">
        <p>Description: {movie.description}</p>
        <p>Category: {movie.category}</p>
        <p>Duration: {movie.duration}</p>
        </div>
        {movie._links?.screenings&&<MovieScreenings link={movie._links.screenings}/>}
      </div>
    );
}

export default SingleMovie;
