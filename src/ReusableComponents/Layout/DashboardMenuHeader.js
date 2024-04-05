import React, { useContext } from "react";
import { Menubar } from "primereact/menubar";
import LogoPath from "../../assets/novac.jfif";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../../components/Dashboard/Dashboard";

function DashboardMenuHeader() {
  const navigator = useNavigate();
  const firstName = useContext(CustomerContext);
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigator("/dashboard"),
    },
    {
      label: "MyTickets",
      icon: "pi pi-ticket",
      command: () => navigator("/mytickets"),
    },
    {
      label: "DuePayments",
      icon: "pi pi-money-bill",
      command: () => navigator("/duepayments", { state: { name: firstName } }),
    },
    {
      label: "Receipts",
      icon: "pi pi-book",
      command: () => navigator("/viewreceipts"),
    },
    { label: "More", icon: "pi pi-search" },
    {
      items: [
        { label: "Branch Locator", icon: "pi pi-globe" },
        { label: "New/Vacancy Chit Group", icon: "pi pi-plus" },
        { label: "FAQ", icon: "pi pi-question-circle" },
      ],
    },
  ];

  return (
    <div>
      <div className="dashboard-items">
        <img alt="logo" src={LogoPath} className="dashboard-image" />
        <Menubar key={items.label} model={items}></Menubar>
        <header>
          <div className="user-icon-details">
            <h5>Hi {sessionStorage.getItem("firstName") ?? "Anonymous"}</h5>
            <AccountCircle className="article-user-icon-right" fontSize="20" />
          </div>
        </header>
      </div>
    </div>
  );
}

export default DashboardMenuHeader;
