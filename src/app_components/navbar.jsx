import { useState } from "react";


function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
//   const menuClass = "collapse navbar-collapse show";
// option 1
//   var menuClass = "collapse navbar-collapse";
//   if(showMenu){
//     menuClass = menuClass + " show"
//   }
// _____________________________________________________________
//   option 2
const menuClass = [
    "collapse navbar-collapse",
    showMenu ? "show" : ""
].join(" ");
//  Opeiont 3

// const
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        Dead water
    </a>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarColor03" 
    aria-controls="navbarColor03"  
    aria-expanded="false" 
    aria-label="Toggle navigation"
    onClick={()=> {
        setShowMenu(!showMenu)
    }} 
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={menuClass} id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Navbar;