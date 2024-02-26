/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** columns and relationships of "Deck" */
export type Deck = {
  __typename?: 'Deck';
  /** An array relationship */
  DeckCards: Array<DeckCard>;
  /** An aggregate relationship */
  DeckCards_aggregate: DeckCard_Aggregate;
  /** An object relationship */
  DeckTemplate: DeckTemplate;
  created_at: Scalars['timestamptz']['output'];
  deckTemplate_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "Deck" */
export type DeckDeckCardsArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};


/** columns and relationships of "Deck" */
export type DeckDeckCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};

/** columns and relationships of "DeckCard" */
export type DeckCard = {
  __typename?: 'DeckCard';
  /** An object relationship */
  Deck: Deck;
  /** An object relationship */
  DeckTemplateCard?: Maybe<DeckTemplateCard>;
  /** An array relationship */
  Generations: Array<Generation>;
  /** An aggregate relationship */
  Generations_aggregate: Generation_Aggregate;
  config?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deckTemplateCard_id?: Maybe<Scalars['Int']['output']>;
  deck_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "DeckCard" */
export type DeckCardGenerationsArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};


/** columns and relationships of "DeckCard" */
export type DeckCardGenerations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};

/** aggregated selection of "DeckCard" */
export type DeckCard_Aggregate = {
  __typename?: 'DeckCard_aggregate';
  aggregate?: Maybe<DeckCard_Aggregate_Fields>;
  nodes: Array<DeckCard>;
};

export type DeckCard_Aggregate_Bool_Exp = {
  count?: InputMaybe<DeckCard_Aggregate_Bool_Exp_Count>;
};

export type DeckCard_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DeckCard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DeckCard_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "DeckCard" */
export type DeckCard_Aggregate_Fields = {
  __typename?: 'DeckCard_aggregate_fields';
  avg?: Maybe<DeckCard_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DeckCard_Max_Fields>;
  min?: Maybe<DeckCard_Min_Fields>;
  stddev?: Maybe<DeckCard_Stddev_Fields>;
  stddev_pop?: Maybe<DeckCard_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DeckCard_Stddev_Samp_Fields>;
  sum?: Maybe<DeckCard_Sum_Fields>;
  var_pop?: Maybe<DeckCard_Var_Pop_Fields>;
  var_samp?: Maybe<DeckCard_Var_Samp_Fields>;
  variance?: Maybe<DeckCard_Variance_Fields>;
};


