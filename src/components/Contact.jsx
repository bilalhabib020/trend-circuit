
const Contact = () => {
    return (
        <div id="contact">
            <h2 >Contact Us</h2>
            <p>Have a question or need help with your order? Contact us today!</p>
            <form>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Full name</label>
    <input type="text" className="form-control" id="name" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="textarea" className="form-label">Message</label>
    <textarea className="form-control" rows={4} id="textarea" />
  </div>
  <button type="submit" className="btn btn-sm" style={{ backgroundColor: "#23486A", color: "white" }}>Submit</button>
</form>
        </div>
    )
}

export default Contact;