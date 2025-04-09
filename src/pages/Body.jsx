import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import {products} from '../components/Data'

export default function Body(props) {
    return (
      <Box >
        <Typography variant='h5' sx={{fontWeight:'bold',textAlign:'center',mt:2}}>Featured Products</Typography>
        <Grid container sx={{justifyContent:'center'}} m={1}>
           {products.map((product)=>(
               <Grid item
                     sx={{width:'250px'}}
                     key={product.id} p={2} >
                   <Card
                       sx={{
                           display:'flex',
                           flexDirection:'column',
                           height:'100%'
                       }} >
                       <CardActionArea >
                           <CardMedia
                               component="img"
                               image={product.image}
                               alt={product.title}
                               sx={{
                                   height:'200px',
                                   objectFit:'contain',
                                   p:2,
                                   backgroundColor:"burlywood"
                               }}
                           />
                           <CardContent>
                               <Typography variant='' gutterBottom>{product.title}</Typography>
                               <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                   <Box sx={{mr:1}}>{'★'.repeat(Math.floor(product.rating))}
                                       {'☆'.repeat(5-Math.floor(product.rating))}
                                   </Box>
                                   <Typography variant='caption'>({product.rating})</Typography>
                               </Box>
                               <Typography variant='h6' color='orange'>${product.price}</Typography>

                           </CardContent>

                       <Box sx={{p:2,pt:0}}>
                           <Button variant='contained'fullWidth
                                   sx={{
                                       backgroundColor:'coral',
                                       color:'darkcyan',
                                       '&:hover':{
                                           backgroundColor:'darkgoldenrod'
                                       },
                                       textTransform:'none'
                                   }} onClick={()=>props.addToCart(product)}>Add to Cart</Button>
                       </Box>
                       </CardActionArea>

                   </Card>
               </Grid>
           ))}

        </Grid>
      </Box>
    
  )
}
