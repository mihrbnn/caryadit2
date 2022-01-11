import React from "react";
import { FcConferenceCall, FcServices } from "react-icons/fc";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap, FaReact } from "react-icons/fa";

const size = 30;
function Footer(props) {
  return (
    <footer id="footer" className="mt-5 footer-bg  p-4 ">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
        <div className="user col text-light mb-5 ps-5">
          <h3 className="text-center mb-5">
            <FcConferenceCall size={50} color="white" /> Team Members
          </h3>
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3">
            <div className="col d-flex flex-column align-items-center">
              <img
                className="userimage me-3 mb-3"
                src={require("../Images/nur.png")}
                alt=""
              />
              <div>
                <a
                  className="text-decoration-none"
                  href="https://github.com/nurgnc"
                  target="_blank"
                >
                  <span className="text-light h4">
                    <AiFillGithub className="me-3" size={size} /> Bedriye Nur
                    Genç
                  </span>
                </a>
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img
                className="userimage me-3 mb-3"
                src={require("../Images/mihriban.png")}
                alt=""
              />
              <div>
                <a
                  className="text-decoration-none"
                  href="https://github.com/mihrbnn"
                  target="_blank"
                >
                  <span className="text-light h4">
                    <AiFillGithub className="me-3" size={size} /> Mihriban
                    Kılıçkan
                  </span>
                </a>
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img
                className="userimage me-3 mb-3"
                src={require("../Images/busra.png")}
                alt=""
              />
              <div>
                <a
                  className="text-decoration-none"
                  href="https://github.com/busragayret"
                  target="_blank"
                >
                  <span className="text-light h4">
                    <AiFillGithub className="me-3" size={size} /> Büşra Gayret
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tech col text-light d-flex flex-column align-items-center">
          <h3 className="mb-4">
            <FcServices size={50} /> Used Technologies
          </h3>
          <div className="">
            <ul className="list-decoration-none h4">
              <li className="py-3">
                Created with{" "}
                <a href="https://punkapi.com/documentation/v2" target="_blank">
                  PunkAPI
                </a>
              </li>
              <li className="py-3">
                <AiFillHtml5 className="me-3" size={size} />
                HTML
              </li>
              <li className="py-3">
                <DiCss3 className="me-3" size={size} />
                CSS
              </li>
              <li className="py-3">
                <FaBootstrap className="me-3" size={size} />
                Bootstrap
              </li>
              <li className="py-3">
                <FaReact className="me-3" size={size} />
                React
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
