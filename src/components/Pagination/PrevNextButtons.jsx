import { getPageCount } from "../../utils/pagesUtils";

const PrevNextButtons = ( { limitPerPage, setLimitPerPage, setPage, page } ) => {
   function nextPage () {
      if (page !== getPageCount(limitPerPage)) {
         setPage(page + 1);
      } 
   }

   function prevPage () {
      if (page !== 1) {
         setPage(page - 1);
      } 
   }
   
   function changeOption (event) {
      setLimitPerPage(event.target.value);
   }
   
   return (
      <div className="prev-next-buttons">
         <button onClick={prevPage}>Prev Page</button>
         <button onClick={nextPage}>Next Page</button>
         <select name="limit-per-page" onChange={(e) => changeOption(e)}>
            <option value="20" >20 cards per page</option>
            <option value="40">40 cards</option>
            <option value="60">60 cards</option>
            <option value="80">80 cards</option>
         </select>
      </div>
   )
}

export default PrevNextButtons;