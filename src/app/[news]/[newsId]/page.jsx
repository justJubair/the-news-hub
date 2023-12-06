import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
  const { data: singleNews } = await getSingleNews(params.newsId);

  return (
    <Box sx={{marginTop: "50px"}}>
      <Container>
        <Grid container spacing={2}>
            {/* image */}
          <Grid item lg={6}>
            <Image src={singleNews.thumbnail_url} alt={singleNews.title} width={800} height={400}/>
            <Grid container marginTop={1} spacing={2}>
          <Grid item lg={6}>
            <Image src={singleNews.image_url} alt={singleNews.title} width={800} height={400}/>
          </Grid>
          <Grid item lg={6}>
          <Image src={singleNews.image_url} alt={singleNews.title} width={800} height={400}/>
          </Grid>
        </Grid>
          </Grid>

          <Grid item lg={6}>
            <Box>
                <Typography variant="h4" fontWeight={600} >{singleNews.title}</Typography>
                <Box className="flex items-center gap-2 mt-4">
                <Avatar alt="Remy Sharp" src={singleNews.author.img} />
                    <Typography variant="caption">By {singleNews.author.name} - {singleNews.author.published_date}</Typography>
                </Box>
                <Typography whiteSpace={"pre-line"} variant="subtitle2" color={"gray"} marginTop={2}>
                    {singleNews.details}
                </Typography>
                <Typography variant="h6" fontWeight={600} marginTop={2}>``Many desktop publishing packages and web page editors now use as their default model text!</Typography>
                <Typography variant="caption" color={"gray"}>- {singleNews.author.name}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default NewsDetailPage;
