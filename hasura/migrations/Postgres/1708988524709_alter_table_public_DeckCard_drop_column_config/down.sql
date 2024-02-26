alter table "public"."DeckCard" alter column "config" drop not null;
alter table "public"."DeckCard" add column "config" jsonb;
