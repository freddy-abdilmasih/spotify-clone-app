export const initialState = {
 user: null,
 playlists: [],
 playing: false,
 item: null,
 // REMOVE after finished developing...
 Token: 'BQCvnPqVTjfb3jraXUzo072NuhNso0TfwoXY3WH6r92z3QYXgSRQmDzIaUhrIAetjyZAa02FTCHl_FjBNFpXI9SdgSEvci8h8NNA9f3An_J8m2iozX8MS5mahJqUucTzcRBRtmcJsoSO9UhOR - GI2ddeQXQFmPZa'
};

const reducer = (state, action) => {
 console.log(action);

 // Action -> type, [payload]

 switch(action.type) {
  case 'SET_USER':
   return {
    ...state,
    user: action.user,
   };
  
   case 'SET_TOKEN':
   return {
    ...state,
    token: action.token,
   };
   
  case 'SET_PLAYLISTS':
   return {
    ...state,
    playlists: action.playlists,
   }; 
  
  case 'SET_DISCOVER_WEEKLY':
    return {
      ...state,
      discover_weekly: action.discover_weekly,
    }

  default:
   return state;
 }
};

export default reducer;