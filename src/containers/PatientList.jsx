import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { GetPatientList } from './../actions/PatientAction';
import { Link } from 'react-router-dom'
import './PatientList.css'
import Header from './Header'


const PatientList = (props) => {
  const dispatch = useDispatch()
  const patientList = useSelector(state => state.PatientList)
  React.useEffect(() => {
    FetchData()
  }, [])

  const FetchData = () => {
    dispatch(GetPatientList())
  }

  const ShowData = () => {
    if(!_.isEmpty(patientList.data)){
      return (
        patientList.data.map(el => {
          return <div className="row">
            <div>{el.nomeCompleto}</div>
            <Link to={`/pokemon/${el.nomeCompleto}`}>View</Link>
          </div>
        })
      )
    }

    if(patientList.loading) {
      return <p>Loading ...</p>
    }

    if(patientList.errorMsg !== ""){
      return <p>{ patientList.errorMsg }</p>
    }

    return <p>Unable to load</p>
  }

  return (
    <div>
      <Header></Header>
      {ShowData()}
    </div>
  )
}

export default PatientList