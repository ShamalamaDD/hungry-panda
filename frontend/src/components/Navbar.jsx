export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-md text-white z-50 h-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-6">
        <ul className="flex space-x-8">
          <li><a href="Home.jsx" className="Home">Home</a></li>
          <li><a href="ExploreStartups.jsx" className="ExploreStartups">Explore Startups</a></li>
          <li><a href="AccessResources.jsx" className="nav-link">Access Resources</a></li>
          <li><a href="Contact.jsx" className="nav-link">Contact</a></li>
        </ul>
        <button className="join-now-btn">Join Now</button>
      </div>
    </header>
  );
}
