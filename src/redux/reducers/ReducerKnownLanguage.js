import { temp } from "../types";

const initialState = {
    username: 'damsdafgdasn',
    password: ''
  };
  const reducerKnowledgeLanguage = (state = initialState, action) => {
      switch (action.type) {
        case temp:
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;
        }  
  };

  export default reducerKnowledgeLanguage;