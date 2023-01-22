import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScreeningModelDto } from "../../../Models/ScreeningModel";
import webApi from "../../../Services/WebApi";
import "./SingleScreening.css";

function SingleScreening(): JSX.Element {
  const [screening, setScreening] = useState<ScreeningModelDto>(Object);
  const [seats,setSeats] =useState<boolean[][]>([]);
  const params = useParams();
      const nav = useNavigate();

  useEffect(() => {
    const id = params.id || "0";
    webApi.singleScreening(id).then((res) => {
      setScreening(res.data);
      setSeats(res.data.seats)
    });
  }, []);

  function buyTicket(row: number, seat: number, screeningId: string) {
    const conf = window.confirm(
      "Are you sure you want to buy seat " + (1 + seat) + "/" + (row + 1)
    );
    if (conf) {
      webApi.BuyTicket({
        screeningId: screeningId,
        rowId: row,
        seatId: seat,
      });
      nav("/tickets")
    }
  }
  return (
    <div className="SingleScreening">
      <h3>{screening.movieName}</h3>
      <div className="Seats">
        {seats.map((row, indx) => {
          return (
            <div className="Row">
              {indx + 1}{" "}
              {row.map((seat,ind) => (
                <div onClick={()=>!seat&&buyTicket(indx,ind,screening.id)} className={seat ? "RedChair" : "GreenChair"}></div>
              ))}
            </div>
          );
        }).reverse()}
      </div>
      <div className="Screen"></div>
    </div>
  );
}



export default SingleScreening;
