import { StatusBar } from "expo-status-bar";
import React from "react";
import { Home } from "../../components/Home"
import { Login } from "../../components/Login"



export default function HomeScreen() {
  return (
    <>
    <Home />
    <Login />  
    <StatusBar style="auto" />
    </>


  );
}