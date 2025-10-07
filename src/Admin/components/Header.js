import * as React from 'react';
import { Link,useLocation, useNavigate } from 'react-router'

function Header(){
  const navigate=useNavigate();
  const logout =()=>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('userdata');
  }
    return(
          <>
          <nav className="navbar navbar-expand-sm  navbar-dark p-0 m-0" style={{backgroundColor: "  #2066dfff"}}>
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/dhashboard"}>Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/users"}>Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/categories"}>Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/services"}>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/orders"}>Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/customerservices"}>Customerservices</Link>
                  </li>
                  
                </ul>
                  <button className='btn btn-link text-decoration-none text-light' style={{cursor:'pointer '}} onClick={logout}>logout</button>
              </div>
            </nav>
          </>
    )
}


export default Header;