import { GET_EMPLOYEES_DATA } from "./type";
import axios from "axios";




// GET EMPLOYEES DATA //

export const getEmployeeList = () => async (dispatch) => {

    const result = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
    console.log(result);
  
    dispatch({
      type: GET_EMPLOYEES_DATA,
      payload: result.data
    })
  };

