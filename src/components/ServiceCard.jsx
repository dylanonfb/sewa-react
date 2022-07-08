import React from "react";
import { Card, Row } from "react-bootstrap";
import {chunk} from 'lodash';

function ServiceCard({ serviceData }) {
  const data = serviceData;
  const numRows = Math.floor(serviceData.length / 4) + 1;
  const productsChunks = chunk(data,numRows);
  function createCard(d) {
    return (
      <Card className="col-md-4 col-sm-4" >
        <Card.Img
          variant="top"
          src={d.img}
          style={{
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
        <Card.Body style={{background:"#eeeeee",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
          <Card.Title style={{background:"#eeeeee",margin:"0",padding:"5px 10px",fontSize:"30px",textAlign:"left"}}>{d.title}</Card.Title>
          <Card.Text style={{MarginBottom:"20px"}}>
            <ul style={{textAlign:"left"}}>
              {d.list.map((l, index) => (
                <li key={index}>{l}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  const rows = productsChunks.map((productChunk, index) => {
    const productsCols = productChunk.map((product, index) => {
        return (
        // <Col xs="4" key={product.id}>
        //   <Product key={product.id} quantity={product.quantity} price={product.price} name={product.name} />      
        // </Col>
        createCard(product)
      );
    });
    return <Row key={index}>{productsCols}</Row>
});

return rows
}
export default ServiceCard;
