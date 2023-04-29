import Card from './Card.js'

function Cards_block(props)
{
  return (
    <div className="bak">
      <div className='odd_card_box'>
        {props.cards.map(card => (

          <Card 
          key= {card.id}
          image={card.image}
          
          clan= {card.clan} 
          rarity={card.rarity} 
          price={card.price} />
        ))}
      </div>
     </div>
    
  )
}


export default Cards_block;