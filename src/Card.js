
const card = (prop) => (
    <div className="col-sm-6">
        <div className="card" key={prop.rocket.id}>
            <img
                src={prop.rocket.flickr_images[1]}
                className="card-img-top"
                alt=""
            />
<div className="card-body">
    <h5 className="card-title">{prop.rocket.name}</h5>
    <p className="card-text">
        some quick example text to build on card title and make
        up the bulk of the card's content.
    </p>
    <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#popup${prop.rocket.id}`}
        aria-label={`View More Details about ${prop.rocket.name}`}
    >
        View More
    </button>
</div>
</div>
    </div>
);
export default card;