/** aggregate fields of "DeckCard" */
export type DeckCard_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DeckCard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "DeckCard" */
export type DeckCard_Aggregate_Order_By = {
  avg?: InputMaybe<DeckCard_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<DeckCard_Max_Order_By>;
  min?: InputMaybe<DeckCard_Min_Order_By>;
  stddev?: InputMaybe<DeckCard_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DeckCard_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DeckCard_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DeckCard_Sum_Order_By>;
  var_pop?: InputMaybe<DeckCard_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DeckCard_Var_Samp_Order_By>;
  variance?: InputMaybe<DeckCard_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "DeckCard" */
export type DeckCard_Arr_Rel_Insert_Input = {
  data: Array<DeckCard_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DeckCard_On_Conflict>;
};

/** aggregate avg on columns */
export type DeckCard_Avg_Fields = {
  __typename?: 'DeckCard_avg_fields';
  deckTemplateCard_id?: Maybe<Scalars['Float']['output']>;
  deck_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "DeckCard" */
export type DeckCard_Avg_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "DeckCard". All fields are combined with a logical 'AND'. */
export type DeckCard_Bool_Exp = {
  Deck?: InputMaybe<Deck_Bool_Exp>;
  DeckTemplateCard?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  Generations?: InputMaybe<Generation_Bool_Exp>;
  Generations_aggregate?: InputMaybe<Generation_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<DeckCard_Bool_Exp>>;
  _not?: InputMaybe<DeckCard_Bool_Exp>;
  _or?: InputMaybe<Array<DeckCard_Bool_Exp>>;
  config?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deckTemplateCard_id?: InputMaybe<Int_Comparison_Exp>;
  deck_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "DeckCard" */
export enum DeckCard_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeckCardPkey = 'DeckCard_pkey'
}

/** input type for incrementing numeric columns in table "DeckCard" */
export type DeckCard_Inc_Input = {
  deckTemplateCard_id?: InputMaybe<Scalars['Int']['input']>;
  deck_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "DeckCard" */
export type DeckCard_Insert_Input = {
  Deck?: InputMaybe<Deck_Obj_Rel_Insert_Input>;
  DeckTemplateCard?: InputMaybe<DeckTemplateCard_Obj_Rel_Insert_Input>;
  Generations?: InputMaybe<Generation_Arr_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplateCard_id?: InputMaybe<Scalars['Int']['input']>;
  deck_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type DeckCard_Max_Fields = {
  __typename?: 'DeckCard_max_fields';
  config?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deckTemplateCard_id?: Maybe<Scalars['Int']['output']>;
  deck_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "DeckCard" */
export type DeckCard_Max_Order_By = {
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type DeckCard_Min_Fields = {
  __typename?: 'DeckCard_min_fields';
  config?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deckTemplateCard_id?: Maybe<Scalars['Int']['output']>;
  deck_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "DeckCard" */
export type DeckCard_Min_Order_By = {
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "DeckCard" */
export type DeckCard_Mutation_Response = {
  __typename?: 'DeckCard_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<DeckCard>;
};

/** input type for inserting object relation for remote table "DeckCard" */
export type DeckCard_Obj_Rel_Insert_Input = {
  data: DeckCard_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DeckCard_On_Conflict>;
};

/** on_conflict condition type for table "DeckCard" */
export type DeckCard_On_Conflict = {
  constraint: DeckCard_Constraint;
  update_columns?: Array<DeckCard_Update_Column>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};

/** Ordering options when selecting data from "DeckCard". */
export type DeckCard_Order_By = {
  Deck?: InputMaybe<Deck_Order_By>;
  DeckTemplateCard?: InputMaybe<DeckTemplateCard_Order_By>;
  Generations_aggregate?: InputMaybe<Generation_Aggregate_Order_By>;
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: DeckCard */
export type DeckCard_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "DeckCard" */
export enum DeckCard_Select_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeckTemplateCardId = 'deckTemplateCard_id',
  /** column name */
  DeckId = 'deck_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "DeckCard" */
export type DeckCard_Set_Input = {
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplateCard_id?: InputMaybe<Scalars['Int']['input']>;
  deck_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type DeckCard_Stddev_Fields = {
  __typename?: 'DeckCard_stddev_fields';
  deckTemplateCard_id?: Maybe<Scalars['Float']['output']>;
  deck_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "DeckCard" */
export type DeckCard_Stddev_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type DeckCard_Stddev_Pop_Fields = {
  __typename?: 'DeckCard_stddev_pop_fields';
  deckTemplateCard_id?: Maybe<Scalars['Float']['output']>;
  deck_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "DeckCard" */
export type DeckCard_Stddev_Pop_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type DeckCard_Stddev_Samp_Fields = {
  __typename?: 'DeckCard_stddev_samp_fields';
  deckTemplateCard_id?: Maybe<Scalars['Float']['output']>;
  deck_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "DeckCard" */
export type DeckCard_Stddev_Samp_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "DeckCard" */
export type DeckCard_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DeckCard_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DeckCard_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplateCard_id?: InputMaybe<Scalars['Int']['input']>;
  deck_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type DeckCard_Sum_Fields = {
  __typename?: 'DeckCard_sum_fields';
  deckTemplateCard_id?: Maybe<Scalars['Int']['output']>;
  deck_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "DeckCard" */
export type DeckCard_Sum_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** update columns of table "DeckCard" */
export enum DeckCard_Update_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeckTemplateCardId = 'deckTemplateCard_id',
  /** column name */
  DeckId = 'deck_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type DeckCard_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DeckCard_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DeckCard_Set_Input>;
  /** filter the rows which have to be updated */
  where: DeckCard_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DeckCard_Var_Pop_Fields = {
  __typename?: 'DeckCard_var_pop_fields';
  deckTemplateCard_id?: Maybe<Scalars['Float']['output']>;
  deck_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "DeckCard" */
export type DeckCard_Var_Pop_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type DeckCard_Var_Samp_Fields = {
  __typename?: 'DeckCard_var_samp_fields';
  deckTemplateCard_id?: Maybe<Scalars['Float']['output']>;
  deck_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "DeckCard" */
export type DeckCard_Var_Samp_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type DeckCard_Variance_Fields = {
  __typename?: 'DeckCard_variance_fields';
  deckTemplateCard_id?: Maybe<Scalars['Float']['output']>;
  deck_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "DeckCard" */
export type DeckCard_Variance_Order_By = {
  deckTemplateCard_id?: InputMaybe<Order_By>;
  deck_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** columns and relationships of "DeckTemplate" */
export type DeckTemplate = {
  __typename?: 'DeckTemplate';
  /** An array relationship */
  DeckTemplateCards: Array<DeckTemplateCard>;
  /** An aggregate relationship */
  DeckTemplateCards_aggregate: DeckTemplateCard_Aggregate;
  /** An array relationship */
  Decks: Array<Deck>;
  /** An aggregate relationship */
  Decks_aggregate: Deck_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "DeckTemplate" */
export type DeckTemplateDeckTemplateCardsArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By>>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};


/** columns and relationships of "DeckTemplate" */
export type DeckTemplateDeckTemplateCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By>>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};


/** columns and relationships of "DeckTemplate" */
export type DeckTemplateDecksArgs = {
  distinct_on?: InputMaybe<Array<Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deck_Order_By>>;
  where?: InputMaybe<Deck_Bool_Exp>;
};


/** columns and relationships of "DeckTemplate" */
export type DeckTemplateDecks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deck_Order_By>>;
  where?: InputMaybe<Deck_Bool_Exp>;
};

/** columns and relationships of "DeckTemplateCard" */
export type DeckTemplateCard = {
  __typename?: 'DeckTemplateCard';
  /** An array relationship */
  DeckCards: Array<DeckCard>;
  /** An aggregate relationship */
  DeckCards_aggregate: DeckCard_Aggregate;
  /** An object relationship */
  DeckTemplate: DeckTemplate;
  config?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deckTemplate_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "DeckTemplateCard" */
export type DeckTemplateCardDeckCardsArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};


/** columns and relationships of "DeckTemplateCard" */
export type DeckTemplateCardDeckCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};

/** aggregated selection of "DeckTemplateCard" */
export type DeckTemplateCard_Aggregate = {
  __typename?: 'DeckTemplateCard_aggregate';
  aggregate?: Maybe<DeckTemplateCard_Aggregate_Fields>;
  nodes: Array<DeckTemplateCard>;
};

export type DeckTemplateCard_Aggregate_Bool_Exp = {
  count?: InputMaybe<DeckTemplateCard_Aggregate_Bool_Exp_Count>;
};

export type DeckTemplateCard_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "DeckTemplateCard" */
export type DeckTemplateCard_Aggregate_Fields = {
  __typename?: 'DeckTemplateCard_aggregate_fields';
  avg?: Maybe<DeckTemplateCard_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DeckTemplateCard_Max_Fields>;
  min?: Maybe<DeckTemplateCard_Min_Fields>;
  stddev?: Maybe<DeckTemplateCard_Stddev_Fields>;
  stddev_pop?: Maybe<DeckTemplateCard_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DeckTemplateCard_Stddev_Samp_Fields>;
  sum?: Maybe<DeckTemplateCard_Sum_Fields>;
  var_pop?: Maybe<DeckTemplateCard_Var_Pop_Fields>;
  var_samp?: Maybe<DeckTemplateCard_Var_Samp_Fields>;
  variance?: Maybe<DeckTemplateCard_Variance_Fields>;
};


/** aggregate fields of "DeckTemplateCard" */
export type DeckTemplateCard_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "DeckTemplateCard" */
export type DeckTemplateCard_Aggregate_Order_By = {
  avg?: InputMaybe<DeckTemplateCard_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<DeckTemplateCard_Max_Order_By>;
  min?: InputMaybe<DeckTemplateCard_Min_Order_By>;
  stddev?: InputMaybe<DeckTemplateCard_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DeckTemplateCard_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DeckTemplateCard_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DeckTemplateCard_Sum_Order_By>;
  var_pop?: InputMaybe<DeckTemplateCard_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DeckTemplateCard_Var_Samp_Order_By>;
  variance?: InputMaybe<DeckTemplateCard_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "DeckTemplateCard" */
export type DeckTemplateCard_Arr_Rel_Insert_Input = {
  data: Array<DeckTemplateCard_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DeckTemplateCard_On_Conflict>;
};

/** aggregate avg on columns */
export type DeckTemplateCard_Avg_Fields = {
  __typename?: 'DeckTemplateCard_avg_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Avg_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "DeckTemplateCard". All fields are combined with a logical 'AND'. */
export type DeckTemplateCard_Bool_Exp = {
  DeckCards?: InputMaybe<DeckCard_Bool_Exp>;
  DeckCards_aggregate?: InputMaybe<DeckCard_Aggregate_Bool_Exp>;
  DeckTemplate?: InputMaybe<DeckTemplate_Bool_Exp>;
  _and?: InputMaybe<Array<DeckTemplateCard_Bool_Exp>>;
  _not?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  _or?: InputMaybe<Array<DeckTemplateCard_Bool_Exp>>;
  config?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deckTemplate_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "DeckTemplateCard" */
export enum DeckTemplateCard_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeckTemplateCardPkey = 'DeckTemplateCard_pkey'
}

/** input type for incrementing numeric columns in table "DeckTemplateCard" */
export type DeckTemplateCard_Inc_Input = {
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "DeckTemplateCard" */
export type DeckTemplateCard_Insert_Input = {
  DeckCards?: InputMaybe<DeckCard_Arr_Rel_Insert_Input>;
  DeckTemplate?: InputMaybe<DeckTemplate_Obj_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type DeckTemplateCard_Max_Fields = {
  __typename?: 'DeckTemplateCard_max_fields';
  config?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deckTemplate_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Max_Order_By = {
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type DeckTemplateCard_Min_Fields = {
  __typename?: 'DeckTemplateCard_min_fields';
  config?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deckTemplate_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Min_Order_By = {
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "DeckTemplateCard" */
export type DeckTemplateCard_Mutation_Response = {
  __typename?: 'DeckTemplateCard_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<DeckTemplateCard>;
};

/** input type for inserting object relation for remote table "DeckTemplateCard" */
export type DeckTemplateCard_Obj_Rel_Insert_Input = {
  data: DeckTemplateCard_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DeckTemplateCard_On_Conflict>;
};

/** on_conflict condition type for table "DeckTemplateCard" */
export type DeckTemplateCard_On_Conflict = {
  constraint: DeckTemplateCard_Constraint;
  update_columns?: Array<DeckTemplateCard_Update_Column>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};

/** Ordering options when selecting data from "DeckTemplateCard". */
export type DeckTemplateCard_Order_By = {
  DeckCards_aggregate?: InputMaybe<DeckCard_Aggregate_Order_By>;
  DeckTemplate?: InputMaybe<DeckTemplate_Order_By>;
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: DeckTemplateCard */
export type DeckTemplateCard_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "DeckTemplateCard" */
export enum DeckTemplateCard_Select_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeckTemplateId = 'deckTemplate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "DeckTemplateCard" */
export type DeckTemplateCard_Set_Input = {
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type DeckTemplateCard_Stddev_Fields = {
  __typename?: 'DeckTemplateCard_stddev_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Stddev_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type DeckTemplateCard_Stddev_Pop_Fields = {
  __typename?: 'DeckTemplateCard_stddev_pop_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Stddev_Pop_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type DeckTemplateCard_Stddev_Samp_Fields = {
  __typename?: 'DeckTemplateCard_stddev_samp_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Stddev_Samp_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "DeckTemplateCard" */
export type DeckTemplateCard_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DeckTemplateCard_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DeckTemplateCard_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type DeckTemplateCard_Sum_Fields = {
  __typename?: 'DeckTemplateCard_sum_fields';
  deckTemplate_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Sum_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** update columns of table "DeckTemplateCard" */
export enum DeckTemplateCard_Update_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeckTemplateId = 'deckTemplate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type DeckTemplateCard_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DeckTemplateCard_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DeckTemplateCard_Set_Input>;
  /** filter the rows which have to be updated */
  where: DeckTemplateCard_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DeckTemplateCard_Var_Pop_Fields = {
  __typename?: 'DeckTemplateCard_var_pop_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Var_Pop_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type DeckTemplateCard_Var_Samp_Fields = {
  __typename?: 'DeckTemplateCard_var_samp_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Var_Samp_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type DeckTemplateCard_Variance_Fields = {
  __typename?: 'DeckTemplateCard_variance_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "DeckTemplateCard" */
export type DeckTemplateCard_Variance_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregated selection of "DeckTemplate" */
export type DeckTemplate_Aggregate = {
  __typename?: 'DeckTemplate_aggregate';
  aggregate?: Maybe<DeckTemplate_Aggregate_Fields>;
  nodes: Array<DeckTemplate>;
};

/** aggregate fields of "DeckTemplate" */
export type DeckTemplate_Aggregate_Fields = {
  __typename?: 'DeckTemplate_aggregate_fields';
  avg?: Maybe<DeckTemplate_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DeckTemplate_Max_Fields>;
  min?: Maybe<DeckTemplate_Min_Fields>;
  stddev?: Maybe<DeckTemplate_Stddev_Fields>;
  stddev_pop?: Maybe<DeckTemplate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DeckTemplate_Stddev_Samp_Fields>;
  sum?: Maybe<DeckTemplate_Sum_Fields>;
  var_pop?: Maybe<DeckTemplate_Var_Pop_Fields>;
  var_samp?: Maybe<DeckTemplate_Var_Samp_Fields>;
  variance?: Maybe<DeckTemplate_Variance_Fields>;
};


/** aggregate fields of "DeckTemplate" */
export type DeckTemplate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DeckTemplate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type DeckTemplate_Avg_Fields = {
  __typename?: 'DeckTemplate_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "DeckTemplate". All fields are combined with a logical 'AND'. */
export type DeckTemplate_Bool_Exp = {
  DeckTemplateCards?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  DeckTemplateCards_aggregate?: InputMaybe<DeckTemplateCard_Aggregate_Bool_Exp>;
  Decks?: InputMaybe<Deck_Bool_Exp>;
  Decks_aggregate?: InputMaybe<Deck_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<DeckTemplate_Bool_Exp>>;
  _not?: InputMaybe<DeckTemplate_Bool_Exp>;
  _or?: InputMaybe<Array<DeckTemplate_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "DeckTemplate" */
export enum DeckTemplate_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeckTemplatePkey = 'DeckTemplate_pkey'
}

/** input type for incrementing numeric columns in table "DeckTemplate" */
export type DeckTemplate_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "DeckTemplate" */
export type DeckTemplate_Insert_Input = {
  DeckTemplateCards?: InputMaybe<DeckTemplateCard_Arr_Rel_Insert_Input>;
  Decks?: InputMaybe<Deck_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type DeckTemplate_Max_Fields = {
  __typename?: 'DeckTemplate_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type DeckTemplate_Min_Fields = {
  __typename?: 'DeckTemplate_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "DeckTemplate" */
export type DeckTemplate_Mutation_Response = {
  __typename?: 'DeckTemplate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<DeckTemplate>;
};

/** input type for inserting object relation for remote table "DeckTemplate" */
export type DeckTemplate_Obj_Rel_Insert_Input = {
  data: DeckTemplate_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DeckTemplate_On_Conflict>;
};

/** on_conflict condition type for table "DeckTemplate" */
export type DeckTemplate_On_Conflict = {
  constraint: DeckTemplate_Constraint;
  update_columns?: Array<DeckTemplate_Update_Column>;
  where?: InputMaybe<DeckTemplate_Bool_Exp>;
};

/** Ordering options when selecting data from "DeckTemplate". */
export type DeckTemplate_Order_By = {
  DeckTemplateCards_aggregate?: InputMaybe<DeckTemplateCard_Aggregate_Order_By>;
  Decks_aggregate?: InputMaybe<Deck_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: DeckTemplate */
export type DeckTemplate_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "DeckTemplate" */
export enum DeckTemplate_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "DeckTemplate" */
export type DeckTemplate_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type DeckTemplate_Stddev_Fields = {
  __typename?: 'DeckTemplate_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type DeckTemplate_Stddev_Pop_Fields = {
  __typename?: 'DeckTemplate_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type DeckTemplate_Stddev_Samp_Fields = {
  __typename?: 'DeckTemplate_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "DeckTemplate" */
export type DeckTemplate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DeckTemplate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DeckTemplate_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type DeckTemplate_Sum_Fields = {
  __typename?: 'DeckTemplate_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "DeckTemplate" */
export enum DeckTemplate_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type DeckTemplate_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DeckTemplate_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DeckTemplate_Set_Input>;
  /** filter the rows which have to be updated */
  where: DeckTemplate_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DeckTemplate_Var_Pop_Fields = {
  __typename?: 'DeckTemplate_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type DeckTemplate_Var_Samp_Fields = {
  __typename?: 'DeckTemplate_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type DeckTemplate_Variance_Fields = {
  __typename?: 'DeckTemplate_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "Deck" */
export type Deck_Aggregate = {
  __typename?: 'Deck_aggregate';
  aggregate?: Maybe<Deck_Aggregate_Fields>;
  nodes: Array<Deck>;
};

export type Deck_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deck_Aggregate_Bool_Exp_Count>;
};

export type Deck_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deck_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Deck_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Deck" */
export type Deck_Aggregate_Fields = {
  __typename?: 'Deck_aggregate_fields';
  avg?: Maybe<Deck_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Deck_Max_Fields>;
  min?: Maybe<Deck_Min_Fields>;
  stddev?: Maybe<Deck_Stddev_Fields>;
  stddev_pop?: Maybe<Deck_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deck_Stddev_Samp_Fields>;
  sum?: Maybe<Deck_Sum_Fields>;
  var_pop?: Maybe<Deck_Var_Pop_Fields>;
  var_samp?: Maybe<Deck_Var_Samp_Fields>;
  variance?: Maybe<Deck_Variance_Fields>;
};


/** aggregate fields of "Deck" */
export type Deck_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deck_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Deck" */
export type Deck_Aggregate_Order_By = {
  avg?: InputMaybe<Deck_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deck_Max_Order_By>;
  min?: InputMaybe<Deck_Min_Order_By>;
  stddev?: InputMaybe<Deck_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Deck_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Deck_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Deck_Sum_Order_By>;
  var_pop?: InputMaybe<Deck_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Deck_Var_Samp_Order_By>;
  variance?: InputMaybe<Deck_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Deck" */
export type Deck_Arr_Rel_Insert_Input = {
  data: Array<Deck_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Deck_On_Conflict>;
};

/** aggregate avg on columns */
export type Deck_Avg_Fields = {
  __typename?: 'Deck_avg_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Deck" */
export type Deck_Avg_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Deck". All fields are combined with a logical 'AND'. */
export type Deck_Bool_Exp = {
  DeckCards?: InputMaybe<DeckCard_Bool_Exp>;
  DeckCards_aggregate?: InputMaybe<DeckCard_Aggregate_Bool_Exp>;
  DeckTemplate?: InputMaybe<DeckTemplate_Bool_Exp>;
  _and?: InputMaybe<Array<Deck_Bool_Exp>>;
  _not?: InputMaybe<Deck_Bool_Exp>;
  _or?: InputMaybe<Array<Deck_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deckTemplate_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Deck" */
export enum Deck_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeckPkey = 'Deck_pkey'
}

/** input type for incrementing numeric columns in table "Deck" */
export type Deck_Inc_Input = {
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Deck" */
export type Deck_Insert_Input = {
  DeckCards?: InputMaybe<DeckCard_Arr_Rel_Insert_Input>;
  DeckTemplate?: InputMaybe<DeckTemplate_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Deck_Max_Fields = {
  __typename?: 'Deck_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deckTemplate_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "Deck" */
export type Deck_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deck_Min_Fields = {
  __typename?: 'Deck_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deckTemplate_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "Deck" */
export type Deck_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Deck" */
export type Deck_Mutation_Response = {
  __typename?: 'Deck_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Deck>;
};

/** input type for inserting object relation for remote table "Deck" */
export type Deck_Obj_Rel_Insert_Input = {
  data: Deck_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Deck_On_Conflict>;
};

/** on_conflict condition type for table "Deck" */
export type Deck_On_Conflict = {
  constraint: Deck_Constraint;
  update_columns?: Array<Deck_Update_Column>;
  where?: InputMaybe<Deck_Bool_Exp>;
};

/** Ordering options when selecting data from "Deck". */
export type Deck_Order_By = {
  DeckCards_aggregate?: InputMaybe<DeckCard_Aggregate_Order_By>;
  DeckTemplate?: InputMaybe<DeckTemplate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Deck */
export type Deck_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Deck" */
export enum Deck_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeckTemplateId = 'deckTemplate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Deck" */
export type Deck_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Deck_Stddev_Fields = {
  __typename?: 'Deck_stddev_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Deck" */
export type Deck_Stddev_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deck_Stddev_Pop_Fields = {
  __typename?: 'Deck_stddev_pop_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Deck" */
export type Deck_Stddev_Pop_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deck_Stddev_Samp_Fields = {
  __typename?: 'Deck_stddev_samp_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Deck" */
export type Deck_Stddev_Samp_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Deck" */
export type Deck_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deck_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Deck_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deckTemplate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Deck_Sum_Fields = {
  __typename?: 'Deck_sum_fields';
  deckTemplate_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Deck" */
export type Deck_Sum_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Deck" */
export enum Deck_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeckTemplateId = 'deckTemplate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Deck_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Deck_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Deck_Set_Input>;
  /** filter the rows which have to be updated */
  where: Deck_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Deck_Var_Pop_Fields = {
  __typename?: 'Deck_var_pop_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Deck" */
export type Deck_Var_Pop_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deck_Var_Samp_Fields = {
  __typename?: 'Deck_var_samp_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Deck" */
export type Deck_Var_Samp_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Deck_Variance_Fields = {
  __typename?: 'Deck_variance_fields';
  deckTemplate_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Deck" */
export type Deck_Variance_Order_By = {
  deckTemplate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "GeneratedImage" */
export type GeneratedImage = {
  __typename?: 'GeneratedImage';
  /** An object relationship */
  Generation: Generation;
  created_at: Scalars['timestamptz']['output'];
  generation_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "GeneratedImage" */
export type GeneratedImage_Aggregate = {
  __typename?: 'GeneratedImage_aggregate';
  aggregate?: Maybe<GeneratedImage_Aggregate_Fields>;
  nodes: Array<GeneratedImage>;
};

export type GeneratedImage_Aggregate_Bool_Exp = {
  count?: InputMaybe<GeneratedImage_Aggregate_Bool_Exp_Count>;
};

export type GeneratedImage_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GeneratedImage_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "GeneratedImage" */
export type GeneratedImage_Aggregate_Fields = {
  __typename?: 'GeneratedImage_aggregate_fields';
  avg?: Maybe<GeneratedImage_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<GeneratedImage_Max_Fields>;
  min?: Maybe<GeneratedImage_Min_Fields>;
  stddev?: Maybe<GeneratedImage_Stddev_Fields>;
  stddev_pop?: Maybe<GeneratedImage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GeneratedImage_Stddev_Samp_Fields>;
  sum?: Maybe<GeneratedImage_Sum_Fields>;
  var_pop?: Maybe<GeneratedImage_Var_Pop_Fields>;
  var_samp?: Maybe<GeneratedImage_Var_Samp_Fields>;
  variance?: Maybe<GeneratedImage_Variance_Fields>;
};


/** aggregate fields of "GeneratedImage" */
export type GeneratedImage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "GeneratedImage" */
export type GeneratedImage_Aggregate_Order_By = {
  avg?: InputMaybe<GeneratedImage_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GeneratedImage_Max_Order_By>;
  min?: InputMaybe<GeneratedImage_Min_Order_By>;
  stddev?: InputMaybe<GeneratedImage_Stddev_Order_By>;
  stddev_pop?: InputMaybe<GeneratedImage_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<GeneratedImage_Stddev_Samp_Order_By>;
  sum?: InputMaybe<GeneratedImage_Sum_Order_By>;
  var_pop?: InputMaybe<GeneratedImage_Var_Pop_Order_By>;
  var_samp?: InputMaybe<GeneratedImage_Var_Samp_Order_By>;
  variance?: InputMaybe<GeneratedImage_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "GeneratedImage" */
export type GeneratedImage_Arr_Rel_Insert_Input = {
  data: Array<GeneratedImage_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GeneratedImage_On_Conflict>;
};

/** aggregate avg on columns */
export type GeneratedImage_Avg_Fields = {
  __typename?: 'GeneratedImage_avg_fields';
  generation_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "GeneratedImage" */
export type GeneratedImage_Avg_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "GeneratedImage". All fields are combined with a logical 'AND'. */
export type GeneratedImage_Bool_Exp = {
  Generation?: InputMaybe<Generation_Bool_Exp>;
  _and?: InputMaybe<Array<GeneratedImage_Bool_Exp>>;
  _not?: InputMaybe<GeneratedImage_Bool_Exp>;
  _or?: InputMaybe<Array<GeneratedImage_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  generation_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "GeneratedImage" */
export enum GeneratedImage_Constraint {
  /** unique or primary key constraint on columns "id" */
  GeneratedImagePkey = 'GeneratedImage_pkey'
}

/** input type for incrementing numeric columns in table "GeneratedImage" */
export type GeneratedImage_Inc_Input = {
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "GeneratedImage" */
export type GeneratedImage_Insert_Input = {
  Generation?: InputMaybe<Generation_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type GeneratedImage_Max_Fields = {
  __typename?: 'GeneratedImage_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  generation_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "GeneratedImage" */
export type GeneratedImage_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GeneratedImage_Min_Fields = {
  __typename?: 'GeneratedImage_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  generation_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "GeneratedImage" */
export type GeneratedImage_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "GeneratedImage" */
export type GeneratedImage_Mutation_Response = {
  __typename?: 'GeneratedImage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GeneratedImage>;
};

/** on_conflict condition type for table "GeneratedImage" */
export type GeneratedImage_On_Conflict = {
  constraint: GeneratedImage_Constraint;
  update_columns?: Array<GeneratedImage_Update_Column>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};

/** Ordering options when selecting data from "GeneratedImage". */
export type GeneratedImage_Order_By = {
  Generation?: InputMaybe<Generation_Order_By>;
  created_at?: InputMaybe<Order_By>;
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: GeneratedImage */
export type GeneratedImage_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "GeneratedImage" */
export enum GeneratedImage_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GenerationId = 'generation_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "GeneratedImage" */
export type GeneratedImage_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type GeneratedImage_Stddev_Fields = {
  __typename?: 'GeneratedImage_stddev_fields';
  generation_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "GeneratedImage" */
export type GeneratedImage_Stddev_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type GeneratedImage_Stddev_Pop_Fields = {
  __typename?: 'GeneratedImage_stddev_pop_fields';
  generation_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "GeneratedImage" */
export type GeneratedImage_Stddev_Pop_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type GeneratedImage_Stddev_Samp_Fields = {
  __typename?: 'GeneratedImage_stddev_samp_fields';
  generation_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "GeneratedImage" */
export type GeneratedImage_Stddev_Samp_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "GeneratedImage" */
export type GeneratedImage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GeneratedImage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GeneratedImage_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type GeneratedImage_Sum_Fields = {
  __typename?: 'GeneratedImage_sum_fields';
  generation_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "GeneratedImage" */
export type GeneratedImage_Sum_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "GeneratedImage" */
export enum GeneratedImage_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GenerationId = 'generation_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type GeneratedImage_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GeneratedImage_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GeneratedImage_Set_Input>;
  /** filter the rows which have to be updated */
  where: GeneratedImage_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GeneratedImage_Var_Pop_Fields = {
  __typename?: 'GeneratedImage_var_pop_fields';
  generation_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "GeneratedImage" */
export type GeneratedImage_Var_Pop_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type GeneratedImage_Var_Samp_Fields = {
  __typename?: 'GeneratedImage_var_samp_fields';
  generation_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "GeneratedImage" */
export type GeneratedImage_Var_Samp_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type GeneratedImage_Variance_Fields = {
  __typename?: 'GeneratedImage_variance_fields';
  generation_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "GeneratedImage" */
export type GeneratedImage_Variance_Order_By = {
  generation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Generation" */
export type Generation = {
  __typename?: 'Generation';
  /** An object relationship */
  DeckCard: DeckCard;
  /** An array relationship */
  GeneratedImages: Array<GeneratedImage>;
  /** An aggregate relationship */
  GeneratedImages_aggregate: GeneratedImage_Aggregate;
  /** An object relationship */
  Generation?: Maybe<Generation>;
  /** An array relationship */
  Generations: Array<Generation>;
  /** An aggregate relationship */
  Generations_aggregate: Generation_Aggregate;
  batch: Scalars['uuid']['output'];
  card_id: Scalars['Int']['output'];
  config?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  derivedFrom?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  prompt?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  variationText?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "Generation" */
export type GenerationGeneratedImagesArgs = {
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By>>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};


/** columns and relationships of "Generation" */
export type GenerationGeneratedImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By>>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};


/** columns and relationships of "Generation" */
export type GenerationGenerationsArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};


/** columns and relationships of "Generation" */
export type GenerationGenerations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};

/** aggregated selection of "Generation" */
export type Generation_Aggregate = {
  __typename?: 'Generation_aggregate';
  aggregate?: Maybe<Generation_Aggregate_Fields>;
  nodes: Array<Generation>;
};

export type Generation_Aggregate_Bool_Exp = {
  count?: InputMaybe<Generation_Aggregate_Bool_Exp_Count>;
};

export type Generation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Generation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Generation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Generation" */
export type Generation_Aggregate_Fields = {
  __typename?: 'Generation_aggregate_fields';
  avg?: Maybe<Generation_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Generation_Max_Fields>;
  min?: Maybe<Generation_Min_Fields>;
  stddev?: Maybe<Generation_Stddev_Fields>;
  stddev_pop?: Maybe<Generation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Generation_Stddev_Samp_Fields>;
  sum?: Maybe<Generation_Sum_Fields>;
  var_pop?: Maybe<Generation_Var_Pop_Fields>;
  var_samp?: Maybe<Generation_Var_Samp_Fields>;
  variance?: Maybe<Generation_Variance_Fields>;
};


/** aggregate fields of "Generation" */
export type Generation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Generation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Generation" */
export type Generation_Aggregate_Order_By = {
  avg?: InputMaybe<Generation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Generation_Max_Order_By>;
  min?: InputMaybe<Generation_Min_Order_By>;
  stddev?: InputMaybe<Generation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Generation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Generation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Generation_Sum_Order_By>;
  var_pop?: InputMaybe<Generation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Generation_Var_Samp_Order_By>;
  variance?: InputMaybe<Generation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Generation" */
export type Generation_Arr_Rel_Insert_Input = {
  data: Array<Generation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Generation_On_Conflict>;
};

/** aggregate avg on columns */
export type Generation_Avg_Fields = {
  __typename?: 'Generation_avg_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  derivedFrom?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Generation" */
export type Generation_Avg_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Generation". All fields are combined with a logical 'AND'. */
export type Generation_Bool_Exp = {
  DeckCard?: InputMaybe<DeckCard_Bool_Exp>;
  GeneratedImages?: InputMaybe<GeneratedImage_Bool_Exp>;
  GeneratedImages_aggregate?: InputMaybe<GeneratedImage_Aggregate_Bool_Exp>;
  Generation?: InputMaybe<Generation_Bool_Exp>;
  Generations?: InputMaybe<Generation_Bool_Exp>;
  Generations_aggregate?: InputMaybe<Generation_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Generation_Bool_Exp>>;
  _not?: InputMaybe<Generation_Bool_Exp>;
  _or?: InputMaybe<Array<Generation_Bool_Exp>>;
  batch?: InputMaybe<Uuid_Comparison_Exp>;
  card_id?: InputMaybe<Int_Comparison_Exp>;
  config?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  derivedFrom?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  prompt?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  variationText?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Generation" */
export enum Generation_Constraint {
  /** unique or primary key constraint on columns "id" */
  GenerationPkey = 'Generation_pkey'
}

/** input type for incrementing numeric columns in table "Generation" */
export type Generation_Inc_Input = {
  card_id?: InputMaybe<Scalars['Int']['input']>;
  derivedFrom?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Generation" */
export type Generation_Insert_Input = {
  DeckCard?: InputMaybe<DeckCard_Obj_Rel_Insert_Input>;
  GeneratedImages?: InputMaybe<GeneratedImage_Arr_Rel_Insert_Input>;
  Generation?: InputMaybe<Generation_Obj_Rel_Insert_Input>;
  Generations?: InputMaybe<Generation_Arr_Rel_Insert_Input>;
  batch?: InputMaybe<Scalars['uuid']['input']>;
  card_id?: InputMaybe<Scalars['Int']['input']>;
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  derivedFrom?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  variationText?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Generation_Max_Fields = {
  __typename?: 'Generation_max_fields';
  batch?: Maybe<Scalars['uuid']['output']>;
  card_id?: Maybe<Scalars['Int']['output']>;
  config?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  derivedFrom?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  variationText?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Generation" */
export type Generation_Max_Order_By = {
  batch?: InputMaybe<Order_By>;
  card_id?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  variationText?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Generation_Min_Fields = {
  __typename?: 'Generation_min_fields';
  batch?: Maybe<Scalars['uuid']['output']>;
  card_id?: Maybe<Scalars['Int']['output']>;
  config?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  derivedFrom?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  variationText?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Generation" */
export type Generation_Min_Order_By = {
  batch?: InputMaybe<Order_By>;
  card_id?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  variationText?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Generation" */
export type Generation_Mutation_Response = {
  __typename?: 'Generation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Generation>;
};

/** input type for inserting object relation for remote table "Generation" */
export type Generation_Obj_Rel_Insert_Input = {
  data: Generation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Generation_On_Conflict>;
};

/** on_conflict condition type for table "Generation" */
export type Generation_On_Conflict = {
  constraint: Generation_Constraint;
  update_columns?: Array<Generation_Update_Column>;
  where?: InputMaybe<Generation_Bool_Exp>;
};

/** Ordering options when selecting data from "Generation". */
export type Generation_Order_By = {
  DeckCard?: InputMaybe<DeckCard_Order_By>;
  GeneratedImages_aggregate?: InputMaybe<GeneratedImage_Aggregate_Order_By>;
  Generation?: InputMaybe<Generation_Order_By>;
  Generations_aggregate?: InputMaybe<Generation_Aggregate_Order_By>;
  batch?: InputMaybe<Order_By>;
  card_id?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  variationText?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Generation */
export type Generation_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Generation" */
export enum Generation_Select_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  CardId = 'card_id',
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DerivedFrom = 'derivedFrom',
  /** column name */
  Id = 'id',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariationText = 'variationText'
}

/** input type for updating data in table "Generation" */
export type Generation_Set_Input = {
  batch?: InputMaybe<Scalars['uuid']['input']>;
  card_id?: InputMaybe<Scalars['Int']['input']>;
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  derivedFrom?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  variationText?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Generation_Stddev_Fields = {
  __typename?: 'Generation_stddev_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  derivedFrom?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Generation" */
export type Generation_Stddev_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Generation_Stddev_Pop_Fields = {
  __typename?: 'Generation_stddev_pop_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  derivedFrom?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Generation" */
export type Generation_Stddev_Pop_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Generation_Stddev_Samp_Fields = {
  __typename?: 'Generation_stddev_samp_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  derivedFrom?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Generation" */
export type Generation_Stddev_Samp_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Generation" */
export type Generation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Generation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Generation_Stream_Cursor_Value_Input = {
  batch?: InputMaybe<Scalars['uuid']['input']>;
  card_id?: InputMaybe<Scalars['Int']['input']>;
  config?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  derivedFrom?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  variationText?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Generation_Sum_Fields = {
  __typename?: 'Generation_sum_fields';
  card_id?: Maybe<Scalars['Int']['output']>;
  derivedFrom?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Generation" */
export type Generation_Sum_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Generation" */
export enum Generation_Update_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  CardId = 'card_id',
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DerivedFrom = 'derivedFrom',
  /** column name */
  Id = 'id',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariationText = 'variationText'
}

export type Generation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Generation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Generation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Generation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Generation_Var_Pop_Fields = {
  __typename?: 'Generation_var_pop_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  derivedFrom?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Generation" */
export type Generation_Var_Pop_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Generation_Var_Samp_Fields = {
  __typename?: 'Generation_var_samp_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  derivedFrom?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Generation" */
export type Generation_Var_Samp_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Generation_Variance_Fields = {
  __typename?: 'Generation_variance_fields';
  card_id?: Maybe<Scalars['Float']['output']>;
  derivedFrom?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Generation" */
export type Generation_Variance_Order_By = {
  card_id?: InputMaybe<Order_By>;
  derivedFrom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Deck" */
  delete_Deck?: Maybe<Deck_Mutation_Response>;
  /** delete data from the table: "DeckCard" */
  delete_DeckCard?: Maybe<DeckCard_Mutation_Response>;
  /** delete single row from the table: "DeckCard" */
  delete_DeckCard_by_pk?: Maybe<DeckCard>;
  /** delete data from the table: "DeckTemplate" */
  delete_DeckTemplate?: Maybe<DeckTemplate_Mutation_Response>;
  /** delete data from the table: "DeckTemplateCard" */
  delete_DeckTemplateCard?: Maybe<DeckTemplateCard_Mutation_Response>;
  /** delete single row from the table: "DeckTemplateCard" */
  delete_DeckTemplateCard_by_pk?: Maybe<DeckTemplateCard>;
  /** delete single row from the table: "DeckTemplate" */
  delete_DeckTemplate_by_pk?: Maybe<DeckTemplate>;
  /** delete single row from the table: "Deck" */
  delete_Deck_by_pk?: Maybe<Deck>;
  /** delete data from the table: "GeneratedImage" */
  delete_GeneratedImage?: Maybe<GeneratedImage_Mutation_Response>;
  /** delete single row from the table: "GeneratedImage" */
  delete_GeneratedImage_by_pk?: Maybe<GeneratedImage>;
  /** delete data from the table: "Generation" */
  delete_Generation?: Maybe<Generation_Mutation_Response>;
  /** delete single row from the table: "Generation" */
  delete_Generation_by_pk?: Maybe<Generation>;
  /** insert data into the table: "Deck" */
  insert_Deck?: Maybe<Deck_Mutation_Response>;
  /** insert data into the table: "DeckCard" */
  insert_DeckCard?: Maybe<DeckCard_Mutation_Response>;
  /** insert a single row into the table: "DeckCard" */
  insert_DeckCard_one?: Maybe<DeckCard>;
  /** insert data into the table: "DeckTemplate" */
  insert_DeckTemplate?: Maybe<DeckTemplate_Mutation_Response>;
  /** insert data into the table: "DeckTemplateCard" */
  insert_DeckTemplateCard?: Maybe<DeckTemplateCard_Mutation_Response>;
  /** insert a single row into the table: "DeckTemplateCard" */
  insert_DeckTemplateCard_one?: Maybe<DeckTemplateCard>;
  /** insert a single row into the table: "DeckTemplate" */
  insert_DeckTemplate_one?: Maybe<DeckTemplate>;
  /** insert a single row into the table: "Deck" */
  insert_Deck_one?: Maybe<Deck>;
  /** insert data into the table: "GeneratedImage" */
  insert_GeneratedImage?: Maybe<GeneratedImage_Mutation_Response>;
  /** insert a single row into the table: "GeneratedImage" */
  insert_GeneratedImage_one?: Maybe<GeneratedImage>;
  /** insert data into the table: "Generation" */
  insert_Generation?: Maybe<Generation_Mutation_Response>;
  /** insert a single row into the table: "Generation" */
  insert_Generation_one?: Maybe<Generation>;
  /** update data of the table: "Deck" */
  update_Deck?: Maybe<Deck_Mutation_Response>;
  /** update data of the table: "DeckCard" */
  update_DeckCard?: Maybe<DeckCard_Mutation_Response>;
  /** update single row of the table: "DeckCard" */
  update_DeckCard_by_pk?: Maybe<DeckCard>;
  /** update multiples rows of table: "DeckCard" */
  update_DeckCard_many?: Maybe<Array<Maybe<DeckCard_Mutation_Response>>>;
  /** update data of the table: "DeckTemplate" */
  update_DeckTemplate?: Maybe<DeckTemplate_Mutation_Response>;
  /** update data of the table: "DeckTemplateCard" */
  update_DeckTemplateCard?: Maybe<DeckTemplateCard_Mutation_Response>;
  /** update single row of the table: "DeckTemplateCard" */
  update_DeckTemplateCard_by_pk?: Maybe<DeckTemplateCard>;
  /** update multiples rows of table: "DeckTemplateCard" */
  update_DeckTemplateCard_many?: Maybe<Array<Maybe<DeckTemplateCard_Mutation_Response>>>;
  /** update single row of the table: "DeckTemplate" */
  update_DeckTemplate_by_pk?: Maybe<DeckTemplate>;
  /** update multiples rows of table: "DeckTemplate" */
  update_DeckTemplate_many?: Maybe<Array<Maybe<DeckTemplate_Mutation_Response>>>;
  /** update single row of the table: "Deck" */
  update_Deck_by_pk?: Maybe<Deck>;
  /** update multiples rows of table: "Deck" */
  update_Deck_many?: Maybe<Array<Maybe<Deck_Mutation_Response>>>;
  /** update data of the table: "GeneratedImage" */
  update_GeneratedImage?: Maybe<GeneratedImage_Mutation_Response>;
  /** update single row of the table: "GeneratedImage" */
  update_GeneratedImage_by_pk?: Maybe<GeneratedImage>;
  /** update multiples rows of table: "GeneratedImage" */
  update_GeneratedImage_many?: Maybe<Array<Maybe<GeneratedImage_Mutation_Response>>>;
  /** update data of the table: "Generation" */
  update_Generation?: Maybe<Generation_Mutation_Response>;
  /** update single row of the table: "Generation" */
  update_Generation_by_pk?: Maybe<Generation>;
  /** update multiples rows of table: "Generation" */
  update_Generation_many?: Maybe<Array<Maybe<Generation_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_DeckArgs = {
  where: Deck_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_DeckCardArgs = {
  where: DeckCard_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_DeckCard_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DeckTemplateArgs = {
  where: DeckTemplate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_DeckTemplateCardArgs = {
  where: DeckTemplateCard_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_DeckTemplateCard_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DeckTemplate_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Deck_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GeneratedImageArgs = {
  where: GeneratedImage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GeneratedImage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GenerationArgs = {
  where: Generation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Generation_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_DeckArgs = {
  objects: Array<Deck_Insert_Input>;
  on_conflict?: InputMaybe<Deck_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeckCardArgs = {
  objects: Array<DeckCard_Insert_Input>;
  on_conflict?: InputMaybe<DeckCard_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeckCard_OneArgs = {
  object: DeckCard_Insert_Input;
  on_conflict?: InputMaybe<DeckCard_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeckTemplateArgs = {
  objects: Array<DeckTemplate_Insert_Input>;
  on_conflict?: InputMaybe<DeckTemplate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeckTemplateCardArgs = {
  objects: Array<DeckTemplateCard_Insert_Input>;
  on_conflict?: InputMaybe<DeckTemplateCard_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeckTemplateCard_OneArgs = {
  object: DeckTemplateCard_Insert_Input;
  on_conflict?: InputMaybe<DeckTemplateCard_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeckTemplate_OneArgs = {
  object: DeckTemplate_Insert_Input;
  on_conflict?: InputMaybe<DeckTemplate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deck_OneArgs = {
  object: Deck_Insert_Input;
  on_conflict?: InputMaybe<Deck_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GeneratedImageArgs = {
  objects: Array<GeneratedImage_Insert_Input>;
  on_conflict?: InputMaybe<GeneratedImage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GeneratedImage_OneArgs = {
  object: GeneratedImage_Insert_Input;
  on_conflict?: InputMaybe<GeneratedImage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GenerationArgs = {
  objects: Array<Generation_Insert_Input>;
  on_conflict?: InputMaybe<Generation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Generation_OneArgs = {
  object: Generation_Insert_Input;
  on_conflict?: InputMaybe<Generation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DeckArgs = {
  _inc?: InputMaybe<Deck_Inc_Input>;
  _set?: InputMaybe<Deck_Set_Input>;
  where: Deck_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_DeckCardArgs = {
  _inc?: InputMaybe<DeckCard_Inc_Input>;
  _set?: InputMaybe<DeckCard_Set_Input>;
  where: DeckCard_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_DeckCard_By_PkArgs = {
  _inc?: InputMaybe<DeckCard_Inc_Input>;
  _set?: InputMaybe<DeckCard_Set_Input>;
  pk_columns: DeckCard_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DeckCard_ManyArgs = {
  updates: Array<DeckCard_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DeckTemplateArgs = {
  _inc?: InputMaybe<DeckTemplate_Inc_Input>;
  _set?: InputMaybe<DeckTemplate_Set_Input>;
  where: DeckTemplate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_DeckTemplateCardArgs = {
  _inc?: InputMaybe<DeckTemplateCard_Inc_Input>;
  _set?: InputMaybe<DeckTemplateCard_Set_Input>;
  where: DeckTemplateCard_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_DeckTemplateCard_By_PkArgs = {
  _inc?: InputMaybe<DeckTemplateCard_Inc_Input>;
  _set?: InputMaybe<DeckTemplateCard_Set_Input>;
  pk_columns: DeckTemplateCard_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DeckTemplateCard_ManyArgs = {
  updates: Array<DeckTemplateCard_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DeckTemplate_By_PkArgs = {
  _inc?: InputMaybe<DeckTemplate_Inc_Input>;
  _set?: InputMaybe<DeckTemplate_Set_Input>;
  pk_columns: DeckTemplate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DeckTemplate_ManyArgs = {
  updates: Array<DeckTemplate_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Deck_By_PkArgs = {
  _inc?: InputMaybe<Deck_Inc_Input>;
  _set?: InputMaybe<Deck_Set_Input>;
  pk_columns: Deck_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Deck_ManyArgs = {
  updates: Array<Deck_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GeneratedImageArgs = {
  _inc?: InputMaybe<GeneratedImage_Inc_Input>;
  _set?: InputMaybe<GeneratedImage_Set_Input>;
  where: GeneratedImage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GeneratedImage_By_PkArgs = {
  _inc?: InputMaybe<GeneratedImage_Inc_Input>;
  _set?: InputMaybe<GeneratedImage_Set_Input>;
  pk_columns: GeneratedImage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GeneratedImage_ManyArgs = {
  updates: Array<GeneratedImage_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GenerationArgs = {
  _inc?: InputMaybe<Generation_Inc_Input>;
  _set?: InputMaybe<Generation_Set_Input>;
  where: Generation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Generation_By_PkArgs = {
  _inc?: InputMaybe<Generation_Inc_Input>;
  _set?: InputMaybe<Generation_Set_Input>;
  pk_columns: Generation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Generation_ManyArgs = {
  updates: Array<Generation_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Deck" */
  Deck: Array<Deck>;
  /** fetch data from the table: "DeckCard" */
  DeckCard: Array<DeckCard>;
  /** fetch aggregated fields from the table: "DeckCard" */
  DeckCard_aggregate: DeckCard_Aggregate;
  /** fetch data from the table: "DeckCard" using primary key columns */
  DeckCard_by_pk?: Maybe<DeckCard>;
  /** fetch data from the table: "DeckTemplate" */
  DeckTemplate: Array<DeckTemplate>;
  /** fetch data from the table: "DeckTemplateCard" */
  DeckTemplateCard: Array<DeckTemplateCard>;
  /** fetch aggregated fields from the table: "DeckTemplateCard" */
  DeckTemplateCard_aggregate: DeckTemplateCard_Aggregate;
  /** fetch data from the table: "DeckTemplateCard" using primary key columns */
  DeckTemplateCard_by_pk?: Maybe<DeckTemplateCard>;
  /** fetch aggregated fields from the table: "DeckTemplate" */
  DeckTemplate_aggregate: DeckTemplate_Aggregate;
  /** fetch data from the table: "DeckTemplate" using primary key columns */
  DeckTemplate_by_pk?: Maybe<DeckTemplate>;
  /** fetch aggregated fields from the table: "Deck" */
  Deck_aggregate: Deck_Aggregate;
  /** fetch data from the table: "Deck" using primary key columns */
  Deck_by_pk?: Maybe<Deck>;
  /** fetch data from the table: "GeneratedImage" */
  GeneratedImage: Array<GeneratedImage>;
  /** fetch aggregated fields from the table: "GeneratedImage" */
  GeneratedImage_aggregate: GeneratedImage_Aggregate;
  /** fetch data from the table: "GeneratedImage" using primary key columns */
  GeneratedImage_by_pk?: Maybe<GeneratedImage>;
  /** fetch data from the table: "Generation" */
  Generation: Array<Generation>;
  /** fetch aggregated fields from the table: "Generation" */
  Generation_aggregate: Generation_Aggregate;
  /** fetch data from the table: "Generation" using primary key columns */
  Generation_by_pk?: Maybe<Generation>;
};


export type Query_RootDeckArgs = {
  distinct_on?: InputMaybe<Array<Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deck_Order_By>>;
  where?: InputMaybe<Deck_Bool_Exp>;
};


export type Query_RootDeckCardArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};


export type Query_RootDeckCard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};


export type Query_RootDeckCard_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDeckTemplateArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplate_Order_By>>;
  where?: InputMaybe<DeckTemplate_Bool_Exp>;
};


export type Query_RootDeckTemplateCardArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By>>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};


export type Query_RootDeckTemplateCard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By>>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};


export type Query_RootDeckTemplateCard_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDeckTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplate_Order_By>>;
  where?: InputMaybe<DeckTemplate_Bool_Exp>;
};


export type Query_RootDeckTemplate_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDeck_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deck_Order_By>>;
  where?: InputMaybe<Deck_Bool_Exp>;
};


export type Query_RootDeck_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGeneratedImageArgs = {
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By>>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};


export type Query_RootGeneratedImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By>>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};


export type Query_RootGeneratedImage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGenerationArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};


export type Query_RootGeneration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};


export type Query_RootGeneration_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Deck" */
  Deck: Array<Deck>;
  /** fetch data from the table: "DeckCard" */
  DeckCard: Array<DeckCard>;
  /** fetch aggregated fields from the table: "DeckCard" */
  DeckCard_aggregate: DeckCard_Aggregate;
  /** fetch data from the table: "DeckCard" using primary key columns */
  DeckCard_by_pk?: Maybe<DeckCard>;
  /** fetch data from the table in a streaming manner: "DeckCard" */
  DeckCard_stream: Array<DeckCard>;
  /** fetch data from the table: "DeckTemplate" */
  DeckTemplate: Array<DeckTemplate>;
  /** fetch data from the table: "DeckTemplateCard" */
  DeckTemplateCard: Array<DeckTemplateCard>;
  /** fetch aggregated fields from the table: "DeckTemplateCard" */
  DeckTemplateCard_aggregate: DeckTemplateCard_Aggregate;
  /** fetch data from the table: "DeckTemplateCard" using primary key columns */
  DeckTemplateCard_by_pk?: Maybe<DeckTemplateCard>;
  /** fetch data from the table in a streaming manner: "DeckTemplateCard" */
  DeckTemplateCard_stream: Array<DeckTemplateCard>;
  /** fetch aggregated fields from the table: "DeckTemplate" */
  DeckTemplate_aggregate: DeckTemplate_Aggregate;
  /** fetch data from the table: "DeckTemplate" using primary key columns */
  DeckTemplate_by_pk?: Maybe<DeckTemplate>;
  /** fetch data from the table in a streaming manner: "DeckTemplate" */
  DeckTemplate_stream: Array<DeckTemplate>;
  /** fetch aggregated fields from the table: "Deck" */
  Deck_aggregate: Deck_Aggregate;
  /** fetch data from the table: "Deck" using primary key columns */
  Deck_by_pk?: Maybe<Deck>;
  /** fetch data from the table in a streaming manner: "Deck" */
  Deck_stream: Array<Deck>;
  /** fetch data from the table: "GeneratedImage" */
  GeneratedImage: Array<GeneratedImage>;
  /** fetch aggregated fields from the table: "GeneratedImage" */
  GeneratedImage_aggregate: GeneratedImage_Aggregate;
  /** fetch data from the table: "GeneratedImage" using primary key columns */
  GeneratedImage_by_pk?: Maybe<GeneratedImage>;
  /** fetch data from the table in a streaming manner: "GeneratedImage" */
  GeneratedImage_stream: Array<GeneratedImage>;
  /** fetch data from the table: "Generation" */
  Generation: Array<Generation>;
  /** fetch aggregated fields from the table: "Generation" */
  Generation_aggregate: Generation_Aggregate;
  /** fetch data from the table: "Generation" using primary key columns */
  Generation_by_pk?: Maybe<Generation>;
  /** fetch data from the table in a streaming manner: "Generation" */
  Generation_stream: Array<Generation>;
};


export type Subscription_RootDeckArgs = {
  distinct_on?: InputMaybe<Array<Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deck_Order_By>>;
  where?: InputMaybe<Deck_Bool_Exp>;
};


export type Subscription_RootDeckCardArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};


export type Subscription_RootDeckCard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};


export type Subscription_RootDeckCard_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDeckCard_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DeckCard_Stream_Cursor_Input>>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
};


export type Subscription_RootDeckTemplateArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplate_Order_By>>;
  where?: InputMaybe<DeckTemplate_Bool_Exp>;
};


export type Subscription_RootDeckTemplateCardArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By>>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};


export type Subscription_RootDeckTemplateCard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By>>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};


export type Subscription_RootDeckTemplateCard_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDeckTemplateCard_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DeckTemplateCard_Stream_Cursor_Input>>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
};


export type Subscription_RootDeckTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeckTemplate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplate_Order_By>>;
  where?: InputMaybe<DeckTemplate_Bool_Exp>;
};


export type Subscription_RootDeckTemplate_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDeckTemplate_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DeckTemplate_Stream_Cursor_Input>>;
  where?: InputMaybe<DeckTemplate_Bool_Exp>;
};


export type Subscription_RootDeck_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deck_Order_By>>;
  where?: InputMaybe<Deck_Bool_Exp>;
};


export type Subscription_RootDeck_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDeck_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Deck_Stream_Cursor_Input>>;
  where?: InputMaybe<Deck_Bool_Exp>;
};


export type Subscription_RootGeneratedImageArgs = {
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By>>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};


export type Subscription_RootGeneratedImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By>>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};


export type Subscription_RootGeneratedImage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGeneratedImage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GeneratedImage_Stream_Cursor_Input>>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
};


export type Subscription_RootGenerationArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};


export type Subscription_RootGeneration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Generation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};


export type Subscription_RootGeneration_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGeneration_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Generation_Stream_Cursor_Input>>;
  where?: InputMaybe<Generation_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type Delete_DeckMutationVariables = Exact<{
  where: Deck_Bool_Exp;
}>;


export type Delete_DeckMutation = { __typename?: 'mutation_root', delete_Deck?: { __typename?: 'Deck_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null };

export type Delete_DeckCardMutationVariables = Exact<{
  where: DeckCard_Bool_Exp;
}>;


export type Delete_DeckCardMutation = { __typename?: 'mutation_root', delete_DeckCard?: { __typename?: 'DeckCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }> } | null };

export type Delete_DeckCard_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where?: InputMaybe<Generation_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type Delete_DeckCard_By_PkMutation = { __typename?: 'mutation_root', delete_DeckCard_by_pk?: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any, Deck: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }, DeckTemplateCard?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Delete_DeckTemplateMutationVariables = Exact<{
  where: DeckTemplate_Bool_Exp;
}>;


export type Delete_DeckTemplateMutation = { __typename?: 'mutation_root', delete_DeckTemplate?: { __typename?: 'DeckTemplate_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any }> } | null };

export type Delete_DeckTemplateCardMutationVariables = Exact<{
  where: DeckTemplateCard_Bool_Exp;
}>;


export type Delete_DeckTemplateCardMutation = { __typename?: 'mutation_root', delete_DeckTemplateCard?: { __typename?: 'DeckTemplateCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }> } | null };

export type Delete_DeckTemplateCard_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type Delete_DeckTemplateCard_By_PkMutation = { __typename?: 'mutation_root', delete_DeckTemplateCard_by_pk?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type Delete_DeckTemplate_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By> | DeckTemplateCard_Order_By>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Deck_Order_By> | Deck_Order_By>;
  where1?: InputMaybe<Deck_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type Delete_DeckTemplate_By_PkMutation = { __typename?: 'mutation_root', delete_DeckTemplate_by_pk?: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any, DeckTemplateCards: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }>, Decks: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null };

export type Delete_Deck_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type Delete_Deck_By_PkMutation = { __typename?: 'mutation_root', delete_Deck_by_pk?: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type Delete_GeneratedImageMutationVariables = Exact<{
  where: GeneratedImage_Bool_Exp;
}>;


export type Delete_GeneratedImageMutation = { __typename?: 'mutation_root', delete_GeneratedImage?: { __typename?: 'GeneratedImage_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }> } | null };

export type Delete_GeneratedImage_By_PkMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Delete_GeneratedImage_By_PkMutation = { __typename?: 'mutation_root', delete_GeneratedImage_by_pk?: { __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any, Generation: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } } | null };

export type Delete_GenerationMutationVariables = Exact<{
  where: Generation_Bool_Exp;
}>;


export type Delete_GenerationMutation = { __typename?: 'mutation_root', delete_Generation?: { __typename?: 'Generation_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Delete_Generation_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By> | GeneratedImage_Order_By>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where1?: InputMaybe<Generation_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type Delete_Generation_By_PkMutation = { __typename?: 'mutation_root', delete_Generation_by_pk?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null, DeckCard: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }, GeneratedImages: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }>, Generation?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Insert_DeckMutationVariables = Exact<{
  objects: Array<Deck_Insert_Input> | Deck_Insert_Input;
  on_conflict?: InputMaybe<Deck_On_Conflict>;
}>;


export type Insert_DeckMutation = { __typename?: 'mutation_root', insert_Deck?: { __typename?: 'Deck_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null };

export type Insert_DeckCardMutationVariables = Exact<{
  objects: Array<DeckCard_Insert_Input> | DeckCard_Insert_Input;
  on_conflict?: InputMaybe<DeckCard_On_Conflict>;
}>;


export type Insert_DeckCardMutation = { __typename?: 'mutation_root', insert_DeckCard?: { __typename?: 'DeckCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }> } | null };

export type Insert_DeckCard_OneMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where?: InputMaybe<Generation_Bool_Exp>;
  object: DeckCard_Insert_Input;
  on_conflict?: InputMaybe<DeckCard_On_Conflict>;
}>;


export type Insert_DeckCard_OneMutation = { __typename?: 'mutation_root', insert_DeckCard_one?: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any, Deck: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }, DeckTemplateCard?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Insert_DeckTemplateMutationVariables = Exact<{
  objects: Array<DeckTemplate_Insert_Input> | DeckTemplate_Insert_Input;
  on_conflict?: InputMaybe<DeckTemplate_On_Conflict>;
}>;


export type Insert_DeckTemplateMutation = { __typename?: 'mutation_root', insert_DeckTemplate?: { __typename?: 'DeckTemplate_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any }> } | null };

export type Insert_DeckTemplateCardMutationVariables = Exact<{
  objects: Array<DeckTemplateCard_Insert_Input> | DeckTemplateCard_Insert_Input;
  on_conflict?: InputMaybe<DeckTemplateCard_On_Conflict>;
}>;


export type Insert_DeckTemplateCardMutation = { __typename?: 'mutation_root', insert_DeckTemplateCard?: { __typename?: 'DeckTemplateCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }> } | null };

export type Insert_DeckTemplateCard_OneMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  object: DeckTemplateCard_Insert_Input;
  on_conflict?: InputMaybe<DeckTemplateCard_On_Conflict>;
}>;


export type Insert_DeckTemplateCard_OneMutation = { __typename?: 'mutation_root', insert_DeckTemplateCard_one?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type Insert_DeckTemplate_OneMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By> | DeckTemplateCard_Order_By>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Deck_Order_By> | Deck_Order_By>;
  where1?: InputMaybe<Deck_Bool_Exp>;
  object: DeckTemplate_Insert_Input;
  on_conflict?: InputMaybe<DeckTemplate_On_Conflict>;
}>;


export type Insert_DeckTemplate_OneMutation = { __typename?: 'mutation_root', insert_DeckTemplate_one?: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any, DeckTemplateCards: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }>, Decks: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null };

export type Insert_Deck_OneMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  object: Deck_Insert_Input;
  on_conflict?: InputMaybe<Deck_On_Conflict>;
}>;


export type Insert_Deck_OneMutation = { __typename?: 'mutation_root', insert_Deck_one?: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type Insert_GeneratedImageMutationVariables = Exact<{
  objects: Array<GeneratedImage_Insert_Input> | GeneratedImage_Insert_Input;
  on_conflict?: InputMaybe<GeneratedImage_On_Conflict>;
}>;


export type Insert_GeneratedImageMutation = { __typename?: 'mutation_root', insert_GeneratedImage?: { __typename?: 'GeneratedImage_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }> } | null };

export type Insert_GeneratedImage_OneMutationVariables = Exact<{
  object: GeneratedImage_Insert_Input;
  on_conflict?: InputMaybe<GeneratedImage_On_Conflict>;
}>;


export type Insert_GeneratedImage_OneMutation = { __typename?: 'mutation_root', insert_GeneratedImage_one?: { __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any, Generation: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } } | null };

export type Insert_GenerationMutationVariables = Exact<{
  objects: Array<Generation_Insert_Input> | Generation_Insert_Input;
  on_conflict?: InputMaybe<Generation_On_Conflict>;
}>;


export type Insert_GenerationMutation = { __typename?: 'mutation_root', insert_Generation?: { __typename?: 'Generation_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Insert_Generation_OneMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By> | GeneratedImage_Order_By>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where1?: InputMaybe<Generation_Bool_Exp>;
  object: Generation_Insert_Input;
  on_conflict?: InputMaybe<Generation_On_Conflict>;
}>;


export type Insert_Generation_OneMutation = { __typename?: 'mutation_root', insert_Generation_one?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null, DeckCard: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }, GeneratedImages: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }>, Generation?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Update_DeckMutationVariables = Exact<{
  _inc?: InputMaybe<Deck_Inc_Input>;
  _set?: InputMaybe<Deck_Set_Input>;
  where: Deck_Bool_Exp;
}>;


export type Update_DeckMutation = { __typename?: 'mutation_root', update_Deck?: { __typename?: 'Deck_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null };

export type Update_DeckCardMutationVariables = Exact<{
  _inc?: InputMaybe<DeckCard_Inc_Input>;
  _set?: InputMaybe<DeckCard_Set_Input>;
  where: DeckCard_Bool_Exp;
}>;


export type Update_DeckCardMutation = { __typename?: 'mutation_root', update_DeckCard?: { __typename?: 'DeckCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }> } | null };

export type Update_DeckCard_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where?: InputMaybe<Generation_Bool_Exp>;
  _inc?: InputMaybe<DeckCard_Inc_Input>;
  _set?: InputMaybe<DeckCard_Set_Input>;
  pk_columns: DeckCard_Pk_Columns_Input;
}>;


export type Update_DeckCard_By_PkMutation = { __typename?: 'mutation_root', update_DeckCard_by_pk?: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any, Deck: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }, DeckTemplateCard?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Update_DeckCard_ManyMutationVariables = Exact<{
  updates: Array<DeckCard_Updates> | DeckCard_Updates;
}>;


export type Update_DeckCard_ManyMutation = { __typename?: 'mutation_root', update_DeckCard_many?: Array<{ __typename?: 'DeckCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }> } | null> | null };

export type Update_DeckTemplateMutationVariables = Exact<{
  _inc?: InputMaybe<DeckTemplate_Inc_Input>;
  _set?: InputMaybe<DeckTemplate_Set_Input>;
  where: DeckTemplate_Bool_Exp;
}>;


export type Update_DeckTemplateMutation = { __typename?: 'mutation_root', update_DeckTemplate?: { __typename?: 'DeckTemplate_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any }> } | null };

export type Update_DeckTemplateCardMutationVariables = Exact<{
  _inc?: InputMaybe<DeckTemplateCard_Inc_Input>;
  _set?: InputMaybe<DeckTemplateCard_Set_Input>;
  where: DeckTemplateCard_Bool_Exp;
}>;


export type Update_DeckTemplateCardMutation = { __typename?: 'mutation_root', update_DeckTemplateCard?: { __typename?: 'DeckTemplateCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }> } | null };

export type Update_DeckTemplateCard_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  _inc?: InputMaybe<DeckTemplateCard_Inc_Input>;
  _set?: InputMaybe<DeckTemplateCard_Set_Input>;
  pk_columns: DeckTemplateCard_Pk_Columns_Input;
}>;


export type Update_DeckTemplateCard_By_PkMutation = { __typename?: 'mutation_root', update_DeckTemplateCard_by_pk?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type Update_DeckTemplateCard_ManyMutationVariables = Exact<{
  updates: Array<DeckTemplateCard_Updates> | DeckTemplateCard_Updates;
}>;


export type Update_DeckTemplateCard_ManyMutation = { __typename?: 'mutation_root', update_DeckTemplateCard_many?: Array<{ __typename?: 'DeckTemplateCard_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }> } | null> | null };

export type Update_DeckTemplate_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By> | DeckTemplateCard_Order_By>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Deck_Order_By> | Deck_Order_By>;
  where1?: InputMaybe<Deck_Bool_Exp>;
  _inc?: InputMaybe<DeckTemplate_Inc_Input>;
  _set?: InputMaybe<DeckTemplate_Set_Input>;
  pk_columns: DeckTemplate_Pk_Columns_Input;
}>;


export type Update_DeckTemplate_By_PkMutation = { __typename?: 'mutation_root', update_DeckTemplate_by_pk?: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any, DeckTemplateCards: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }>, Decks: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null };

export type Update_DeckTemplate_ManyMutationVariables = Exact<{
  updates: Array<DeckTemplate_Updates> | DeckTemplate_Updates;
}>;


export type Update_DeckTemplate_ManyMutation = { __typename?: 'mutation_root', update_DeckTemplate_many?: Array<{ __typename?: 'DeckTemplate_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any }> } | null> | null };

export type Update_Deck_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  _inc?: InputMaybe<Deck_Inc_Input>;
  _set?: InputMaybe<Deck_Set_Input>;
  pk_columns: Deck_Pk_Columns_Input;
}>;


export type Update_Deck_By_PkMutation = { __typename?: 'mutation_root', update_Deck_by_pk?: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type Update_Deck_ManyMutationVariables = Exact<{
  updates: Array<Deck_Updates> | Deck_Updates;
}>;


export type Update_Deck_ManyMutation = { __typename?: 'mutation_root', update_Deck_many?: Array<{ __typename?: 'Deck_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null> | null };

export type Update_GeneratedImageMutationVariables = Exact<{
  _inc?: InputMaybe<GeneratedImage_Inc_Input>;
  _set?: InputMaybe<GeneratedImage_Set_Input>;
  where: GeneratedImage_Bool_Exp;
}>;


export type Update_GeneratedImageMutation = { __typename?: 'mutation_root', update_GeneratedImage?: { __typename?: 'GeneratedImage_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }> } | null };

export type Update_GeneratedImage_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<GeneratedImage_Inc_Input>;
  _set?: InputMaybe<GeneratedImage_Set_Input>;
  pk_columns: GeneratedImage_Pk_Columns_Input;
}>;


export type Update_GeneratedImage_By_PkMutation = { __typename?: 'mutation_root', update_GeneratedImage_by_pk?: { __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any, Generation: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } } | null };

export type Update_GeneratedImage_ManyMutationVariables = Exact<{
  updates: Array<GeneratedImage_Updates> | GeneratedImage_Updates;
}>;


export type Update_GeneratedImage_ManyMutation = { __typename?: 'mutation_root', update_GeneratedImage_many?: Array<{ __typename?: 'GeneratedImage_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }> } | null> | null };

export type Update_GenerationMutationVariables = Exact<{
  _inc?: InputMaybe<Generation_Inc_Input>;
  _set?: InputMaybe<Generation_Set_Input>;
  where: Generation_Bool_Exp;
}>;


export type Update_GenerationMutation = { __typename?: 'mutation_root', update_Generation?: { __typename?: 'Generation_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Update_Generation_By_PkMutationVariables = Exact<{
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By> | GeneratedImage_Order_By>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where1?: InputMaybe<Generation_Bool_Exp>;
  _inc?: InputMaybe<Generation_Inc_Input>;
  _set?: InputMaybe<Generation_Set_Input>;
  pk_columns: Generation_Pk_Columns_Input;
}>;


export type Update_Generation_By_PkMutation = { __typename?: 'mutation_root', update_Generation_by_pk?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null, DeckCard: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }, GeneratedImages: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }>, Generation?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type Update_Generation_ManyMutationVariables = Exact<{
  updates: Array<Generation_Updates> | Generation_Updates;
}>;


export type Update_Generation_ManyMutation = { __typename?: 'mutation_root', update_Generation_many?: Array<{ __typename?: 'Generation_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null> | null };

export type DeckQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Deck_Order_By> | Deck_Order_By>;
  where1?: InputMaybe<Deck_Bool_Exp>;
}>;


export type DeckQuery = { __typename?: 'query_root', Deck: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } }> };

export type DeckCardQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where?: InputMaybe<Generation_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where1?: InputMaybe<DeckCard_Bool_Exp>;
}>;


export type DeckCardQuery = { __typename?: 'query_root', DeckCard: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any, Deck: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }, DeckTemplateCard?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> }> };

export type DeckCard_AggregateQueryVariables = Exact<{
  columns?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
}>;


export type DeckCard_AggregateQuery = { __typename?: 'query_root', DeckCard_aggregate: { __typename?: 'DeckCard_aggregate', aggregate?: { __typename?: 'DeckCard_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }> } };

export type DeckCard_By_PkQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where?: InputMaybe<Generation_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type DeckCard_By_PkQuery = { __typename?: 'query_root', DeckCard_by_pk?: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any, Deck: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }, DeckTemplateCard?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };

export type DeckTemplateQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By> | DeckTemplateCard_Order_By>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Deck_Order_By> | Deck_Order_By>;
  where1?: InputMaybe<Deck_Bool_Exp>;
  distinct_on2?: InputMaybe<Array<DeckTemplate_Select_Column> | DeckTemplate_Select_Column>;
  limit2?: InputMaybe<Scalars['Int']['input']>;
  offset2?: InputMaybe<Scalars['Int']['input']>;
  order_by2?: InputMaybe<Array<DeckTemplate_Order_By> | DeckTemplate_Order_By>;
  where2?: InputMaybe<DeckTemplate_Bool_Exp>;
}>;


export type DeckTemplateQuery = { __typename?: 'query_root', DeckTemplate: Array<{ __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any, DeckTemplateCards: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }>, Decks: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> }> };

export type DeckTemplateCardQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<DeckTemplateCard_Order_By> | DeckTemplateCard_Order_By>;
  where1?: InputMaybe<DeckTemplateCard_Bool_Exp>;
}>;


export type DeckTemplateCardQuery = { __typename?: 'query_root', DeckTemplateCard: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } }> };

export type DeckTemplateCard_AggregateQueryVariables = Exact<{
  columns?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By> | DeckTemplateCard_Order_By>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
}>;


export type DeckTemplateCard_AggregateQuery = { __typename?: 'query_root', DeckTemplateCard_aggregate: { __typename?: 'DeckTemplateCard_aggregate', aggregate?: { __typename?: 'DeckTemplateCard_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }> } };

export type DeckTemplateCard_By_PkQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type DeckTemplateCard_By_PkQuery = { __typename?: 'query_root', DeckTemplateCard_by_pk?: { __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type DeckTemplate_AggregateQueryVariables = Exact<{
  columns?: InputMaybe<Array<DeckTemplate_Select_Column> | DeckTemplate_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  distinct_on?: InputMaybe<Array<DeckTemplate_Select_Column> | DeckTemplate_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplate_Order_By> | DeckTemplate_Order_By>;
  where?: InputMaybe<DeckTemplate_Bool_Exp>;
}>;


export type DeckTemplate_AggregateQuery = { __typename?: 'query_root', DeckTemplate_aggregate: { __typename?: 'DeckTemplate_aggregate', aggregate?: { __typename?: 'DeckTemplate_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any }> } };

export type DeckTemplate_By_PkQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckTemplateCard_Select_Column> | DeckTemplateCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckTemplateCard_Order_By> | DeckTemplateCard_Order_By>;
  where?: InputMaybe<DeckTemplateCard_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Deck_Order_By> | Deck_Order_By>;
  where1?: InputMaybe<Deck_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type DeckTemplate_By_PkQuery = { __typename?: 'query_root', DeckTemplate_by_pk?: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any, DeckTemplateCards: Array<{ __typename?: 'DeckTemplateCard', config?: string | null, created_at: any, deckTemplate_id: number, id: number, index: number, name?: string | null, updated_at: any }>, Decks: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } | null };

export type Deck_AggregateQueryVariables = Exact<{
  columns?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  distinct_on?: InputMaybe<Array<Deck_Select_Column> | Deck_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deck_Order_By> | Deck_Order_By>;
  where?: InputMaybe<Deck_Bool_Exp>;
}>;


export type Deck_AggregateQuery = { __typename?: 'query_root', Deck_aggregate: { __typename?: 'Deck_aggregate', aggregate?: { __typename?: 'Deck_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any }> } };

export type Deck_By_PkQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<DeckCard_Select_Column> | DeckCard_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DeckCard_Order_By> | DeckCard_Order_By>;
  where?: InputMaybe<DeckCard_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type Deck_By_PkQuery = { __typename?: 'query_root', Deck_by_pk?: { __typename?: 'Deck', created_at: any, deckTemplate_id: number, id: number, name: string, updated_at: any, DeckCards: Array<{ __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }>, DeckTemplate: { __typename?: 'DeckTemplate', created_at: any, id: number, name?: string | null, updated_at: any } } | null };

export type GeneratedImageQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By> | GeneratedImage_Order_By>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
}>;


export type GeneratedImageQuery = { __typename?: 'query_root', GeneratedImage: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any, Generation: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } }> };

export type GeneratedImage_AggregateQueryVariables = Exact<{
  columns?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By> | GeneratedImage_Order_By>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
}>;


export type GeneratedImage_AggregateQuery = { __typename?: 'query_root', GeneratedImage_aggregate: { __typename?: 'GeneratedImage_aggregate', aggregate?: { __typename?: 'GeneratedImage_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }> } };

export type GeneratedImage_By_PkQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GeneratedImage_By_PkQuery = { __typename?: 'query_root', GeneratedImage_by_pk?: { __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any, Generation: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } } | null };

export type GenerationQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By> | GeneratedImage_Order_By>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where1?: InputMaybe<Generation_Bool_Exp>;
  distinct_on2?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit2?: InputMaybe<Scalars['Int']['input']>;
  offset2?: InputMaybe<Scalars['Int']['input']>;
  order_by2?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where2?: InputMaybe<Generation_Bool_Exp>;
}>;


export type GenerationQuery = { __typename?: 'query_root', Generation: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null, DeckCard: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }, GeneratedImages: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }>, Generation?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> }> };

export type Generation_AggregateQueryVariables = Exact<{
  columns?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  distinct_on?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where?: InputMaybe<Generation_Bool_Exp>;
}>;


export type Generation_AggregateQuery = { __typename?: 'query_root', Generation_aggregate: { __typename?: 'Generation_aggregate', aggregate?: { __typename?: 'Generation_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } };

export type Generation_By_PkQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<GeneratedImage_Select_Column> | GeneratedImage_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GeneratedImage_Order_By> | GeneratedImage_Order_By>;
  where?: InputMaybe<GeneratedImage_Bool_Exp>;
  distinct_on1?: InputMaybe<Array<Generation_Select_Column> | Generation_Select_Column>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Generation_Order_By> | Generation_Order_By>;
  where1?: InputMaybe<Generation_Bool_Exp>;
  id: Scalars['Int']['input'];
}>;


export type Generation_By_PkQuery = { __typename?: 'query_root', Generation_by_pk?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null, DeckCard: { __typename?: 'DeckCard', config?: string | null, created_at: any, deckTemplateCard_id?: number | null, deck_id: number, id: number, index: number, name: string, updated_at: any }, GeneratedImages: Array<{ __typename?: 'GeneratedImage', created_at: any, generation_id: number, id: number, image: string, type: string, updated_at: any }>, Generation?: { __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null } | null, Generations: Array<{ __typename?: 'Generation', batch: any, card_id: number, config?: string | null, created_at: any, derivedFrom?: number | null, id: number, prompt?: string | null, updated_at: any, variationText?: string | null }> } | null };


export const Delete_DeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_Deck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Deck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_DeckMutation, Delete_DeckMutationVariables>;
export const Delete_DeckCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_DeckCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_DeckCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_DeckCardMutation, Delete_DeckCardMutationVariables>;
export const Delete_DeckCard_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_DeckCard_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_DeckCard_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Delete_DeckCard_By_PkMutation, Delete_DeckCard_By_PkMutationVariables>;
export const Delete_DeckTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_DeckTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_DeckTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_DeckTemplateMutation, Delete_DeckTemplateMutationVariables>;
export const Delete_DeckTemplateCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_DeckTemplateCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_DeckTemplateCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_DeckTemplateCardMutation, Delete_DeckTemplateCardMutationVariables>;
export const Delete_DeckTemplateCard_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_DeckTemplateCard_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_DeckTemplateCard_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Delete_DeckTemplateCard_By_PkMutation, Delete_DeckTemplateCard_By_PkMutationVariables>;
export const Delete_DeckTemplate_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_DeckTemplate_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_DeckTemplate_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Decks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Delete_DeckTemplate_By_PkMutation, Delete_DeckTemplate_By_PkMutationVariables>;
export const Delete_Deck_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_Deck_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Deck_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Delete_Deck_By_PkMutation, Delete_Deck_By_PkMutationVariables>;
export const Delete_GeneratedImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_GeneratedImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_GeneratedImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_GeneratedImageMutation, Delete_GeneratedImageMutationVariables>;
export const Delete_GeneratedImage_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_GeneratedImage_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_GeneratedImage_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Delete_GeneratedImage_By_PkMutation, Delete_GeneratedImage_By_PkMutationVariables>;
export const Delete_GenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_Generation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Generation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]}}]} as unknown as DocumentNode<Delete_GenerationMutation, Delete_GenerationMutationVariables>;
export const Delete_Generation_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delete_Generation_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Generation_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GeneratedImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]} as unknown as DocumentNode<Delete_Generation_By_PkMutation, Delete_Generation_By_PkMutationVariables>;
export const Insert_DeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_Deck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Deck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Insert_DeckMutation, Insert_DeckMutationVariables>;
export const Insert_DeckCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_DeckCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_DeckCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Insert_DeckCardMutation, Insert_DeckCardMutationVariables>;
export const Insert_DeckCard_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_DeckCard_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_DeckCard_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Insert_DeckCard_OneMutation, Insert_DeckCard_OneMutationVariables>;
export const Insert_DeckTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_DeckTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_DeckTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Insert_DeckTemplateMutation, Insert_DeckTemplateMutationVariables>;
export const Insert_DeckTemplateCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_DeckTemplateCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_DeckTemplateCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Insert_DeckTemplateCardMutation, Insert_DeckTemplateCardMutationVariables>;
export const Insert_DeckTemplateCard_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_DeckTemplateCard_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_DeckTemplateCard_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Insert_DeckTemplateCard_OneMutation, Insert_DeckTemplateCard_OneMutationVariables>;
export const Insert_DeckTemplate_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_DeckTemplate_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_DeckTemplate_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Decks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Insert_DeckTemplate_OneMutation, Insert_DeckTemplate_OneMutationVariables>;
export const Insert_Deck_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_Deck_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Deck_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Insert_Deck_OneMutation, Insert_Deck_OneMutationVariables>;
export const Insert_GeneratedImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_GeneratedImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_GeneratedImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Insert_GeneratedImageMutation, Insert_GeneratedImageMutationVariables>;
export const Insert_GeneratedImage_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_GeneratedImage_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_GeneratedImage_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Insert_GeneratedImage_OneMutation, Insert_GeneratedImage_OneMutationVariables>;
export const Insert_GenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_Generation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Generation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]}}]} as unknown as DocumentNode<Insert_GenerationMutation, Insert_GenerationMutationVariables>;
export const Insert_Generation_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_Generation_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_insert_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Generation_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GeneratedImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]} as unknown as DocumentNode<Insert_Generation_OneMutation, Insert_Generation_OneMutationVariables>;
export const Update_DeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_Deck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Deck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_DeckMutation, Update_DeckMutationVariables>;
export const Update_DeckCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_DeckCardMutation, Update_DeckCardMutationVariables>;
export const Update_DeckCard_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckCard_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_pk_columns_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckCard_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Update_DeckCard_By_PkMutation, Update_DeckCard_By_PkMutationVariables>;
export const Update_DeckCard_ManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckCard_many"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckCard_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_DeckCard_ManyMutation, Update_DeckCard_ManyMutationVariables>;
export const Update_DeckTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_DeckTemplateMutation, Update_DeckTemplateMutationVariables>;
export const Update_DeckTemplateCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckTemplateCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckTemplateCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_DeckTemplateCardMutation, Update_DeckTemplateCardMutationVariables>;
export const Update_DeckTemplateCard_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckTemplateCard_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_pk_columns_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckTemplateCard_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Update_DeckTemplateCard_By_PkMutation, Update_DeckTemplateCard_By_PkMutationVariables>;
export const Update_DeckTemplateCard_ManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckTemplateCard_many"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckTemplateCard_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_DeckTemplateCard_ManyMutation, Update_DeckTemplateCard_ManyMutationVariables>;
export const Update_DeckTemplate_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckTemplate_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_pk_columns_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckTemplate_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Decks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Update_DeckTemplate_By_PkMutation, Update_DeckTemplate_By_PkMutationVariables>;
export const Update_DeckTemplate_ManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_DeckTemplate_many"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_DeckTemplate_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_DeckTemplate_ManyMutation, Update_DeckTemplate_ManyMutationVariables>;
export const Update_Deck_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_Deck_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_pk_columns_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Deck_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Update_Deck_By_PkMutation, Update_Deck_By_PkMutationVariables>;
export const Update_Deck_ManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_Deck_many"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Deck_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Deck_ManyMutation, Update_Deck_ManyMutationVariables>;
export const Update_GeneratedImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_GeneratedImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_GeneratedImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_GeneratedImageMutation, Update_GeneratedImageMutationVariables>;
export const Update_GeneratedImage_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_GeneratedImage_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_pk_columns_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_GeneratedImage_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Update_GeneratedImage_By_PkMutation, Update_GeneratedImage_By_PkMutationVariables>;
export const Update_GeneratedImage_ManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_GeneratedImage_many"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_GeneratedImage_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Update_GeneratedImage_ManyMutation, Update_GeneratedImage_ManyMutationVariables>;
export const Update_GenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_Generation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Generation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]}}]} as unknown as DocumentNode<Update_GenerationMutation, Update_GenerationMutationVariables>;
export const Update_Generation_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_Generation_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_inc_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_pk_columns_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Generation_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_inc"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GeneratedImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]} as unknown as DocumentNode<Update_Generation_By_PkMutation, Update_Generation_By_PkMutationVariables>;
export const Update_Generation_ManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update_Generation_many"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_updates"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Generation_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]}}]} as unknown as DocumentNode<Update_Generation_ManyMutation, Update_Generation_ManyMutationVariables>;
export const DeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Deck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeckQuery, DeckQueryVariables>;
export const DeckCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeckCardQuery, DeckCardQueryVariables>;
export const DeckCard_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckCard_aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<DeckCard_AggregateQuery, DeckCard_AggregateQueryVariables>;
export const DeckCard_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckCard_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeckCard_By_PkQuery, DeckCard_By_PkQueryVariables>;
export const DeckTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on2"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by2"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on2"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit2"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset2"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by2"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Decks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeckTemplateQuery, DeckTemplateQueryVariables>;
export const DeckTemplateCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckTemplateCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeckTemplateCardQuery, DeckTemplateCardQueryVariables>;
export const DeckTemplateCard_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckTemplateCard_aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<DeckTemplateCard_AggregateQuery, DeckTemplateCard_AggregateQueryVariables>;
export const DeckTemplateCard_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckTemplateCard_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCard_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeckTemplateCard_By_PkQuery, DeckTemplateCard_By_PkQueryVariables>;
export const DeckTemplate_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckTemplate_aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplate_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<DeckTemplate_AggregateQuery, DeckTemplate_AggregateQueryVariables>;
export const DeckTemplate_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeckTemplate_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckTemplateCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckTemplateCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Decks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<DeckTemplate_By_PkQuery, DeckTemplate_By_PkQueryVariables>;
export const Deck_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Deck_aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Deck_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<Deck_AggregateQuery, Deck_AggregateQueryVariables>;
export const Deck_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Deck_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeckCard_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Deck_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DeckTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplate_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Deck_By_PkQuery, Deck_By_PkQueryVariables>;
export const GeneratedImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GeneratedImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GeneratedImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GeneratedImageQuery, GeneratedImageQueryVariables>;
export const GeneratedImage_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GeneratedImage_aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GeneratedImage_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<GeneratedImage_AggregateQuery, GeneratedImage_AggregateQueryVariables>;
export const GeneratedImage_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GeneratedImage_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GeneratedImage_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GeneratedImage_By_PkQuery, GeneratedImage_By_PkQueryVariables>;
export const GenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Generation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on2"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by2"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on2"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit2"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset2"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by2"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GeneratedImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]} as unknown as DocumentNode<GenerationQuery, GenerationQueryVariables>;
export const Generation_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Generation_aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"columns"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]}}]} as unknown as DocumentNode<Generation_AggregateQuery, Generation_AggregateQueryVariables>;
export const Generation_By_PkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Generation_by_pk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratedImage_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Generation_bool_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Generation_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeckCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deckTemplateCard_id"}},{"kind":"Field","name":{"kind":"Name","value":"deck_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GeneratedImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"generation_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on1"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit1"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset1"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by1"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"batch"}},{"kind":"Field","name":{"kind":"Name","value":"card_id"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"derivedFrom"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"variationText"}}]}}]}}]} as unknown as DocumentNode<Generation_By_PkQuery, Generation_By_PkQueryVariables>;