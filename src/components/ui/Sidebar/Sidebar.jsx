"use client";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

// images
import sidebar1 from "@/assets/sidebar1.png";
import sidebar2 from "@/assets/sidebar2.png";

const Sidebar = () => {
  return (
    <Box>
      {/* main news */}
      <Card>
        <CardMedia>
          <Image src={sidebar1} alt="sidebar1" width={800} />
        </CardMedia>
        <CardContent>
          <span className="px-2 py-1 rounded text-white bg-red-600">
            Technology
          </span>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="h6"
            marginTop="8px"
            component="div"
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom variant="caption">By Jubair Ahmed - Mar 18 2023</Typography>
        </CardContent>
      </Card>
<hr />
      {/* five news card in a single column */}
    <div className="my-4">
        {/* card one */}
        <Card className="border-b">
        <div className="flex items-center justify-center px-2">
        <CardMedia>
          <Image src={sidebar1} alt="news1" width={200} />
        </CardMedia>
        <CardContent>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="subtitle2"
           
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography variant="caption" gutterBottom>By Jubair Ahmed - Mar 18 2023</Typography>
        </CardContent>
        </div>
      </Card>
        {/* card two */}
        <Card className="border-b">
        <div className="flex items-center justify-center px-2">
        <CardMedia>
          <Image src={sidebar1} alt="news1" width={200} />
        </CardMedia>
        <CardContent>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="subtitle2"
           
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography variant="caption" gutterBottom>By Jubair Ahmed - Mar 18 2023</Typography>
        </CardContent>
        </div>
      </Card>
        {/* card three */}
        <Card className="border-b">
        <div className="flex items-center justify-center px-2">
        <CardMedia>
          <Image src={sidebar1} alt="news1" width={200} />
        </CardMedia>
        <CardContent>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="subtitle2"
           
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography variant="caption" gutterBottom>By Jubair Ahmed - Mar 18 2023</Typography>
        </CardContent>
        </div>
      </Card>
        {/* card four */}
        <Card className="border-b">
        <div className="flex items-center justify-center px-2">
        <CardMedia>
          <Image src={sidebar1} alt="news1" width={200} />
        </CardMedia>
        <CardContent>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="subtitle2"
           
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography variant="caption" gutterBottom>By Jubair Ahmed - Mar 18 2023</Typography>
        </CardContent>
        </div>
      </Card>
        {/* card five */}
        <Card className="border-b">
        <div className="flex items-center justify-center px-2">
        <CardMedia>
          <Image src={sidebar1} alt="news1" width={200} />
        </CardMedia>
        <CardContent>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="subtitle2"
           
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography variant="caption" gutterBottom>By Jubair Ahmed - Mar 18 2023</Typography>
        </CardContent>
        </div>
      </Card>
    </div>
    <Image style={{width: "100%", height: "350px", objectFit: "cover"}} src={sidebar2} alt="sidebar image" />
    
    </Box>
  );
};
export default Sidebar;
