import React, { useRef } from "react";
import { Form } from "@unform/web";
import Input from "../../components/form/Input";
import { Scope } from "@unform/core";
import * as Yup from "yup";
import { Row, Col, CardPanel } from "react-materialize";
import MaskedInput from "../../components/form/MaskedInput";

const initialData = {
  email: "lalakagawa@Hotmail.com",
};

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

    // if(data.name === "") {
    //   //formRef.current.setFieldError('name', 'o nome e obrigatorio')

    //   formRef.current.setErrors({
    //     name: 'o nomeeee',
    //     address:{
    //       street: 'cidadeeeee obr'
    //     }
    //   })
    // }
  }

  return (
    <div>
      <Row>
        <Col m={12}>
          <CardPanel>
            DADOS DO PACIENTE
            <Form
              ref={formRef}
              initialData={initialData}
              onSubmit={handleSumit}
            >
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
              {/* <Input type="password" name="password" />
        <Scope path="address">
          <Input name="street" />
          <Input name="numb" />
        </Scope> */}
              <button type="submit">Enviar</button>
            </Form>
          </CardPanel>
        </Col>
      </Row>
    </div>
  );
};
