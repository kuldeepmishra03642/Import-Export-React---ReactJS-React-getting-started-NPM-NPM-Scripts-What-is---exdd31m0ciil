import React, { Component, useState } from "react";
import '../styles/App.css';
import '../components/Heading';
import '../components/InputQuery';
import '../components/SubHeading';
import '../components/SubmitButton';
import Heading from "../components/Heading";
import InputQuery from "../components/InputQuery";
import SubHeading from "../components/SubHeading";
import SubmitButton from "../components/SubmitButton";

const App = () => {
  return (
    <div id="main">
      < Heading/>
      < InputQuery/>
      < SubHeading/>
      < SubmitButton/>
    </div>
  )
}


