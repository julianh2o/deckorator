import { Container, Grid } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_CARDS = gql``;

const DeckView: React.FC<{ id: number }> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Foo
        </Grid>
        <Grid item xs={4}>
          Foo
        </Grid>
        <Grid item xs={4}>
          Foo
        </Grid>
        <Grid item xs={4}>
          Foo
        </Grid>
        <Grid item xs={4}>
          Foo
        </Grid>
      </Grid>
    </Container>
  );
};

export default DeckView;
