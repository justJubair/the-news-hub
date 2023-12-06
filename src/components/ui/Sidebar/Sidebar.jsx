"use client";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

// images
import sidebar1 from "@/assets/sidebar1.png";

const Sidebar = () => {
  return (
    <Box>
      <Card>
        <CardMedia>
          <Image src={sidebar1} alt="news1" width={800} />
        </CardMedia>
        <CardContent>
          <span className="px-2 py-1 rounded text-white bg-red-600">
            Technology
          </span>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="h5"
            marginTop="10px"
            component="div"
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom>By Jubair Ahmed - Mar 18 2023</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Sidebar;
