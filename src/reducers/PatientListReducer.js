const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0
}

const PatientListReducer = (state = DefaultState, action) => {
  switch(action.type) {
    case "PATIENT_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      }
    case "PATIENT_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.pacientes,
        errorMsg: ""
      }
    case "PATIENT_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get patient"
      }
    default:
      return state
  }
}

export default PatientListReducer