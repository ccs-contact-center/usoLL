import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la LL</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: "0px" }}
              >
                <b>Reglas ortográficas de la LL</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Se escriben con <b>LL</b>
                </li>
              </ul>
              <p>
                Se escriben con LL, las palabras terminadas en i<b>ll</b>o, i
                <b>ll</b>a, sus compuestos y derivados.
                <br />
                <span className="pAmarillo">Ejemplos</span>: cepi<b>ll</b>o,
                vaini<b>ll</b>a, maravi<b>ll</b>a, pali<b>ll</b>o, cuchi
                <b>ll</b>o, semi<b>ll</b>a, peini<b>ll</b>a, vaji<b>ll</b>a..
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaUnoView;
