import React, { Component } from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, Categories, NavbarComponent, Menus } from "./components";
import { API_URL } from "./utils/constants";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "/products")
      .then((res) => {
        console.log("Data yang diterima:", res.data);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }

  render() {
    const { menus } = this.state;
    return (
      <ErrorBoundary>
        <div className="App">
          <NavbarComponent />
          <div className="py-4 text-center">
            <Container fluid className="px-5">
              <Row>
                <Categories />
                <Col>
                  <h5>
                    <strong>Daftar Produk</strong>
                  </h5>
                  <hr />
                  <Row>{menus && menus.map((menu) => <Menus key={menu.id} menu={menu} />)}</Row>
                </Col>
                <Hasil />
              </Row>
            </Container>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
