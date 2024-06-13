CREATE TABLE entry (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    text TEXT NOT NULL,
    date TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "user" (
    id SERIAL4 PRIMARY KEY,
    userID UUID NOT NULL REFERENCES "entry"(id),
    name VARCHAR(255),
    email VARCHAR(255),
    emailVerified TIMESTAMPTZ,
    image TEXT
);

CREATE TABLE session (
    id SERIAL4 PRIMARY KEY,
    userID INT4 NOT NULL REFERENCES "user"(id),
    expires TIMESTAMPTZ NOT NULL,
    token TEXT NOT NULL
);

CREATE TABLE verification_token (
    identifier TEXT NOT NULL,
    expires TIMESTAMPTZ NOT NULL,
    token TEXT NOT NULL
);

CREATE TABLE accounts (
    id SERIAL4 PRIMARY KEY,
    userId INT4 REFERENCES "user"(id),
    type VARCHAR(255),
    provider VARCHAR(255),
    providerAccountId VARCHAR(255),
    refresh_token TEXT,
    access_token TEXT,
    expires_at INT8,
    id_token TEXT,
    scope TEXT,
    session_state TEXT,
    token_type TEXT
);

CREATE TABLE emotion (
    id UUID PRIMARY KEY REFERENCES entry(id),
    happy FLOAT NOT NULL CHECK (happy >= 0 AND happy <= 1),
    sad FLOAT NOT NULL CHECK (sad >= 0 AND sad <= 1)
);

CREATE TABLE topic (
    id UUID PRIMARY KEY REFERENCES entry(id),
    friendship FLOAT NOT NULL CHECK (friendship >= 0 AND friendship <= 1),
    family FLOAT NOT NULL CHECK (family >= 0 AND family <= 1)
);
