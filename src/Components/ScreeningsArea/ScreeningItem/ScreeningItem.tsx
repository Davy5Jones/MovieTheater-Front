import moment from "moment";
import { ScreeningModelDto } from "../../../Models/ScreeningModel";
import "./ScreeningItem.css";

interface ScreeningItem {
  screeningDetails: ScreeningModelDto;
}
function ScreeningItem(props: ScreeningItem): JSX.Element {
  return (
    <div className="ScreeningItem">
      <h3>id: {props.screeningDetails.id}</h3>
      <h2>{props.screeningDetails.movieName}</h2>
      <p>Screen time: {moment(props.screeningDetails.screenTime).format()}</p>
      <p>Theater: {props.screeningDetails.theaterName}</p>
    </div>
  );
}

export default ScreeningItem;
