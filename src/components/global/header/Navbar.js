import React,{useEffect} from 'react'
import { Link,useLocation} from "react-router-dom";

function Navbar() {
  const location = useLocation();
  useEffect(() => {
    // Get the path from the location object
    const currentPath = location.pathname.toLocaleLowerCase();

    // Determine the class name based on the current path
    const bodyClassName = currentPath === '/' ? '' : 'sub_page';

    // Update the body class name
    document.body.className = bodyClassName;

    // Cleanup the class name when the component unmounts
    return () => {
      document.body.className = '';
    };
  }, [location.pathname]);
  return (
    <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand rounded-circle " to="/">
            <img  src='images/Samslogo.png' width="92px" height="92px" alt='logo'/>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
                </Link>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar
