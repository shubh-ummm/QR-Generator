import React, { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";

const QR_Generator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState("Type Something ");

  const handleGenerate=()=>{
    setQRCode(input);
  }
  return (
    <div>
      <div>
        <h1>QR Generator</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          className="input-field"
          type="text"
          placeholder="type here"
          autoFocus="true"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          style={{
            margin: "10px",
          }}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div className="QR">
        <QRCode value={qrCode} bgColor="#242424" fgColor="#98FB98" level="H" />
      </div>
    </div>
  );
};

export default QR_Generator;
