import { Box, createTheme } from "@mui/material"

const defaultTheme=createTheme()
console.log(defaultTheme)
export default function Theme() {
  return (
    <Box m={3} p={2} color="primary.main" bgcolor="orange">
      Styled Box
    </Box>
  )
}
