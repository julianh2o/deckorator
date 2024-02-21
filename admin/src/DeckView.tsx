import { Button, Container, Grid } from "@mui/material";
import { useMutation, gql } from "@apollo/client";
import React from "react";
import useDeck from "./hooks/useDeck";
import { v4 as uuidv4 } from 'uuid';

const CREATE_GENERATION = gql`
mutation CreateGeneration($objects: [Generation_insert_input!]!) {
  insert_Generation(objects: $objects) {
    returning {
      id
    }
  }
}
`

const DeckView: React.FC<{ id: number }> = ({ id }) => {
  const [deck] = useDeck(id);
  const [generateMutation, {data,loading,error}] = useMutation(CREATE_GENERATION);
  if (!deck) return "Loading...";

  const generate = async (id: number) => {
    await generateMutation({variables: {
      objects: [{
        card_id: id,
        batch: uuidv4(),
        prompt: null,
        variationText: null,
        config: null,
      }]
    }});
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {deck.DeckCards.map((card: any) => <Grid item xs={4}>
          {card.name}
          <Button onClick={() => generate(card.id)}>Generate</Button>
        </Grid>)}
      </Grid>
    </Container>
  );
};

export default DeckView;
