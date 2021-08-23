import axios from 'axios';
import moment from 'moment';

const FilterForm = ( { filterValue, setFilterValue, setListData } ) => {

   function sendForm (event) {
      axios.get('https://api.punkapi.com/v2/beers', {
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
                        <input id="abv_gt" type="number" min="0.5" max="54" placeholder="0.5" step="0.1" onChange={((e) => setFilterValue({...filterValue, abv_gt : e.target.value}))}/>
                        <label htmlFor="abv_lt"> to </label>
                        <input id="abv_lt" type="number" min="0.5" max="55" placeholder="55" step="0.1" onChange={((e) => setFilterValue({...filterValue, abv_lt : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="ibu_gt">IBU from </label> <br />
                        <input id="ibu_gt" type="number" min="25" max="150" placeholder="25" step="5" onChange={((e) => setFilterValue({...filterValue, ibu_gt : e.target.value}))}/>
                        <label htmlFor="ibu_lt"> to </label>
                        <input id="ibu_lt" type="number" min="30" max="150" placeholder="150" step="5" onChange={((e) => setFilterValue({...filterValue, ibu_lt : e.target.value}))}/>
                     </div>
                     <div className="filter-form__group"> 
                        <label htmlFor="ebc_gt">EBC from </label> <br />
                        <input id="ebc_gt" type="number" min="5" max="215" placeholder="5" step="10" onChange={((e) => setFilterValue({...filterValue, ebc_gt : e.target.value}))}/>
                        <label htmlFor="ebc_lt"> to </label>
                        <input id="ebc_lt" type="number" min="10" max="220" placeholder="220" step="10" onChange={((e) => setFilterValue({...filterValue, ebc_lt : e.target.value}))}/>
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
               <button onClick={(e) => sendForm(e)}>Filter</button>
            </form>
         </fieldset>
      </div>
   )
}

export default FilterForm;