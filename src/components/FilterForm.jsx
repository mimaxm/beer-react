import moment from 'moment';

const FilterForm = ( { filterValue, setFilterValue, sendForm } ) => {

   return (
      <div className="filter-form">
      <form action="" method="get">
         <p> 
            <label htmlFor="abv_gt">ABV from </label>
            <input id="abv_gt" type="number" min="0.5" max="54" placeholder="0.5" step="0.1" onChange={((e) => setFilterValue({...filterValue, abv_gt : e.target.value}))}/>
            <label htmlFor="abv_lt">to </label>
            <input id="abv_lt" type="number" min="0.5" max="55" placeholder="55" step="0.1" onChange={((e) => setFilterValue({...filterValue, abv_lt : e.target.value}))}/>
         </p>
         <p> 
            <label htmlFor="ibu_gt">IBU from </label>
            <input id="ibu_gt" type="number" min="25" max="150" placeholder="25" step="5" onChange={((e) => setFilterValue({...filterValue, ibu_gt : e.target.value}))}/>
            <label htmlFor="ibu_lt">to </label>
            <input id="ibu_lt" type="number" min="30" max="150" placeholder="150" step="5" onChange={((e) => setFilterValue({...filterValue, ibu_lt : e.target.value}))}/>
         </p>
         <p> 
            <label htmlFor="ebc_gt">EBC from </label>
            <input id="ebc_gt" type="number" min="5" max="215" placeholder="5" step="10" onChange={((e) => setFilterValue({...filterValue, ebc_gt : e.target.value}))}/>
            <label htmlFor="ebc_lt">to </label>
            <input id="ebc_lt" type="number" min="10" max="220" placeholder="220" step="10" onChange={((e) => setFilterValue({...filterValue, ebc_lt : e.target.value}))}/>
         </p>
         <p>
            <label htmlFor="yeast">Yeast </label>
            <input id="yeast" type="text" onChange={((e) => setFilterValue({...filterValue, yeast : e.target.value}))}/>
         </p>
         <p> 
            <label htmlFor="brewed_after">Brewed from </label>
            <input id="brewed_after" type="date" onChange={((e) => setFilterValue({...filterValue, brewed_after : moment(e.target.value).format('MM-YYYY')}))}/>
            <label htmlFor="brewed_before">to </label>
            <input id="brewed_before" type="date" onChange={((e) => setFilterValue({...filterValue, brewed_before : moment(e.target.value).format('MM-YYYY')}))}/>
         </p>
         <p>
            <label htmlFor="hops">Hops </label>
            <input id="hops" type="text" onChange={((e) => setFilterValue({...filterValue, hops : e.target.value}))}/>
         </p>
         <p>
            <label htmlFor="malt">Malt </label>
            <input id="malt" type="text" onChange={((e) => setFilterValue({...filterValue, malt : e.target.value}))}/>
         </p>
         <p>
            <label htmlFor="food">Food </label>
            <input id="food" type="text" onChange={((e) => setFilterValue({...filterValue, food : e.target.value}))}/>
         </p>
         <p>
            <label htmlFor="ids">Id </label>
            <input id="ids" type="number" onChange={((e) => setFilterValue({...filterValue, ids : e.target.value}))}/>
         </p>
         <button onClick={(e) => sendForm(e)}>Нажать</button>
      </form>
   </div>
   )
}

export default FilterForm;