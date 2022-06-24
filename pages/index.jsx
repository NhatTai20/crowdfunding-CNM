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
import { CardMedia } from "@mui/material";
import { Grid } from "semantic-ui-react";
const CampaignIndex = ({ campaigns }) => {
  // console.log(campaigns);

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
              <Grid>
                <Grid.Row>
                  <Grid.Column width={9}>
                    <Card>
                      <CardMedia
                        sx={{ height: "290px" }}
                        image="https://image.shutterstock.com/image-photo/hand-arrange-wood-letters-campaigns-260nw-1011730201.jpg"
                        component="img"
                        alt="Crowdfunding"
                      />
                    </Card>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Title
                      </Typography>
                      <Typography variant="h5" component="div">
                        {item[1]}
                      </Typography>
                      <br />
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Description
                      </Typography>

                      <Typography variant="h5" component="div">
                        {item[3]}
                      </Typography>
                      <br />
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                        inline="true"
                      >
                        Goal:
                      </Typography>
                      <Typography variant="h5" component="div">
                        {item[2]} ETH
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link route={`/campaigns/${item[0]}`}>
                        <Button
                          size="large"
                          variant="contained"
                          color="primary"
                        >
                          Detail campaign
                        </Button>
                      </Link>
                    </CardActions>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
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
