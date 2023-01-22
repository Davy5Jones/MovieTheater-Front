import webApi from "../../../Services/WebApi";
import "./ScreeningList.css";
import notify from "../../../Services/NotificationService";
import { useState } from "react";
import { ScreeningModelDto } from "../../../Models/ScreeningModel";
import ScreeningItem from "../ScreeningItem/ScreeningItem";
import store from "../../../Redux/Store";
import { AppState, gotUserToken } from "../../../Redux/AppState";
import { Navigate, useNavigate } from "react-router-dom";


function ScreeningList(): JSX.Element {
  const navigate = useNavigate();
    const [screenings,setScreenings] = useState<ScreeningModelDto[]>([])
     webApi.screeningPage().then(screeningRoot => setScreenings(screeningRoot.data._embedded.screeningModelDtoList )).catch(reason => {
        notify.error(reason)
    store.dispatch(gotUserToken(""))
navigate("/home");}
    );

    return (
        <div className="ScreeningList">
			{screenings.map(screening => <ScreeningItem key={"idx"+screening.id} screeningDetails={screening}/>)}
        </div>
    );
}

export default ScreeningList;
