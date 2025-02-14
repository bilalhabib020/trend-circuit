import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, [id]);


return (
    <section id="product-detail">
    <div className="container" >
        {loading ? (
            <Spinner />
        ) : (
            <div className="row">
            <div className="col-4">
                <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ height: "400px", width: "100%" }}
                />
            </div>
            <div className="col-8">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product))} className="btn" style={{ backgroundColor: "#4C7B8B", color: "white" }} >Add to Cart</button>
            </div>
            </div>
        )}
    </div>
    </section>
);
}

export default ProductDetail;
