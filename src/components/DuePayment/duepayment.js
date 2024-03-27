import React, { createContext, useEffect } from "react";
import "./duepayment.css";
import Dashboardmenu from "../../ReusableComponents/Layout/DashboardMenuHeader";
// import {useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomers } from "../../reduxsrc/reducers/duepaymentreducer";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import ScreenHeader from "../../ReusableComponents/ScreenHeader/ScreenHeader";

export const DueContext = createContext();
const Duepayment = () => {
  // const location=useLocation()
  const dispatch = useDispatch();
  // const customers = useSelector(
  //   (state) => state.topSlicer.duePaymentSlicer.customers
  // );
  // const isLoaded = useSelector(
  //   (state) => state.topSlicer.duePaymentSlicer.isLoaded
  // );

  const isLoaded = true;

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  useEffect(() => {
    dispatch(fetchAllCustomers());
  }, [dispatch]);

  const customers = [
    {
      _id: "123",
      firstName: "Marimuthu",
      lastName: "Rvmbecse",
      email: "r.marimuthu@gmail.com",
      phone: "9895655655",
    },
    {
      _id: "321",
      firstName: "Novac",
      lastName: "Sample",
      email: "r.marimuthu@gmail.com",
      phone: "9895655655",
    },
    {
      _id: "3213",
      firstName: "Novac1",
      lastName: "Sample1",
      email: "r.marimuthu@gmail.com",
      phone: "9895655655",
    },
    {
      _id: "3213324",
      firstName: "Novac1df",
      lastName: "Sample1",
      email: "r.marimuthu@gmail.com",
      phone: "9895655655",
    },
    {
      _id: "32133fdf24",
      firstName: "Novac1dfedr",
      lastName: "Sample1",
      email: "r.marimuthu@gmail.com",
      phone: "9895655655",
    },
  ];

  return (
    // <Dashboardmenu name={location.state.name}/>
    <>
      <Dashboardmenu />
      <ScreenHeader ScreenName={"Due Payments"} />
      {isLoaded ? (
        <>
          {
            /*customers.map((customer)=>{
                               return(
                                   <h1>{customer.firstName}</h1>
                               )
                           })*/

            <DataTable
              value={customers}
              paginator
              rows={3}
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
              paginatorLeft={paginatorLeft}
              paginatorRight={paginatorRight}
              rowsPerPageOptions={[3, 6, 9, 12]}
              sortField="_id"
              sortOrder={-1}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="_id"
                header="Customer Id"
                sortable
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="firstName"
                header="First Name"
                sortable
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="lastName"
                header="Last Name"
                sortable
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="email"
                header="Email"
                sortable
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="phone"
                header="Phone"
                sortable
                style={{ width: "20%" }}
              ></Column>
            </DataTable>
          }
        </>
      ) : (
        <>
          <h1>Customer Not Available</h1>
        </>
      )}
    </>
  );
};

export default Duepayment;
