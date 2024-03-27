import { Card } from "@mui/material";
import React from "react";
import "../../components/MyTickets/MyTickets.css";

function MyTicketsCard(props) {
  const SymbolItems = props.symbolItems ?? [];

  return (
    <div className="ticket-card-container">
      <div className="ticket-chit-id-container">
        <button className="ticket-chit-id">
          Chit ID - {localStorage.getItem("chitid")}
        </button>
      </div>
      <Card className="custom-card">
        <div style={{ display: "flex", margin: "10px" }}>
          <div className="tickets-card-icon">
            {props.ticketsCardIcons[props.resIndex]}
          </div>
          <div style={{ flexGrow: 12 }}>
            <div className="row">
              {/* First row */}

              {props.ticketsHeadersFirstRow?.map((header, index) => (
                <>
                  <div className="col" key={index}>
                    <h5 className="ticket-row-header" title={header}>{header}</h5>
                    <h4 className="ticket-row-header-value" title={Object.values(props.responseObject[props.resIndex])[
                          index
                        ]}>
                     
                      {`${SymbolItems.includes(header) ? "₹" : ""}`}
                      {
                        Object.values(props.responseObject[props.resIndex])[
                          index
                        ]
                      }{" "}
                      {header === "Installment Amount" ? (
                        <span style={{ color: "gray", fontWeight: "400" }}>
                          /Month
                        </span>
                      ) : (
                        ""
                      )}
                    </h4>
                  </div>
                  <div
                    style={{
                      display:
                        index === props.ticketsHeadersFirstRow.length - 1
                          ? ""
                          : "none",
                    }}
                  >
                    <p>
                      <button
                        className="ticket-pay-button"
                        onClick={props.payNowHandler}
                      >
                        Pay Now
                      </button>
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div className="row">
              {/* Second row */}
              {Object.values(props.ticketsHeadersSecondRow).map(
                (header, index) => (
                  <>
                    <div className="col" key={index}>
                      <h5 className="ticket-row-header">{header}</h5>
                      <h4 className="ticket-row-header-value">
                        {`${SymbolItems.includes(header) ? "₹" : ""}`}
                        {
                          props.responseObject[props.resIndex]?.[
                            props.secondRowValuesObject[index]
                          ]
                        }{" "}
                        {header === "Installment Amount" ? (
                          <span style={{ color: "gray", fontWeight: "400" }}>
                            /Month
                          </span>
                        ) : (
                          ""
                        )}
                      </h4>
                    </div>
                    <div
                      style={{
                        display:
                          index === props.ticketsHeadersSecondRow.length - 1
                            ? ""
                            : "none",
                      }}
                    >
                      <p>
                        <button
                          className="ticket-receipts-button"
                          onClick={props.receiptsHandler}
                        >
                          View Receipts
                        </button>
                      </p>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MyTicketsCard;
