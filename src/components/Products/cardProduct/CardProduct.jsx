import {
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Card.module.css";

const CardProduct = ({ image, title, price, categ, desc, id }) => {
  const { category } = useParams();

  return (
    <Card className=" col-lg-4 col-md-6 col-sm-12 py-2 ml-2">
      {/* <Card maxW="sm" className={styles.card}>
        <CardBody h='300px'>
          <div className={styles.imgCont}>
            <Image
              src={image}
              alt={title}
              borderRadius="lg"
              className={styles.imagen}
            />
          </div>

          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              fontFamily="font-family: 'Montserrat', sans-serif;"
            >
              {title}
            </Heading>
            
            <Text color="blue.600" fontSize="2xl">
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider pt="2" flex="1" />
        <ButtonGroup>
          <CardFooter flex="1" alignItems="end">
            {category !== undefined ? (
              <Link key={id} to={`${id}`}>
                <Button variant="solid" colorScheme="blue">
                  {" "}
                  Buy now
                </Button>
              </Link>
            ) : (
              <Link key={id} to={`${categ}/${id}`}>
                <Button variant="solid" colorScheme="blue">
                  {" "}
                  Buy now
                </Button>
              </Link>
            )}{" "}
          </CardFooter>
        </ButtonGroup>
      </Card> */}
      
        <div className={ `card ${styles.card2}`}>
          <img src={image} alt={title} className={styles.img} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <p>Precio: ${price}</p>
            
          </div>
          <Divider pt="2" flex="1" />
        <ButtonGroup >
          <CardFooter flex="1" alignItems="end">
            {category !== undefined ? (
              <Link key={id} to={`${id}`}>
                <Button variant="solid" colorScheme="blue">
                  {" "}
                  Ver Detalle
                </Button>
              </Link>
            ) : (
              <Link key={id} to={`${categ}/${id}`}>
                <Button variant="solid" colorScheme="blue">
                  {" "}
                  Ver Detalle
                </Button>
              </Link>
            )}{" "}
          </CardFooter>
        </ButtonGroup>
          
        </div>
      
    </Card>
  );
};

export default CardProduct;
