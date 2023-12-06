import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = async() => {
    const {data:categories} = await getAllCategories()
   
    return(
        <div>
             <p> HELLO I Am CategoryList </p>
        </div>
    )}
export default CategoryList;