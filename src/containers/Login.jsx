import React from "react";
import ReactDom from "react-dom";
import { TextInput, Button, Label, Card, Row, Col } from "react-materialize";
import "./Login.css";

export default () => {
  return (
    <Row>
      <Col className="s4">
        <Card>
          <label className="LoginTitle">APPSAN</label>
          <Row className="center">
            <div class="input-field col s12">
              <input class="LoginChild" type="text" id="TextInput-4" value="" />
              <label class="" for="TextInput-4">
                Usuario
              </label>
            </div>
          </Row>
          <Row>
            <div class="input-field col s12">
              <input class="LoginChild" type="text" id="TextInput-4" value="" />
              <label class="" for="TextInput-4">
                Senha
              </label>
            </div>
          </Row>
          <Row>
            <Button className="LoginChild">Login</Button>
          </Row>
        </Card>
      </Col>
    </Row>

    // <div className="Login">
    //     <label className="LoginTitle">APPSAN</label>
    //     <TextInput id="TextInput-4" label="Usuario" className="LoginChild"></TextInput>
    //     <TextInput id="TextInput-4" label="Senha" className="LoginChild"></TextInput>
    //     <Button className="LoginChild">Login</Button>
    // </div>
  );
};
