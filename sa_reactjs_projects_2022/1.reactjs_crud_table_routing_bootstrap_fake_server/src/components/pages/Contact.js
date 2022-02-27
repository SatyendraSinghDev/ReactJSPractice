const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="mb-5">Contact Page</h1>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputText1">Subject</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
              aria-describedby="textHelp"
              placeholder="Enter Subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Type Message Here..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success mt-3">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
