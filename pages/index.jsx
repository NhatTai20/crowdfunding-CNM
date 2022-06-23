import React from "react";
import factory from "../ethereum/factory";
import Layout from "../components/layout";
import { Link } from "../routes";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const CampaignIndex = ({ campaigns }) => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" style={{ marginTop: "10px" }}>
          Campaign List
        </Typography>
        {campaigns.map((item, i) => {
          return (
            <Card
              key={i}
              sx={{ maxWidth: 1500 }}
              style={{ marginTop: "20px", width: "1300px" }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Title
                </Typography>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Link route={`/campaigns/${item.campaign}`}>
                  <Button size="medium">Detail campaign</Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const campaigns = await factory.methods.getDeployedContracts().call();

  return {
    props: {
      campaigns,
    },
  };
}

export default CampaignIndex;
