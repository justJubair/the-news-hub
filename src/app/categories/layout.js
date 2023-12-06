import CategoryList from "@/components/ui/CategoryList/CategoryList"
import { Box, Container, Grid } from "@mui/material"


const CategoriesLayout = ({children}) => {
  return (
    <Box>
      <Container>
      <Grid marginY="20px" container spacing={4}>
        <Grid item xs={3}>
       <CategoryList/>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default CategoriesLayout
