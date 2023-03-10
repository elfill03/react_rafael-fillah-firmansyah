import React, { useState } from "react";
import "./App.css";
import style from "./Button.module.css";
import Row from "./Row";
import RowDua from "./RowDua";
import RowSatu from "./RowSatu";
import RowTiga from "./RowTiga";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        style={{
          color: "white",
          backgroundColor: "darkgrey",
          borderRadius: 5,
          padding: 5,
          borderColor: "darkgrey",
        }}
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show && <div className="sapaan">Halo kak</div>}

      <div style={{ marginLeft: 15 }}>
        <div className="counter">
          <div>Counter: {counter}</div>
          <button
            className={style.button1}
            onClick={() => {
              setCounter((prev) => prev + 1);
            }}
          >
            +
          </button>
          <button
            className={style.button2}
            onClick={() => {
              setCounter((prev) => prev - 1);
            }}
          >
            -
          </button>
          <button
            className={style.button3}
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>

        <div style={{ color: "red", marginTop: 15 }}>Tabel Mobil (Manual)</div>
        <table>
          <tr>
            <td>No</td>
            <td>Merk</td>
            <td>Nama</td>
            <td>Warna</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Honda</td>
            <td>Jazz</td>
            <td>Silver</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Toyota</td>
            <td>Fortuner</td>
            <td>Hitam</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mitsubishi</td>
            <td>Pajero</td>
            <td>Hitam</td>
          </tr>
        </table>
        <div style={{ color: "blue", marginTop: 15 }}>
          Tabel Mobil (Component-Not Reusable)
        </div>
        <table>
          <tr>
            <td>No</td>
            <td>Merk</td>
            <td>Nama</td>
            <td>Warna</td>
          </tr>
          <RowSatu />
          <RowDua />
          <RowTiga />
        </table>
        <div style={{ color: "purple", marginTop: 15 }}>
          Tabel Mobil (Component-Reusable)
        </div>
        <table>
          <tr>
            <td>No</td>
            <td>Merk</td>
            <td>Nama</td>
            <td>Warna</td>
          </tr>
          <Row no={1} merk="Honda" nama="Jazz" warna="Silver" />
          <Row no={2} merk="Toyota" nama="Fortuner" warna="Hitam" />
          <Row no={3} merk="Mitsubishi" nama="Pajero" warna="Hitam" />
        </table>
      </div>
    </>
  );
};

export default App;
