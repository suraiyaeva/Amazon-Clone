import { Box, Button, Typography } from "@mui/material";
export default function Cart(props) {
    const products=props.cart;
    let sum=0;
    for(let i=0;i<products.length;i++){
        sum+=products[i].price;
    }
  return (
      <Box sx={{width:'100vw'}}>
      <Typography variant="h6" sx={{fontWeight:'bold',width:'300px',mt:2}}>Added Items</Typography>
      <hr/>
        <Box>
            {products.map(product=><div key={product.id} style={{display:'flex',justifyContent:'space-between'}}>
               <Typography variant="subtitle1">{product.title}</Typography>
               <Typography variant="subtitle1">${product.price}</Typography>
               <Button>+</Button>
               <Button>-</Button>
            </div>)}
            <hr/>
            <Typography variant="subtitle1">All products: {products.length}</Typography>
            <Typography variant="subtitle1">Total price: {sum.toFixed(1)}</Typography>
        </Box>

        <Box sx={{display:'flex',justifyContent:'space-between'}}>


        </Box>
      </Box>
  )
}
