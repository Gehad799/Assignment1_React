import "./portfolio.css";
import poert1 from "../../assets/images/poert1.png";
import poert2 from "../../assets/images/port2.png";
import poert3 from "../../assets/images/port3.png";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function PortFolio() {
  const [modalImg, setModalImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleImgClick = (src) => {
    setModalImg(src);
    setIsOpen(true);
  };

  return (
    <div className="container p-5 text-center">
      <h1 className="portfolio-title">portfolio</h1>
      <div className="portfolio-divider">
        <span className="line"></span>
        <span className="star">&#9733;</span>
        <span className="line"></span>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="rounded-3 overflow-hidden position-relative  img-hover">
              <div
                className="w-100 position-absolute top-0 start-0 bottom-0 end-0  text-white d-flex justify-content-center align-items-center layer"
                onClick={() => handleImgClick(poert1)}
              >
                <FontAwesomeIcon icon={faPlus} fontSize={50} />
              </div>
              <img className="w-100" src={poert1} alt="Portfolio Item 1" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="rounded-3 overflow-hidden position-relative img-hover">
              <div
                className="w-100 position-absolute top-0 start-0 bottom-0 end-0  text-white d-flex justify-content-center align-items-center layer"
                onClick={() => handleImgClick(poert2)}
              >
                <FontAwesomeIcon icon={faPlus} fontSize={50} />
              </div>
              <img className="w-100" src={poert2} alt="Portfolio Item 2" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="rounded-3 overflow-hidden position-relative img-hover">
              <div
                className="w-100 position-absolute top-0 start-0 bottom-0 end-0  text-white d-flex justify-content-center align-items-center layer"
                onClick={() => handleImgClick(poert3)}
              >
                <FontAwesomeIcon icon={faPlus} fontSize={50} />
              </div>
              <img className="w-100" src={poert3} alt="Portfolio Item 3" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="rounded-3 overflow-hidden position-relative img-hover">
              <div
                className="w-100 position-absolute top-0 start-0 bottom-0 end-0  text-white d-flex justify-content-center align-items-center layer"
                onClick={() => handleImgClick(poert1)}
              >
                <FontAwesomeIcon icon={faPlus} fontSize={50} />
              </div>
              <img src={poert1} alt="Portfolio Item 4" className="w-100" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="rounded-3 overflow-hidden position-relative img-hover">
              <div
                className="w-100 position-absolute top-0 start-0 bottom-0 end-0  text-white d-flex justify-content-center align-items-center layer"
                onClick={() => handleImgClick(poert2)}
              >
                <FontAwesomeIcon icon={faPlus} fontSize={50} />
              </div>
              <img src={poert2} alt="Portfolio Item 5" className="w-100" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="rounded-3 overflow-hidden position-relative img-hover">
              <div
                className="w-100 position-absolute top-0 start-0 bottom-0 end-0  text-white d-flex justify-content-center align-items-center layer"
                onClick={() => handleImgClick(poert3)}
              >
                <FontAwesomeIcon icon={faPlus} fontSize={50} />
              </div>
              <img src={poert3} alt="Portfolio Item 6" className="w-100" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="custom-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                {modalImg && (
                  <img
                    src={modalImg}
                    alt="Preview"
                    className="img-fluid rounded"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
