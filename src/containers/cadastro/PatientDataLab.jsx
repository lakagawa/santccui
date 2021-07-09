import React, { useRef } from "react";
import { Form } from "@unform/web";
import Input from "../../components/form/Input";
import { Scope } from "@unform/core";
import * as Yup from "yup";
import { Row, Col, CardPanel, Card } from "react-materialize";
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
            <Form
              ref={formRef}
              initialData={initialData}
              onSubmit={handleSumit}
            >
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
                        <MaskedInput name="dataHospitalizacao" id="dataHospitalizacao" type="text" mask="99/99/9999" />
                        <label for="dataHospitalizacao">Data da Internacao</label>
                      </Col>
                      <Col s={3} className="input-field">
                        <Input name="nomeHospital" id="nomeHospital" type="text" />
                        <label for="nomeHospital">Nome do Hospital</label>
                      </Col>
                      <Col s={2} className="input-field">
                        <Input name="telefoneHospital" id="telefoneHospital" type="text" />
                        <label for="telefoneHospital">Telefone</label>
                      </Col>
                      <Col s={2} className="input-field">
                        <Input name="estadoHospital" id="estadoHospital" type="text" />
                        <label for="estadoHospital">Estado</label>
                      </Col>
                      <Col s={3} className="input-field">
                        <Input name="cidadeHospital" id="cidadeHospital" type="text" />
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
              <button type="submit">Enviar</button>
            </Form>
          </CardPanel>
        </Col>
      </Row>
    </div>
  );
};
