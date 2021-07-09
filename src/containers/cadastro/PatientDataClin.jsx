import React, { useRef } from "react";
import Input from "../../components/form/Input";
import { Scope } from "@unform/core";
import { Row, Col, CardPanel, Card } from "react-materialize";
import MaskedInput from "../../components/form/MaskedInput";
import Checkbox from "../../components/form/Checkbox";

export default () => {
  return (
    <Row>
      <Scope path="dadosClinicos">
        <Col m={12}>
          <CardPanel>
            <Row>
              <Col s={2} className="input-field">
                <Input name="sinan" id="sinan" type="text" />
                <label for="sinan">SINAN*</label>
              </Col>
              <Col s={2} className="input-field">
                <Input name="nomeCompleto" id="nomeCompleto" type="text" />
                <label for="cns">Tipo Notificacao</label>
              </Col>
              <Col s={2} className="input-field">
                <MaskedInput
                  name="dataNotificacao"
                  id="dataNotificacao"
                  type="text"
                  mask="99/99/9999"
                />
                <label for="dataNotificacao">Data da Notificacao</label>
              </Col>
              <Col s={2} className="input-field">
                <MaskedInput
                  name="dataPrimeirosSintomas"
                  id="dataPrimeirosSintomas"
                  type="text"
                  mask="99/99/9999"
                />
                <label for="dataPrimeirosSintomas">
                  Data dos primeiros sintomas
                </label>
              </Col>
              <Col s={2} className="input-field">
                <MaskedInput
                  name="dataInvestigacao"
                  id="dataInvestigacao"
                  type="text"
                  mask="99/99/9999"
                />
                <label for="dataInvestigacao">Data investigacao</label>
              </Col>
              <Col s={2} className="input-field">
                <Input name="gestante" id="gestante" type="text" />
                <label for="gestante">Gestante</label>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Card title="Sintomas">
                  <Row>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinArtralgiaIntensa"
                        id="sinArtralgiaIntensa"
                        label="Alergia Intensa"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinArtrite"
                        id="sinArtrite"
                        label="Artrite"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinCalafrios"
                        id="sinCalafrios"
                        label="Calafrios"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinCefaleia"
                        id="sinCefaleia"
                        label="Cefaleia"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinDiarreia"
                        id="sinDiarreia"
                        label="Diarreia"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinCefaleia"
                        id="sinCefaleia"
                        label="Cefaleia"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinDorAbdominal"
                        id="sinDorAbdominal"
                        label="Dor Abdominal"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinDorCostas"
                        id="sinDorCostas"
                        label="Dor nas costas"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinDorRetroOcular"
                        id="sinDorRetroOcular"
                        label="Dor Retro Ocular"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinDorRetroOrbital"
                        id="sinDorRetroOrbital"
                        label="Dor Retro Orbital"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinExantema"
                        id="sinExantema"
                        label="Exantema"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinExtremidadesFrias"
                        id="sinExtremidadesFrias"
                        label="Extremidade Frias"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={2} className="input-field">
                      <Checkbox name="sinFebre" id="sinFebre" label="Febre" />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinLeucopenia"
                        id="sinLeucopenia"
                        label="Leucopenia"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinMialgia"
                        id="sinMialgia"
                        label="Mialgia"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinNauseas"
                        id="sinNauseas"
                        label="Nauseas"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinPetequeias"
                        id="sinPetequeias"
                        label="Petequeias"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinProstracao"
                        id="sinProstracao"
                        label="Prostracao"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinProvaLacoPositivo"
                        id="sinProvaLacoPositivo"
                        label="Prova Laco Positivo"
                      />
                    </Col>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinVomito"
                        id="sinVomito"
                        label="Vomito"
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Card title="Sintomas Dengue com Sinais de Alarme">
                  <Row>
                    <Col s={3}>
                      <MaskedInput
                        name="dataInicioSintomasAlarme"
                        id="dataInicioSintomasAlarme"
                        type="text"
                        mask="99/99/9999"
                      />
                      <label for="dataInicioSintomasAlarme">
                        Data Inicio Sintomas
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeAcumuloLiquido"
                        id="sinAlarmeAcumuloLiquido"
                        label="Acumulo de Liquidos"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeAumentoProgressivoHematocrito"
                        id="sinAlarmeAumentoProgressivoHematocrito"
                        label="Aumento Progressivo Hematocrito"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeDorAbdominalIntensaContinua"
                        id="sinAlarmeDorAbdominalIntensaContinua"
                        label="Dor Abdominal Intensa Continua"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeHepatomegalia"
                        id="sinAlarmeHepatomegalia"
                        label="Hepatomegalia"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeHipotensaoPosturalLipotimia"
                        id="sinAlarmeHipotensaoPosturalLipotimia"
                        label="Hipotensao Postural Lipotimia"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeLetargiaIrritabilidade"
                        id="sinAlarmeLetargiaIrritabilidade"
                        label="Letargia Irritabilidade"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeQuedaAbruptaPlaquetas"
                        id="sinAlarmeQuedaAbruptaPlaquetas"
                        label="Queda Abrupta Plaquetas"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinAlarmeSangramentoMucosaOutrasHemorragias"
                        id="sinAlarmeSangramentoMucosaOutrasHemorragias"
                        label="Sangramento Mucosa Outras Hemorragias"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={2} className="input-field">
                      <Checkbox
                        name="sinAlarmeVomitosPersistentes"
                        id="sinAlarmeVomitosPersistentes"
                        label="Vomitos Persistentes"
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col s={12}>
                <Card title="Inicio dos Sintomas Dengue Grave">
                  <Row>
                    <Col s={3}>
                      <MaskedInput
                        name="dataInicioSintomasDengueGrave"
                        id="dataInicioSintomasDengueGrave"
                        type="text"
                        mask="99/99/9999"
                      />
                      <label for="dataInicioSintomasDengueGrave">
                        Data Inicio dos Sintomas Graves
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveAcumoLiquidoInsufiRespiratoria"
                        id="sinDengueGraveAcumoLiquidoInsufiRespiratoria"
                        label="Acumulo de Liquidos Insuficiencia Respiratoria"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveAlteracaoConsciencia"
                        id="sinDengueGraveAlteracaoConsciencia"
                        label="Alteracao Consciencia"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveASTALT"
                        id="sinDengueGraveASTALT"
                        label="ASTALT"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveExtremidadesFrias"
                        id="sinDengueGraveExtremidadesFrias"
                        label="Extremidades Frias"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveHematemese"
                        id="sinDengueGraveHematemese"
                        label="Hematemese"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveHipotensaoArterialFaseTardia"
                        id="sinDengueGraveHipotensaoArterialFaseTardia"
                        label="Hipotensao Arterial Fase Tardia"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveMelena"
                        id="sinDengueGraveMelena"
                        label="Melena"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveMetrorragiaVolumosa"
                        id="sinDengueGraveMetrorragiaVolumosa"
                        label="Metrorragia Volumosa"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveMiocardite"
                        id="sinDengueGraveMiocardite"
                        label="Miocardite"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGravePAConvergente"
                        id="sinDengueGravePAConvergente"
                        label="PA Convergente"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGravePulsoDebilIndetectavel"
                        id="sinDengueGravePulsoDebilIndetectavel"
                        label="Pulso Debil Indetectavel"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveSangramentoSNC"
                        id="sinDengueGraveSangramentoSNC"
                        label="Sangramento SNC"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveTaquicardia"
                        id="sinDengueGraveTaquicardia"
                        label="Taquicardia"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="sinDengueGraveTempoEnchimentoCapilar"
                        id="sinDengueGraveTempoEnchimentoCapilar"
                        label="Tempo Enchimento Capilar"
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Card title="Doencas Pre Existentes">
                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="doencaPreDiabetes"
                        id="doencaPreDiabetes"
                        label="Diabetes"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="doencaPreDoencaAcidoPeptica"
                        id="doencaPreDoencaAcidoPeptica"
                        label="Doenca Acido-peptica"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="doencaPreDoencaRenalCronica"
                        id="doencaPreDoencaRenalCronica"
                        label="Doenca Renal Cronica"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="doencaPreDoencasAutoImunes"
                        id="doencaPreDoencasAutoImunes"
                        label="Doenca Auto-imunes"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="doencaPreDoencasHematologicas"
                        id="doencaPreDoencasHematologicas"
                        label="Doencas Hematologicas"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="doencaPreHepatopatias"
                        id="doencaPreHepatopatias"
                        label="Hepatopatias"
                      />
                    </Col>
                    <Col s={3} className="input-field">
                      <Checkbox
                        name="doencaPreHipertensaoArterial"
                        id="doencaPreHipertensaoArterial"
                        label="Hipertensao Arterial"
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Scope>
    </Row>
  );
};
