import axios from 'axios';
import moment from 'moment';

const FilterForm = ( { baseUrl, filterValue, setFilterValue, setListData, resetFilters } ) => {

   function sendForm (event) {
      axios.get(baseUrl, {
         params: {...filterValue}
      })
         .then(beerData => setListData(beerData.data))
         .catch(err => console.log(err));
      event.preventDefault();
   }

   return (
      <div className="filter-form">
         <fieldset className="filter-fieldset">
            <legend>Filters</legend>
               <form action="" method="get">
                  <div className="filter-form__wrapper">
                  <div className="filter-form__block1">
                     <div className="filter-form__group"> 
                        <label htmlFor="abv_gt">ABV from </label> <br />
                        <input id="abv_gt" type="number" min="0" max="55" placeholder="0" step="1" onChange={((e) => setFilterValue({...filterValue, abv_gt : e.target.value}))}/>
                        <label htmlFor="abv_lt"> to </label>
                        <input id="abv_lt" type="number" min="0" max="56" placeholder="56" step="1" onChange={((e) => setFilterValue({...filterValue, abv_lt : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="ibu_gt">IBU from </label> <br />
                        <input id="ibu_gt" type="number" min="0" max="1150" placeholder="0" step="50" onChange={((e) => setFilterValue({...filterValue, ibu_gt : e.target.value}))}/>
                        <label htmlFor="ibu_lt"> to </label>
                        <input id="ibu_lt" type="number" min="0" max="1160" placeholder="0" step="50" onChange={((e) => setFilterValue({...filterValue, ibu_lt : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="ebc_gt">EBC from </label> <br />
                        <input id="ebc_gt" type="number" min="0" max="405" placeholder="5" step="10" onChange={((e) => setFilterValue({...filterValue, ebc_gt : e.target.value}))}/>
                        <label htmlFor="ebc_lt"> to </label>
                        <input id="ebc_lt" type="number" min="0" max="405" placeholder="405" step="10" onChange={((e) => setFilterValue({...filterValue, ebc_lt : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="brewed_after">Brewed from </label> 
                        <br />
                        <input id="brewed_after" type="date" onChange={((e) => setFilterValue({...filterValue, brewed_after : moment(e.target.value).format('MM-YYYY')}))}/> 
                        <label htmlFor="brewed_before"> to </label> 
                        <input id="brewed_before" type="date" onChange={((e) => setFilterValue({...filterValue, brewed_before : moment(e.target.value).format('MM-YYYY')}))}/>
                     </div>
                  </div>
                  <div className="filter-form__block2">
                     <div className="filter-form__group"> 
                        <label htmlFor="yeast">Yeast </label> <br />
                        <input id="yeast" type="text" onChange={((e) => setFilterValue({...filterValue, yeast : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="hops">Hops </label> 
                        <br />
                        <input id="hops" type="text" onChange={((e) => setFilterValue({...filterValue, hops : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="malt">Malt </label> 
                        <br />
                        <input id="malt" type="text" onChange={((e) => setFilterValue({...filterValue, malt : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="food">Food </label> 
                        <br />
                        <input id="food" type="text" onChange={((e) => setFilterValue({...filterValue, food : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="ids">Id </label> 
                        <br />
                        <input id="ids" type="number" min="1" onChange={((e) => setFilterValue({...filterValue, ids : e.target.value}))}/>
                     </div>
                  </div>
               </div>
               <div className="form-buttons">
                  <button onClick={(e) => sendForm(e)}>Filter</button>
                  <button type="reset" onClick={resetFilters}>Reset all</button>
               </div>
            </form>
         </fieldset>
      </div>
   )
}

export default FilterForm;