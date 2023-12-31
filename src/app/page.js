import LatestNews from "@/components/ui/LatestNews/LatestNews"
import Sidebar from "@/components/ui/Sidebar/Sidebar"
import { Grid } from "@mui/material"



const HomePage = () => {
  return (
    <>
     
     <Grid marginY="20px" container spacing={4}>
        <Grid item xs={8}>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
            <Sidebar/>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
