import "./NewsItem.css";
import image from "../../assets/1.jpg";
function NewsItem({ title, url, description, src }) {
  return (
    <div className="col-md-4">
      <div className="card bg-dark text-light h-100 p-2">
        <img
          src={src ? src : image}
          className="card-img-top mw-100"
          alt="img"
          style={{ height: "200px" }}
        />

        <div className="card-body d-flex flex-column align-items-center justify-content-between">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "It is Information about something that has just happend."}
          </p>
          <a href={url} target="_blank" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
