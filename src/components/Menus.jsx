import React from "react";
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils.js";

const Menus = ({ menu, addToCart }) => (
  <Col md={4} xs={6} className="mb-4">
    <Card className="shadow" onClick={() => addToCart(menu)}>
      <Card.Img
        className="card"
        variant="top"
        src={"../assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar}
        style={{
          height: "200px", // Tinggi gambar tetap
          width: "100%", // Gambar memenuhi lebar
          objectFit: "cover", // Memotong gambar agar sesuai
        }}
      />
      <Card.Body>
        <Card.Title> <strong>{menu.nama}</strong> </Card.Title>
        <Card.Text>Rp.{menu.harga ? numberWithCommas(menu.harga) : "0"}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default Menus;
