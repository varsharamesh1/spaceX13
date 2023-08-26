const Model = ({ rocket }) => (
    <div className="modal fade" 
      id={`popup${rocket.id}`} 
      tabIndex="-1" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{rocket.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Rocket Name: {rocket.name}
            <div 
              id={`carousel${rocket.id}controls`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={rocket.flickr_images[0]} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={rocket.flickr_images[1]} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={rocket.flickr_images[2]} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button 
                className="carousel-control-prev"
                type="button"
                data-bs-target={`popup${rocket.id}`}
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button 
                className="carousel-control-next"
                type="button"
                data-bs-target={`popup${rocket.id}`}
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </button>
            </div>

<div className="row rocket-info">
<div className="col-sm-4">
    <h4>Height</h4>
    <p>{rocket.height.feet}Feet</p>
</div>
<div className="col-sm-4">
    <h4>Diameter</h4>
    <p>{rocket.diameter.feet}Feet</p>
</div>
<div className="col-sm-4">
    <h4>Mass</h4>
    <p>{rocket.mass.kg/1000}Tonne</p>
</div>
<div className="col-sm-4">
    <h4>frist flight</h4>
    <p>{rocket.frist_flight}Feet</p>
</div>
<div className="col-sm-4">
    <h4>Active</h4>
    <p>{rocket.active ?`yes`:`no`}Feet</p>
</div>
<div className="col-sm-4">
    <h4>cost/launch</h4>
    <p>{rocket.cost_per_launch/1000000}Millions</p>
</div>
          </div>
<p>{rocket.description}</p>
<a href={rocket.wikipedia} className="btn btn-primary btn-block" target="_blank" rel="noreferrer">learn more</a>

          </div>
        </div>
      </div>
    </div>
  );
  
  export default Model;
  
  
  
