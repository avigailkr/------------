import "../style.css";
const Message=(props)=>{
    // console.log("Massageeeeeeeeeeeee")
    

//מציג בלולאה את כל ההודעות

    return <div className="massages">
        {
            props.massagesIs.map((item,index)=>
                <div key={index} className={props.massagesIs.IdRoom===1? 'massage--me':''}>
            <div className="massage_content">{item.Message}</div>
            </div>
            
       
            )
        }

    </div>
}
export default Message;