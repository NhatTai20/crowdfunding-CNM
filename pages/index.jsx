import React from 'react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';
import { Link } from '../routes';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const CampaignIndex = ({ campaigns }) => {
  return (
    <Layout>
      <div >
        {campaigns.map((item, i) => {
          return (
            <Card sx={{ minWidth: 565 }} style={{ marginTop: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Address
                </Typography>
                <Typography variant="h5" component="div">
                  {item}
                </Typography>
              </CardContent>
              <CardActions>
                <Link route={`/campaigns/${item}`}>
                  <Button size="medium">Detail campaign</Button>
                </Link>
              </CardActions>
            </Card>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const campaigns = await factory.methods
    .getDeployedContracts()
    .call();

  return {
    props: {
      campaigns
    }
  };
}

export default CampaignIndex;