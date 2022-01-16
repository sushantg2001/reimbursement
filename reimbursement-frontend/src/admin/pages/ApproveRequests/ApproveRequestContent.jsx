import React from "react";
import Table from "./Table"

function ApproveRequestContent() {
      return (
            <>
                  <div className="container  homeContainer mb-3 pb-0   ">
                        <h4 className="pt-4">
                              Approve Access Requests
                        </h4>
                        <p className="homePageContent pt-1 ">
                              Approve/Reject Access requests. In order to sort the entries based on ascending or descending orders, click on the columns.
                        </p>
                  </div>
                  <Table />
            </>

      );
}
export default ApproveRequestContent;