import type { users_update_column } from "$houdini/graphql/enums";
import type { users_constraint } from "$houdini/graphql/enums";
import type { topic_update_column } from "$houdini/graphql/enums";
import type { topic_constraint } from "$houdini/graphql/enums";
import type { emotion_update_column } from "$houdini/graphql/enums";
import type { emotion_constraint } from "$houdini/graphql/enums";
import type { entry_select_column } from "$houdini/graphql/enums";
import type { entry_update_column } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { entry_constraint } from "$houdini/graphql/enums";

export type saveEntry = {
    readonly "input": saveEntry$input;
    readonly "result": saveEntry$result;
};

export type saveEntry$result = {
    /**
     * insert a single row into the table: "entry"
    */
    readonly insert_entry_one: {
        readonly id: any;
    } | null;
};

type timestamptz_comparison_exp = {
    _eq?: any | null | undefined;
    _gt?: any | null | undefined;
    _gte?: any | null | undefined;
    _in?: (any)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: any | null | undefined;
    _lte?: any | null | undefined;
    _neq?: any | null | undefined;
    _nin?: (any)[] | null | undefined;
};

type vector_comparison_exp = {
    _eq?: any | null | undefined;
    _gt?: any | null | undefined;
    _gte?: any | null | undefined;
    _in?: (any)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: any | null | undefined;
    _lte?: any | null | undefined;
    _neq?: any | null | undefined;
    _nin?: (any)[] | null | undefined;
};

type String_comparison_exp = {
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _ilike?: string | null | undefined;
    _in?: (string)[] | null | undefined;
    _iregex?: string | null | undefined;
    _is_null?: boolean | null | undefined;
    _like?: string | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _neq?: string | null | undefined;
    _nilike?: string | null | undefined;
    _nin?: (string)[] | null | undefined;
    _niregex?: string | null | undefined;
    _nlike?: string | null | undefined;
    _nregex?: string | null | undefined;
    _nsimilar?: string | null | undefined;
    _regex?: string | null | undefined;
    _similar?: string | null | undefined;
};

type float8_comparison_exp = {
    _eq?: any | null | undefined;
    _gt?: any | null | undefined;
    _gte?: any | null | undefined;
    _in?: (any)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: any | null | undefined;
    _lte?: any | null | undefined;
    _neq?: any | null | undefined;
    _nin?: (any)[] | null | undefined;
};

type uuid_comparison_exp = {
    _eq?: any | null | undefined;
    _gt?: any | null | undefined;
    _gte?: any | null | undefined;
    _in?: (any)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: any | null | undefined;
    _lte?: any | null | undefined;
    _neq?: any | null | undefined;
    _nin?: (any)[] | null | undefined;
};

type emotion_bool_exp = {
    _and?: (emotion_bool_exp)[] | null | undefined;
    _not?: emotion_bool_exp | null | undefined;
    _or?: (emotion_bool_exp)[] | null | undefined;
    anger?: float8_comparison_exp | null | undefined;
    entry?: entry_bool_exp | null | undefined;
    fear?: float8_comparison_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    joy?: float8_comparison_exp | null | undefined;
    love?: float8_comparison_exp | null | undefined;
    sadness?: float8_comparison_exp | null | undefined;
    surprise?: float8_comparison_exp | null | undefined;
};

type topic_bool_exp = {
    _and?: (topic_bool_exp)[] | null | undefined;
    _not?: topic_bool_exp | null | undefined;
    _or?: (topic_bool_exp)[] | null | undefined;
    entry?: entry_bool_exp | null | undefined;
    friends?: float8_comparison_exp | null | undefined;
    goals?: float8_comparison_exp | null | undefined;
    hobby?: float8_comparison_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    relation?: float8_comparison_exp | null | undefined;
    work?: float8_comparison_exp | null | undefined;
};

type Int_comparison_exp = {
    _eq?: number | null | undefined;
    _gt?: number | null | undefined;
    _gte?: number | null | undefined;
    _in?: (number)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: number | null | undefined;
    _lte?: number | null | undefined;
    _neq?: number | null | undefined;
    _nin?: (number)[] | null | undefined;
};

