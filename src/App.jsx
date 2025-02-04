import React from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, Categories, NavbarComponent } from "./components";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="py-4 text-center">
        <Container fluid className="px-5">
          <Row>
            <Categories />
            <Col>
              <h5>
                <strong>Daftar Produk</strong>
                <hr />
              </h5>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
