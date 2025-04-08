import { Box, Typography } from "@mui/material";
export default function Cart(props) {
    const products=props.cart;
    let sum=0;
    for(let i=0;i<products.length;i++){
        sum+=products[i].price;
    }
  return (
    <div>
      <Box>
      <Typography variant="h6" sx={{fontWeight:'bold'}}>Added Items</Typography>
      <hr/>
        <div>
            {products.map(product=><div key={product.id} style={{display:'flex',justifyContent:'space-between'}}>
               <Typography variant="subtitle1">{product.title}</Typography>
               <Typography variant="subtitle1">{product.price}</Typography>
            </div>)}
        </div>
        <hr/>
        <Box sx={{display:'flex'}}>
        <Typography variant="subtitle1">All products: {products.length}</Typography>
        <Typography variant="subtitle1">Total price: {sum.toFixed(2)}</Typography>
        </Box>
      </Box>
    </div>
  )
}