type entry_aggregate_bool_exp_count = {
    arguments?: (ValueOf<typeof entry_select_column>)[] | null | undefined;
    distinct?: boolean | null | undefined;
    filter?: entry_bool_exp | null | undefined;
    predicate: Int_comparison_exp;
};

type entry_aggregate_bool_exp = {
    count?: entry_aggregate_bool_exp_count | null | undefined;
};

type users_bool_exp = {
    _and?: (users_bool_exp)[] | null | undefined;
    _not?: users_bool_exp | null | undefined;
    _or?: (users_bool_exp)[] | null | undefined;
    email?: String_comparison_exp | null | undefined;
    emailVerified?: timestamptz_comparison_exp | null | undefined;
    entries?: entry_bool_exp | null | undefined;
    entries_aggregate?: entry_aggregate_bool_exp | null | undefined;
    id?: Int_comparison_exp | null | undefined;
    image?: String_comparison_exp | null | undefined;
    name?: String_comparison_exp | null | undefined;
};

type entry_bool_exp = {
    _and?: (entry_bool_exp)[] | null | undefined;
    _not?: entry_bool_exp | null | undefined;
    _or?: (entry_bool_exp)[] | null | undefined;
    date?: timestamptz_comparison_exp | null | undefined;
    embedding?: vector_comparison_exp | null | undefined;
    embedding_text?: String_comparison_exp | null | undefined;
    emotions?: emotion_bool_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    text?: String_comparison_exp | null | undefined;
    topics?: topic_bool_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
    user_id?: Int_comparison_exp | null | undefined;
};

type entry_on_conflict = {
    constraint: ValueOf<typeof entry_constraint>;
    update_columns: (ValueOf<typeof entry_update_column>)[];
    where?: entry_bool_exp | null | undefined;
};

type entry_obj_rel_insert_input = {
    data: entry_insert_input;
    on_conflict?: entry_on_conflict | null | undefined;
};

type emotion_insert_input = {
    anger?: any | null | undefined;
    entry?: entry_obj_rel_insert_input | null | undefined;
    fear?: any | null | undefined;
    id?: any | null | undefined;
    joy?: any | null | undefined;
    love?: any | null | undefined;
    sadness?: any | null | undefined;
    surprise?: any | null | undefined;
};

type emotion_on_conflict = {
    constraint: ValueOf<typeof emotion_constraint>;
    update_columns: (ValueOf<typeof emotion_update_column>)[];
    where?: emotion_bool_exp | null | undefined;
};

type emotion_obj_rel_insert_input = {
    data: emotion_insert_input;
    on_conflict?: emotion_on_conflict | null | undefined;
};

type topic_insert_input = {
    entry?: entry_obj_rel_insert_input | null | undefined;
    friends?: any | null | undefined;
    goals?: any | null | undefined;
    hobby?: any | null | undefined;
    id?: any | null | undefined;
    relation?: any | null | undefined;
    work?: any | null | undefined;
};

type topic_on_conflict = {
    constraint: ValueOf<typeof topic_constraint>;
    update_columns: (ValueOf<typeof topic_update_column>)[];
    where?: topic_bool_exp | null | undefined;
};

type topic_obj_rel_insert_input = {
    data: topic_insert_input;
    on_conflict?: topic_on_conflict | null | undefined;
};

type entry_arr_rel_insert_input = {
    data: (entry_insert_input)[];
    on_conflict?: entry_on_conflict | null | undefined;
};

type users_insert_input = {
    email?: string | null | undefined;
    emailVerified?: any | null | undefined;
    entries?: entry_arr_rel_insert_input | null | undefined;
    id?: number | null | undefined;
    image?: string | null | undefined;
    name?: string | null | undefined;
};

type users_on_conflict = {
    constraint: ValueOf<typeof users_constraint>;
    update_columns: (ValueOf<typeof users_update_column>)[];
    where?: users_bool_exp | null | undefined;
};

type users_obj_rel_insert_input = {
    data: users_insert_input;
    on_conflict?: users_on_conflict | null | undefined;
};

