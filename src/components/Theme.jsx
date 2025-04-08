import { Box, createTheme, ThemeProvider } from "@mui/material"

const defaultTheme=createTheme()
console.log(defaultTheme)
export default function Theme() {
  return (
    //  <ThemeProvider theme={{
    //   palette:{
    //     primary:{
    //       main:'#007FFF',
    //       dark:'#0066CC',
    //     },
    //   },
    //  }}>
    <>
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    This Box renders as an HTML section element.
  </Box>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Box>

 {/* <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width:'100vw',
    bgcolor: 'secondary.light',
    color: 'black',
    fontSize: '20px',
  }}
>
  Centered Content
</Box> */}
<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Box>

</>


    //  </ThemeProvider>
  )
}
