
const Spinner = () => {

    const style = {
        position: "relative",
        top: "50%",
        left: "40%",
        width: "200px",
        height: "200px"
    }

    return (
        <div className="spinner-border text-dark" role="status" style={style}>
            <span className="visually-hidden">Loading...</span>
        </div>
    );
}

export default Spinner;