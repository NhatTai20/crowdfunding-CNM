import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/contributeform';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RefundForm from '../../components/refundform';

const CampaignShow = (props) => {
  console.log(props);

  const items = [
    {
      header: props.titleCompaign,
      meta: 'Title',
      description: 'The title of Campaign.',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: props.description,
      meta: 'Description',
      description: 'The description of Campaign.',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: props.manager,
      meta: 'Address of manager',
      description:
        'The manager created this campaign and can create requests to withdraw money.',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: props.minimumContribution,
      meta: 'Minimum contorbution (wei)',
      description:
        'You must contiribute at lease this much wei to became an approver.',
    },
    {
      header: props.amountGoal,
      meta: 'Amount Goal (ETH)',
      description: 'Amount Goal fund.',
    },
    {
      header: props.raiseBy,
      meta: 'Deadline ',
      description: 'Deadline of campaign.',
    },
    {
      header: web3.utils.fromWei(props.totalContribution, 'ether'),
      meta: 'Total Contribution (ETH)',
      description: 'Total contribution.',
    },
    {
      header: web3.utils.fromWei(props.balance, 'ether'),
      meta: 'Campaign balance (ETH)',
      description: 'The balance is how much money this campaign has to spent.',
    },
    {
      header: props.requestCount,
      meta: 'Number of requests',
      description:
        'A request tries to withdraw money from the contract. The request must be approved by approvers.',
    },
    {
      header: props.approversCount,
      meta: 'Number of approvers',
      description: 'Number of people who already donated to this campaign,',
    },
  ];

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h4">Campaign Details</Typography>
      </div>
      <Grid style={{ marginLeft: '50px', marginRight: '50px' }}>
        <Grid.Row>
          <Grid.Column width={9}>
            <Card sx={{ maxWidth: '500', marginBottom: '20px' }}>
              <CardMedia
                sx={{ height: '140' }}
                image="https://thumbs.dreamstime.com/b/crowdfunding-crowdfunding-written-blackboard-icons-107166337.jpg"
                component="img"
                alt="Crowdfunding"
              />
            </Card>
            <Link route={`/campaigns/${props.address}/requests`}>
              <a>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ height: '40px', fontWeight: 'bold', fontSize: '16px' }}
                >
                  View Requests
                </Button>
              </a>
            </Link>
          </Grid.Column>
          <Grid.Column width={7}>
            <Card sx={{ maxWidth: '500', marginBottom: '35px' }}>
              {items.map((item, index) => (
                <CardContent sx={{ height: 'auto' }} key={index}>
                  <Typography
                    sx={{ title: 'inline' }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    <p title={item.description}>
                      {item.meta}:{' '}
                      <Typography
                        variant="h5"
                        sx={{ display: 'inline', fontWeight: 'bold' }}
                      >
                        {item.header}
                      </Typography>
                    </p>
                  </Typography>
                </CardContent>
              ))}
            </Card>
            <RefundForm address={props.address} />
            <ContributeForm address={props.address} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps(props) {
  const getDate = (date) => {
    let d = new Date(date * 1000);
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  };
  const campaign = Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  // console.log(summary);

  return {
    props: {
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address,
      titleCompaign: summary[5],
      amountGoal: summary[6],
      description: summary[7],
      totalContribution: summary[8],
      raiseBy: getDate(summary[9]),
    },
  };
}

export default CampaignShow;
