
const initialState = {
  searchResult: [],
  searchKeys: ''
  
}
export const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SEARCH_DETAILS':
      return {
        ...state,
        searchResult: action.result
      } 
      
    case 'GET_SEARCH_TEXT':
      return {
        searchKeys: action.keytxt
      } 
    default:
      return state
  }
};




