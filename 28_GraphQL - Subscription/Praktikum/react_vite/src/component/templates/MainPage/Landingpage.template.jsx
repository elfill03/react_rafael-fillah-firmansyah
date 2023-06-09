import { gql, useQuery } from "@apollo/client";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkBs } from "../../atoms";
import { JoinLanding, LandingPageTitle } from "../../molecules";
import { Footer, Navbar } from "../../organism";

import "./Landingpage.template.style.css";

const GetProductlist = gql`
  query MyQuery {
    List_products {
      id
      productcategory
      productdescription
      productfreshness
      productimage
      productname
      productprice
    }
  }
`;

const Landingpage = ({ onNavigate }) => {
  const { loading, error, data } = useQuery(GetProductlist);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const products = data.List_products;

  return (
    <>
      <LinkBs />
      <Navbar />
      <LandingPageTitle onNavigate={onNavigate} />
      <div className="container-fluid mt-4 mb-5">
        <h1 className="fw-bold" style={{ fontSize: "48px" }}>
          Product List
        </h1>
        <div className="row mt-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <center>
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src={product.productimage}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.productname}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {product.productdescription}
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                      }}
                    >
                      View Detail
                    </Button>
                  </Card.Body>
                </Card>
              </center>
            </div>
          ))}
        </div>
      </div>
      <JoinLanding />
      <Footer />
    </>
  );
};

export default Landingpage;
