import "./Navbar.css"
export const Navbar=()=>{
    return(
        <div className="Navbar">
            <div className="leftNav">
                <span> Save The Children</span>
                 
            </div>
            <div className="leftNav">
                <ul>
                    <li>Home</li>
                    <li>what we do</li>

                    <li>Child Rights</li>
                    <li>About</li>
                    
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