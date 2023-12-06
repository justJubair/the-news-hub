import { CircularProgress } from "@mui/material";

const loading = () => {
    return(
        <div className="min-h-screen flex justify-center items-center">
            <CircularProgress color="inherit" />
        </div>
    )}
export default loading;