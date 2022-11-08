import { masterQuestions, temp, knownLanguagesType, totalDataFromApiType, otherKnownLanguagesType } from "../types";

let knownLanguages = [
  {
    "answersLanguages": [],
    "_id": "63640638dc29b26f0b977aad",
    "questionNumber": "7",
    "questionType": "MultipleChoice",
    "questionText": "I CAN TRANSFER FROM",
    "questionCategoryType": "known-language",
    "createdBy": 1,
    "answers": [
      "[USER_SELECTED_LANGUAGE]"
    ],
    "createdAt": "2022-11-03T17:59:59.994Z",
    "updatedAt": "2022-11-03T17:59:59.994Z",
    "__v": 0
  },
  {
    "answersLanguages": [],
    "_id": "636405c30b4086448bfb7c3f",
    "questionNumber": "6",
    "questionType": "MultipleChoice",
    "questionText": "I Write Stories In",
    "questionCategoryType": "known-language",
    "createdBy": 1,
    "answers": [
      {
        "languages": [
          "[USER_SELECTED_LANGUAGE]"
        ],
        "fluency": [
          "Speak",
          "Read",
          "Write"
        ],
        "efficiency": [
          "Excellent",
          "Good",
          "Fair"
        ]
      }
    ],
    "createdAt": "2022-11-03T17:59:59.994Z",
    "updatedAt": "2022-11-03T17:59:59.994Z",
    "__v": 0
  },
  {
    "answersLanguages": [],
    "_id": "6364019f915d544c785a68af",
    "questionNumber": "5",
    "questionType": "MultipleChoice",
    "questionText": "Other Known Languages",
    "questionCategoryType": "known-language",
    "createdBy": 1,
    "answers": [
      "Telugu",
      "Malayalam",
      "Bengali",
      "Urdu",
      "Assamese",
      "Marathi",
      "Gujarathi"
    ],
    "createdAt": "2022-11-03T17:59:59.994Z",
    "updatedAt": "2022-11-03T17:59:59.994Z",
    "__v": 0
  },
  {
    "answersLanguages": [],
    "_id": "6363c32ec8e5fc6d9c42a523",
    "questionNumber": "4",
    "questionType": "MultipleChoice",
    "questionText": "[USER_SELECTED_NATIONAL_LANGUAGE]",
    "questionCategoryType": "known-language",
    "createdBy": 1,
    "answers": [
      {
        "South Indian Languages": [
          "Telugu",
          "Malayalam"
        ],
        "North Indian Languages": [
          "Bengali",
          "Urdu",
          "Assamese"
        ],
        "East Indian Languages": [
          "Marathi",
          "Hindi"
        ],
        "West Indian Languages": [
          "Gujarathi",
          "Hindi"
        ]
      }
    ],
    "createdAt": "2022-11-03T13:33:34.723Z",
    "updatedAt": "2022-11-03T17:53:18.091Z",
    "__v": 0
  },
  {
    "_id": "6368fe91333e97333fd3d9e5",
    "questionNumber": "4",
    "questionType": "MultipleChoice",
    "questionText": "[USER_SELECTED_NATIONAL_LANGUAGE]",
    "questionCategoryType": "known-language",
    "createdBy": 1,
    "answersLanguages": [],
    "answers": [
      {
        "South American Languages": [
          "Spanish",
          "Quechua",
          "Dutch",
          "Aymara"
        ],
        "North American Languages": [
          "French",
          "English"
        ]
      }
    ],
    "createdAt": "2022-11-07T12:48:17.197Z",
    "updatedAt": "2022-11-07T12:48:17.197Z",
    "__v": 0
  },
  {
    "answersLanguages": [],
    "_id": "6363bda5b9eb5ac2bd030340",
    "questionNumber": "3",
    "questionType": "MultipleChoice",
    "questionText": "[USER_SELECTED_UNIVERSAL_LANGUAGE]",
    "questionCategoryType": "known-language",
    "createdBy": 1,
    "answers": [
      {
        "Indian Languages": [
          "South Indian Languages",
          "North Indian Languages",
          "East Indian Languages",
          "West Indian Languages"
        ],
        "American Languages": [
          "South American Languages",
          "North American Languages"
        ]
      }
    ],
    "createdAt": "2022-11-03T13:09:57.750Z",
    "updatedAt": "2022-11-07T12:29:50.595Z",
    "__v": 0
  },
  {
    "answersLanguages": [],
    "_id": "6363bce96ba145358f8a05c8",
    "questionNumber": "2",
    "questionType": "MultipleChoice",
    "questionText": "I write stories In",
    "questionCategoryType": "known-language",
    "createdBy": 1,
    "answers": [
      "Indian Languages",
      "American Languages"
    ],
    "createdAt": "2022-11-03T13:06:49.319Z",
    "updatedAt": "2022-11-07T12:21:54.663Z",
    "__v": 0
  }
]
let tempObject= [

  { "Indian Languages": { "East Indian Languages": [Array], "North Indian Languages": [Array], "South Indian Languages": [Array], "West Indian Languages": [Array] }, "pre_childKeys": ["South Indian Languages", "North Indian Languages", "East Indian Languages", "West Indian Languages"], "pre_parentKey": "Indian Languages" },

  { "American Languages": { "North American Languages": [Array], "South American Languages": [Array] }, "pre_childKeys": ["South American Languages", "North American Languages"], "pre_parentKey": "American Languages" }

]


let req = {
  "userId": "{{userId}}",
  "universalLanguage": ["indian language", "American language"],
  "nationalLanguage": [
    {
      "indian language": ["south", "north"],
      "American language": ["latin"]
    }
  ],
  "regionalLanguage": [{ "south": ["telugu", "sanskirit"], "north": ["hindi", "marati"] }],
  "knownlanguages": ["telugu", "sanskirit", "hindi", "marati"],
}

let otherKnownLanguagesGetFromMasterData=[]
export function getMasterQuestions() {
  let a = []
  let finalObj = []

  for (let i = 0; i < knownLanguages.length; i++) {

    if (knownLanguages[i].questionNumber == 2) {

      for (let b = 0; b < knownLanguages[i].answers.length; b++) {
        console.log(knownLanguages[i].answers[b], "2", i)
        a.push(knownLanguages[i].answers[b])
      }

      break;
    }


  }

  for (let i = 0; i < knownLanguages.length; i++) {
    if (knownLanguages[i].questionNumber == "4") {
      let b = {}
      console.log(knownLanguages[i].answers[0], ";;;;;;;;;;;;")
      b[a[finalObj.length]] = knownLanguages[i].answers[0]
      b["pre_childKeys"] = Object.keys(knownLanguages[i].answers[0])
      b["pre_parentKey"] = a[finalObj.length]
      finalObj[finalObj.length] = b
    }
    if(knownLanguages[i].questionNumber == "5")
    {
      otherKnownLanguagesGetFromMasterData=knownLanguages[i]
      break;
    }
  }

  console.log(finalObj, "!!!!!!!!!!!!!!!!!!!!Final obj")

  return async dispatched => {
    dispatched({
      type: masterQuestions,
      payload: finalObj,
    })
    dispatched({
      type: totalDataFromApiType,
      payload: knownLanguages,
    })
  };
}


export function setKnownLanguages(data) {
  return async dispatched => {
    

    
    dispatched({
      type: knownLanguagesType,
      payload: data,
    })
  };

}
export function setOtherKnownLanguages(data) {
  return async dispatched => {
    dispatched({
      type: otherKnownLanguagesType,
      payload: data,
    })
  };

}