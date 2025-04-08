import { Grid } from "@mui/material"; // Must import from @mui/material (not @mui/system)
import { styled } from "@mui/system";

const Item = styled("div")({
  border: "1px solid #ced7e0",
  textAlign: "center",
 // padding: "16px",
});

export default function GridC() {
  return (
    <Grid container spacing={2}>
      {/* ✅ Correct: 'item' prop + breakpoint (xs, sm, md, etc.) */}
      <Grid item xs={12} md={8}>  
        <Item>md=8 (Wider on desktop)</Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>md=4 (Narrower on desktop)</Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>md=4 (Narrower on desktop)</Item>
      </Grid>
      <Grid item xs={12} md={8}>
        <Item>md=8 (Wider on desktop)</Item>
      </Grid>
    </Grid>
  );
}