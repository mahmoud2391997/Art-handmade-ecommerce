import MainButton from "../MainButton";
import './HoverButton.css'

export default function HoverButton({ title, onClick }) {  
    return (  
      <div className="hover-button-container">  
        <MainButton title={title} onClick={onClick} />  
      </div>  
    );  
  }  