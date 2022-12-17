import "./Navbar.css"
import {Link} from "react-scroll"

export const Navbar=()=>{
    return(
        <div className="Navbar">
            <div className="leftNav">
                <span> Save The Children</span>
                 
            </div>
            <div className="leftNav">
                <ul>
                    <Link spy="true" to="home" smooth={true}><li>Home</li></Link>
                  <Link spy="true" to="king" smooth={true}><li>what we do</li></Link>  

                   <Link spy="true" to="rights" smooth={true}><li>Child Rights</li></Link> 
                    <Link to="footer" smooth={true}><li>About</li></Link>
                    
                    <a href="https://rzp.io/l/NfidAes">
                        <button>
                            Donate
                        </button>

                    </a>
                    
                    
                
                </ul>
            </div>

        </div>
    )
}