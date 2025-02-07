import React, { Component } from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, Categories, NavbarComponent, Menus } from "./components";
import { API_URL } from "./utils/constants";
import axios from "axios";
import Swal from "sweetalert2";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryChoosen: "Makanan",
      carts: []
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "/products?category.nama=" + this.state.categoryChoosen)
      .then((res) => {
        console.log("Data yang diterima:", res.data);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
    
      axios
      .get(API_URL + "/keranjangs")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.error("Error fetching menus: ", error);
      });
      
  }

  componentDidUpdate(prevState){
    if(this.state.carts !== prevState.carts){
      axios
      .get(API_URL + "/keranjangs")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.error("Error fetching menus: ", error);
      });
    }
  }

  changeCategory = (value) => {
    const menuContainer = document.querySelector(".menu-container");
    if (menuContainer) {
      menuContainer.classList.add("menu-transition-hidden");
    }

    this.setState({
      categoryChoosen: value,
      menus: [],
    });

    axios
      .get(API_URL + "/products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.error("Error fetching menus: ", error);
      });
  };

  addToCart = (value) => {
    axios
      .get(API_URL + "/keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
  
          axios
            .post(API_URL + "/keranjangs", cart)
            .then((res) => {
              Swal.fire({
                title: "Ditambahkan ke Keranjang!",
                icon: "success",
                draggable: true,
                timer: 1500,
              });
              // Update state after adding to cart
              this.updateCarts();
            })
            .catch((error) => {
              console.error("Error adding to cart: ", error);
            });
        } else {
          const cart = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };
  
          axios
            .put(API_URL + "/keranjangs/" + res.data[0].id, cart)
            .then((res) => {
              Swal.fire({
                title: "Ditambahkan ke Keranjang!",
                icon: "success",
                draggable: true,
                timer: 1500,
              });
              // Update state after updating cart
              this.updateCarts();
            })
            .catch((error) => {
              console.error("Error updating cart: ", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching cart: ", error);
      });
  };
  
  // New method to update carts state
  updateCarts = () => {
    axios
      .get(API_URL + "/keranjangs")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.error("Error fetching carts: ", error);
      });
  };

  render() {
    const { menus, categoryChoosen, carts } = this.state;
    return (
      <ErrorBoundary>
        <div className="App">
          <NavbarComponent />
          <div className="py-4 text-center">
            <Container fluid className="px-5">
              <Row>
                <Categories changeCategory={this.changeCategory} categoryChoosen={categoryChoosen} />
                <Col>
                  <h5>
                    <strong>Daftar Produk</strong>
                  </h5>
                  <hr />
                  <Row>
                    {menus && menus.map((menu) => 
                    <Menus 
                    key={menu.id} 
                    menu={menu} 
                    addToCart={this.addToCart}
                    />)}
                  </Row>
                </Col>
                <Hasil carts={carts} />
              </Row>
            </Container>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
