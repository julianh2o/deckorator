alter table "public"."Generation" alter column "config" drop not null;
alter table "public"."Generation" add column "config" jsonb;
