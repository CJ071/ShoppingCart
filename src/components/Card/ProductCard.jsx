import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product}) {
  return (
    <Card  style={{ width: '18rem',margin:'20px auto'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{product.title}</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          {product.description}
        </Card.Text>
        <Button style={{margin:'0 auto',display:'block'}} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;