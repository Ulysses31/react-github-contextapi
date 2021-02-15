export default function AppReducer(state, action) {
  switch (action.type) {
    case 'GET_GIT_USER':
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        user: action.payload
      };
    case 'GET_GIT_REPOS':
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        repositories: [...action.payload]
      };
    default:
      return state;
  }
}
