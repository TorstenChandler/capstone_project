import type { Record } from "./public/record";
import { Entries$result, Entries$input } from "../artifacts/Entries";
import { EntriesStore } from "../plugins/houdini-svelte/stores/Entries";
import type { verification_token_select_column } from "$houdini/graphql/enums";
import type { user_select_column } from "$houdini/graphql/enums";
import type { topic_select_column } from "$houdini/graphql/enums";
import type { session_select_column } from "$houdini/graphql/enums";
import type { order_by } from "$houdini/graphql/enums";
import type { entry_select_column } from "$houdini/graphql/enums";
import type { emotion_select_column } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { accounts_select_column } from "$houdini/graphql/enums";

type accounts_order_by = {
    access_token?: ValueOf<typeof order_by> | null | undefined;
    expires_at?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    id_token?: ValueOf<typeof order_by> | null | undefined;
    provider?: ValueOf<typeof order_by> | null | undefined;
    provideraccountid?: ValueOf<typeof order_by> | null | undefined;
    refresh_token?: ValueOf<typeof order_by> | null | undefined;
    scope?: ValueOf<typeof order_by> | null | undefined;
    session_state?: ValueOf<typeof order_by> | null | undefined;
    token_type?: ValueOf<typeof order_by> | null | undefined;
    type?: ValueOf<typeof order_by> | null | undefined;
    userid?: ValueOf<typeof order_by> | null | undefined;
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

type bigint_comparison_exp = {
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

type accounts_bool_exp = {
    _and?: (accounts_bool_exp)[] | null | undefined;
    _not?: accounts_bool_exp | null | undefined;
    _or?: (accounts_bool_exp)[] | null | undefined;
    access_token?: String_comparison_exp | null | undefined;
    expires_at?: bigint_comparison_exp | null | undefined;
    id?: Int_comparison_exp | null | undefined;
    id_token?: String_comparison_exp | null | undefined;
    provider?: String_comparison_exp | null | undefined;
    provideraccountid?: String_comparison_exp | null | undefined;
    refresh_token?: String_comparison_exp | null | undefined;
    scope?: String_comparison_exp | null | undefined;
    session_state?: String_comparison_exp | null | undefined;
    token_type?: String_comparison_exp | null | undefined;
    type?: String_comparison_exp | null | undefined;
    userid?: Int_comparison_exp | null | undefined;
};

type topic_order_by = {
    entry?: entry_order_by | null | undefined;
    friends?: ValueOf<typeof order_by> | null | undefined;
    goals?: ValueOf<typeof order_by> | null | undefined;
    hobby?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    relation?: ValueOf<typeof order_by> | null | undefined;
    work?: ValueOf<typeof order_by> | null | undefined;
};

type entry_avg_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_max_order_by = {
    date?: ValueOf<typeof order_by> | null | undefined;
    embedding_text?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    text?: ValueOf<typeof order_by> | null | undefined;
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_min_order_by = {
    date?: ValueOf<typeof order_by> | null | undefined;
    embedding_text?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    text?: ValueOf<typeof order_by> | null | undefined;
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_stddev_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_stddev_pop_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_stddev_samp_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_sum_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_var_pop_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_var_samp_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_variance_order_by = {
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type entry_aggregate_order_by = {
    avg?: entry_avg_order_by | null | undefined;
    count?: ValueOf<typeof order_by> | null | undefined;
    max?: entry_max_order_by | null | undefined;
    min?: entry_min_order_by | null | undefined;
    stddev?: entry_stddev_order_by | null | undefined;
    stddev_pop?: entry_stddev_pop_order_by | null | undefined;
    stddev_samp?: entry_stddev_samp_order_by | null | undefined;
    sum?: entry_sum_order_by | null | undefined;
    var_pop?: entry_var_pop_order_by | null | undefined;
    var_samp?: entry_var_samp_order_by | null | undefined;
    variance?: entry_variance_order_by | null | undefined;
};

type user_order_by = {
    email?: ValueOf<typeof order_by> | null | undefined;
    emailverified?: ValueOf<typeof order_by> | null | undefined;
    entries_aggregate?: entry_aggregate_order_by | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    image?: ValueOf<typeof order_by> | null | undefined;
    name?: ValueOf<typeof order_by> | null | undefined;
};

type entry_order_by = {
    date?: ValueOf<typeof order_by> | null | undefined;
    embedding?: ValueOf<typeof order_by> | null | undefined;
    embedding_text?: ValueOf<typeof order_by> | null | undefined;
    emotions?: emotion_order_by | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    text?: ValueOf<typeof order_by> | null | undefined;
    topics?: topic_order_by | null | undefined;
    user?: user_order_by | null | undefined;
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type emotion_order_by = {
    anger?: ValueOf<typeof order_by> | null | undefined;
    anticipation?: ValueOf<typeof order_by> | null | undefined;
    disgust?: ValueOf<typeof order_by> | null | undefined;
    entry?: entry_order_by | null | undefined;
    fear?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    joy?: ValueOf<typeof order_by> | null | undefined;
    love?: ValueOf<typeof order_by> | null | undefined;
    optimism?: ValueOf<typeof order_by> | null | undefined;
    pessimism?: ValueOf<typeof order_by> | null | undefined;
    sadness?: ValueOf<typeof order_by> | null | undefined;
    surprise?: ValueOf<typeof order_by> | null | undefined;
    trust?: ValueOf<typeof order_by> | null | undefined;
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

type timestamptz_comparison_exp = {
    _eq?: Date | null | undefined;
    _gt?: Date | null | undefined;
    _gte?: Date | null | undefined;
    _in?: (Date)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: Date | null | undefined;
    _lte?: Date | null | undefined;
    _neq?: Date | null | undefined;
    _nin?: (Date)[] | null | undefined;
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

type uuid_comparison_exp = {
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _in?: (string)[] | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _neq?: string | null | undefined;
    _nin?: (string)[] | null | undefined;
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

type entry_aggregate_bool_exp_count = {
    arguments?: (ValueOf<typeof entry_select_column>)[] | null | undefined;
    distinct?: boolean | null | undefined;
    filter?: entry_bool_exp | null | undefined;
    predicate: Int_comparison_exp;
};

type entry_aggregate_bool_exp = {
    count?: entry_aggregate_bool_exp_count | null | undefined;
};

type user_bool_exp = {
    _and?: (user_bool_exp)[] | null | undefined;
    _not?: user_bool_exp | null | undefined;
    _or?: (user_bool_exp)[] | null | undefined;
    email?: String_comparison_exp | null | undefined;
    emailverified?: timestamptz_comparison_exp | null | undefined;
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
    user?: user_bool_exp | null | undefined;
    user_id?: Int_comparison_exp | null | undefined;
};

type emotion_bool_exp = {
    _and?: (emotion_bool_exp)[] | null | undefined;
    _not?: emotion_bool_exp | null | undefined;
    _or?: (emotion_bool_exp)[] | null | undefined;
    anger?: float8_comparison_exp | null | undefined;
    anticipation?: float8_comparison_exp | null | undefined;
    disgust?: float8_comparison_exp | null | undefined;
    entry?: entry_bool_exp | null | undefined;
    fear?: float8_comparison_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    joy?: float8_comparison_exp | null | undefined;
    love?: float8_comparison_exp | null | undefined;
    optimism?: float8_comparison_exp | null | undefined;
    pessimism?: float8_comparison_exp | null | undefined;
    sadness?: float8_comparison_exp | null | undefined;
    surprise?: float8_comparison_exp | null | undefined;
    trust?: float8_comparison_exp | null | undefined;
};

type session_order_by = {
    expires?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    sessiontoken?: ValueOf<typeof order_by> | null | undefined;
    userid?: ValueOf<typeof order_by> | null | undefined;
};

type session_bool_exp = {
    _and?: (session_bool_exp)[] | null | undefined;
    _not?: session_bool_exp | null | undefined;
    _or?: (session_bool_exp)[] | null | undefined;
    expires?: timestamptz_comparison_exp | null | undefined;
    id?: Int_comparison_exp | null | undefined;
    sessiontoken?: String_comparison_exp | null | undefined;
    userid?: Int_comparison_exp | null | undefined;
};

type verification_token_order_by = {
    expires?: ValueOf<typeof order_by> | null | undefined;
    identifier?: ValueOf<typeof order_by> | null | undefined;
    token?: ValueOf<typeof order_by> | null | undefined;
};

type verification_token_bool_exp = {
    _and?: (verification_token_bool_exp)[] | null | undefined;
    _not?: verification_token_bool_exp | null | undefined;
    _or?: (verification_token_bool_exp)[] | null | undefined;
    expires?: timestamptz_comparison_exp | null | undefined;
    identifier?: String_comparison_exp | null | undefined;
    token?: String_comparison_exp | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        Series: {
            idFields: never;
            fields: {
                data: {
                    type: (number)[];
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        TimeLine: {
            idFields: never;
            fields: {
                entries: {
                    type: (string)[];
                    args: never;
                };
                series: {
                    type: (Record<CacheTypeDef, "Series">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        accounts: {
            idFields: {
                id: number;
            };
            fields: {
                access_token: {
                    type: string | null;
                    args: never;
                };
                expires_at: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
                id_token: {
                    type: string | null;
                    args: never;
                };
                provider: {
                    type: string | null;
                    args: never;
                };
                provideraccountid: {
                    type: string | null;
                    args: never;
                };
                refresh_token: {
                    type: string | null;
                    args: never;
                };
                scope: {
                    type: string | null;
                    args: never;
                };
                session_state: {
                    type: string | null;
                    args: never;
                };
                token_type: {
                    type: string | null;
                    args: never;
                };
                type: {
                    type: string | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "accounts_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "accounts">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "accounts_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof accounts_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "accounts_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "accounts_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "accounts_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "accounts_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "accounts_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "accounts_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "accounts_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "accounts_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "accounts_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_avg_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_max_fields: {
            idFields: {
                id: number;
            };
            fields: {
                access_token: {
                    type: string | null;
                    args: never;
                };
                expires_at: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                id_token: {
                    type: string | null;
                    args: never;
                };
                provider: {
                    type: string | null;
                    args: never;
                };
                provideraccountid: {
                    type: string | null;
                    args: never;
                };
                refresh_token: {
                    type: string | null;
                    args: never;
                };
                scope: {
                    type: string | null;
                    args: never;
                };
                session_state: {
                    type: string | null;
                    args: never;
                };
                token_type: {
                    type: string | null;
                    args: never;
                };
                type: {
                    type: string | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_min_fields: {
            idFields: {
                id: number;
            };
            fields: {
                access_token: {
                    type: string | null;
                    args: never;
                };
                expires_at: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                id_token: {
                    type: string | null;
                    args: never;
                };
                provider: {
                    type: string | null;
                    args: never;
                };
                provideraccountid: {
                    type: string | null;
                    args: never;
                };
                refresh_token: {
                    type: string | null;
                    args: never;
                };
                scope: {
                    type: string | null;
                    args: never;
                };
                session_state: {
                    type: string | null;
                    args: never;
                };
                token_type: {
                    type: string | null;
                    args: never;
                };
                type: {
                    type: string | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "accounts">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_stddev_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_stddev_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_stddev_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_sum_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_var_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_var_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        accounts_variance_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires_at: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion: {
            idFields: {
                id: string;
            };
            fields: {
                anger: {
                    type: any;
                    args: never;
                };
                anticipation: {
                    type: any;
                    args: never;
                };
                disgust: {
                    type: any;
                    args: never;
                };
                entry: {
                    type: Record<CacheTypeDef, "entry">;
                    args: never;
                };
                fear: {
                    type: any;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                joy: {
                    type: any;
                    args: never;
                };
                love: {
                    type: any;
                    args: never;
                };
                optimism: {
                    type: any;
                    args: never;
                };
                pessimism: {
                    type: any;
                    args: never;
                };
                sadness: {
                    type: any;
                    args: never;
                };
                surprise: {
                    type: any;
                    args: never;
                };
                trust: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "emotion_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "emotion">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "emotion_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof emotion_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "emotion_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "emotion_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "emotion_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "emotion_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "emotion_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "emotion_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "emotion_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "emotion_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "emotion_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_avg_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: number | null;
                    args: never;
                };
                anticipation: {
                    type: number | null;
                    args: never;
                };
                disgust: {
                    type: number | null;
                    args: never;
                };
                fear: {
                    type: number | null;
                    args: never;
                };
                joy: {
                    type: number | null;
                    args: never;
                };
                love: {
                    type: number | null;
                    args: never;
                };
                optimism: {
                    type: number | null;
                    args: never;
                };
                pessimism: {
                    type: number | null;
                    args: never;
                };
                sadness: {
                    type: number | null;
                    args: never;
                };
                surprise: {
                    type: number | null;
                    args: never;
                };
                trust: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_max_fields: {
            idFields: {
                id: string;
            };
            fields: {
                anger: {
                    type: any | null;
                    args: never;
                };
                anticipation: {
                    type: any | null;
                    args: never;
                };
                disgust: {
                    type: any | null;
                    args: never;
                };
                fear: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                joy: {
                    type: any | null;
                    args: never;
                };
                love: {
                    type: any | null;
                    args: never;
                };
                optimism: {
                    type: any | null;
                    args: never;
                };
                pessimism: {
                    type: any | null;
                    args: never;
                };
                sadness: {
                    type: any | null;
                    args: never;
                };
                surprise: {
                    type: any | null;
                    args: never;
                };
                trust: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_min_fields: {
            idFields: {
                id: string;
            };
            fields: {
                anger: {
                    type: any | null;
                    args: never;
                };
                anticipation: {
                    type: any | null;
                    args: never;
                };
                disgust: {
                    type: any | null;
                    args: never;
                };
                fear: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                joy: {
                    type: any | null;
                    args: never;
                };
                love: {
                    type: any | null;
                    args: never;
                };
                optimism: {
                    type: any | null;
                    args: never;
                };
                pessimism: {
                    type: any | null;
                    args: never;
                };
                sadness: {
                    type: any | null;
                    args: never;
                };
                surprise: {
                    type: any | null;
                    args: never;
                };
                trust: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "emotion">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_stddev_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: number | null;
                    args: never;
                };
                anticipation: {
                    type: number | null;
                    args: never;
                };
                disgust: {
                    type: number | null;
                    args: never;
                };
                fear: {
                    type: number | null;
                    args: never;
                };
                joy: {
                    type: number | null;
                    args: never;
                };
                love: {
                    type: number | null;
                    args: never;
                };
                optimism: {
                    type: number | null;
                    args: never;
                };
                pessimism: {
                    type: number | null;
                    args: never;
                };
                sadness: {
                    type: number | null;
                    args: never;
                };
                surprise: {
                    type: number | null;
                    args: never;
                };
                trust: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_stddev_pop_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: number | null;
                    args: never;
                };
                anticipation: {
                    type: number | null;
                    args: never;
                };
                disgust: {
                    type: number | null;
                    args: never;
                };
                fear: {
                    type: number | null;
                    args: never;
                };
                joy: {
                    type: number | null;
                    args: never;
                };
                love: {
                    type: number | null;
                    args: never;
                };
                optimism: {
                    type: number | null;
                    args: never;
                };
                pessimism: {
                    type: number | null;
                    args: never;
                };
                sadness: {
                    type: number | null;
                    args: never;
                };
                surprise: {
                    type: number | null;
                    args: never;
                };
                trust: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_stddev_samp_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: number | null;
                    args: never;
                };
                anticipation: {
                    type: number | null;
                    args: never;
                };
                disgust: {
                    type: number | null;
                    args: never;
                };
                fear: {
                    type: number | null;
                    args: never;
                };
                joy: {
                    type: number | null;
                    args: never;
                };
                love: {
                    type: number | null;
                    args: never;
                };
                optimism: {
                    type: number | null;
                    args: never;
                };
                pessimism: {
                    type: number | null;
                    args: never;
                };
                sadness: {
                    type: number | null;
                    args: never;
                };
                surprise: {
                    type: number | null;
                    args: never;
                };
                trust: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_sum_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: any | null;
                    args: never;
                };
                anticipation: {
                    type: any | null;
                    args: never;
                };
                disgust: {
                    type: any | null;
                    args: never;
                };
                fear: {
                    type: any | null;
                    args: never;
                };
                joy: {
                    type: any | null;
                    args: never;
                };
                love: {
                    type: any | null;
                    args: never;
                };
                optimism: {
                    type: any | null;
                    args: never;
                };
                pessimism: {
                    type: any | null;
                    args: never;
                };
                sadness: {
                    type: any | null;
                    args: never;
                };
                surprise: {
                    type: any | null;
                    args: never;
                };
                trust: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_var_pop_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: number | null;
                    args: never;
                };
                anticipation: {
                    type: number | null;
                    args: never;
                };
                disgust: {
                    type: number | null;
                    args: never;
                };
                fear: {
                    type: number | null;
                    args: never;
                };
                joy: {
                    type: number | null;
                    args: never;
                };
                love: {
                    type: number | null;
                    args: never;
                };
                optimism: {
                    type: number | null;
                    args: never;
                };
                pessimism: {
                    type: number | null;
                    args: never;
                };
                sadness: {
                    type: number | null;
                    args: never;
                };
                surprise: {
                    type: number | null;
                    args: never;
                };
                trust: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_var_samp_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: number | null;
                    args: never;
                };
                anticipation: {
                    type: number | null;
                    args: never;
                };
                disgust: {
                    type: number | null;
                    args: never;
                };
                fear: {
                    type: number | null;
                    args: never;
                };
                joy: {
                    type: number | null;
                    args: never;
                };
                love: {
                    type: number | null;
                    args: never;
                };
                optimism: {
                    type: number | null;
                    args: never;
                };
                pessimism: {
                    type: number | null;
                    args: never;
                };
                sadness: {
                    type: number | null;
                    args: never;
                };
                surprise: {
                    type: number | null;
                    args: never;
                };
                trust: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion_variance_fields: {
            idFields: never;
            fields: {
                anger: {
                    type: number | null;
                    args: never;
                };
                anticipation: {
                    type: number | null;
                    args: never;
                };
                disgust: {
                    type: number | null;
                    args: never;
                };
                fear: {
                    type: number | null;
                    args: never;
                };
                joy: {
                    type: number | null;
                    args: never;
                };
                love: {
                    type: number | null;
                    args: never;
                };
                optimism: {
                    type: number | null;
                    args: never;
                };
                pessimism: {
                    type: number | null;
                    args: never;
                };
                sadness: {
                    type: number | null;
                    args: never;
                };
                surprise: {
                    type: number | null;
                    args: never;
                };
                trust: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry: {
            idFields: {
                id: string;
            };
            fields: {
                date: {
                    type: Date;
                    args: never;
                };
                embedding: {
                    type: any | null;
                    args: never;
                };
                embedding_text: {
                    type: string | null;
                    args: never;
                };
                emotions: {
                    type: Record<CacheTypeDef, "emotion"> | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                text: {
                    type: string;
                    args: never;
                };
                topics: {
                    type: Record<CacheTypeDef, "topic"> | null;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "user"> | null;
                    args: never;
                };
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "entry_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "entry">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        entry_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "entry_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof entry_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "entry_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "entry_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "entry_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "entry_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "entry_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "entry_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "entry_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "entry_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "entry_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_avg_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_max_fields: {
            idFields: {
                id: string;
            };
            fields: {
                date: {
                    type: Date | null;
                    args: never;
                };
                embedding_text: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                text: {
                    type: string | null;
                    args: never;
                };
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_min_fields: {
            idFields: {
                id: string;
            };
            fields: {
                date: {
                    type: Date | null;
                    args: never;
                };
                embedding_text: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                text: {
                    type: string | null;
                    args: never;
                };
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "entry">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        entry_stddev_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_stddev_pop_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_stddev_samp_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_sum_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_var_pop_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_var_samp_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry_variance_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                accounts: {
                    type: (Record<CacheTypeDef, "accounts">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof accounts_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (accounts_order_by)[] | null | undefined;
                        where?: accounts_bool_exp | null | undefined;
                    };
                };
                accounts_aggregate: {
                    type: Record<CacheTypeDef, "accounts_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof accounts_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (accounts_order_by)[] | null | undefined;
                        where?: accounts_bool_exp | null | undefined;
                    };
                };
                accounts_by_pk: {
                    type: Record<CacheTypeDef, "accounts"> | null;
                    args: {
                        id: number;
                    };
                };
                emotion: {
                    type: (Record<CacheTypeDef, "emotion">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof emotion_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (emotion_order_by)[] | null | undefined;
                        where?: emotion_bool_exp | null | undefined;
                    };
                };
                emotion_aggregate: {
                    type: Record<CacheTypeDef, "emotion_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof emotion_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (emotion_order_by)[] | null | undefined;
                        where?: emotion_bool_exp | null | undefined;
                    };
                };
                emotion_by_pk: {
                    type: Record<CacheTypeDef, "emotion"> | null;
                    args: {
                        id: string;
                    };
                };
                emotions: {
                    type: Record<CacheTypeDef, "TimeLine"> | null;
                    args: never;
                };
                entry: {
                    type: (Record<CacheTypeDef, "entry">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof entry_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (entry_order_by)[] | null | undefined;
                        where?: entry_bool_exp | null | undefined;
                    };
                };
                entry_aggregate: {
                    type: Record<CacheTypeDef, "entry_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof entry_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (entry_order_by)[] | null | undefined;
                        where?: entry_bool_exp | null | undefined;
                    };
                };
                entry_by_pk: {
                    type: Record<CacheTypeDef, "entry"> | null;
                    args: {
                        id: string;
                    };
                };
                session: {
                    type: (Record<CacheTypeDef, "session">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof session_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (session_order_by)[] | null | undefined;
                        where?: session_bool_exp | null | undefined;
                    };
                };
                session_aggregate: {
                    type: Record<CacheTypeDef, "session_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof session_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (session_order_by)[] | null | undefined;
                        where?: session_bool_exp | null | undefined;
                    };
                };
                session_by_pk: {
                    type: Record<CacheTypeDef, "session"> | null;
                    args: {
                        id: number;
                    };
                };
                topic: {
                    type: (Record<CacheTypeDef, "topic">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof topic_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (topic_order_by)[] | null | undefined;
                        where?: topic_bool_exp | null | undefined;
                    };
                };
                topic_aggregate: {
                    type: Record<CacheTypeDef, "topic_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof topic_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (topic_order_by)[] | null | undefined;
                        where?: topic_bool_exp | null | undefined;
                    };
                };
                topic_by_pk: {
                    type: Record<CacheTypeDef, "topic"> | null;
                    args: {
                        id: string;
                    };
                };
                user: {
                    type: (Record<CacheTypeDef, "user">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof user_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (user_order_by)[] | null | undefined;
                        where?: user_bool_exp | null | undefined;
                    };
                };
                user_aggregate: {
                    type: Record<CacheTypeDef, "user_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof user_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (user_order_by)[] | null | undefined;
                        where?: user_bool_exp | null | undefined;
                    };
                };
                user_by_pk: {
                    type: Record<CacheTypeDef, "user"> | null;
                    args: {
                        id: number;
                    };
                };
                verification_token: {
                    type: (Record<CacheTypeDef, "verification_token">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof verification_token_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (verification_token_order_by)[] | null | undefined;
                        where?: verification_token_bool_exp | null | undefined;
                    };
                };
                verification_token_aggregate: {
                    type: Record<CacheTypeDef, "verification_token_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof verification_token_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (verification_token_order_by)[] | null | undefined;
                        where?: verification_token_bool_exp | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        session: {
            idFields: {
                id: number;
            };
            fields: {
                expires: {
                    type: Date;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
                sessiontoken: {
                    type: string;
                    args: never;
                };
                userid: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        session_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "session_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "session">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        session_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "session_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof session_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "session_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "session_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "session_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "session_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "session_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "session_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "session_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "session_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "session_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_avg_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_max_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires: {
                    type: Date | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                sessiontoken: {
                    type: string | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_min_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires: {
                    type: Date | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                sessiontoken: {
                    type: string | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "session">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        session_stddev_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_stddev_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_stddev_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_sum_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_var_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_var_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        session_variance_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userid: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic: {
            idFields: {
                id: string;
            };
            fields: {
                entry: {
                    type: Record<CacheTypeDef, "entry">;
                    args: never;
                };
                friends: {
                    type: any;
                    args: never;
                };
                goals: {
                    type: any;
                    args: never;
                };
                hobby: {
                    type: any;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                relation: {
                    type: any;
                    args: never;
                };
                work: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "topic_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "topic">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        topic_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "topic_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof topic_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "topic_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "topic_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "topic_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "topic_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "topic_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "topic_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "topic_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "topic_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "topic_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_avg_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: number | null;
                    args: never;
                };
                goals: {
                    type: number | null;
                    args: never;
                };
                hobby: {
                    type: number | null;
                    args: never;
                };
                relation: {
                    type: number | null;
                    args: never;
                };
                work: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_max_fields: {
            idFields: {
                id: string;
            };
            fields: {
                friends: {
                    type: any | null;
                    args: never;
                };
                goals: {
                    type: any | null;
                    args: never;
                };
                hobby: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                relation: {
                    type: any | null;
                    args: never;
                };
                work: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_min_fields: {
            idFields: {
                id: string;
            };
            fields: {
                friends: {
                    type: any | null;
                    args: never;
                };
                goals: {
                    type: any | null;
                    args: never;
                };
                hobby: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
                relation: {
                    type: any | null;
                    args: never;
                };
                work: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "topic">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        topic_stddev_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: number | null;
                    args: never;
                };
                goals: {
                    type: number | null;
                    args: never;
                };
                hobby: {
                    type: number | null;
                    args: never;
                };
                relation: {
                    type: number | null;
                    args: never;
                };
                work: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_stddev_pop_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: number | null;
                    args: never;
                };
                goals: {
                    type: number | null;
                    args: never;
                };
                hobby: {
                    type: number | null;
                    args: never;
                };
                relation: {
                    type: number | null;
                    args: never;
                };
                work: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_stddev_samp_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: number | null;
                    args: never;
                };
                goals: {
                    type: number | null;
                    args: never;
                };
                hobby: {
                    type: number | null;
                    args: never;
                };
                relation: {
                    type: number | null;
                    args: never;
                };
                work: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_sum_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: any | null;
                    args: never;
                };
                goals: {
                    type: any | null;
                    args: never;
                };
                hobby: {
                    type: any | null;
                    args: never;
                };
                relation: {
                    type: any | null;
                    args: never;
                };
                work: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_var_pop_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: number | null;
                    args: never;
                };
                goals: {
                    type: number | null;
                    args: never;
                };
                hobby: {
                    type: number | null;
                    args: never;
                };
                relation: {
                    type: number | null;
                    args: never;
                };
                work: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_var_samp_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: number | null;
                    args: never;
                };
                goals: {
                    type: number | null;
                    args: never;
                };
                hobby: {
                    type: number | null;
                    args: never;
                };
                relation: {
                    type: number | null;
                    args: never;
                };
                work: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic_variance_fields: {
            idFields: never;
            fields: {
                friends: {
                    type: number | null;
                    args: never;
                };
                goals: {
                    type: number | null;
                    args: never;
                };
                hobby: {
                    type: number | null;
                    args: never;
                };
                relation: {
                    type: number | null;
                    args: never;
                };
                work: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user: {
            idFields: {
                id: number;
            };
            fields: {
                email: {
                    type: string | null;
                    args: never;
                };
                emailverified: {
                    type: Date | null;
                    args: never;
                };
                entries: {
                    type: (Record<CacheTypeDef, "entry">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof entry_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (entry_order_by)[] | null | undefined;
                        where?: entry_bool_exp | null | undefined;
                    };
                };
                entries_aggregate: {
                    type: Record<CacheTypeDef, "entry_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof entry_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (entry_order_by)[] | null | undefined;
                        where?: entry_bool_exp | null | undefined;
                    };
                };
                id: {
                    type: number;
                    args: never;
                };
                image: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "user_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "user">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        user_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "user_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof user_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "user_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "user_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "user_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "user_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "user_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "user_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "user_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "user_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "user_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_avg_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_max_fields: {
            idFields: {
                id: number;
            };
            fields: {
                email: {
                    type: string | null;
                    args: never;
                };
                emailverified: {
                    type: Date | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                image: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_min_fields: {
            idFields: {
                id: number;
            };
            fields: {
                email: {
                    type: string | null;
                    args: never;
                };
                emailverified: {
                    type: Date | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                image: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "user">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        user_stddev_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_stddev_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_stddev_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_sum_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_var_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_var_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        user_variance_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        verification_token: {
            idFields: never;
            fields: {
                expires: {
                    type: Date;
                    args: never;
                };
                identifier: {
                    type: string;
                    args: never;
                };
                token: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        verification_token_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "verification_token_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "verification_token">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        verification_token_aggregate_fields: {
            idFields: never;
            fields: {
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof verification_token_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "verification_token_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "verification_token_min_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        verification_token_max_fields: {
            idFields: never;
            fields: {
                expires: {
                    type: Date | null;
                    args: never;
                };
                identifier: {
                    type: string | null;
                    args: never;
                };
                token: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        verification_token_min_fields: {
            idFields: never;
            fields: {
                expires: {
                    type: Date | null;
                    args: never;
                };
                identifier: {
                    type: string | null;
                    args: never;
                };
                token: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        verification_token_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "verification_token">)[];
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[EntriesStore, Entries$result, Entries$input]];
};