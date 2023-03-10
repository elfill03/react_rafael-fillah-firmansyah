import React from "react";

const Row = (props) => {
  const { no, merk, nama, warna } = props;
  return (
    <>
      {/* <tr>
        <td>{props.no}</td>
        <td>{props.merk}</td>
        <td>{props.nama}</td>
        <td>{props.warna}</td>
      </tr> */}
      <tr>
        <td>{no}</td>
        <td>{merk}</td>
        <td>{nama}</td>
        <td>{warna}</td>
      </tr>
    </>
  );
};
export default Row;
