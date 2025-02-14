import { Link } from "react-router-dom";

const ShowProductsCard = () => {
    return (

<div className="row g-0 text-start mt-5">
        <div className="col-3 d-flex justify-content-center px-3 align-items-center flex-column border border-dark rounded-start">
            <h5 className="ps-1 pe-1 mb-3" >Trend Circuit offers variety of products. You can find your desired product in a reasonable price here</h5>
            <h5 className="mb-3">We offer seemless and hassle free online shopping experience</h5>
            <h5 className="mb-4">Stop whatever you are doing and start shopping with us!</h5>
            <Link to='/products' className="btn btn-outline-dark">View Products</Link>
        </div>
        <div className="col-9 rounded-end">
            <img className="rounded-end" style={{ width: "100%", height: "25rem", opacity: "0.9" }} src="https://images.unsplash.com/photo-1565127453543-ad97bbbba30d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>

    )
}

export default ShowProductsCard;


{/* 
    
    
        <div class="card mb-3 mt-3 bg-transparent" style={{ maxHeight: "25rem" }}>
  <div class="row">
  <div class="col-3">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="col-9" >
      <img style={{ maxHeight: "100%" }}  src="https://images.unsplash.com/photo-1565127453543-ad97bbbba30d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start" alt="..." />
    </div>
 
  </div>
</div>

<div class="card bg-dark text-white">
  <img src="https://images.unsplash.com/photo-1565127453543-ad97bbbba30d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img" alt="..." />
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
    */}