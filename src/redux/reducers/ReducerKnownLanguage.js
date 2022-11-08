import { temp, masterQuestions, knownLanguagesType, totalDataFromApiType, otherKnownLanguagesType } from "../types";

const initialState = {
    username: 'damsdafgdasn',
    masterQuestionsArray: [],
    knownLanguages: [],
    totalDataFromApi: [],
    otherKnownLanguagesList:[],
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
        case otherKnownLanguagesType:
            return {
                ...state,
                otherKnownLanguagesList: action.payload
            };
        default:
            return state;
    }
};

export default reducerKnowledgeLanguage;