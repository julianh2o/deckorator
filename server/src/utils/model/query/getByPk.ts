import { gql } from "@apollo/client/core";
import { client } from "../apolloClient";

export const getByPk = async <T,>(fragment: any, id: number) => {
    const modelName = fragment.definitions[0].typeCondition.name.value;
    const fragmentName = fragment.definitions[0].name.value;
    const query = gql`
        ${fragment}
        query get${modelName}ByPk($id: Int!) {
            ${modelName}_by_pk(id: $id) {
                id
                ...${fragmentName}
            }
        }
    `
    const res = await client.query({ query, variables: { id } })
    return res.data[`${modelName}_by_pk`] as T
}