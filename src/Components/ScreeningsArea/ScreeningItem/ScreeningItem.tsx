import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { ScreeningModelDto } from "../../../Models/ScreeningModel";
import "./ScreeningItem.css";

interface ScreeningItem {
  screeningDetails: ScreeningModelDto;
}
function ScreeningItem(props: ScreeningItem): JSX.Element {
  const nav=useNavigate();
  return (
    <div className="ScreeningItem">
      <h2>{props.screeningDetails.movieName}</h2>
      <p>
        Screen time:{" "}
        {moment(props.screeningDetails.screenTime).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}
      </p>
      <p>Theater: {props.screeningDetails.theaterName}</p>
      <Link to={props.screeningDetails.id}>Buy here!</Link>
    </div>
  );
}

export default ScreeningItem;
