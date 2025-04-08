import { AppBar, Badge, Box, Button, IconButton, TextField, Toolbar, Typography,  } from '@mui/material'
import { useState } from 'react';



import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../pages/Cart';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function Header(props) {
  const {cart,handleClick} = props;
  // const [searchTerm, setSearchTerm] = useState('');
  // const handleSearch = () => {
  //   console.log('Searching for:', searchTerm);
  // };
  

  return (

      <Box>
        <AppBar sx={{ bgcolor: 'black' ,margin:"0px" ,position:'static'}}>
          <Toolbar>
            <Typography variant='h4'>amazon</Typography>
            <Box sx={{ display: 'block'}}>
              {/* <TextField
                fullWidth
                placeholder="Search..."
                sx={{
                  bgcolor: 'white'
                }}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleSearch();
                }}
              /> */}

              {/* <Search placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                >
            
              </Search> */}
              {/* <Button color='#111' sx={{
                backgroundColor: '#febd69',
                color: '#111',
                '&:hover': {
                  backgroundColor: '#f3a847',
                },
                minWidth: 80,
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                px: 2,
              }}
              >Go</Button> */}
            </Box>
            <Link to='/cart'><Button aria-label="cart"
              // sx={{
              //   borderRadius: '50%',
              //   minWidth: 'auto',
              //   ml: 1,
              //   backgroundColor: 'transparent',
              //   '&:hover': {
              //     backgroundColor: 'transparent',
              //   },
              // }}
              >  
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>

            </Button></Link>

            {/* <Button color='inherit' sx={{ fontSize: '0.7rem', textTransform: 'none', ml: 1.5 }}>Sign In</Button>
            <Button color='inherit' sx={{ fontSize: '0.7rem', textTransform: 'none', mr: 0 }}>Help</Button> */}

          </Toolbar>
        </AppBar>
      </Box>
  
  )
}
