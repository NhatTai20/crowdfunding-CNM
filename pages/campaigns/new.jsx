import React, { useState } from "react";
import { Button, Input, Message, Form } from "semantic-ui-react";
import Layout from "../../components/layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState("");
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const createCampaign = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(minimumContribution, title) //
        .send({
          from: accounts[0],
        });
      Router.pushRoute("/");
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <h3 style={{ marginLeft: "50px", marginRight: "50px" }}>
        Create a Campaign
      </h3>
      <Form
        onSubmit={createCampaign}
        error={!!errorMessage}
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <Form.Field>
          <label>Title</label>
          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Minimum contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(event) => setMinimumContribution(event.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>
          Create
        </Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
