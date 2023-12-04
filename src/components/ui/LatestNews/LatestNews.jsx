"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// images
import news1 from "@/assets/news1.png"
import { Box } from '@mui/material';
import Image from 'next/image';

const LatestNews=()=> {
  return (
    <Box>

    <Card>
      <CardMedia>
        <Image src={news1} alt="news1" width={800}/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

export default LatestNews