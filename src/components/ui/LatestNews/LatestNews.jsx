"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// images
import news1 from "@/assets/news1.png"
import news2 from "@/assets/news2.png"
import news3 from "@/assets/news3.png"
import news4 from "@/assets/news4.png"
import news5 from "@/assets/news5.png"

import { Box, Grid } from '@mui/material';
import Image from 'next/image';

const LatestNews=()=> {
  return (
    <Box>
      {/* main news card */}
    <Card>
      <CardMedia>
        <Image src={news1} alt="news1" width={800}/>
      </CardMedia>
      <CardContent>
        <Typography fontWeight={600} gutterBottom variant="h5" component="div">
        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
        </Typography>
        <Typography gutterBottom>
        By Jubair Ahmed - Mar 18 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
        </Typography>
      </CardContent>
    </Card>
    {/* four news card section */}
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {/* Card one */}
  <Grid item xs={6}>
  <Card>
      <CardMedia>
        <Image src={news2} alt="news2" width={800}/>
      </CardMedia>
      <CardContent>
        <Typography fontWeight={600} gutterBottom variant="h5" component="div">
        EU’s New Sanctions Aim to Cut Russia Off From World Bank
        </Typography>
        <Typography gutterBottom>
        By Jubair Ahmed - Mar 18 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* card two */}
  <Grid item xs={6}>
  <Card>
      <CardMedia>
        <Image src={news3} alt="news3" width={800}/>
      </CardMedia>
      <CardContent>
        <Typography fontWeight={600} gutterBottom variant="h5" component="div">
        Battle Analysis: Russian Tank Armada vs Ukraine
        </Typography>
        <Typography gutterBottom>
        By Jubair Ahmed - Mar 18 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* card three */}
  <Grid item xs={6}>
  <Card>
      <CardMedia>
        <Image src={news4} alt="news4" width={800}/>
      </CardMedia>
      <CardContent>
        <Typography fontWeight={600} gutterBottom variant="h5" component="div">
        France’s Largest Business Summit to Conclude on Mar 22
        </Typography>
        <Typography gutterBottom>
        By Jubair Ahmed - Mar 18 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
      <CardMedia>
        <Image src={news1} alt="news1" width={800}/>
      </CardMedia>
      <CardContent>
        <Typography fontWeight={600} gutterBottom variant="h5" component="div">
        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
        </Typography>
        <Typography gutterBottom>
        By Jubair Ahmed - Mar 18 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  
</Grid>

    </Box>
  );
}

export default LatestNews