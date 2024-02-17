import React from "react";
import {
  Filter,
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  DateField,
  SimpleForm,
  TextInput,
  TopToolbar,
  ListButton,
  NumberField,
  NumberInput,
  Show,
  SimpleShowLayout,
} from "react-admin";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

const DeckTemplateCardFilter = (props: object) => (
  <Filter {...props}>
    <TextInput label="Search by Identifier" source="identifier" alwaysOn />
  </Filter>
);

export const DeckTemplateCardList = (props: object) => (
  <List filters={<DeckTemplateCardFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export const DeckTemplateCardShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);

const DeckTemplateCardTitle = ({ record }: { record?: { title: string } }) => {
  return <span>DeckTemplateCard: {record ? `${record.title}` : ""}</span>;
};

const DeckTemplateCardEditActions = ({
  basePath,
  data,
}: {
  basePath?: string;
  data?: object;
}) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} label="Back" />
  </TopToolbar>
);

export const DeckTemplateCardEdit = (props: object) => (
  <Edit
    title={<DeckTemplateCardTitle />}
    actions={<DeckTemplateCardEditActions />}
    {...props}
  >
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const DeckTemplateCardCreate = (props: object) => {
  const location = useLocation();
  const { deckTemplateId: deckTemplateIdString } = parse(location.search);
  console.log(location);
  if (!deckTemplateIdString)
    throw new Error("Must have deck template selected!");
  const deckTemplateId = parseInt(deckTemplateIdString);
  console.log({ deckTemplateId });

  return (
    <Create
      {...props}
      redirect={`/deckorator_DeckTemplate/${deckTemplateId}/show`}
    >
      <SimpleForm defaultValues={{ deckTemplateId }}>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};
