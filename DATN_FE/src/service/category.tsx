import { axiosservice } from "../config/API";
import { IcategoryLite } from "../interface/category";


export const updateCategory = async (id?: string, category?: IcategoryLite) => {
  try {
    const { data } = await axiosservice.put(`/updatecategory/${id}`, category);
    return data;
  } catch (error: any) {
    console.log("Error updating category:", error.response?.data || error.message);
    throw error;  
  }
};

export const getAllCategories = async () => {
  try {
    const { data } = await axiosservice.get("category");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryByID = async (id?: string) => {
  try {
    const { data } = await axiosservice.get(`/category/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (category: IcategoryLite) => {
  try {
    const { data } = await axiosservice.post("addcategory", category);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const delCategory = async (pid?: string) =>{
  try {
    const {data} = await axiosservice.delete(`/category/${pid}`);
return data;
  } catch (error)  {
    console.log(error);
    
  }
}

