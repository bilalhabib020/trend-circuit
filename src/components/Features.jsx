import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faTag, faTruckFast } from "@fortawesome/free-solid-svg-icons";  
const Features = () => {
    return (
        <div className="row g-1 mt-5">
  <div className="col-sm-4" >
    <div className="card text-white" style={{ backgroundColor: "#23486A" }} >
      <div className="card-body">
        <h5 className="card-title"><FontAwesomeIcon icon={faPeopleGroup} /> Great Staff</h5>
        <p className="card-text">We have team of highly competent staff to help you.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-light" style={{ backgroundColor: "#23486A" }} >
      <div className="card-body">
        <h5 className="card-title"><FontAwesomeIcon icon={faTag} /> Low Prices</h5>
        <p className="card-text">We offer high quality products in low prices in various categories.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-light" style={{ backgroundColor: "#23486A" }} >
      <div className="card-body">
        <h5 className="card-title"><FontAwesomeIcon icon={faTruckFast} /> Fast Delivery</h5>
        <p className="card-text">We pride ourselve on delivering your product fast.</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Features;