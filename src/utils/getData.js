import axios from "axios";

const getData = (fetchUrl, page, limitPerPage, setListData) => {
   axios.get(fetchUrl, {
      params: {
         page: page,
         per_page: limitPerPage,
      }
   })
      .then(beerData => setListData(beerData.data))
      .catch(err => console.log(err));
}

export default getData;