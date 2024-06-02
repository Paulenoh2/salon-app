import { Link } from "react-router-dom";


const Footer = ()=>{

    return(

        <div className="link">
                <nav>
                     
                <Link to = '/'> HOME|</Link>
            
                <Link to = '/about'> ABOUT US|</Link>

                <Link to = '/contact'> www.paulamam.co.za|</Link>
                
                <Link to = '/services'>   SERVICES|</Link>
                
                <Link to = '/contact'>   068 042 6550|</Link>
              <Link to = '/gallery'> PRODUCTS GALLERY|</Link>
              
            </nav>
        
                <div> 
                    <input type="text"/>
                    <button >Subscribe</button>
                    
                    </div>
                    
                    <div className="footer-contact">
                    <div>
    
      <p>123 Salon Street, City, Country</p>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@salon.com</p>
    </div>
                    </div>
                 </div>

        
    )

}
export default Footer;