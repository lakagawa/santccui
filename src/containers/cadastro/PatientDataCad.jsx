import React, { useRef } from "react";
import Input from "../../components/form/Input";
import { Row, Col, CardPanel } from "react-materialize";
import MaskedInput from "../../components/form/MaskedInput";



export default () => {
  
  return (
    <div>
      <Row>
        <Col m={12}>
          <CardPanel>
           
              <Row>
                <Col s={3} className="input-field">
                  <Input name="cns" id="cns" type="text" />
                  <label for="cns">CNS*</label>
                </Col>
                <Col s={5} className="input-field">
                  <Input name="nomeCompleto" id="nomeCompleto" type="text" />
                  <label for="cns">Nome Completo</label>
                </Col>
                <Col s={2} className="input-field">
                  <MaskedInput
                    name="dataNascimento"
                    id="dataNascimento"
                    type="text"
                    mask="99/99/9999"
                  />
                  <label for="dataNascimento">Data Nascimento</label>
                </Col>
                <Col s={2} className="input-field">
                  <Input name="sexo" id="sexo" type="text" />
                  <label for="sexo">Sexo</label>
                </Col>
              </Row>

              <Row>
                <Col s={3} className="input-field">
                  <Input name="racaCor" id="racaCor" type="text" />
                  <label for="racaCor">Raca</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input name="rg" id="rg" type="text" />
                  <label for="rg">RG</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input name="cpf" id="cpf" type="text" />
                  <label for="cpf">CPF</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input name="telefone" id="telefone" type="text" />
                  <label for="telefone">Telefone</label>
                </Col>
              </Row>

              <Row>
                <Col s={5} className="input-field">
                  <Input name="nomeMae" id="nomeMae" type="text" />
                  <label for="nomeMae">Nome Mae</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input name="escolaridade" id="escolaridade" type="text" />
                  <label for="escolaridade">Escolaridade</label>
                </Col>
                <Col s={2} className="input-field">
                  <Input name="zona" id="zona" type="text" />
                  <label for="zona">Zona</label>
                </Col>
                <Col s={2} className="input-field">
                  <Input name="pais" id="pais" type="text" />
                  <label for="pais">Pais</label>
                </Col>
              </Row>

              <Row>
                <Col s={3} className="input-field">
                  <Input name="estado" id="estado" type="text" />
                  <label for="estado">Estado</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input name="cidade" id="cidade" type="text" />
                  <label for="cidade">Cidade</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input name="cep" id="cep" type="text" />
                  <label for="cep">CEP</label>
                </Col>
                <Col s={3} className="input-field">
                  <Input name="bairro" id="bairro" type="text" />
                  <label for="bairro">Bairro</label>
                </Col>
              </Row>

              <Row>
                <Col s={5} className="input-field">
                  <Input name="endereco" id="endereco" type="text" />
                  <label for="endereco">Endereco</label>
                </Col>
                <Col s={2} className="input-field">
                  <Input name="numero" id="numero" type="text" />
                  <label for="numero">Numero</label>
                </Col>
              </Row>
          </CardPanel>
        </Col>
      </Row>
    </div>
  );
};
