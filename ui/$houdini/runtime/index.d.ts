import { UserEmotionsStore } from "../plugins/houdini-svelte/stores/UserEmotions";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "query UserEmotions{\n    emotions{\n        entries\n        series{\n            name\n            data\n        }\n    }\n}"
): UserEmotionsStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;