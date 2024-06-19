/** unique or primary key constraints on table "accounts" */
export const accounts_constraint = {
    /**
     * unique or primary key constraint on columns "id"
    */
    "accounts_pkey": "accounts_pkey"
};

/** select columns of table "accounts" */
export const accounts_select_column = {
    /**
     * column name
    */
    "access_token": "access_token",

    /**
     * column name
    */
    "expires_at": "expires_at",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "id_token": "id_token",

    /**
     * column name
    */
    "provider": "provider",

    /**
     * column name
    */
    "provideraccountid": "provideraccountid",

    /**
     * column name
    */
    "refresh_token": "refresh_token",

    /**
     * column name
    */
    "scope": "scope",

    /**
     * column name
    */
    "session_state": "session_state",

    /**
     * column name
    */
    "token_type": "token_type",

    /**
     * column name
    */
    "type": "type",

    /**
     * column name
    */
    "userid": "userid"
};

/** update columns of table "accounts" */
export const accounts_update_column = {
    /**
     * column name
    */
    "access_token": "access_token",

    /**
     * column name
    */
    "expires_at": "expires_at",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "id_token": "id_token",

    /**
     * column name
    */
    "provider": "provider",

    /**
     * column name
    */
    "provideraccountid": "provideraccountid",

    /**
     * column name
    */
    "refresh_token": "refresh_token",

    /**
     * column name
    */
    "scope": "scope",

    /**
     * column name
    */
    "session_state": "session_state",

    /**
     * column name
    */
    "token_type": "token_type",

    /**
     * column name
    */
    "type": "type",

    /**
     * column name
    */
    "userid": "userid"
};

/** ordering argument of a cursor */
export const cursor_ordering = {
    /**
     * ascending ordering of the cursor
    */
    "ASC": "ASC",

    /**
     * descending ordering of the cursor
    */
    "DESC": "DESC"
};

/** unique or primary key constraints on table "emotion" */
export const emotion_constraint = {
    /**
     * unique or primary key constraint on columns "id"
    */
    "emotion_pkey": "emotion_pkey"
};

/** select columns of table "emotion" */
export const emotion_select_column = {
    /**
     * column name
    */
    "anger": "anger",

    /**
     * column name
    */
    "anticipation": "anticipation",

    /**
     * column name
    */
    "disgust": "disgust",

    /**
     * column name
    */
    "fear": "fear",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "joy": "joy",

    /**
     * column name
    */
    "love": "love",

    /**
     * column name
    */
    "optimism": "optimism",

    /**
     * column name
    */
    "pessimism": "pessimism",

    /**
     * column name
    */
    "sadness": "sadness",

    /**
     * column name
    */
    "surprise": "surprise",

    /**
     * column name
    */
    "trust": "trust"
};

/** update columns of table "emotion" */
export const emotion_update_column = {
    /**
     * column name
    */
    "anger": "anger",

    /**
     * column name
    */
    "anticipation": "anticipation",

    /**
     * column name
    */
    "disgust": "disgust",

    /**
     * column name
    */
    "fear": "fear",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "joy": "joy",

    /**
     * column name
    */
    "love": "love",

    /**
     * column name
    */
    "optimism": "optimism",

    /**
     * column name
    */
    "pessimism": "pessimism",

    /**
     * column name
    */
    "sadness": "sadness",

    /**
     * column name
    */
    "surprise": "surprise",

    /**
     * column name
    */
    "trust": "trust"
};

/** unique or primary key constraints on table "entry" */
export const entry_constraint = {
    /**
     * unique or primary key constraint on columns "id"
    */
    "entry_pkey": "entry_pkey"
};

/** select columns of table "entry" */
export const entry_select_column = {
    /**
     * column name
    */
    "date": "date",

    /**
     * column name
    */
    "embedding": "embedding",

    /**
     * column name
    */
    "embedding_text": "embedding_text",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "text": "text",

    /**
     * column name
    */
    "user_id": "user_id"
};

/** update columns of table "entry" */
export const entry_update_column = {
    /**
     * column name
    */
    "date": "date",

    /**
     * column name
    */
    "embedding": "embedding",

    /**
     * column name
    */
    "embedding_text": "embedding_text",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "text": "text",

    /**
     * column name
    */
    "user_id": "user_id"
};

/** column ordering options */
export const order_by = {
    /**
     * in ascending order, nulls last
    */
    "asc": "asc",

    /**
     * in ascending order, nulls first
    */
    "asc_nulls_first": "asc_nulls_first",

    /**
     * in ascending order, nulls last
    */
    "asc_nulls_last": "asc_nulls_last",

    /**
     * in descending order, nulls first
    */
    "desc": "desc",

    /**
     * in descending order, nulls first
    */
    "desc_nulls_first": "desc_nulls_first",

    /**
     * in descending order, nulls last
    */
    "desc_nulls_last": "desc_nulls_last"
};

/** unique or primary key constraints on table "session" */
export const session_constraint = {
    /**
     * unique or primary key constraint on columns "id"
    */
    "session_pkey": "session_pkey"
};

/** select columns of table "session" */
export const session_select_column = {
    /**
     * column name
    */
    "expires": "expires",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "sessiontoken": "sessiontoken",

    /**
     * column name
    */
    "userid": "userid"
};

/** update columns of table "session" */
export const session_update_column = {
    /**
     * column name
    */
    "expires": "expires",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "sessiontoken": "sessiontoken",

    /**
     * column name
    */
    "userid": "userid"
};

/** unique or primary key constraints on table "topic" */
export const topic_constraint = {
    /**
     * unique or primary key constraint on columns "id"
    */
    "topic_pkey": "topic_pkey"
};

/** select columns of table "topic" */
export const topic_select_column = {
    /**
     * column name
    */
    "friends": "friends",

    /**
     * column name
    */
    "goals": "goals",

    /**
     * column name
    */
    "hobby": "hobby",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "relation": "relation",

    /**
     * column name
    */
    "work": "work"
};

/** update columns of table "topic" */
export const topic_update_column = {
    /**
     * column name
    */
    "friends": "friends",

    /**
     * column name
    */
    "goals": "goals",

    /**
     * column name
    */
    "hobby": "hobby",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "relation": "relation",

    /**
     * column name
    */
    "work": "work"
};

/** unique or primary key constraints on table "user" */
export const user_constraint = {
    /**
     * unique or primary key constraint on columns "id"
    */
    "user_pkey": "user_pkey"
};

/** select columns of table "user" */
export const user_select_column = {
    /**
     * column name
    */
    "email": "email",

    /**
     * column name
    */
    "emailverified": "emailverified",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "image": "image",

    /**
     * column name
    */
    "name": "name"
};

/** update columns of table "user" */
export const user_update_column = {
    /**
     * column name
    */
    "email": "email",

    /**
     * column name
    */
    "emailverified": "emailverified",

    /**
     * column name
    */
    "id": "id",

    /**
     * column name
    */
    "image": "image",

    /**
     * column name
    */
    "name": "name"
};

/** select columns of table "verification_token" */
export const verification_token_select_column = {
    /**
     * column name
    */
    "expires": "expires",

    /**
     * column name
    */
    "identifier": "identifier",

    /**
     * column name
    */
    "token": "token"
};