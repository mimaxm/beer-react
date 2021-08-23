import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchPanel from './SearchPanel';
import FilterForm from './FilterForm';

const CardsList = (props) => {
   const [listData, setListData] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [filterValue, setFilterValue] = useState({});

   const filteredData = listData.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
   });

   useEffect(() => {
      axios.get('https://api.punkapi.com/v2/beers')
         .then(beerData => setListData(beerData.data))
         .catch(err => console.log(err));
   }, []);

   const visibleData = (filteredData.map(item => (<Card key={item.id} item={item}/>)));
   let errNotFound = <h2 className="search-result">"{searchValue}" - was not found</h2>;

   return (
      <>
         <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue}/>
         <FilterForm filterValue={filterValue} setFilterValue={setFilterValue} setListData={setListData}/> 
         <div className='cards-list'>
            {filteredData.length ? visibleData : errNotFound}
         </div>
      </>
   )
}

export default CardsList;