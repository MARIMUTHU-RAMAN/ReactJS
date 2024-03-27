import React, { createContext, useState } from "react";
import "./Dashboard.css";
import {
  AccountCircle,
  Computer,
  Email,
  MobileFriendly,
} from "@mui/icons-material";
import axios from "axios";
import { Card } from "primereact/card";
import * as yup from "yup";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Button } from "primereact/button";
// import Dashboarddialog from "@reusablecomponents/dashboarddialog/dashboarddialog";
// import AlertPopup from "@reusablecomponents/AlertPopup/AlertPopup";
// import DashboardHeader from "@reusablecomponents/Layout/DashboardMenuHeader";
// import {
//   API_GET_CHITS_CUSTOMERS,
//   API_GET_CHITS_CUSTOMERS_TRANSACTIONS,
// } from "@configuration/configuration";

import Dashboarddialog from "../../ReusableComponents/dashboarddialog/dashboarddialog";
import AlertPopup from "../../ReusableComponents/AlertPopup/AlertPopup";
import DashboardHeader from "../../ReusableComponents/Layout/DashboardMenuHeader";
import {
  API_GET_CHITS_CUSTOMERS,
  API_GET_CHITS_CUSTOMERS_TRANSACTIONS,
} from "../../config/configuration";


const validationSchema = yup.object({
  chitId: yup
    .string("Enter ChitId")
    .required("ChitId Required")
    .matches(/\d{1,10}$/, "Mobile No Should be in 10 digits"),
  dueAmount: yup
    .string("Enter Due Amount")
    .required("Due Amount Required")
    .matches(/\d{1,10}$/, "Due Amount Should be in digits"),
  duration: yup
    .string("Enter Duration")
    .required("Duration Required")
    .matches(/\d{1,10}$/, "Mobile No Should be in 10 digits"),
});

export const CustomerContext = createContext();

