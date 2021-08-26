const BASE_URL = 'https://api.punkapi.com/v2/beers';

const totalCount = 325;

const getPageCount = (limitPerPage) => {
   return Math.ceil(totalCount / limitPerPage);
}

const getPagesArray = (totalPage) => {
   let resultArr = [];
   for (let i = 1; i < totalPage + 1; i++) {
      resultArr.push(i);
   }
   return resultArr;
}


   export {BASE_URL, getPageCount, getPagesArray};