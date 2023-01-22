import { useNavigate } from "react-router-dom";
import { MovieModelDto } from "../../../Models/MovieModel";
import "./MovieItem.css";
interface Movie{
    movie:MovieModelDto
}
function MovieItem(props:Movie): JSX.Element {
  const nav=useNavigate();
    return (
      <div className="MovieItem">
        <h2>Name: {props.movie.name}</h2>
        <p>Category: {props.movie.category}</p>
        <p>Duration: {props.movie.duration}</p>
        <img src={props.movie.img} onClick={()=>nav("/movies/"+props.movie.id)}/>
      </div>
    );
}

export default MovieItem;