type entry_insert_input = {
    date?: any | null | undefined;
    embedding?: any | null | undefined;
    embedding_text?: string | null | undefined;
    emotions?: emotion_obj_rel_insert_input | null | undefined;
    id?: any | null | undefined;
    text?: string | null | undefined;
    topics?: topic_obj_rel_insert_input | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    user_id?: number | null | undefined;
};

export type saveEntry$input = {
    entry: entry_insert_input;
};

export type saveEntry$optimistic = {
    /**
     * insert a single row into the table: "entry"
    */
    readonly insert_entry_one?: {
        readonly id?: any;
    } | null;
};

export type saveEntry$artifact = {
    "name": "saveEntry";
    "kind": "HoudiniMutation";
    "hash": "e22b4b82a36efeac63c529483674c33f9c152601fe6cfc26697cf83ef4988763";
    "raw": `mutation saveEntry($entry: entry_insert_input!) {
  insert_entry_one(object: $entry) {
    id
  }
}
`;
    "rootType": "mutation_root";
    "selection": {
        "fields": {
            "insert_entry_one": {
                "type": "entry";
                "keyRaw": "insert_entry_one(object: $entry)";
                "nullable": true;
                "selection": {
                    "fields": {
                        "id": {
                            "type": "uuid";
                            "keyRaw": "id";
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "input": {
        "fields": {
            "entry": "entry_insert_input";
        };
        "types": {
            "timestamptz_comparison_exp": {
                "_eq": "timestamptz";
                "_gt": "timestamptz";
                "_gte": "timestamptz";
                "_in": "timestamptz";
                "_is_null": "Boolean";
                "_lt": "timestamptz";
                "_lte": "timestamptz";
                "_neq": "timestamptz";
                "_nin": "timestamptz";
            };
            "vector_comparison_exp": {
                "_eq": "vector";
                "_gt": "vector";
                "_gte": "vector";
                "_in": "vector";
                "_is_null": "Boolean";
                "_lt": "vector";
                "_lte": "vector";
                "_neq": "vector";
                "_nin": "vector";
            };
            "String_comparison_exp": {
                "_eq": "String";
                "_gt": "String";
                "_gte": "String";
                "_ilike": "String";
                "_in": "String";
                "_iregex": "String";
                "_is_null": "Boolean";
                "_like": "String";
                "_lt": "String";
                "_lte": "String";
                "_neq": "String";
                "_nilike": "String";
                "_nin": "String";
                "_niregex": "String";
                "_nlike": "String";
                "_nregex": "String";
                "_nsimilar": "String";
                "_regex": "String";
                "_similar": "String";
            };
            "float8_comparison_exp": {
                "_eq": "float8";
                "_gt": "float8";
                "_gte": "float8";
                "_in": "float8";
                "_is_null": "Boolean";
                "_lt": "float8";
                "_lte": "float8";
                "_neq": "float8";
                "_nin": "float8";
            };
            "uuid_comparison_exp": {
                "_eq": "uuid";
                "_gt": "uuid";
                "_gte": "uuid";
                "_in": "uuid";
                "_is_null": "Boolean";
                "_lt": "uuid";
                "_lte": "uuid";
                "_neq": "uuid";
                "_nin": "uuid";
            };
            "emotion_bool_exp": {
                "_and": "emotion_bool_exp";
                "_not": "emotion_bool_exp";
                "_or": "emotion_bool_exp";
                "anger": "float8_comparison_exp";
                "entry": "entry_bool_exp";
                "fear": "float8_comparison_exp";
                "id": "uuid_comparison_exp";
                "joy": "float8_comparison_exp";
                "love": "float8_comparison_exp";
                "sadness": "float8_comparison_exp";
                "surprise": "float8_comparison_exp";
            };
            "topic_bool_exp": {
                "_and": "topic_bool_exp";
                "_not": "topic_bool_exp";
                "_or": "topic_bool_exp";
                "entry": "entry_bool_exp";
                "friends": "float8_comparison_exp";
                "goals": "float8_comparison_exp";
                "hobby": "float8_comparison_exp";
                "id": "uuid_comparison_exp";
                "relation": "float8_comparison_exp";
                "work": "float8_comparison_exp";
            };
            "Int_comparison_exp": {
                "_eq": "Int";
                "_gt": "Int";
                "_gte": "Int";
                "_in": "Int";
                "_is_null": "Boolean";
                "_lt": "Int";
                "_lte": "Int";
                "_neq": "Int";
                "_nin": "Int";
            };
            "entry_aggregate_bool_exp_count": {
                "arguments": "entry_select_column";
                "distinct": "Boolean";
                "filter": "entry_bool_exp";
                "predicate": "Int_comparison_exp";
            };
            "entry_aggregate_bool_exp": {
                "count": "entry_aggregate_bool_exp_count";
            };
            "users_bool_exp": {
                "_and": "users_bool_exp";
                "_not": "users_bool_exp";
                "_or": "users_bool_exp";
                "email": "String_comparison_exp";
                "emailVerified": "timestamptz_comparison_exp";
                "entries": "entry_bool_exp";
                "entries_aggregate": "entry_aggregate_bool_exp";
                "id": "Int_comparison_exp";
                "image": "String_comparison_exp";
                "name": "String_comparison_exp";
            };
            "entry_bool_exp": {
                "_and": "entry_bool_exp";
                "_not": "entry_bool_exp";
                "_or": "entry_bool_exp";
                "date": "timestamptz_comparison_exp";
                "embedding": "vector_comparison_exp";
                "embedding_text": "String_comparison_exp";
                "emotions": "emotion_bool_exp";
                "id": "uuid_comparison_exp";
                "text": "String_comparison_exp";
                "topics": "topic_bool_exp";
                "user": "users_bool_exp";
                "user_id": "Int_comparison_exp";
            };
            "entry_on_conflict": {
                "constraint": "entry_constraint";
                "update_columns": "entry_update_column";
                "where": "entry_bool_exp";
            };
            "entry_obj_rel_insert_input": {
                "data": "entry_insert_input";
                "on_conflict": "entry_on_conflict";
            };
            "emotion_insert_input": {
                "anger": "float8";
                "entry": "entry_obj_rel_insert_input";
                "fear": "float8";
                "id": "uuid";
                "joy": "float8";
                "love": "float8";
                "sadness": "float8";
                "surprise": "float8";
            };
            "emotion_on_conflict": {
                "constraint": "emotion_constraint";
                "update_columns": "emotion_update_column";
                "where": "emotion_bool_exp";
            };
            "emotion_obj_rel_insert_input": {
                "data": "emotion_insert_input";
                "on_conflict": "emotion_on_conflict";
            };
            "topic_insert_input": {
                "entry": "entry_obj_rel_insert_input";
                "friends": "float8";
                "goals": "float8";
                "hobby": "float8";
                "id": "uuid";
                "relation": "float8";
                "work": "float8";
            };
            "topic_on_conflict": {
                "constraint": "topic_constraint";
                "update_columns": "topic_update_column";
                "where": "topic_bool_exp";
            };
            "topic_obj_rel_insert_input": {
                "data": "topic_insert_input";
                "on_conflict": "topic_on_conflict";
            };
            "entry_arr_rel_insert_input": {
                "data": "entry_insert_input";
                "on_conflict": "entry_on_conflict";
            };
            "users_insert_input": {
                "email": "String";
                "emailVerified": "timestamptz";
                "entries": "entry_arr_rel_insert_input";
                "id": "Int";
                "image": "String";
                "name": "String";
            };
            "users_on_conflict": {
                "constraint": "users_constraint";
                "update_columns": "users_update_column";
                "where": "users_bool_exp";
            };
            "users_obj_rel_insert_input": {
                "data": "users_insert_input";
                "on_conflict": "users_on_conflict";
            };
            "entry_insert_input": {
                "date": "timestamptz";
                "embedding": "vector";
                "embedding_text": "String";
                "emotions": "emotion_obj_rel_insert_input";
                "id": "uuid";
                "text": "String";
                "topics": "topic_obj_rel_insert_input";
                "user": "users_obj_rel_insert_input";
                "user_id": "Int";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
};