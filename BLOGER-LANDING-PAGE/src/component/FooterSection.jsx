import "../index.scss"
import logo from "../assets/logo.svg"

export function FooterSection() {
  return (
    <>
      <footer>
        <div className="foot-div d-flex align-item-center justify-content-between text-white container"  data-aos="fade-down" data-aos-duration="3000">
          <div className="">
            <a href="" className="text-decoration-none text-white"><img src={logo} alt="logo"/></a>
          </div>
          <div className="">
            <a href="" className="text-decoration-none text-white"><h4 className="my-3">Product</h4></a>
            <a href="" className="text-white text-decoration-none"><p>Overview</p></a>
            <a href="" className="text-white text-decoration-none"><p>Pricing</p></a>
            <a href="" className="text-white text-decoration-none"><p>Marketplace</p></a>
            <a href="" className="text-white text-decoration-none"><p>Features</p></a>
            <a href="" className="text-white text-decoration-none"><p>Integrations</p></a>
          </div>
          <div className="">
            <a href="" className="text-decoration-none text-white"><h4 className="my-3">Company</h4></a>
            <a href="" className="text-white text-decoration-none"><p>About</p></a>
            <a href="" className="text-white text-decoration-none"><p>Team</p></a>
            <a href="" className="text-white text-decoration-none"><p>Blog</p></a>
            <a href="" className="text-white text-decoration-none"><p>Careers</p></a>
          </div>
          <div className="">
            <a href="" className="text-decoration-none text-white"><h4 className="my-3">Connect</h4></a>
            <a href="" className="text-white text-decoration-none"><p>Contact</p></a>
            <a href="" className="text-white text-decoration-none"><p>Newsletter</p></a>
            <a href="" className="text-white text-decoration-none"><p>LinkedIn</p></a>
          </div>
        </div>
      </footer>
    </>
  )
}