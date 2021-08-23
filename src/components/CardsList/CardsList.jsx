import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import FilterForm from '../FilterForm';

const CardsList = (props) => {
   const [listData, setListData] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [filterValue, setFilterValue] = useState({});

   useEffect(() => {
      axios.get('https://api.punkapi.com/v2/beers')
         .then(beerData => setListData(beerData.data))
         .catch(err => console.log(err));
   }, []);

   function sendForm (event) {
      axios.get('https://api.punkapi.com/v2/beers', {
         params: {...filterValue}
      })
         .then(beerData => setListData(beerData.data))
         .catch(err => console.log(err));
      event.preventDefault();
   }

   const filteredData = listData.filter(item => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
   });

   function onChange (e) {
      return setSearchValue(e.target.value);
   }

   const debounce = (fn, ms) => {
      let timeout;
      return function() {
         const fnCall = () => { fn.apply(this, arguments) }
         clearTimeout(timeout);
         timeout = setTimeout(fnCall, ms);
      }
   }

   const onChangeDebounced = debounce(onChange, 200);

   const visibleData = (filteredData.map(item => (<Card key={item.id} item={item}/>)));
   let errNotFound = <h2 className="search-result">"{searchValue}" - was not found</h2>;

   return (
      <>
         <div className="search-bar">
            <input className="search-bar__input" type="text" placeholder="type name to search..." onChange={onChangeDebounced}/>
         </div>

         <FilterForm filterValue={filterValue} setFilterValue={setFilterValue} sendForm={sendForm}/>
         
         <div className='cards-list'>
            {filteredData.length ? visibleData : errNotFound}
         </div>
      </>
   )
}

export default CardsList;