import React, { Component } from "react";
import { Col, ListGroup, Row, Badge } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils.js";

export default class Hasil extends Component {
  render() {
    const { carts } = this.props;

    return (
      <Col md={3}>
        <h5>
          <strong>Hasil</strong>
        </h5>
        <hr />

        {carts.length !== 0 && (
          <ListGroup variant="flush">
            {carts.map((menuKeranjang) => (
              <ListGroup.Item key={menuKeranjang.product?.id}>
                <Row className="d-flex align-items-center">
                  <Col xs={2}>
                    <h6>
                      <Badge pill bg="success">{menuKeranjang.jumlah}</Badge>
                    </h6>
                  </Col>
                  <Col className="md">
                    <h6>{menuKeranjang.product?.nama}</h6>
                    <p>Rp.{menuKeranjang.product?.harga !== undefined && menuKeranjang.product?.harga !== null ? numberWithCommas(menuKeranjang.product.harga) : "N/A"}</p>
                  </Col>
                  <Col className="float-right">
                    <strong>Rp.{menuKeranjang.total_harga !== undefined && menuKeranjang.total_harga !== null ? numberWithCommas(menuKeranjang.total_harga) : "N/A"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    );
  }
}