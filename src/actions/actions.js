export const getSearchPayload = result => ({
  type: 'GET_SEARCH_DETAILS',
  result,
})

export const getSearchTxt = keytxt => ({
  type: 'GET_SEARCH_TEXT',
  keytxt,
})