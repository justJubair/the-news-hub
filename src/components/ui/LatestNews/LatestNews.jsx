import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async() => {
  const {data} = await getAllNews()
 
  return (
    <Box>
      {/* main news card */}
      <Card>
        <CardMedia
        
        >
          <Image src={data[0].thumbnail_url} alt="news1" width={800} height={200}/>
        </CardMedia>
        <CardContent>
          <span className="px-2 py-1 rounded text-white bg-red-600">{data[0].category}</span>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="h5"
            marginTop="10px"
            component="div"
          >
           {data[0].title}
          </Typography>
          <Typography gutterBottom>By {data[0].author.name} - {data[0].author.published_date}</Typography>
          <Typography variant="body2" color="text.secondary">
           {data[0].details.slice(0,199)+"..."}
          </Typography>
        </CardContent>
      </Card>
      {/* four news card section */}
      <Grid className="mt-2" container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {
          data.map(news=>  <Grid key={news._id} item xs={6}>
            <Card>
              <CardMedia
                sx={{
            "& img": {
              width: "100%",
              height: "250px",
              objectFit: "cover",
            },
          }}
              >
                <Image src={news.thumbnail_url} alt={news.title} width={400} height={200} />
              </CardMedia>
              <CardContent>
                <Typography
                  fontWeight={600}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                 {news.title}
                </Typography>
                <Typography gutterBottom>
                  By {news.author.name} - {news.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {news.details.slice(0,200)+"..."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>)
        }
       

       
      </Grid>
    </Box>
  );
};

export default LatestNews;
