import moment from "moment";
import { useNavigate } from "react-router-dom";
import { TicketDto } from "../../../Models/TicketModels";
import "./TicketItem.css";
interface TicketItem{
    ticket:TicketDto
}
function TicketItem(props:TicketItem): JSX.Element {
    const nav = useNavigate();
    return (
      <div className="TicketItem">
        <h3 onClick={() => nav(props.ticket.id)}>
          id: {props.ticket.id}
        </h3>
        <h2>{props.ticket.movieName}</h2>
        <p>Screen time: {moment(props.ticket.dateTime).format()}</p>
        <p>Theater: {props.ticket.theaterName}</p>
        <p>{props.ticket.used?"Used":"Unused"}</p>
      </div>
    );
}

export default TicketItem;
