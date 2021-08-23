const Card = ( {item} ) => {
   return (
      <div className='card-block'>
         <img src={item.image_url} alt={item.name} className="card-block__img"/>
         <h3 className="card-block__title">{item.name}</h3>
         <p className="card-block__descr">{item.description}</p>
         <p className="small-text">
            <span className="card-block__small">Alcohol: {item.abv}</span>
            <span className="card-block__small">Attenuation: {item.attenuation_level}</span>
            <span className="card-block__small">Boil volume: {item.boil_volume.value}</span>
            <span className="card-block__small">EBC: {item.ebc}</span>
            <span className="card-block__small">IBU: {item.ibu}</span>
            <span className="card-block__small">PH: {item.ph}</span>
            <span className="card-block__small">SRM: {item.srm}</span>
         </p>
         <p className="small-text">
            Food pairing: {item.food_pairing.map(el => <span className="card-block__small">{el}</span>)}
         </p>
         <p className="small-text">
            First brewed: <span className="card-block__small">{item.first_brewed}</span>
         </p>
      </div>
   )
}

export default Card;