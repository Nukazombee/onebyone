export default function Card (props) {
  return (
    <div className="carddiv">
      <div className="sellBtn">
        SELL
      </div>
      <div className="image_div">
        <img className="charimage" src={props.image}></img>
      </div>
      <div className="infodiv">
        
        <p>Clan: {props.clan}</p>
        <p>Rarity: {props.rarity}</p>
        <p>Price: {props.price}</p>
        
      </div>
      
    </div>
  )
}