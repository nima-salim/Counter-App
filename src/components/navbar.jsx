const NavBar = ({ totalCounters })=>{

    return(  
    <nav className="navbar navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="https://localhost:3000">
                Showing
                <span className="badge badge-pill badge-secondary m-2"> 
                    { totalCounters } 
                </span>
             </a>
         </div>
    </nav>);
};

export default NavBar;