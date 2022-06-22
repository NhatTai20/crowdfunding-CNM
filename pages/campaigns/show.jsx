import React from "react";
import { Grid, Button } from "semantic-ui-react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";
import ContributeForm from "../../components/contributeform";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CampaignShow = (props) => {
  const items = [
    {
      header: props.manager,
      meta: "Address of manager",
      description:
        "The manager created this campaign and can create requests to withdraw money.",
      style: { overflowWrap: "break-word" },
    },
    {
      header: props.minimumContribution,
      meta: "Minimum contorbution (wei)",
      description:
        "You must contiribute at lease this much wei to became an approver.",
    },
    {
      header: props.requestCount,
      meta: "Number of requests",
      description:
        "A request tries to withdraw money from the contract. The request must be approved by approvers.",
    },
    {
      header: props.approversCount,
      meta: "Number of approvers",
      description: "Number of people who already donated to this campaign,",
    },
    {
      header: web3.utils.fromWei(props.balance, "ether"),
      meta: "Campaign balance (ether)",
      description: "The balance is how much money this campaign has to spent.",
    },
  ];
  // const renderCards = () => {
  //   const items = [
  //     {
  //       header: props.manager,
  //       meta: "Address of manager",
  //       description:
  //         "The manager created this campaign and can create requests to withdraw money.",
  //       style: { overflowWrap: "break-word" },
  //     },
  //     {
  //       header: props.minimumContribution,
  //       meta: "Minimum contorbution (wei)",
  //       description:
  //         "You must contiribute at lease this much wei to became an approver.",
  //     },
  //     {
  //       header: props.requestCount,
  //       meta: "Number of requests",
  //       description:
  //         "A request tries to withdraw money from the contract. The request must be approved by approvers.",
  //     },
  //     {
  //       header: props.approversCount,
  //       meta: "Number of approvers",
  //       description: "Number of people who already donated to this campaign,",
  //     },
  //     {
  //       header: web3.utils.fromWei(props.balance, "ether"),
  //       meta: "Campaign balance (ether)",
  //       description:
  //         "The balance is how much money this campaign has to spent.",
  //     },
  //   ];

  //   // return <Card.Group items={items} />;
  //   return (
  //     <Card sx={{ maxWidth: "500" }}>
  //       <CardMedia
  //         sx={{ height: "140" }}
  //         image="https://thumbs.dreamstime.com/z/crowdfunding-money-business-bulb-graphic-concept-76825675.jpg"
  //         component="img"
  //         alt="Crowdfunding"
  //       />
  //       (items.map((item) => (
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           {item.header}
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           {item.meta}
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           {item.description}
  //         </Typography>
  //       </CardContent>
  //       )))
  //     </Card>
  //   );
  // };

  return (
    <Layout>
      <h3 style={{marginLeft: '50px'}}>Campaign Details</h3>
      <Grid style={{marginLeft: '50px', marginRight: '50px'}}>
        <Grid.Row>
          {/* <Grid.Column width={10}>{renderCards()}</Grid.Column> */}
          <Grid.Column width={10}>
            <Card sx={{ maxWidth: "345" }}>
              <CardMedia
                sx={{ height: "140" }}
                image="https://thumbs.dreamstime.com/b/crowdfunding-crowdfunding-written-blackboard-icons-107166337.jpg"
                component="img"
                alt="Crowdfunding"
              />
              {items.map((item) => (
                <CardContent sx={{ height: "50px" }}>
                  <Typography
                    sx={{ title: "inline" }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    <p title={item.description}>
                      {item.meta}:{" "}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        sx={{ display: "inline" }}
                      >
                        {item.header}
                      </Typography>
                    </p>
                  </Typography>
                </CardContent>
              ))}
            </Card>
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={props.address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link route={`/campaigns/${props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps(props) {
  const campaign = Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();

  return {
    props: {
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address,
    },
  };
}

export default CampaignShow;
