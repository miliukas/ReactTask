import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

function PostDetails(props){
   
    return (
        <div>
            <h4 align="center">Detailed post review page</h4>
            <hr></hr>
            <Table className="table table-bordered table-dark col-md-6 offset-2">
                <tbody>
                    <tr>
                    <th>User #</th>
                    <td>1asfasffffffffffffffffffffffffffffffffffffffffffffas</td>
                    </tr>
                    <tr>
                    <th>Post #:</th>
                    <td>safsa</td>
                    </tr>
                    <tr>
                    <th>Title</th>
                    <td>safsa</td>
                    </tr>
                    <tr>
                    <th>Body</th>
                    <td>safsa</td>
                    </tr>       
                </tbody>
            </Table>
        </div>
    );
}
export default PostDetails;
