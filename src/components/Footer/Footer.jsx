import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <>
      <div
        className={`container-fluid display-flex justify-content-center align-items-center text-white py-5 ${styles.footerContainer}`}
      >
        <div className="row g-2 gy-3">
          <div className="col-md-4 col-sm-12  ">
            <div className="text-center">
              <h3 className={`${styles.headline}`}>location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <div className="text-center">
              <h3 className={`${styles.headline}`}>Around the web</h3>
                <div className={`${styles.socialIcons}`}>
                  <a href="#" className={`${styles.socialLink} `}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className={`${styles.socialLink}`}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className={`${styles.socialLink}`}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="#" className={`${styles.socialLink}`}>
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <div className="text-center">
              <h3 className={`${styles.headline}`}>about freelancer</h3>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className={`text-white text-center py-3  ${styles.footer}`}>
        <p>Copyright &copy; Your Website 2021.</p>
      </footer>
    </>
  );
}
