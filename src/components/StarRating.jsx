import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const StarRating = () => {
    return (
        <ul className="list-unstyled d-flex justify-content-center" style={{color:  "#EFB036" }} >
        <li>
        <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
        <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
        <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
        <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
        <FontAwesomeIcon icon={faStarHalfStroke} />
        </li>
      </ul>
    )
}

export default StarRating;