import { GET_EMPLOYEES_DATA } from "../Actions/type";

// GET_EMPLOYEES_DATA



const initialState = {
    loading:false,
    employees: [
     
    ],
 
  };

  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case  GET_EMPLOYEES_DATA:
        return {
          ...state,
          employees: payload.data
        };

      
   
      default:
        return state;
    }
  };