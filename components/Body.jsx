import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import {products} from './Data'


export default function Body(props) { 
  return (
    
      <Box>
        <Typography variant='h5' sx={{fontWeight:'bold',textAlign:'center'}}>Featured Products</Typography>
        <Grid container spacing={3}>
            {products.map((product)=>(
                <Grid  item xs={12} sm={6} md={3} key={product.id} >
                    <Card sx={{display:'flex',flexDirection:'column'}} >
                        <CardActionArea>
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
                            <Typography variant=''>{product.title}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box sx={{mr:1}}>{'★'.repeat(Math.floor(product.rating))}
                                {'☆'.repeat(5-Math.floor(product.rating))}
                            </Box>
                            <Typography variant='caption'>({product.rating})</Typography>
                            </Box>
                            <Typography variant='h6' color='orange'>${product.price}</Typography>

                        </CardContent>
                        </CardActionArea>
                        <Box sx={{p:2,pt:0}}>
                        <Button variant='contained'fullWidth sx={{backgroundColor:'coral',color:'darkcyan',
                            '&:hover':{
                              backgroundColor:'darkgoldenrod'
                            },
                            textTransform:'none'
                        }} onClick={()=>props.addToCart(product)}>Add to Cart</Button>
                        </Box>

                    </Card>
                </Grid>
            ))}
        </Grid>
      </Box>
    
  )
}
