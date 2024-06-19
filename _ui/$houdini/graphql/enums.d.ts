
type ValuesOf<T> = T[keyof T]
	
/** unique or primary key constraints on table "accounts" */
export declare const accounts_constraint: {
    /** unique or primary key constraint on columns "id" */
    readonly accounts_pkey: "accounts_pkey";
}

/** unique or primary key constraints on table "accounts" */
export type accounts_constraint$options = ValuesOf<typeof accounts_constraint>
 
/** select columns of table "accounts" */
export declare const accounts_select_column: {
    /** column name */
    readonly access_token: "access_token";
    /** column name */
    readonly expires_at: "expires_at";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly id_token: "id_token";
    /** column name */
    readonly provider: "provider";
    /** column name */
    readonly provideraccountid: "provideraccountid";
    /** column name */
    readonly refresh_token: "refresh_token";
    /** column name */
    readonly scope: "scope";
    /** column name */
    readonly session_state: "session_state";
    /** column name */
    readonly token_type: "token_type";
    /** column name */
    readonly type: "type";
    /** column name */
    readonly userid: "userid";
}

/** select columns of table "accounts" */
export type accounts_select_column$options = ValuesOf<typeof accounts_select_column>
 
/** update columns of table "accounts" */
export declare const accounts_update_column: {
    /** column name */
    readonly access_token: "access_token";
    /** column name */
    readonly expires_at: "expires_at";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly id_token: "id_token";
    /** column name */
    readonly provider: "provider";
    /** column name */
    readonly provideraccountid: "provideraccountid";
    /** column name */
    readonly refresh_token: "refresh_token";
    /** column name */
    readonly scope: "scope";
    /** column name */
    readonly session_state: "session_state";
    /** column name */
    readonly token_type: "token_type";
    /** column name */
    readonly type: "type";
    /** column name */
    readonly userid: "userid";
}

/** update columns of table "accounts" */
export type accounts_update_column$options = ValuesOf<typeof accounts_update_column>
 
/** ordering argument of a cursor */
export declare const cursor_ordering: {
    /** ascending ordering of the cursor */
    readonly ASC: "ASC";
    /** descending ordering of the cursor */
    readonly DESC: "DESC";
}

/** ordering argument of a cursor */
export type cursor_ordering$options = ValuesOf<typeof cursor_ordering>
 
/** unique or primary key constraints on table "emotion" */
export declare const emotion_constraint: {
    /** unique or primary key constraint on columns "id" */
    readonly emotion_pkey: "emotion_pkey";
}

/** unique or primary key constraints on table "emotion" */
export type emotion_constraint$options = ValuesOf<typeof emotion_constraint>
 
/** select columns of table "emotion" */
export declare const emotion_select_column: {
    /** column name */
    readonly anger: "anger";
    /** column name */
    readonly anticipation: "anticipation";
    /** column name */
    readonly disgust: "disgust";
    /** column name */
    readonly fear: "fear";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly joy: "joy";
    /** column name */
    readonly love: "love";
    /** column name */
    readonly optimism: "optimism";
    /** column name */
    readonly pessimism: "pessimism";
    /** column name */
    readonly sadness: "sadness";
    /** column name */
    readonly surprise: "surprise";
    /** column name */
    readonly trust: "trust";
}

/** select columns of table "emotion" */
export type emotion_select_column$options = ValuesOf<typeof emotion_select_column>
 
/** update columns of table "emotion" */
export declare const emotion_update_column: {
    /** column name */
    readonly anger: "anger";
    /** column name */
    readonly anticipation: "anticipation";
    /** column name */
    readonly disgust: "disgust";
    /** column name */
    readonly fear: "fear";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly joy: "joy";
    /** column name */
    readonly love: "love";
    /** column name */
    readonly optimism: "optimism";
    /** column name */
    readonly pessimism: "pessimism";
    /** column name */
    readonly sadness: "sadness";
    /** column name */
    readonly surprise: "surprise";
    /** column name */
    readonly trust: "trust";
}

/** update columns of table "emotion" */
export type emotion_update_column$options = ValuesOf<typeof emotion_update_column>
 
/** unique or primary key constraints on table "entry" */
export declare const entry_constraint: {
    /** unique or primary key constraint on columns "id" */
    readonly entry_pkey: "entry_pkey";
}

/** unique or primary key constraints on table "entry" */
export type entry_constraint$options = ValuesOf<typeof entry_constraint>
 
/** select columns of table "entry" */
export declare const entry_select_column: {
    /** column name */
    readonly date: "date";
    /** column name */
    readonly embedding: "embedding";
    /** column name */
    readonly embedding_text: "embedding_text";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly text: "text";
    /** column name */
    readonly user_id: "user_id";
}

