import { API_GET_CHITS } from "../../config/configuration";
import axios from "axios";
const Create = (data) => {
  let requestData = {
    id: 0,
    name: {
      firstName: data.payload.firstName,
      lastName: data.payload.lastName,
      middleName: "",
    },
    email: data.payload.email,
    password: data.payload.password,
    phone: data.payload.mobileNo,
  };
  return axios.post(API_GET_CHITS, requestData);
};

const RegistrationService = {
  Create,
};

export default RegistrationService;
