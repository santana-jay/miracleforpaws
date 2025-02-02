import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
color: inherit;
text-decoration: none;
&.active {
  font-weight: bold;
}
&:hover {
  color: #4CAF50;
}
`;


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar bg-body-tertiary navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand mobile-brand" style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', '@media (max-width: 768px)': {fontSize: '24px'} }} to="/">Miracle for Paws Rescue Inc</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <StyledNavLink className="nav-link" aria-current="page" to="/">Home</StyledNavLink>
            </li>
            <li className="nav-item">
              <StyledNavLink className="nav-link" to="/about">About Us</StyledNavLink>
            </li>
            <li className="nav-item dropdown">
              <StyledNavLink className="nav-link dropdown-toggle" to="/dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Donate
              </StyledNavLink>
              <ul className="dropdown-menu">
                <li><StyledNavLink className="dropdown-item" to='https://account.venmo.com/u/MiraclesForPawsRescueInc'>Every Penny Helps</StyledNavLink></li>
                <li><StyledNavLink className="dropdown-item" to="https://www.amazon.com/hz/wishlist/ls/ZQYZF3PCK1X3?ref_=wl_share">Puppy Amzn Wishlist</StyledNavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <StyledNavLink className="nav-link dropdown-toggle" to="/dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </StyledNavLink>
              <ul className="dropdown-menu">
                <li><StyledNavLink className="dropdown-item" to='https://form.jotform.com/241268320502143?'>Foster</StyledNavLink></li>
                <li><StyledNavLink className="dropdown-item" to="https://form.jotform.com/241268756355162?">Adopt</StyledNavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="btn btn-md btn-primary" to="https://www.facebook.com/groups/442234401707378/events">Upcoming Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
