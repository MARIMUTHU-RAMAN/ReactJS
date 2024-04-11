import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncThunkApiData } from "../redux/FetchApiSlicer";
import MaterialTable from "../reusableComponents/MaterialTable";

function FetchApiData() {
  const [render, setRender] = useState();
  const [userID, setUserID] = useState(0);

  const usersListDetails = useSelector(
    (state) => state.multipleReducers.fetchApiDataReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncThunkApiData(userID));
  }, [dispatch, render, userID]);

  const loadRecordHandler = () => {
    if (document.getElementById("txtUserId").value) {
      setUserID(document.getElementById("txtUserId").value);
      setRender(crypto.randomUUID());
      dispatch(
        getAsyncThunkApiData(document.getElementById("txtUserId").value)
      );
    }
  };

  console.log("usersListDetails.usersList", usersListDetails?.usersList);
  return (
    <div>
      {usersListDetails.isLoading ? (
        <>
          <br />
          <input
            id="txtUserId"
            title={`Enter your user id`}
            placeholder={`Enter your user id`}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={loadRecordHandler}>Get Record</button>
          <br />
          <br />
          <MaterialTable
            isObject
            tableData={
              usersListDetails.usersList[usersListDetails.usersList.length - 1]
            }
          />
        </>
      ) : (
        "Data Fetching...."
      )}
    </div>
  );
}

export default FetchApiData;
