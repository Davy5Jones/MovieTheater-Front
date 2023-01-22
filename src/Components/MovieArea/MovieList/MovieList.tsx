import { useEffect, useState } from "react";
import { createSearchParams, useParams, useSearchParams } from "react-router-dom";
import { Link, PageInfo, PageLinks } from "../../../Models/BaseModels";
import { MovieModelDto, MovieRootObject } from "../../../Models/MovieModel";
import webApi from "../../../Services/WebApi";
import Paginate from "../../Paginate/Paginate";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

function MovieList(): JSX.Element {
  const [movies, setMovies] = useState<MovieModelDto[]>([]);
  const [info, setInfo] = useState<PageInfo>(Object);
  const [links, setLinks] = useState<PageLinks>(Object);

  const [url, setUrl] = useState<Link>({
    href: "",
  });
  const [search,setSearch] =useSearchParams()
  
  useEffect(() => {
    webApi.moviePage(url.href).then((res) => {
      setMovies(res.data._embedded.movieModelDtoList);
      setInfo(res.data.page);
      setLinks(res.data._links);
      setSearch({"page": (res.data.page.number+1).toString()});
    });
  }, [url]);
  

  return (
    <div className="MovieListWrapper">
      <div className="MovieList">
        {movies.map((movi) => (
          <MovieItem movie={movi} key={"idx" + movi.id} />
        ))}
      </div>
      <Paginate info={info} links={links} nav={setUrl} />
    </div>
  );
}

export default MovieList;
