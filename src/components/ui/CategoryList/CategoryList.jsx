import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async() => {
    const {data:categories} = await getAllCategories()
   
    return(
        <Box>
             <Typography variant="h6">
                Categories
             </Typography>
             <Divider/>
             <Stack rowGap={1} sx={{mt: 2.5}}>
                {
                    categories.map(category=> <Button variant="outlined" key={category.id}>
                       <Link href= {`/categories/news?category=${category.title.toLowerCase()}`}> {category.title}</Link>
                    </Button>)
                }
             </Stack>
        </Box>
    )}
export default CategoryList;