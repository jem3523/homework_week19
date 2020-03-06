import React from "react";

function Createtableheader(props) 
{
    return (
        <tr key="{props.id}">
          <th key={props.id +"_rid"}>ID</th>
          <th key={props.id +"_rnm"}>NAME</th>
          <th key={props.id +"_rag"}>EMAIL</th>
          <th key={props.id +"_rtl"}>TITLE</th>
        </tr>
      )
}

 export default Createtableheader;