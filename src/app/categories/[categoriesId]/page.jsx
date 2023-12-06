import { getSingleCategoryNews } from "@/utils/getSingleCategoryNews";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({ searchParams }) => {
  const { data: newsCards } = await getSingleCategoryNews(
    searchParams.category
  );

  return (
    <div>
      <h3 className="font-bold">{searchParams.category.toUpperCase()}</h3>
      <Box>
        <Grid
          className="mt-2"
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {/* Card one */}

          {newsCards.map((newsCard) => (
            <Grid key={newsCard._id} item xs={6}>
            <Link href={`/${newsCard.category.toLowerCase()}/${newsCard._id}`}>
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
                  <Image
                    width={400}
                    height={100}
                    src={newsCard?.thumbnail_url}
                    alt={newsCard.title}
                  />
                </CardMedia>
                <CardContent>
                  <span className="px-2 py-1 rounded text-white bg-red-600">
                    {newsCard?.category}
                  </span>
                  <Typography
                    fontWeight={600}
                    gutterBottom
                    variant="h6"
                    marginTop={2}
                    component="div"
                  >
                    {newsCard?.title.length>30 ? newsCard?.title.slice(0,30)+ '...' : newsCard?.title}
                  </Typography>
                  <Typography gutterBottom>
                    By {newsCard?.author?.name} -{" "}
                    {newsCard?.author?.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {newsCard?.details.length>200 ? newsCard?.details.slice(0,200)+"..." : newsCard?.details}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default DynamicNewsPage;
