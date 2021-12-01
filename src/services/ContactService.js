import axios from "axios";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



 const getAllContacts = async () => {
  const { data } = await axios.get(API_URL +`/contact/lists`);
  console.log("check data",data)
  return data
};
const deleteContact =async(id) => {
    const{data} = await axios.delete(API_URL+`/contact/remove/${id}`);
    return data
  };
  const get =async(id) => {
    const{data} = await axios.delete(API_URL+`/contact/getById/${id}`);
    return data
  };
  const searchContact =async(input) => {
    const{data} = await axios.delete(API_URL+`/contact/search/?input=${input}`);
    return data
  };
  const insertContact = async(data) => {
    const {result} = await axios.post(API_URL+`/contact/store`,data);
    return result
  };
  const update = (data,id) => {
    return axios.put(API_URL+`/contact/update/${id}`,data);
  };
export default {

    getAllContacts,deleteContact,insertContact,update,searchContact,get
    
  };
