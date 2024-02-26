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
