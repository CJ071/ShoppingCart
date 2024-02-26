import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useShopContext from '../../context/ShopContext/ShopContext';

function ProductCard({product}) {

  const {addToCart,onSubAmountChange,SubAmount}=useShopContext()
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Card  style={{ width: '18rem',margin:'20px auto'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{product.title}</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          {product.description}
        </Card.Text>
        <Card.Text style={{textAlign:'center'}}>
         Price: {product.price}
        </Card.Text>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            min="1"
            defaultValue={quantity}
            onChange={handleQuantityChange}
            style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '6px' }}
          />
        </div>
      </Card.Body>
      <Button style={{margin:'0 auto',display:'block'}} variant="primary" onClick={()=>addToCart(product,quantity)}>Add to Cart</Button>
    </Card>
  );
}

export default ProductCard;