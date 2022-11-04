import { temp } from "../types";



export function getMasterQuestions( ) {
    
    return async dispatched => {
       dispatched({
        type: temp,
        payload:"heck" +Math.random(),
      })
    };
  }