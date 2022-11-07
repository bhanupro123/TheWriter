import { temp, masterQuestions, knownLanguagesType, totalDataFromApiType } from "../types";

const initialState = {
    username: 'damsdafgdasn', 
    masterQuestionsArray: [],
    knownLanguages: [],
    totalDataFromApi:[]
};
const reducerKnowledgeLanguage = (state = initialState, action) => {
    switch (action.type) {
        case totalDataFromApiType:
            return {
                ...state,
                totalDataFromApi: action.payload
            };
        case masterQuestions:
            return {
                ...state,
                masterQuestionsArray: action.payload
            };
        case knownLanguagesType:
            return {
                ...state,
                knownLanguages: action.payload
            };
        default:
            return state;
    }
};

export default reducerKnowledgeLanguage;