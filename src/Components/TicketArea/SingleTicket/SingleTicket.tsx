import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TicketDto } from "../../../Models/TicketModels";
import webApi from "../../../Services/WebApi";
import "./SingleTicket.css";

function SingleTicket(): JSX.Element {
    const [ticket, setTicket] = useState<TicketDto>(Object);
    const params = useParams();
    useEffect(() => {
      const id = params.id || "0";
      webApi.SingleTicket(id).then((res) => {
        setTicket(res.data);
      });
    }, []);

    return (
      <div className="SingleMovie">
        <h2>Name: {ticket.movieName}</h2>
        
          <p>Duration: {ticket.duration}</p>
          <p>Time: {moment(ticket.dateTime).format()}</p>
          <p>User: {ticket.userEmail}</p>
      </div>
    );
}

export default SingleTicket;
