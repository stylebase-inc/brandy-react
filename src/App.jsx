import React from "react";
import UploadIcon from "./components/assets/uploadLine.svg";
import ImportIcon from "./components/assets/link-m.svg";
import SearchIcon from "./components/assets/link-m.svg";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import './App.css'
import "./components/assets/css/style.css";

function App() {

  return (
    <>
      <Header />
      <Button variant="filled" icon={UploadIcon}>Upload logo files</Button>
      <Button variant="outlined" icon={ImportIcon}>Import from URL</Button>
      <Input label="Name" type="text" placeholder="Enter your name" icon={SearchIcon} />
    </>
  )
}

export default App
