import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-md text-white z-50 h-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-6">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="Home">HOME</Link>
          </li>
          <li>
            <Link to="/explore-startups" className="ExploreStartups">
              EXPLORE STARTUPS
            </Link>
          </li>
          <li>
            <Link to="/access-resources" className="nav-link">
              ACCESS RESOURCES
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>
             <button className="join-now-btn">
              <Link to="/join">Join Now</Link>
            </button>
      </div>
    </header>
  );
}
