import axios from 'axios'

export const GetPatientList = ( page ) => async dispatch => {
  try {
    dispatch({
      type: "PATIENT_LIST_LOADING"
    })

    const urll = 'http://localhost:2000/paciente'
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzI5NzM0Y2E4YWY5MzE5NGE1Zjk3NSIsImlhdCI6MTYyMzU5NjQ0NiwiZXhwIjoxNjIzNjgyODQ2fQ.X8On4DqZFUi_TWNOLlJ_6FP47KKg0fnLlNzXFHxTsNA'
    const res = await axios.get(urll, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }
    });

    // const res = await axios.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
    dispatch({
      type: "PATIENT_LIST_SUCCESS",
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: "PATIENT_LIST_FAIL"
    })
  }
}