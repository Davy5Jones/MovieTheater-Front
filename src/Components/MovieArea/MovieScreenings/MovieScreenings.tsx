import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link, PageInfo, PageLinks } from "../../../Models/BaseModels";
import { ScreeningModelDto } from "../../../Models/ScreeningModel";
import webApi from "../../../Services/WebApi";
import Paginate from "../../Paginate/Paginate";
import ScreeningItem from "../../ScreeningsArea/ScreeningItem/ScreeningItem";
import MovieScreeningItem from "../MovieScreeningItem/MovieScreeningItem";
import "./MovieScreenings.css";
interface MovieScreenings{
    link:Link
}
function MovieScreenings(props:MovieScreenings): JSX.Element {
    const [screenings, setScreenings] = useState<ScreeningModelDto[]>([]);
    const [info, setInfo] = useState<PageInfo>(Object);
    const [links, setLinks] = useState<PageLinks>(Object);

    const [url, setUrl] = useState<Link>(props.link);
    const [search, setSearch] = useSearchParams();

    useEffect(() => {
      webApi.screeningPage(url.href).then((res) => {
        console.log(res);
        setScreenings(res.data._embedded.screeningModelDtoList);
        setInfo(res.data.page);
        setLinks(res.data._links);
        setSearch({ page: (res.data.page.number + 1).toString() });
      });
    }, [url]);

    return (
      <div className="MovieScreeningsWrapper">
        <div className="MovieScreenings">
          {screenings.map((screening) => (
            <MovieScreeningItem
              key={"idx" + screening.id}
              screeningDetails={screening}
            />
          ))}
        </div>
        <Paginate info={info} links={links} nav={setUrl} />
      </div>
    );
}

export default MovieScreenings;
