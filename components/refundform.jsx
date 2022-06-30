import React, { useState } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import { Router } from "../routes";
import Camapign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Typography } from "@mui/material";

const RefundForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const refund = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);
    const campaign = Camapign(props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.getRefund().send({
        from: accounts[0],
      });
      // refresh page
      Router.replaceRoute(`/campaigns/${props.address}`);
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={refund} error={!!errorMessage}>
      <Message error header="Oops!" content={errorMessage} />
      <div style={{ marginBottom: 18 + "px" }}>
        <Button loading={loading} color="orange" size="large">
          WITHDRAW
        </Button>
      </div>
    </Form>
  );
};

export default RefundForm;
