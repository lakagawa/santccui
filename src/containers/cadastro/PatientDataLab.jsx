import React, { useRef } from "react";
import Input from "../../components/form/Input";
import { Row, Col, CardPanel, Card } from "react-materialize";
import MaskedInput from "../../components/form/MaskedInput";
import { Scope } from "@unform/core";

export default () => {
  return (
    <div>
      <Scope path="dadosLaboratorial">
        <Row>
          <Col m={12}>
            <CardPanel>
              <Row>
                <Col s={12}>
                  <Card title="NS1">
                    <Row>
                      <Col s={2} className="input-field">
                        <MaskedInput
                          name="dataNs1Coleta"
                          id="dataNs1Coleta"
                          type="text"
                          mask="99/99/9999"
                        />
                        <label for="dataNs1Coleta">Data da Coleta</label>
                      </Col>
                      <Col s={3} className="input-field">
                        <Input
                          name="resultadoNs1"
                          id="resultadoNs1"
                          type="text"
                        />
                        <label for="resultadoNs1">Resultado</label>
                      </Col>
                      <Col s={2} className="input-field">
                        <MaskedInput
                          name="dataSorologiaChikungunya"
                          id="dataSorologiaChikungunya"
                          type="text"
                          mask="99/99/9999"
                        />
                        <label for="dataSorologiaChikungunya">
                          Data da Sorologia Chikungunya
                        </label>
                      </Col>
                      <Col s={3} className="input-field">
                        <Input
                          name="resultadoSorologiaChikungunya"
                          id="resultadoSorologiaChikungunya"
                          type="text"
                        />
                        <label for="resultadoSorologiaChikungunya">
                          Resultado
                        </label>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col s={12}>
                  <Card title="Sorologia Dengue (IgM)">
                    <Row>
                      <Col s={2} className="input-field">
                        <MaskedInput
                          name="dataSorologiaDengue"
                          id="dataSorologiaDengue"
                          type="text"
                          mask="99/99/9999"
                        />
                        <label for="dataSorologiaDengue">Data da Coleta</label>
                      </Col>
                      <Col s={3} className="input-field">
                        <Input
                          name="resultadoSorologiaDengue"
                          id="resultadoSorologiaDengue"
                          type="text"
                        />
                        <label for="resultadoSorologiaDengue">Resultado</label>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col s={3} className="input-field">
                  <Input name="sorotipo" id="sorotipo" type="text" />
                  <label for="sorotipo">Sorotipo</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input
                    name="histopatologia"
                    id="histopatologia"
                    type="text"
                  />
                  <label for="histopatologia">Histopatologia</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input
                    name="imunohistoquimica"
                    id="imunohistoquimica"
                    type="text"
                  />
                  <label for="imunohistoquimica">Imunohistoquimica</label>
                </Col>
              </Row>
              <Row>
                <Col s={12}>
                  <Card title="Hospitalizacao">
                    <Row>
                      <Col s={2} className="input-field">
                        <MaskedInput
                          name="dataHospitalizacao"
                          id="dataHospitalizacao"
                          type="text"
                          mask="99/99/9999"
                        />
                        <label for="dataHospitalizacao">
                          Data da Internacao
                        </label>
                      </Col>
                      <Col s={3} className="input-field">
                        <Input
                          name="nomeHospital"
                          id="nomeHospital"
                          type="text"
                        />
                        <label for="nomeHospital">Nome do Hospital</label>
                      </Col>
                      <Col s={2} className="input-field">
                        <Input
                          name="telefoneHospital"
                          id="telefoneHospital"
                          type="text"
                        />
                        <label for="telefoneHospital">Telefone</label>
                      </Col>
                      <Col s={2} className="input-field">
                        <Input
                          name="estadoHospital"
                          id="estadoHospital"
                          type="text"
                        />
                        <label for="estadoHospital">Estado</label>
                      </Col>
                      <Col s={3} className="input-field">
                        <Input
                          name="cidadeHospital"
                          id="cidadeHospital"
                          type="text"
                        />
                        <label for="cidadeHospital">Cidade</label>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col s={12} className="input-field">
                  <Input name="observacoes" id="observacoes" type="text" />
                  <label for="observacoes">Observacoes</label>
                </Col>
              </Row>
              {/* <Input type="password" name="password" />
        <Scope path="address">
          <Input name="street" />
          <Input name="numb" />
        </Scope> */}
            </CardPanel>
          </Col>
        </Row>
      </Scope>
    </div>
  );
};
