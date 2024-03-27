import React from "react";
import DashboardHeader from "../../ReusableComponents/Layout/DashboardMenuHeader";
import ScreenHeader from "../../ReusableComponents/ScreenHeader/ScreenHeader";

function ViewReceipts() {
  return (
    <div>
      <DashboardHeader />
      <ScreenHeader ScreenName={"View Receipts"} />
    </div>
  );
}

export default ViewReceipts;
