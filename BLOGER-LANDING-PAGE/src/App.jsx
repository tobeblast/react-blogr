import "./index.scss";
import { MainSection } from "./component/MainSection.jsx";
import { FooterSection } from "./component/FooterSection.jsx";
import iconHambruger from "./assets/iconHamburger.svg";
import logo from "./assets/logo.svg"

export default function App() {
  return (
    <>
      <section>
        <header className="container-fluid px-0" data-aos="zoom-out" data-aos-duration="3000">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand text-white" href="#">
                <img src={logo} alt="logo"/>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src={iconHambruger} alt="hambruger" />
                </span>
              </button>
              <div
                className="ul-nav-div collapse navbar-collapse"
                id="navbarScroll"
              >
                <ul className="ul-nav navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <a
                      className="nav-link active dropdown-toggle text-white"
                      aria-current="page"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle text-white" href="#">
                      Company
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Connect
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Contact
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Linkedin
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-flex align-item-center justify-content-end gap-5">
                  <button className="login text-white">Login</button>
                  <button className="signup px-3 py-2">Sign Up</button>
                </div>
              </div>
            </div>
          </nav>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title title" id="exampleModalLabel">
                    Blogr
                  </h3>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="">
                  <ul className="mod navbar-nav my-2 navbar-nav-scroll">
                    <li className="nav-item">
                      <a
                        className="nav-link active dropdown-toggle"
                        aria-current="page"
                        href="#"
                      >
                        Product
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link dropdown-toggle" href="#">
                        Company
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarScrollingDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Connect{" "}
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarScrollingDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Newsletter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Linkedin
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <hr />
                  <div className="mod">
                    <button className="login mb-4 px-3">Login</button>
                    <br />
                    <button className="modalsignup px-3 py-2 mb-4">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container d-flex align-items-center justify-content-center text-white text-center first-text">
            <div className="">
              <h1>A mordern publishing platform</h1>
              <p className="fs-4">
                Grow your audience and build your online brand
              </p>
              <div className="d-flex align-items-center justify-content-center free-div gap-5">
                <button className="free px-3 py-2">Start for free</button>
                <button className="more px-3 py-2">Learn more</button>
              </div>
            </div>
          </div>
        </header>
        <MainSection />
        <FooterSection />
      </section>
    </>
  );
}
