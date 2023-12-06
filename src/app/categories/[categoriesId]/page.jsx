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

const DynamicNewsPage = async ({ searchParams }) => {
  const { data: newsCards } = await getSingleCategoryNews(
    searchParams.category
  );

  return (
    <div>
      <h3 className="font-bold">{searchParams.category.toUpperCase()}</h3>
      <Box className="my-10">
        <Grid
          className="mt-2"
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {/* Card one */}

          {newsCards.map((newsCard) => (
            <Grid key={newsCard._id} item xs={6}>
              <Card>
                <CardMedia>
                  <Image
                    width={400}
                    height={100}
                    style={{
                      objectFit: "cover",
                    }}
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
                    {newsCard?.title}
                  </Typography>
                  <Typography gutterBottom>
                    By {newsCard?.author?.name} -{" "}
                    {newsCard?.author?.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${newsCard?.details.slice(0, 250)}...`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default DynamicNewsPage;