/** select columns of table "entry" */
export type entry_select_column$options = ValuesOf<typeof entry_select_column>
 
/** update columns of table "entry" */
export declare const entry_update_column: {
    /** column name */
    readonly date: "date";
    /** column name */
    readonly embedding: "embedding";
    /** column name */
    readonly embedding_text: "embedding_text";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly text: "text";
    /** column name */
    readonly user_id: "user_id";
}

/** update columns of table "entry" */
export type entry_update_column$options = ValuesOf<typeof entry_update_column>
 
/** column ordering options */
export declare const order_by: {
    /** in ascending order, nulls last */
    readonly asc: "asc";
    /** in ascending order, nulls first */
    readonly asc_nulls_first: "asc_nulls_first";
    /** in ascending order, nulls last */
    readonly asc_nulls_last: "asc_nulls_last";
    /** in descending order, nulls first */
    readonly desc: "desc";
    /** in descending order, nulls first */
    readonly desc_nulls_first: "desc_nulls_first";
    /** in descending order, nulls last */
    readonly desc_nulls_last: "desc_nulls_last";
}

/** column ordering options */
export type order_by$options = ValuesOf<typeof order_by>
 
/** unique or primary key constraints on table "session" */
export declare const session_constraint: {
    /** unique or primary key constraint on columns "id" */
    readonly session_pkey: "session_pkey";
}

/** unique or primary key constraints on table "session" */
export type session_constraint$options = ValuesOf<typeof session_constraint>
 
/** select columns of table "session" */
export declare const session_select_column: {
    /** column name */
    readonly expires: "expires";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly sessiontoken: "sessiontoken";
    /** column name */
    readonly userid: "userid";
}

/** select columns of table "session" */
export type session_select_column$options = ValuesOf<typeof session_select_column>
 
/** update columns of table "session" */
export declare const session_update_column: {
    /** column name */
    readonly expires: "expires";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly sessiontoken: "sessiontoken";
    /** column name */
    readonly userid: "userid";
}

/** update columns of table "session" */
export type session_update_column$options = ValuesOf<typeof session_update_column>
 
/** unique or primary key constraints on table "topic" */
export declare const topic_constraint: {
    /** unique or primary key constraint on columns "id" */
    readonly topic_pkey: "topic_pkey";
}

/** unique or primary key constraints on table "topic" */
export type topic_constraint$options = ValuesOf<typeof topic_constraint>
 
/** select columns of table "topic" */
export declare const topic_select_column: {
    /** column name */
    readonly friends: "friends";
    /** column name */
    readonly goals: "goals";
    /** column name */
    readonly hobby: "hobby";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly relation: "relation";
    /** column name */
    readonly work: "work";
}

/** select columns of table "topic" */
export type topic_select_column$options = ValuesOf<typeof topic_select_column>
 
/** update columns of table "topic" */
export declare const topic_update_column: {
    /** column name */
    readonly friends: "friends";
    /** column name */
    readonly goals: "goals";
    /** column name */
    readonly hobby: "hobby";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly relation: "relation";
    /** column name */
    readonly work: "work";
}

/** update columns of table "topic" */
export type topic_update_column$options = ValuesOf<typeof topic_update_column>
 
/** unique or primary key constraints on table "user" */
export declare const user_constraint: {
    /** unique or primary key constraint on columns "id" */
    readonly user_pkey: "user_pkey";
}

/** unique or primary key constraints on table "user" */
export type user_constraint$options = ValuesOf<typeof user_constraint>
 
/** select columns of table "user" */
export declare const user_select_column: {
    /** column name */
    readonly email: "email";
    /** column name */
    readonly emailverified: "emailverified";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly image: "image";
    /** column name */
    readonly name: "name";
}

/** select columns of table "user" */
export type user_select_column$options = ValuesOf<typeof user_select_column>
 
/** update columns of table "user" */
export declare const user_update_column: {
    /** column name */
    readonly email: "email";
    /** column name */
    readonly emailverified: "emailverified";
    /** column name */
    readonly id: "id";
    /** column name */
    readonly image: "image";
    /** column name */
    readonly name: "name";
}

/** update columns of table "user" */
export type user_update_column$options = ValuesOf<typeof user_update_column>
 
/** select columns of table "verification_token" */
export declare const verification_token_select_column: {
    /** column name */
    readonly expires: "expires";
    /** column name */
    readonly identifier: "identifier";
    /** column name */
    readonly token: "token";
}

/** select columns of table "verification_token" */
export type verification_token_select_column$options = ValuesOf<typeof verification_token_select_column>
 