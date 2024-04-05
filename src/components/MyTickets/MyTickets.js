import React, { useMemo, useState } from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
import { Gavel, SchoolTwoTone, TextSnippet } from "@mui/icons-material";

// import { API_GET_CHITS_CUSTOMERS } from "@configuration/configuration";
// import Dashboarddialog from "@reusablecomponents/dashboarddialog/dashboarddialog";
// import AlertPopup from "@reusablecomponents/AlertPopup/AlertPopup";
// import MyTicketsCard from "@reusablecomponents/Card/MyTicketsCard";
// import DashboardHeader from "@reusablecomponents/Layout/DashboardMenuHeader";
// import ScreenHeader from "@reusablecomponents/ScreenHeader/ScreenHeader";

import { API_GET_CHITS_CUSTOMERS } from "../../config/configuration";
import Dashboarddialog from "../../ReusableComponents/dashboarddialog/dashboarddialog";
import AlertPopup from "../../ReusableComponents/AlertPopup/AlertPopup";
import MyTicketsCard from "../../ReusableComponents/Card/MyTicketsCard";
import DashboardHeader from "../../ReusableComponents/Layout/DashboardMenuHeader";
import ScreenHeader from "../../ReusableComponents/ScreenHeader/ScreenHeader";

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

const MyTickets = () => {
  const navigator = useNavigate();

  //sample JSON data
  const [responseObject, setResponseObject] = useState([
    {
      Name: "R Marimuthu (Self)",
      ChitValue: "5,00,000",
      Duration: "2/50",
      InstallmentAmount: "10,000",
      Divdent: "3,000",
      Status: "Non Prized",
      NextAuctionDate: "05-Sep-2022",
      NextAuctionTime: "05:30 PM",
      AuctionNo: "3",
      DueAmount: "9,000",
    },

    {
      Name: "J Muthuraja (Self)",
      ChitValue: "5,00,000",
      Duration: "2/50",
      InstallmentAmount: "10,000",
      Divdent: "3,000",
      Status: "Prized",
      NextAuctionDate: "05-Sep-2022",
      NextAuctionTime: "05:30 PM",
      AuctionNo: "46",
      DueAmount: "9,500",
    },

    {
      Name: "S Akram Khan (Self)",
      ChitValue: "5,00,000",
      Duration: "2/50",
      InstallmentAmount: "10,000",
      Divdent: "3,000",
      Status: "Auctioned",
      NextAuctionDate: "25-Sep-2022",
      NextAuctionTime: "05:30 PM",
      AuctionNo: "26",
      DueAmount: "10,000",
    },
  ]);

  //For order the Headers
  const ticketsHeadersFirstRow = useMemo(
    () => ["Name", "Chit Value", "Duration", "Installment Amount", "Divdent"],
    []
  );

  const ticketsHeadersSecondRow = useMemo(
    () => [
      "Status",
      "Next Auction Date",
      "Next Auction Time",
      "Auction No",
      "Due Amount",
    ],
    []
  );

  //Binding second row Json values
  const secondRowValuesObject = useMemo(
    () => [
      "Status",
      "NextAuctionDate",
      "NextAuctionTime",
      "AuctionNo",
      "DueAmount",
    ],
    []
  );

  //ticket card icons object
  const ticketsCardIcons = useMemo(
    () => [
      <TextSnippet style={{ fontSize: "60px", color: "green" }} />,
      <SchoolTwoTone style={{ fontSize: "60px", color: "blue" }} />,
      <Gavel style={{ fontSize: "60px", color: "orange" }} />,
    ],
    []
  );

  //which header has INR symbols
  const symbolItems = useMemo(
    () => ["Chit Value", "Installment Amount", "Divdent", "Due Amount"],
    []
  );

  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const [popupObject] = React.useState({
    type: "success",
    message: "Payment successful",
  });

  let responseData = ["firstname", "lastname", "email", "phone", "customerId"];
  let responseResult = [];
  responseData?.map((data) => {
    return responseResult.push(sessionStorage.getItem(data));
  });

  const handleClose = () => setOpen(false);

  function handleOnLoad() {
    axios
      .get(`${API_GET_CHITS_CUSTOMERS}${sessionStorage.getItem("id")}`)
      .then((response) => {
        alert(JSON.stringify(response.data));

        setResponseObject(response.data);
      })
      .catch((ex) => {
        alert(ex);
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

  // function toTitleCase(str) {
  //   return str.replace(/\w\S*/g, function (txt) {
  //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //   });
  // }

  const proceedHandler = () => {
    setIsSuccess(true);

    setOpenSuccess(false);
    setOpen(false);
  };

  const handleViewReceipts = () => {
    //Navigate to the view receipt page
    navigator("/viewreceipts");
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
      <DashboardHeader />
      <ScreenHeader ScreenName={"My Tickets"} handleOnLoad={handleOnLoad} />
      {responseObject.length > 0 && (
        <>
          {responseObject.map((_, resIndex) => {
            return (
              <>
                <MyTicketsCard
                  ticketsHeadersFirstRow={ticketsHeadersFirstRow}
                  secondRowValuesObject={secondRowValuesObject}
                  responseObject={responseObject}
                  ticketsHeadersSecondRow={ticketsHeadersSecondRow}
                  resIndex={resIndex}
                  symbolItems={symbolItems}
                  ticketsCardIcons={ticketsCardIcons}
                  payNowHandler={handleClick}
                  receiptsHandler={handleViewReceipts}
                />
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default MyTickets;
