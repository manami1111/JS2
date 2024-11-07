// // import { Paper, Grid } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid2';
// // import { Button } from '@mui/material/Button';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';


// export const App = () => {
//   const box1 = 'apple';
//   const box2 = 'banana';
//   const box3 = 'grape';

//   return (
//     <Grid container spacing={3}>
//       <Grid xs={12} sm={6} md={4}>
//         <Paper elevation={3} style={{ padding: '20px' }}>{ box1 }</Paper>
//         <Button variant='text' color='secondary' size='large'>いいね</Button>
//       </Grid>
//       <Grid xs={12} sm={6} md={4}>
//         <Paper elevation={3} style={{ padding: '20px' }}>{ box2 }</Paper>
//         <Button variant='contained'  color="success" onClick={() => {
//           alert('clicked')
//         }} size='small'>いいね</Button>
//       </Grid>
//       <Grid xs={12} sm={6} md={4}>
//         <Paper elevation={3} style={{ padding: '20px' }}> {box3}</Paper>
//         <Button variant='contained' color='warning' href="#" startIcon={<SendIcon />}>いいね</Button>
//       </Grid>
//     </Grid>
//   );
// }

import { Container, Typography } from "@mui/material";
import { Weather } from "./component/Weather";

export const App = () => {
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>天気予報アプリ</Typography>
        <Weather areaCode={120000}/>
        <Weather areaCode={130000}/>
        <Weather areaCode={140000}/>
        <Weather areaCode={150000}/>
      </Container>
    </>

  )
}