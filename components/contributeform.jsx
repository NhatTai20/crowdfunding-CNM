import React, { useState } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import { Router } from "../routes";
import Camapign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Typography } from "@mui/material";

const ContributeForm = (props) => {
  const [contribution, setContribution] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const contribute = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setLoading(true);
    const campaign = Camapign(props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contribution, "ether"),
      });
      // refresh page
      Router.replaceRoute(`/campaigns/${props.address}`);
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
    setContribution("");
  };

  return (
    <Form onSubmit={contribute} error={!!errorMessage}>
      <Form.Field>
        <Typography variant="h5" color={"orange"}>
          <strong>Amount to contribute</strong>
        </Typography>
        <Input
          label="ETH"
          labelPosition="right"
          value={contribution}
          onChange={(event) => setContribution(event.target.value)}
        />
      </Form.Field>
      <Message error header="Oops!" content={errorMessage} />
      <div style={{ marginTop: 18 + "px" }}>
        <Button loading={loading} color="orange" size="large">
          CONTRIBUTE
        </Button>
      </div>
    </Form>
  );
};

export default ContributeForm;
