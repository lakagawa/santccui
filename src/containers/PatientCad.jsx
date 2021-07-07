import React from "react";
import { Tabs, Tab, Row, Col } from "react-materialize";
import PatientDataCad from "./cadastro/PatientDataCad";
import PatientDataClin from "./cadastro/PatientDataClin";
import PatientDataLab from "./cadastro/PatientDataLab";

import Header from "./Header";

export default () => {
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
