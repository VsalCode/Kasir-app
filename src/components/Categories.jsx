import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUtensils, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Cemilan") return <FontAwesomeIcon icon={faPizzaSlice} />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "/categories")
      .then((res) => {
        console.log("Data yang diterima:", res.data);
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }

  render() {
    const { categories } = this.state
    const { changeCategory, categoryChoosen } = this.props

    return (
      <Col md={2} className="kategori">
        <h4><strong>Daftar Kategori</strong></h4>

        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item 
              key={category.id} 
              onClick={() => changeCategory(category.nama)} 
              className={categoryChoosen === category.nama && "category-active"}
              style={{ cursor: "pointer" }}>

                <Icon nama={category.nama} />
                <h5>{category.nama}</h5>

              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
