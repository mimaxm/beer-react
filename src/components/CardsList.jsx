const CardsList = ({ filteredData, visibleData, errNotFound }) => {

   return (
      <> 
         <div className='cards-list'>
            {filteredData.length ? visibleData : errNotFound}
         </div>
      </>
   )
}

export default CardsList;