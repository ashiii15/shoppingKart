import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { GlobalContext } from "./Context";

function Content() {
  const { products, setProducts } = GlobalContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredItems);
  }, [products, searchTerm]);

  const SelectSingleProduct = (productId) => {
    const selectedOne = products.find((product) => {
      return product.id === productId;
    });
    setSelectedProduct(selectedOne);
  };
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          style={{ width: "30%", marginLeft: "30rem", marginTop: "2rem" }}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={changeHandler}
        />
        {searchTerm && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={clearSearch}
          >
            Clear
          </button>
        )}
      </form>
      {selectedProduct ? (
        <SingleProduct value={selectedProduct} />
      ) : (
        <Row style={{ marginTop: "2rem", marginLeft: "1rem" }}>
          {filteredProducts?.map((item) => {
            const { id, title, description, image, price } = item;
            return (
              <Col>
                <div
                  className="card"
                  style={{ width: "18rem", cursor: "pointer" }}
                  key={id}
                >
                  <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    height={"350px"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span>
                      <b>${price}</b>
                    </span>
                    <p className="card-text">
                      {description.substring(0, 150)}...
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => SelectSingleProduct(id)}
                    >
                      <Link
                        to={`/product/${id}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Buy Now
                      </Link>
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default Content;
