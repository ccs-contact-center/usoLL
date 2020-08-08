import React, { Component } from "react";
import { CardBody, Col, Row, CardHeader } from "reactstrap";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la LL</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                Se escriben con LL, las palabras terminadas en alle, elle, ello,
                ella.
                <br />
                <span className="pRojo">Excepciones</span>: plebeyo, leguleyo,
                Pompeya.
                <br />
                <span className="pAmarillo">Ejemplos</span>: muelle, calle,
                bello, camello, aquella, sello.
              </p>
              <p>
                Se escriben con LL, algunos verbos terminados en llar.
                <br />
                <span className="pRojo">Excepciones</span>: rayar, puyar,
                explayar, subrayar.
                <br />
                <span className="pAmarillo">Ejemplos</span>: atropellar,
                estallar, avasallar, batallar.
              </p>
              <p>
                ¿Sabrías ya distinguir a partir de ahora las palabras que se
                escriben con LL y no con Y?
              </p>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDosView;
