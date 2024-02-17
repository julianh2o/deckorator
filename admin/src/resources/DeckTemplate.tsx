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
  ReferenceManyField,
  Button,
} from "react-admin";
import { Link } from "react-router-dom";

const DeckTemplateFilter = (props: object) => (
  <Filter {...props}>
    <TextInput label="Search by Identifier" source="identifier" alwaysOn />
  </Filter>
);

export const DeckTemplateList = (props: object) => (
  <List filters={<DeckTemplateFilter />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <NumberField source="size" />
      <TextField source="description" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export const DeckTemplateShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField label="Name" source="name" />
      <NumberField source="size" />
      <TextField source="description" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <ReferenceManyField
        reference="deckorator_DeckTemplateCard"
        target="deckTemplateId"
      >
        <Datagrid>
          <TextField source="name" />
        </Datagrid>
      </ReferenceManyField>
      <Button
        component={Link}
        to={`/deckorator_DeckTemplateCard/create?deckTemplateId=${1}`}
        label="Add card"
      ></Button>
    </SimpleShowLayout>
  </Show>
);

const DeckTemplateTitle = ({ record }: { record?: { title: string } }) => {
  return <span>DeckTemplate: {record ? `${record.title}` : ""}</span>;
};

const DeckTemplateEditActions = ({
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

export const DeckTemplateEdit = (props: object) => (
  <Edit
    title={<DeckTemplateTitle />}
    actions={<DeckTemplateEditActions />}
    {...props}
  >
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="size" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const DeckTemplateCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="size" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
