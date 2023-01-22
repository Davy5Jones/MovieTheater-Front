import webApi from "../../../Services/WebApi";
import "./ScreeningList.css";
import notify from "../../../Services/NotificationService";
import { useEffect, useState } from "react";
import { ScreeningModelDto } from "../../../Models/ScreeningModel";
import ScreeningItem from "../ScreeningItem/ScreeningItem";
import store from "../../../Redux/Store";
import {} from "../../../Redux/UserState";
import { useSearchParams } from "react-router-dom";
import { Link, PageInfo, PageLinks } from "../../../Models/BaseModels";
import Paginate from "../../Paginate/Paginate";

function ScreeningList(): JSX.Element {
  const [screenings, setScreenings] = useState<ScreeningModelDto[]>([]);
  const [info, setInfo] = useState<PageInfo>(Object);
  const [links, setLinks] = useState<PageLinks>(Object);

  const [url, setUrl] = useState<Link>({
    href: "",
  });
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    webApi.screeningPage(url.href).then((res) => {
      setScreenings(res.data._embedded.screeningModelDtoList);
      setInfo(res.data.page);
      setLinks(res.data._links);
      setSearch({ page: (res.data.page.number + 1).toString() });
    });
  }, [url]);

  return (
    <div className="ScreeningListWrapper">
      <div className="ScreeningList">
        {screenings.map((screening) => (
          <ScreeningItem
            key={"idx" + screening.id}
            screeningDetails={screening}
          />
        ))}
      </div>
      <Paginate info={info} links={links} nav={setUrl} />
    </div>
  );
}

export default ScreeningList;
