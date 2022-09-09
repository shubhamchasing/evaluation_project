import { Link } from "react-router-dom";


const NavigationButton = ({to, onClick , value, isDisabled}) => {
    
   // const btnEnableDisable = !isDisabled ? "nav-btn-enable" : "nav-btn-disabled";


    return ( <Link to = {to} className="link">
    <button type="button" 
    onClick={() => {
        onClick();
      }} 
      className = {`nav-btn`}
      >{value}
        </button></Link> );
}
 
export default NavigationButton;