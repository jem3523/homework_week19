import React from "react";

function Createpersonrow(props) {
  return (
    <tr key="{props.id}">
      <td key={props.id +"_id"}>{props.id}</td>
      <td key={props.id +"_nm"}>{props.name}</td>
      <td key={props.id +"_ag"}>{props.email}</td>
      <td key={props.id +"_tl"}>{props.title}</td>
    </tr>
  )
}

export default Createpersonrow;
