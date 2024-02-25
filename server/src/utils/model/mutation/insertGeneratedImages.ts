import { gql } from "@apollo/client/core";
import { client } from "../apolloClient.js"
import _ from "lodash-es";

const INSERT_GENERATED_IMAGES = gql`
  mutation InsertGeneratedImages($images: [GeneratedImage_insert_input!]!) {
    insert_GeneratedImage(objects: $images) {
      returning {
        id
      }
    }
  }
`;

export const insertGeneratedImages = async (generation_id: number, type: string, images: string[]) => {
  const inserts = _.map(images, (image) => ({ generation_id, image, type }));
  const mutationResult = await client.mutate({
    mutation: INSERT_GENERATED_IMAGES,
    variables: { images: inserts }
  });
  if (mutationResult.errors && mutationResult.errors.length) throw new Error("Error during insertGeneratedImages: " + _.map(mutationResult.errors, "message"))
  return _.map(mutationResult.data.returning, "id");
}
