import type { Record } from "./public/record";
import { EmotionsTimeline$result, EmotionsTimeline$input } from "../artifacts/EmotionsTimeline";
import { EmotionsTimelineStore } from "../plugins/houdini-svelte/stores/EmotionsTimeline";
import { Entry$result, Entry$input } from "../artifacts/Entry";
import { EntryStore } from "../plugins/houdini-svelte/stores/Entry";
import type { verification_token_select_column } from "$houdini/graphql/enums";
import type { users_select_column } from "$houdini/graphql/enums";
import type { topic_select_column } from "$houdini/graphql/enums";
import type { sessions_select_column } from "$houdini/graphql/enums";
import type { order_by } from "$houdini/graphql/enums";
import type { entry_select_column } from "$houdini/graphql/enums";
import type { emotions_timeline_select_column } from "$houdini/graphql/enums";
import type { emotion_select_column } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { accounts_select_column } from "$houdini/graphql/enums";

type accounts_order_by = {
    access_token?: ValueOf<typeof order_by> | null | undefined;
    expires_at?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    id_token?: ValueOf<typeof order_by> | null | undefined;
    provider?: ValueOf<typeof order_by> | null | undefined;
    providerAccountId?: ValueOf<typeof order_by> | null | undefined;
    refresh_token?: ValueOf<typeof order_by> | null | undefined;
    scope?: ValueOf<typeof order_by> | null | undefined;
    session_state?: ValueOf<typeof order_by> | null | undefined;
    token_type?: ValueOf<typeof order_by> | null | undefined;
    type?: ValueOf<typeof order_by> | null | undefined;
    userId?: ValueOf<typeof order_by> | null | undefined;
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
    providerAccountId?: String_comparison_exp | null | undefined;
    refresh_token?: String_comparison_exp | null | undefined;
    scope?: String_comparison_exp | null | undefined;
    session_state?: String_comparison_exp | null | undefined;
    token_type?: String_comparison_exp | null | undefined;
    type?: String_comparison_exp | null | undefined;
    userId?: Int_comparison_exp | null | undefined;
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

type users_order_by = {
    email?: ValueOf<typeof order_by> | null | undefined;
    emailVerified?: ValueOf<typeof order_by> | null | undefined;
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
    user?: users_order_by | null | undefined;
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

type emotions_timeline_order_by = {
    anger?: ValueOf<typeof order_by> | null | undefined;
    anticipation?: ValueOf<typeof order_by> | null | undefined;
    disgust?: ValueOf<typeof order_by> | null | undefined;
    entries?: ValueOf<typeof order_by> | null | undefined;
    fear?: ValueOf<typeof order_by> | null | undefined;
    joy?: ValueOf<typeof order_by> | null | undefined;
    love?: ValueOf<typeof order_by> | null | undefined;
    optimism?: ValueOf<typeof order_by> | null | undefined;
    pessimism?: ValueOf<typeof order_by> | null | undefined;
    sadness?: ValueOf<typeof order_by> | null | undefined;
    surprise?: ValueOf<typeof order_by> | null | undefined;
    trust?: ValueOf<typeof order_by> | null | undefined;
    user_id?: ValueOf<typeof order_by> | null | undefined;
};

type json_comparison_exp = {
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

type emotions_timeline_bool_exp = {
    _and?: (emotions_timeline_bool_exp)[] | null | undefined;
    _not?: emotions_timeline_bool_exp | null | undefined;
    _or?: (emotions_timeline_bool_exp)[] | null | undefined;
    anger?: json_comparison_exp | null | undefined;
    anticipation?: json_comparison_exp | null | undefined;
    disgust?: json_comparison_exp | null | undefined;
    entries?: json_comparison_exp | null | undefined;
    fear?: json_comparison_exp | null | undefined;
    joy?: json_comparison_exp | null | undefined;
    love?: json_comparison_exp | null | undefined;
    optimism?: json_comparison_exp | null | undefined;
    pessimism?: json_comparison_exp | null | undefined;
    sadness?: json_comparison_exp | null | undefined;
    surprise?: json_comparison_exp | null | undefined;
    trust?: json_comparison_exp | null | undefined;
    user_id?: Int_comparison_exp | null | undefined;
};

type sessions_order_by = {
    expires?: ValueOf<typeof order_by> | null | undefined;
    id?: ValueOf<typeof order_by> | null | undefined;
    sessionToken?: ValueOf<typeof order_by> | null | undefined;
    userId?: ValueOf<typeof order_by> | null | undefined;
};

type sessions_bool_exp = {
    _and?: (sessions_bool_exp)[] | null | undefined;
    _not?: sessions_bool_exp | null | undefined;
    _or?: (sessions_bool_exp)[] | null | undefined;
    expires?: timestamptz_comparison_exp | null | undefined;
    id?: Int_comparison_exp | null | undefined;
    sessionToken?: String_comparison_exp | null | undefined;
    userId?: Int_comparison_exp | null | undefined;
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
                providerAccountId: {
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
                userId: {
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
                userId: {
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
                providerAccountId: {
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
                userId: {
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
                providerAccountId: {
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
                userId: {
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
                userId: {
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
                userId: {
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
                userId: {
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
                userId: {
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
                userId: {
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
                userId: {
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
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotion: {
            idFields: {
                id: any;
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
                    type: any;
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
                id: any;
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
        emotion_min_fields: {
            idFields: {
                id: any;
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
        emotions_timeline: {
            idFields: never;
            fields: {
                anger: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                anticipation: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                disgust: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                entries: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                fear: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                joy: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                love: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                optimism: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                pessimism: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                sadness: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                surprise: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                trust: {
                    type: any | null;
                    args: {
                        path?: string | null | undefined;
                    };
                };
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "emotions_timeline_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "emotions_timeline">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "emotions_timeline_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof emotions_timeline_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "emotions_timeline_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "emotions_timeline_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "emotions_timeline_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "emotions_timeline_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "emotions_timeline_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "emotions_timeline_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "emotions_timeline_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "emotions_timeline_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "emotions_timeline_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_avg_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_max_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_min_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_stddev_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_stddev_pop_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_stddev_samp_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_sum_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_var_pop_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_var_samp_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        emotions_timeline_variance_fields: {
            idFields: never;
            fields: {
                user_id: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        entry: {
            idFields: {
                id: any;
            };
            fields: {
                date: {
                    type: any;
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
                    type: any;
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
                    type: Record<CacheTypeDef, "users"> | null;
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
                id: any;
            };
            fields: {
                date: {
                    type: any | null;
                    args: never;
                };
                embedding_text: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: any | null;
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
                id: any;
            };
            fields: {
                date: {
                    type: any | null;
                    args: never;
                };
                embedding_text: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: any | null;
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
                        id: any;
                    };
                };
                emotions_timeline: {
                    type: (Record<CacheTypeDef, "emotions_timeline">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof emotions_timeline_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (emotions_timeline_order_by)[] | null | undefined;
                        where?: emotions_timeline_bool_exp | null | undefined;
                    };
                };
                emotions_timeline_aggregate: {
                    type: Record<CacheTypeDef, "emotions_timeline_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof emotions_timeline_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (emotions_timeline_order_by)[] | null | undefined;
                        where?: emotions_timeline_bool_exp | null | undefined;
                    };
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
                        id: any;
                    };
                };
                sessions: {
                    type: (Record<CacheTypeDef, "sessions">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof sessions_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (sessions_order_by)[] | null | undefined;
                        where?: sessions_bool_exp | null | undefined;
                    };
                };
                sessions_aggregate: {
                    type: Record<CacheTypeDef, "sessions_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof sessions_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (sessions_order_by)[] | null | undefined;
                        where?: sessions_bool_exp | null | undefined;
                    };
                };
                sessions_by_pk: {
                    type: Record<CacheTypeDef, "sessions"> | null;
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
                        id: any;
                    };
                };
                users: {
                    type: (Record<CacheTypeDef, "users">)[];
                    args: {
                        distinct_on?: (ValueOf<typeof users_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (users_order_by)[] | null | undefined;
                        where?: users_bool_exp | null | undefined;
                    };
                };
                users_aggregate: {
                    type: Record<CacheTypeDef, "users_aggregate">;
                    args: {
                        distinct_on?: (ValueOf<typeof users_select_column>)[] | null | undefined;
                        limit?: number | null | undefined;
                        offset?: number | null | undefined;
                        order_by?: (users_order_by)[] | null | undefined;
                        where?: users_bool_exp | null | undefined;
                    };
                };
                users_by_pk: {
                    type: Record<CacheTypeDef, "users"> | null;
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
        sessions: {
            idFields: {
                id: number;
            };
            fields: {
                expires: {
                    type: any;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
                sessionToken: {
                    type: string;
                    args: never;
                };
                userId: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "sessions_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "sessions">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "sessions_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof sessions_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "sessions_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "sessions_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "sessions_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "sessions_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "sessions_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "sessions_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "sessions_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "sessions_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "sessions_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_avg_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_max_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                sessionToken: {
                    type: string | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_min_fields: {
            idFields: {
                id: number;
            };
            fields: {
                expires: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: number | null;
                    args: never;
                };
                sessionToken: {
                    type: string | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "sessions">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_stddev_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_stddev_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_stddev_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_sum_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_var_pop_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_var_samp_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        sessions_variance_fields: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number | null;
                    args: never;
                };
                userId: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        topic: {
            idFields: {
                id: any;
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
                    type: any;
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
                id: any;
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
        topic_min_fields: {
            idFields: {
                id: any;
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
        users: {
            idFields: {
                id: number;
            };
            fields: {
                email: {
                    type: string | null;
                    args: never;
                };
                emailVerified: {
                    type: any | null;
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
        users_aggregate: {
            idFields: never;
            fields: {
                aggregate: {
                    type: Record<CacheTypeDef, "users_aggregate_fields"> | null;
                    args: never;
                };
                nodes: {
                    type: (Record<CacheTypeDef, "users">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        users_aggregate_fields: {
            idFields: never;
            fields: {
                avg: {
                    type: Record<CacheTypeDef, "users_avg_fields"> | null;
                    args: never;
                };
                count: {
                    type: number;
                    args: {
                        columns?: (ValueOf<typeof users_select_column>)[] | null | undefined;
                        distinct?: boolean | null | undefined;
                    };
                };
                max: {
                    type: Record<CacheTypeDef, "users_max_fields"> | null;
                    args: never;
                };
                min: {
                    type: Record<CacheTypeDef, "users_min_fields"> | null;
                    args: never;
                };
                stddev: {
                    type: Record<CacheTypeDef, "users_stddev_fields"> | null;
                    args: never;
                };
                stddev_pop: {
                    type: Record<CacheTypeDef, "users_stddev_pop_fields"> | null;
                    args: never;
                };
                stddev_samp: {
                    type: Record<CacheTypeDef, "users_stddev_samp_fields"> | null;
                    args: never;
                };
                sum: {
                    type: Record<CacheTypeDef, "users_sum_fields"> | null;
                    args: never;
                };
                var_pop: {
                    type: Record<CacheTypeDef, "users_var_pop_fields"> | null;
                    args: never;
                };
                var_samp: {
                    type: Record<CacheTypeDef, "users_var_samp_fields"> | null;
                    args: never;
                };
                variance: {
                    type: Record<CacheTypeDef, "users_variance_fields"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        users_avg_fields: {
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
        users_max_fields: {
            idFields: {
                id: number;
            };
            fields: {
                email: {
                    type: string | null;
                    args: never;
                };
                emailVerified: {
                    type: any | null;
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
        users_min_fields: {
            idFields: {
                id: number;
            };
            fields: {
                email: {
                    type: string | null;
                    args: never;
                };
                emailVerified: {
                    type: any | null;
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
        users_mutation_response: {
            idFields: never;
            fields: {
                affected_rows: {
                    type: number;
                    args: never;
                };
                returning: {
                    type: (Record<CacheTypeDef, "users">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        users_stddev_fields: {
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
        users_stddev_pop_fields: {
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
        users_stddev_samp_fields: {
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
        users_sum_fields: {
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
        users_var_pop_fields: {
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
        users_var_samp_fields: {
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
        users_variance_fields: {
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
                    type: any;
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
                    type: any | null;
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
                    type: any | null;
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
    queries: [[EntryStore, Entry$result, Entry$input], [EmotionsTimelineStore, EmotionsTimeline$result, EmotionsTimeline$input]];
};