import { MovieList, MovieModelDto, RecommendedMovieList } from "../../../Models/MovieModel";
import "./Home.css";
import { useEffect, useState } from "react";
import webApi from "../../../Services/WebApi";
import MovieItem from "../../MovieArea/MovieItem/MovieItem";
import store from "../../../Redux/Store";


function Home(): JSX.Element {
    const [movies,setMovies]=useState<MovieModelDto[]>([])
    useEffect(()=>{
        store.getState().userReducer.user.token &&
          webApi.recommendedMovies().then((res) => {
            setMovies(res.data._embedded.movieModelDtoList);
          });
    },[])
    return (
      <div className="Home">
        <h2>This is Home!</h2>
        {store.getState().userReducer.user.token&&movies&&<div className="MovieListRecommended">
          {movies.map((movi) => (
            <MovieItem movie={movi} key={"idx" + movi.id} />
          ))}
        </div>}
      </div>
    );
}

export default Home;
