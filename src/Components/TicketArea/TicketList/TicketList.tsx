import { useEffect, useState } from "react";
import { Link, PageInfo, PageLinks } from "../../../Models/BaseModels";
import { TicketDto } from "../../../Models/TicketModels";
import webApi from "../../../Services/WebApi";
import Paginate from "../../Paginate/Paginate";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.css";

function TicketList(): JSX.Element {
    const [tickets,setTickets]=useState<TicketDto[]>([])
    const [info,setInfo]=useState<PageInfo>(Object)
      const [links, setLinks] = useState<PageLinks>(Object);
      const [url, setUrl] = useState<Link>({
        href: "",
      });

    useEffect(()=>{
        webApi.GetTickets(url.href)
        .then(res =>{
            setTickets(res.data._embedded.ticketModelDtoList)
            setInfo(res.data.page)
            setLinks(res.data._links)
        })
    },[url])
    return (
        <div className="TicketListWrapper">
            <div className="TicketList">
                {tickets.map(ticke => <TicketItem key={"idx"+ticke.id} ticket={ticke}/>)}
            </div>
            <Paginate info={info} links={links} nav={setUrl} />

        </div>
    );
}

export default TicketList;
