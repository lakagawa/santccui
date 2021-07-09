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
              <Scope path="address">
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
              </Scope>  
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
