import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSquareFacebook, faSquareInstagram, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../components/Logo";


const ContactPage = () => {
    return (
        <div className="container d-flex justify-content-around align-items-center" style={{ height: "100vh" }}>
            <div className="col-7" ><Contact /></div>
            
        <div className="col-4 d-flex justify-content-around flex-column" style={{  height: "40%", width: "30%" }}>
            <div>
                <h1>Follow Us</h1>
                <div className="d-flex justify-content-start" style={{  width: "100%" }}>
                <FontAwesomeIcon icon={faSquareFacebook} style={{width: "4rem", height: "4rem"}}/>
                <FontAwesomeIcon icon={faSquareInstagram} style={{width: "4rem", height: "4rem"}} />
                <FontAwesomeIcon icon={faSquareXTwitter}  style={{width: "4rem", height: "4rem"}} />
                </div>
            </div>
           <div className="text-center pt-1 bg-dark"><Logo /></div>
        </div>
        
    </div>
    )
}

export default ContactPage;