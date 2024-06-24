CREATE EXTENSION vector;
CREATE TABLE public.accounts (
    id integer NOT NULL,
    "userId" integer,
    type character varying(255),
    provider character varying(255),
    "providerAccountId" character varying(255),
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
    anger double precision NOT NULL,
    fear double precision NOT NULL,
    joy double precision NOT NULL,
    love double precision NOT NULL,
    sadness double precision NOT NULL,
    surprise double precision NOT NULL,
    CONSTRAINT emotion_anger_check CHECK (((anger >= (0)::double precision) AND (anger <= (1)::double precision))),
    CONSTRAINT emotion_fear_check CHECK (((fear >= (0)::double precision) AND (fear <= (1)::double precision))),
    CONSTRAINT emotion_joy_check CHECK (((joy >= (0)::double precision) AND (joy <= (1)::double precision))),
    CONSTRAINT emotion_love_check CHECK (((love >= (0)::double precision) AND (love <= (1)::double precision))),
    CONSTRAINT emotion_sadness_check CHECK (((sadness >= (0)::double precision) AND (sadness <= (1)::double precision))),
    CONSTRAINT emotion_surprise_check CHECK (((surprise >= (0)::double precision) AND (surprise <= (1)::double precision)))
    );
CREATE TABLE public.entry (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id integer,
    text text NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL,
    embedding_text text,
    embedding vector(4096)
);
CREATE TABLE public."sessions" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    expires timestamp with time zone NOT NULL,
    "sessionToken" character varying(255) NOT NULL
);
CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;
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
CREATE TABLE public."users" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    "emailVerified" timestamp with time zone,
    image text
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."users".id;
CREATE TABLE public.verification_token (
    identifier text NOT NULL,
    expires timestamp with time zone NOT NULL,
    token text NOT NULL
);
ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);
ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);
ALTER TABLE ONLY public."users" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.emotion
    ADD CONSTRAINT emotion_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.entry
    ADD CONSTRAINT entry_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."users"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.emotion
    ADD CONSTRAINT emotion_id_fkey FOREIGN KEY (id) REFERENCES public.entry(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.entry
    ADD CONSTRAINT entry_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."users"(id);
ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_id_fkey FOREIGN KEY (id) REFERENCES public.entry(id) ON DELETE CASCADE;

CREATE OR REPLACE VIEW emotions_timeline AS
SELECT
    u.id AS user_id,
    json_agg(e.id ORDER BY en.date ) AS entries,
    json_agg(e.joy ORDER BY en.date ASC) AS joy,
    json_agg(e.optimism ORDER BY en.date ASC) AS optimism,
    json_agg(e.trust ORDER BY en.date ASC) AS trust,
    json_agg(e.surprise ORDER BY en.date ASC) AS surprise,
    json_agg(e.anticipation ORDER BY en.date ASC) AS anticipation,
    json_agg(e.sadness ORDER BY en.date ASC) AS sadness,
    json_agg(e.disgust ORDER BY en.date ASC) AS disgust,
    json_agg(e.fear ORDER BY en.date ASC) AS fear,
    json_agg(e.pessimism ORDER BY en.date ASC) AS pessimism,
    json_agg(e.love ORDER BY en.date ASC) AS love,
    json_agg(e.anger ORDER BY en.date ASC) AS anger
FROM
    users u
LEFT JOIN
    entry en ON u.id = en.user_id
LEFT JOIN
    emotion e ON en.id = e.id
WHERE
    e.id IS NOT NULL
GROUP BY
    u.id