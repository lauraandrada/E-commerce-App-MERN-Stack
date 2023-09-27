import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = (category, idx) => {
  const images = [
    "images/Electronics and Gadgets",
    "images/Fashion and Apparel",
    "images/Home and Living",
    "images/Health and Beauty",
    "images/Sports and Outdoors",
    "images/Toys and Games",
    "images/Books and Media",
    "images/Automotive",
    "images/Food and Beverages",
    "images/Art and Crafts",
  ];
  return (
    <Card>
      <Card.Img crossOrigin="anonymous" variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title> {category.category} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list" style={{ cursor: "pointer" }}>
          <Button variant="primary">Go to category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
