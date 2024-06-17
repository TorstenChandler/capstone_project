SET check_function_bodies = false;
CREATE TABLE public.accounts (
    id integer NOT NULL,
    userid integer,
    type character varying(255),
    provider character varying(255),
    provideraccountid character varying(255),
    refresh_token text,
    access_token text,
    expires_at bigint,
    id_token text,
    scope text,
    session_state text,
    token_type text
);
CREATE SEQUENCE public.accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;
CREATE TABLE public.emotion (
    id uuid NOT NULL,
    joy double precision NOT NULL,
    love double precision NOT NULL,
    optimism double precision NOT NULL,
    trust double precision NOT NULL,
    surprise double precision NOT NULL,
    anticipation double precision NOT NULL,
    sadness double precision NOT NULL,
    anger double precision NOT NULL,
    disgust double precision NOT NULL,
    fear double precision NOT NULL,
    pessimism double precision NOT NULL,
    CONSTRAINT emotion_anger_check CHECK (((anger >= (0)::double precision) AND (anger <= (1)::double precision))),
    CONSTRAINT emotion_anticipation_check CHECK (((anticipation >= (0)::double precision) AND (anticipation <= (1)::double precision))),
    CONSTRAINT emotion_disgust_check CHECK (((disgust >= (0)::double precision) AND (disgust <= (1)::double precision))),
    CONSTRAINT emotion_fear_check CHECK (((fear >= (0)::double precision) AND (fear <= (1)::double precision))),
    CONSTRAINT emotion_joy_check CHECK (((joy >= (0)::double precision) AND (joy <= (1)::double precision))),
    CONSTRAINT emotion_love_check CHECK (((love >= (0)::double precision) AND (love <= (1)::double precision))),
    CONSTRAINT emotion_optimism_check CHECK (((optimism >= (0)::double precision) AND (optimism <= (1)::double precision))),
    CONSTRAINT emotion_pessimism_check CHECK (((pessimism >= (0)::double precision) AND (pessimism <= (1)::double precision))),
    CONSTRAINT emotion_sadness_check CHECK (((sadness >= (0)::double precision) AND (sadness <= (1)::double precision))),
    CONSTRAINT emotion_surprise_check CHECK (((surprise >= (0)::double precision) AND (surprise <= (1)::double precision))),
    CONSTRAINT emotion_trust_check CHECK (((trust >= (0)::double precision) AND (trust <= (1)::double precision)))
);
CREATE TABLE public.entry (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id integer,
    text text NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.session (
    id integer NOT NULL,
    userid integer NOT NULL,
    expires timestamp with time zone NOT NULL,
    sessiontoken character varying(255) NOT NULL
);
CREATE SEQUENCE public.session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.session_id_seq OWNED BY public.session.id;
CREATE TABLE public.topic (
    id uuid NOT NULL,
    friends double precision NOT NULL,
    relation double precision NOT NULL,
    work double precision NOT NULL,
    hobby double precision NOT NULL,
    goals double precision NOT NULL,
    CONSTRAINT topic_friends_check CHECK (((friends >= (0)::double precision) AND (friends <= (1)::double precision))),
    CONSTRAINT topic_goals_check CHECK (((goals >= (0)::double precision) AND (goals <= (1)::double precision))),
    CONSTRAINT topic_hobby_check CHECK (((hobby >= (0)::double precision) AND (hobby <= (1)::double precision))),
    CONSTRAINT topic_relation_check CHECK (((relation >= (0)::double precision) AND (relation <= (1)::double precision))),
    CONSTRAINT topic_work_check CHECK (((work >= (0)::double precision) AND (work <= (1)::double precision)))
);
CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    emailverified timestamp with time zone,
    image text
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
CREATE TABLE public.verification_token (
    identifier text NOT NULL,
    expires timestamp with time zone NOT NULL,
    token text NOT NULL
);
ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);
ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.emotion
    ADD CONSTRAINT emotion_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.entry
    ADD CONSTRAINT entry_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.emotion
    ADD CONSTRAINT emotion_id_fkey FOREIGN KEY (id) REFERENCES public.entry(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.entry
    ADD CONSTRAINT entry_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_id_fkey FOREIGN KEY (id) REFERENCES public.entry(id) ON DELETE CASCADE;
