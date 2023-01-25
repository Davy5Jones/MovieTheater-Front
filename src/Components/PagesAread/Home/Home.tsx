import { MovieList, MovieModelDto, RecommendedMovieList } from "../../../Models/MovieModel";
import "./Home.css";
import { useEffect, useState } from "react";
import webApi from "../../../Services/WebApi";
import MovieItem from "../../MovieArea/MovieItem/MovieItem";
import store from "../../../Redux/Store";
import { useCookies } from "react-cookie";


function Home(): JSX.Element {


    const [movies,setMovies]=useState<MovieModelDto[]>([])

    const [token, setToken] = useState<boolean>(
      store.getState().userReducer.user.logged
    );

    useEffect(
      () =>{
        return store.subscribe(() =>
          setToken(store.getState().userReducer.user.logged)
        )},
      []
    );

    useEffect(()=>{
        token&&
          webApi.recommendedMovies().then((res) => {
            console.log(res.data);
            setMovies(res.data._embedded.movieModelDtoList);
          });
    },[token])
    return (
      <div className="Home">
        <h2>This is Home!</h2>
        {store.getState().userReducer.user.logged&&movies&&<div className="MovieListRecommended">
          {movies.map((movi) => (
            <MovieItem movie={movi} key={"idx" + movi.id} />
          ))}
        </div>}
      </div>
    );
}

export default Home;
