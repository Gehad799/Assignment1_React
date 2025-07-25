import { NavLink } from "react-router-dom";
import Page404Cover from "../../assets/images/404_page_cover.jpg";
export default function NotFound() {
  return (
    <div className="bg-dark vh-100 d-flex flex-column justify-content-center align-items-center text-white">
      <img src={Page404Cover} alt="404 Not Found" className="mb-4" />
      <NavLink to="/" className="btn btn-light">
        Go to Home
        </NavLink>
    </div>
  );
}