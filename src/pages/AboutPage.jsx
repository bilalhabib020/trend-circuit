import About from '../components/About';
import Features from '../components/Features';


const AboutPage = () => {
    return ( 
        <div className="container">
        <div className='d-flex flex-column justify-content-center align-items-center' 
        style={{ height: "100vh"  }}>
        <About />
        <Features />
        </div>
        </div>
    )
}

export default AboutPage;