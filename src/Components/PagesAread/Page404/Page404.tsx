import "./Page404.css";

function Page404(): JSX.Element {
    return (
      <div className="Page404">
        <h1>Not Found</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0rWunrNejmA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          
        ></iframe>
      </div>
    );
}

export default Page404;