const Dashboard = () => {
  const [responseObject, setResponseObject] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [popupObject, setPopUpObject] = React.useState({
    type: "success",
    message: "Payment successful",
  });

  let responseData = ["firstname", "lastname", "email", "phone", "customerId"];
  let responseResult = [];

  responseData?.map((data) => {
    return responseResult.push(sessionStorage.getItem(data));
  });

  const handleClose = () => setOpen(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleOnLoad() {
    axios
      .get(`${API_GET_CHITS_CUSTOMERS}${sessionStorage.getItem("id")}`)
      .then((response) => {
        setResponseObject(response.data);
      })
      .catch((ex) => {
        // alert(ex);
      });
  }

  const formik = useFormik({
    initialValues: {
      chitId: sessionStorage.getItem("id"),
      dueAmount: 0,
      nextAuctionDate: "",
      duration: 0,
    },
    validationSchema: validationSchema,
  });

  function handleClick(event) {
    event.preventDefault();
    setOpenSuccess(true);
  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const proceedHandler = () => {
    let data = {
      transactionId: 0,
      dueAmount: formik.values.dueAmount,
      nextAuctionDate: formik.values.nextAuctionDate,
      duration: formik.values.duration,
      chitId: 0,
      chit: {
        chitId: 0,
        chitValue: 0,
        totalDuration: 0,
        installmentAmount: 0,
        customerId: 0,
        customer: {
          id: 0,
          name: {
            firstName: "Marimuthu",
            lastName: "RVmbecse",
            middleName: "RVRSM",
          },
          email: "marimuthu.r@gmail.com",
          password: "Rvmbecse",
          phone: 9878897878,
        },
      },
    };
    axios
      .post(
        API_GET_CHITS_CUSTOMERS_TRANSACTIONS + "id=" + formik.values.chitId,
        data
      )
      .then(() => {
        setIsSuccess(true);
        setPopUpObject(() => ({
          type: "success",
          message: "Transaction done successfully",
        }));
      })
      .catch((error) => {
        setIsSuccess(true);
        setPopUpObject(() => ({
          type: "error",
          message: JSON.stringify(error),
        }));
      });
    setOpenSuccess(false);
    setOpen(false);
  };

  return (
    <>
      {/* Payment info */}
      <Dashboarddialog
        IsOpen={open}
        handleClose={handleClose}
        ModalTitle={"Payment Information"}
        DialogContent={
          <form>
            <TextField
              id="chitId"
              type="number"
              label="Chit Id"
              value={formik.values.chitId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.chitId && Boolean(formik.errors.chitId)}
              helperText={formik.touched.chitId && formik.errors.chitId}
              fullWidth
              variant="outlined"
              margin="dense"
            ></TextField>
            <TextField
              id="dueAmount"
              type="number"
              label="Due Amount"
              value={formik.values.dueAmount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.dueAmount && Boolean(formik.errors.dueAmount)
              }
              helperText={formik.touched.dueAmount && formik.errors.dueAmount}
              fullWidth
              variant="outlined"
              margin="dense"
            ></TextField>

            <TextField
              id="nextAuctionDate"
              type="date"
              label="Next Auction Date"
              value={formik.values.nextAuctionDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.nextAuctionDate &&
                Boolean(formik.errors.nextAuctionDate)
              }
              helperText={
                formik.touched.nextAuctionDate && formik.errors.nextAuctionDate
              }
              fullWidth
              variant="outlined"
              margin="dense"
            ></TextField>
            <TextField
              id="duration"
              type="text"
              label="Duration"
              value={formik.values.duration}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.duration && Boolean(formik.errors.duration)}
              helperText={formik.touched.duration && formik.errors.duration}
              fullWidth
              variant="outlined"
              margin="dense"
            ></TextField>
          </form>
        }
        onCancelHendler={handleClose}
        onClickHandler={handleClick}
      />
      {/* Payment Confirmation */}
      <Dialog open={openSuccess} onClose={handleClose}>
        <DialogTitle>Payment Confirmation</DialogTitle>
        <DialogContent>
          <form> Are you sure to proceed the Payment?</form>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => setOpenSuccess((prev) => !prev)}
          >
            Cancel
          </Button>
          <Button onClick={proceedHandler}>Proceed</Button>
        </DialogActions>
      </Dialog>

      {/* Success SnackBar */}
      <AlertPopup
        IsOpen={isSuccess}
        PopupMessage={popupObject.message}
        // PopupPosition={"top-center"}
        handleClose={() => setIsSuccess((prev) => !prev)}
        type={popupObject.type}
      />

      <div onLoad={handleOnLoad}>
        <CustomerContext.Provider value={sessionStorage.getItem("firstName")}>
          <DashboardHeader />
        </CustomerContext.Provider>
      </div>
      <section>
        <article className="article-header">
          <AccountCircle fontSize={"32"} className="article-user-icon" />
          <div className="user-details">
            <h3> {`Welcome , R Marimuthu`} </h3>
            <div className="user-sub-items">
              <h3 className="user-card-details">
                <MobileFriendly /> {`8778785455`} <Email />
                {`r.marimuthu@novactech.in`}
              </h3>
            </div>
          </div>
        </article>
        {responseObject.length > 0 && (
          <>
            {responseObject.map((response, index) => {
              return (
                <>
                  <Card key={crypto.randomUUID()}>
                    <section>
                      {/* Chit Card Structure */}
                      <div className="chit-card-customerid">
                        <button className="cutomerid-button">
                          CustomerID: {response.customerId}
                        </button>
                      </div>
                      <div className="chit-card">
                        <div className="chit-card-icons">
                          <Computer />
                        </div>
                        {Object.keys(responseObject[0]).map((item) => {
                          return (
                            <>
                              <div>
                                <span className="chit-items">
                                  {toTitleCase(item)}
                                </span>
                                <p className="chit-items">
                                  {responseObject[index]?.[item]}
                                </p>
                              </div>
                            </>
                          );
                        })}
                        <div className="chit-card-paybutton">
                          <button
                            className="pay-button"
                            onClick={handleClickOpen}
                          >
                            Pay now
                          </button>
                        </div>
                      </div>
                      {/* ---------- */}
                    </section>
                  </Card>
                </>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Dashboard;
