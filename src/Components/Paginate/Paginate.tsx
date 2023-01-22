import { PageInfo, PageLinks } from "../../Models/BaseModels";
import "./Paginate.css";
interface Pagination {
  info:PageInfo,
  links:PageLinks,
  nav:Function
}
function Paginate(props:Pagination): JSX.Element {
  console.log(props);
    return (
      <footer className="Paginate">
        {props.links.prev && (
          <button onClick={() => props.nav(props.links.prev)}>
            previous
          </button>
        )}
        <span>page: {props.info.number +1}</span>
        {props.links.next && (
          <button onClick={() => props.nav(props.links.next)}>next</button>
        )}
      </footer>
    );
}

export default Paginate;
