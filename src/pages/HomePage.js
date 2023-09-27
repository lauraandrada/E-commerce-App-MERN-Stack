import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const HomePage = () => {
  const categories = [
    "Electronics and Gadgets",
    "Fashion and Apparel",
    "Home and Living",
    "Health and Beauty",
    "Sports and Outdoors",
    "Toys and Games",
    "Books and Media",
    "Automotive",
    "Food and Beverages",
    "Art and Crafts"
  ]

  return (
    <>
      <p>This is a home page</p>
      <ProductCarouselComponent />
      <Container>
      <Row xs={1} md={2} className="g-4 mt-5">
      {
        categories.map((category, idx) => <CategoryCardComponent key={idx} category={category} idx={idx}/>)
      }
      </Row>
      </Container>
    </>
  );
};

export default HomePage;
