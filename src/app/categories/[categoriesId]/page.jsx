import { getSingleCategoryNews } from "@/utils/getSingleCategoryNews";

const DynamicNewsPage = async({searchParams}) => {
    const data = await getSingleCategoryNews(searchParams.category)
        console.log(data)
    return(
        <div>
             <p> Dynamic news page {searchParams.category} </p>
        </div>
    )}
export default DynamicNewsPage;