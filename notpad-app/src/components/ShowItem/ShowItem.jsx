import "./ShowItem.css"
import ShowNotes from "../ShowNotes/ShowNotes";

function ShowItem({myNotes}) {

  
    return ( <div className="itemList">
      {myNotes.map((text,index)=>{
        return(<ShowNotes   key={index} text={text}/>)
      })}
    </div> );
}

export default ShowItem;