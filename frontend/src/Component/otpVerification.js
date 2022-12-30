import React, { useState } from "react";
import { Container, TextInput, Button, Paper, Title, Text } from '@mantine/core';
import Util from "./Service/util"
import axios from "axios";
import { showNotification } from '@mantine/notifications';

function OTPVerification() {
  const util = new Util()
  const [OTP, setOTP] = useState(-1)
  const verifyOTP = async () => {
    try {
      let user = util.getMail()
      let res = await axios.get("/api/signup/verify?email=" + user + "&otp=" + OTP)
      localStorage.setItem("token", res.data)
      showNotification({
        title: "Success",
        message: "OTP Verified, Please Login",
        autoClose: 4000,
        color: "green"
      })
      setTimeout(() => {
        window.location.href = "/login"
      }, 2000)
    }
    catch (err) {
      console.log(err)
      if (err?.response?.data == "Invalid Otp") {
        showNotification({
          title: "Error",
          message: "Incorrect OTP",
          autoClose: 4000,
          color: "red"
        })
      }
      else {
        showNotification({
          title: "Error",
          message: "Internal Server Error",
          autoClose: 4000,
          color: "red"
        })
      }
    }
  }

  return (

    <Container size={520}>
      <Paper withBorder shadow="md" p={30} mt={110} radius="md">
        <Title style={{ textAlign: "center" }}>OTP Verification</Title>
        <Text mt={15}>Please enter the OTP shared through email</Text>
        <TextInput size="lg" mt={15} placeholder="Enter OTP" onChange={(e) => { setOTP(e.target.value) }} required />
        <Button fullWidth mt="xl" onClick={verifyOTP}>
          Submit
        </Button>
      </Paper>
    </Container>
  )
}
export default OTPVerification