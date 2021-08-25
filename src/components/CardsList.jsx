const CardsList = ({ filteredData, visibleData, errNotFound }) => {

   return (
      <> 
         <div className='cards-list'>
            {visibleData}
         </div>
      </>
   )
}

export default CardsList;