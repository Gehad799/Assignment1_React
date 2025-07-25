import "./contact.css";

export default function Contact() {
  return (
    <div className="container p-5 text-center">
      <h1 className="portfolio-title">Contact Section</h1>
      <div className="portfolio-divider">
        <span className="line"></span>
        <span className="star">&#9733;</span>
        <span className="line"></span>
      </div>
      <form className="contact-form mx-auto mt-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="userName"
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="userAge"
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="userEmail"
        />
        <input
          type="password"
          className="form-control mb-4"
          placeholder="userPassword"
        />
        <button type="submit" className="btn contact-btn">
          send Message
        </button>
      </form>
    </div>
  );
}
