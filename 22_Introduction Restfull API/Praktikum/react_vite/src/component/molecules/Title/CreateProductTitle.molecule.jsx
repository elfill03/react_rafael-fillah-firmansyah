import React, { useState } from "react";
import { bootsraplogo } from "../../../assets";
import "./CreateProductTitle.molecule.style.css";

const CreateProductTitle = () => {
  const [language, setLanguage] = useState("en");

  const article = {
    title: {
      id: "Buat Product",
      en: "Create Product",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };
  function handleClick() {
    setLanguage(language === "en" ? "id" : "en");
  }

  return (
    <>
      <a
        className="navbar-brand d-flex justify-content-center mt-4"
        href="https://getbootstrap.com/"
      >
        <img src={bootsraplogo} alt="Bootstrap" width={50} height={44} />
      </a>
      <div className="text-center mt-4 mb-4">
        <div className="d-flex text-center">
          <h1 className="fs-4 ms-auto mt-auto mb-auto ">Choose Language: </h1>
          <button className="button-language me-auto" onClick={handleClick}>
            {language === "en" ? "En" : "Id"}
          </button>
        </div>

        <h1 className="fs-2 fw-bold">{article.title[language]}</h1>
        <h2 className="fs-4 fw-lighter">{article.description[language]}</h2>
      </div>
    </>
  );
};

export default CreateProductTitle;
