import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function PokeTarjeta({ pokedata }) {
  return (
    <Container>
      <Row>
        <Col className="col-tarjeta">
          {pokedata.map((pokemon, index) => {
            let urlImagen = "https://pokeres.bastionbot.org/images/pokemon/";
            let formatoImagen = ".png";

            return (
              <Card key={index} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={urlImagen + (index + 1) + formatoImagen}
                  style={{ width: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  {/* <Ancla ruta={pokemon.url}/> */}
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
export default PokeTarjeta;
