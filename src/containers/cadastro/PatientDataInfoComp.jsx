import React, { useRef } from "react";
import { Scope } from "@unform/core";
import { Row, Col, CardPanel, Card } from "react-materialize";

export default () => {
  return (
    <div>
      <Scope path="informacaoComplementar">
        <Row>
          <Col m={12}>
            <CardPanel>
              <Row>
                <Col s={12}>
                  <Card title="Observacoes dos ultimos 15 dias">
                    <Row>
                      <Col s={3} className="input-field">
                        <Checkbox name="viagem" id="viagem" label="Viagem" />
                      </Col>
                      <Col s={3} className="input-field">
                        <Checkbox
                          name="trabalho"
                          id="trabalho"
                          label="Trabalho"
                        />
                      </Col>
                      <Col s={3} className="input-field">
                        <Checkbox name="estudo" id="estudo" label="Estudo" />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </CardPanel>
          </Col>
        </Row>
      </Scope>
    </div>
  );
};
