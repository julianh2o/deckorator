SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public."Deck" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "deckTemplate_id" integer NOT NULL,
    name text NOT NULL
);
CREATE TABLE public."DeckCard" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deck_id integer NOT NULL,
    "deckTemplateCard_id" integer,
    index integer NOT NULL,
    name text NOT NULL,
    config jsonb
);
CREATE SEQUENCE public."DeckCard_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."DeckCard_id_seq" OWNED BY public."DeckCard".id;
CREATE TABLE public."DeckTemplate" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text
);
CREATE TABLE public."DeckTemplateCard" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "deckTemplate_id" integer NOT NULL,
    index integer NOT NULL,
    name text,
    config jsonb DEFAULT jsonb_build_object() NOT NULL
);
CREATE SEQUENCE public."DeckTemplateCard_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."DeckTemplateCard_id_seq" OWNED BY public."DeckTemplateCard".id;
CREATE SEQUENCE public."DeckTemplate_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."DeckTemplate_id_seq" OWNED BY public."DeckTemplate".id;
CREATE SEQUENCE public."Deck_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Deck_id_seq" OWNED BY public."Deck".id;
CREATE TABLE public."GeneratedImage" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    generation_id integer NOT NULL,
    type text NOT NULL,
    image text NOT NULL
);
CREATE SEQUENCE public."GeneratedImage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."GeneratedImage_id_seq" OWNED BY public."GeneratedImage".id;
CREATE TABLE public."Generation" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    card_id integer NOT NULL,
    "derivedFrom" integer,
    batch uuid NOT NULL,
    prompt text,
    "variationText" text,
    config jsonb
);
CREATE SEQUENCE public."Generation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Generation_id_seq" OWNED BY public."Generation".id;
ALTER TABLE ONLY public."Deck" ALTER COLUMN id SET DEFAULT nextval('public."Deck_id_seq"'::regclass);
ALTER TABLE ONLY public."DeckCard" ALTER COLUMN id SET DEFAULT nextval('public."DeckCard_id_seq"'::regclass);
ALTER TABLE ONLY public."DeckTemplate" ALTER COLUMN id SET DEFAULT nextval('public."DeckTemplate_id_seq"'::regclass);
ALTER TABLE ONLY public."DeckTemplateCard" ALTER COLUMN id SET DEFAULT nextval('public."DeckTemplateCard_id_seq"'::regclass);
ALTER TABLE ONLY public."GeneratedImage" ALTER COLUMN id SET DEFAULT nextval('public."GeneratedImage_id_seq"'::regclass);
ALTER TABLE ONLY public."Generation" ALTER COLUMN id SET DEFAULT nextval('public."Generation_id_seq"'::regclass);
ALTER TABLE ONLY public."DeckCard"
    ADD CONSTRAINT "DeckCard_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."DeckTemplateCard"
    ADD CONSTRAINT "DeckTemplateCard_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."DeckTemplate"
    ADD CONSTRAINT "DeckTemplate_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Deck"
    ADD CONSTRAINT "Deck_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."GeneratedImage"
    ADD CONSTRAINT "GeneratedImage_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Generation"
    ADD CONSTRAINT "Generation_pkey" PRIMARY KEY (id);
CREATE TRIGGER "set_public_DeckCard_updated_at" BEFORE UPDATE ON public."DeckCard" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_DeckCard_updated_at" ON public."DeckCard" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER "set_public_DeckTemplateCard_updated_at" BEFORE UPDATE ON public."DeckTemplateCard" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_DeckTemplateCard_updated_at" ON public."DeckTemplateCard" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER "set_public_DeckTemplate_updated_at" BEFORE UPDATE ON public."DeckTemplate" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_DeckTemplate_updated_at" ON public."DeckTemplate" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER "set_public_Deck_updated_at" BEFORE UPDATE ON public."Deck" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_Deck_updated_at" ON public."Deck" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER "set_public_GeneratedImage_updated_at" BEFORE UPDATE ON public."GeneratedImage" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_GeneratedImage_updated_at" ON public."GeneratedImage" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER "set_public_Generation_updated_at" BEFORE UPDATE ON public."Generation" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_Generation_updated_at" ON public."Generation" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public."DeckCard"
    ADD CONSTRAINT "DeckCard_deckTemplateCard_id_fkey" FOREIGN KEY ("deckTemplateCard_id") REFERENCES public."DeckTemplateCard"(id) ON UPDATE SET NULL ON DELETE SET NULL;
ALTER TABLE ONLY public."DeckCard"
    ADD CONSTRAINT "DeckCard_deck_id_fkey" FOREIGN KEY (deck_id) REFERENCES public."Deck"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."DeckTemplateCard"
    ADD CONSTRAINT "DeckTemplateCard_deckTemplate_id_fkey" FOREIGN KEY ("deckTemplate_id") REFERENCES public."DeckTemplate"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Deck"
    ADD CONSTRAINT "Deck_deckTemplate_id_fkey" FOREIGN KEY ("deckTemplate_id") REFERENCES public."DeckTemplate"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."GeneratedImage"
    ADD CONSTRAINT "GeneratedImage_generation_id_fkey" FOREIGN KEY (generation_id) REFERENCES public."Generation"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Generation"
    ADD CONSTRAINT "Generation_card_id_fkey" FOREIGN KEY (card_id) REFERENCES public."DeckCard"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Generation"
    ADD CONSTRAINT "Generation_derivedFrom_fkey" FOREIGN KEY ("derivedFrom") REFERENCES public."Generation"(id) ON UPDATE SET NULL ON DELETE SET NULL;
