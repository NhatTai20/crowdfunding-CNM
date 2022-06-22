import React from "react";
import { Button, Table } from "semantic-ui-react";
import Layout from "../../../components/layout";
import { Link } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/requestrow";
import { Typography } from "@mui/material";

const RequestIndex = (props) => {
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRows = () => {
    const requests = JSON.parse(props.requests);
    return requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          request={request}
          address={props.address}
          id={index}
          approversCount={props.approversCount}
        />
      );
    });
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4">Requests</Typography>
      </div>
      <Link route={`/campaigns/${props.address}/requests/new`}>
        <a>
          <Button
            primary
            floated="right"
            style={{ marginBottom: 10, marginRight: 50 }}
          >
            Add Request
          </Button>
        </a>
      </Link>
      <div style={{ marginRight: 50, marginLeft: 50 }}>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Id</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{renderRows()}</Body>
        </Table>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(props) {
  const campaignAddress = props.query.address;
  const campaign = Campaign(campaignAddress);

  const requestCount = await campaign.methods.requestCount().call();
  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((_, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  const approversCount = await campaign.methods.approversCount().call();

  return {
    props: {
      address: campaignAddress,
      requests: JSON.stringify(requests),
      approversCount,
      requestCount,
    },
  };
}

export default RequestIndex;
