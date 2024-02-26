alter table "public"."DeckTemplateCard" alter column "config" set default jsonb_build_object();
alter table "public"."DeckTemplateCard" alter column "config" drop not null;
alter table "public"."DeckTemplateCard" add column "config" jsonb;
