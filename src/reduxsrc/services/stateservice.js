import { EXPRESS_URL, Url } from "../../config/configuration";
import axios from "axios";
import { AES } from "crypto-js";
const secretPass = "wfiyfryefv";
const Save = (data) => {
  alert(data);
  const obj = {
    customerId: data.customerId,
    firstName: AES.encrypt(
      JSON.stringify(data.firstName),
      secretPass
    ).toString(),
    lastName: AES.encrypt(JSON.stringify(data.lastName), secretPass).toString(),
    email: data.email,
    password: AES.encrypt(JSON.stringify(data.password), secretPass).toString(),
    mobileNo: data.mobileNo,
  };

  return axios.post(EXPRESS_URL + "api/customers", obj);
};

const StateService = {
  Save,
};

export default StateService;
