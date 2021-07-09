import React,  { useRef } from "react";
import { Tabs, Tab, Row, Col } from "react-materialize";
import PatientDataCad from "./cadastro/PatientDataCad";
import PatientDataClin from "./cadastro/PatientDataClin";
import PatientDataLab from "./cadastro/PatientDataLab";
import * as Yup from "yup";

import Header from "./Header";

export default () => {

  const formRef = useRef(null);

  async function handleSumit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome e obrigatorio"),
        email: Yup.string().required("email obrigatorio"),
        address: Yup.object().shape({
          street: Yup.string()
            .min(3, "no minimo 3 caracteres")
            .required("cidade e obrigatoria"),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);

      reset();
    } catch (err) {
      console.log("before " + err);
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        console.log(err.errors);
        err.errors.forEach((error) => {
          //esta undefined
          console.log("akaksk " + error);
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }


  return (
    <div>
      <Header></Header>

      <div className="row">
        <div className=""></div>
        <Tabs
          className="tab-demo z-depth-1"
          options={{
            swipeable: false,
          }}
        >
          <Tab
            active
            className="blue"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Dados do Paciente"
          >
            <PatientDataCad></PatientDataCad>
          </Tab>
          <Tab
            className="red"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Dados Clinicos"
          >
            <PatientDataClin></PatientDataClin>
          </Tab>
          <Tab
            className="green"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Dados Laboratoriais"
          >
            <PatientDataLab></PatientDataLab>
          </Tab>
          <Tab
            className="green"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title="Informacoes Complementares"
          >
            Informacoes Complementares
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
