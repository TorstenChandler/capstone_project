CREATE EXTENSION vector;

create table "user" (
    id serial4 primary key,
    name varchar(255),
    email varchar(255),
    emailVerified timestamptz,
    image text
);

create table "session" (
    id serial4 primary key ,
    userId int4 not null,
    expires timestamptz not null,
    sessionToken varchar(255) not null
);

create table verification_token(
    identifier text not null,
    expires timestamptz not null,
    token text not null
);

create table accounts (
    id serial4 primary key,
    userId int4,
    type varchar(255),
    provider varchar(255),
    providerAccountId varchar(255),
    refresh_token text,
    access_token text,
    expires_at int8,
    id_token text,
    scope text,
    session_state text,
    token_type text
);

create table "entry"(
    id uuid primary key default gen_random_uuid(),
    "user_id" int4 REFERENCES "user"(id),
    text text not null,
    date timestamptz not null default now()
);

create table emotion(
    id uuid primary key REFERENCES entry(id),
    joy float not null CHECK(joy >= 0 AND joy <= 1),
    love float not null CHECK(love >= 0 AND love <= 1),
    optimism float not null CHECK(optimism >= 0 AND optimism <= 1),
    trust float not null CHECK(trust >= 0 AND trust <= 1),
    surprise float not null CHECK(surprise >= 0 AND surprise <= 1),
    anticipation float not null CHECK(anticipation >= 0 AND anticipation <= 1),
    sadness float not null CHECK(sadness >= 0 AND sadness <= 1),
    anger float not null CHECK(anger >= 0 AND anger <= 1),
    disgust float not null CHECK(disgust >= 0 AND disgust <= 1),
    fear float not null CHECK(fear >= 0 AND fear <= 1),
    pessimism float not null CHECK(pessimism >= 0 AND pessimism <= 1)
);

create table topic(
    id uuid primary key REFERENCES entry(id),
    friendship float not null,
    family float not null
);

create table text_embedding(
    id uuid primary key REFERENCES entry(id),
    

);

