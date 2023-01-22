import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { ScreeningModelDto } from "../../../Models/ScreeningModel";
import "./MovieScreeningItem.css";

interface ScreeningItem {
  screeningDetails: ScreeningModelDto;
}
function MovieScreeningItem(props:ScreeningItem): JSX.Element {
    const nav = useNavigate();
    return (
      <div className="MovieScreeningItem">
        <h3>id: {props.screeningDetails.id}</h3>
        <p>Screen time: {moment(props.screeningDetails.screenTime).format()}</p>
        <p>Theater: {props.screeningDetails.theaterName}</p>
        <Link
          to={"/screenings/" + props.screeningDetails.id}        >
          Buy here!
        </Link>
      </div>
    );
}

export default MovieScreeningItem;
