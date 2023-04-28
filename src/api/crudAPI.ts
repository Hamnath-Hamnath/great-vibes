import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstant";

const createItems = async (items: {}) => {
  try {
    const data: {} | any = await axios.post(
      `${API_BASE_URL}/api/v1/details`,
      items
    );
    return data;
  } catch (error) {
    console.log(`error from create api`, error);
  }
};

const readItems = async () => {
  try {
    const { data }: {} | any = await axios.get(
      `${API_BASE_URL}/api/v1/details`
    );
    return data;
  } catch (error) {
    console.log(`error from read api`, error);
  }
};

const editItems = async (id: number|string,items: {}) => {
  try {
    const data: {} | any = await axios.post(
      `${API_BASE_URL}/api/v1/details/${id}`,
      items
    );
    return data;
  } catch (error) {
    console.log(`error from edit api`, error);
  }
};

const deleteItems = async (id: string) => {
  try {
    const data = await axios.delete(`${API_BASE_URL}/api/v1/details/${id}`);
    return data;
  } catch (error) {
    console.log(`error from delete api`, error);
  }
};

export { createItems, deleteItems, editItems, readItems };
