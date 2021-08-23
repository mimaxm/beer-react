import CardInfo from "./CardInfo"

const Card = ( {item} ) => {
   return (
      <div className='card-block'>
         <img src={item.image_url} alt={item.name} className="card-block__img"/>
         <h3 className="card-block__title">{item.name}</h3>
         <p className="card-block__descr">{item.description}</p>
         <CardInfo item={item}/>
      </div>
   )
}

export default Card;