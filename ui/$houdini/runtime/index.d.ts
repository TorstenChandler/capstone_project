import { saveEntryStore } from "../plugins/houdini-svelte/stores/saveEntry";
import { EntryUpdatesStore } from "../plugins/houdini-svelte/stores/EntryUpdates";
import { deleteEntryStore } from "../plugins/houdini-svelte/stores/deleteEntry";
import { EntryStore } from "../plugins/houdini-svelte/stores/Entry";
import { SubscriptionEmotionsTimelineStore } from "../plugins/houdini-svelte/stores/SubscriptionEmotionsTimeline";
import { EmotionsTimelineStore } from "../plugins/houdini-svelte/stores/EmotionsTimeline";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "\n            mutation saveEntry($entry:entry_insert_input!) {\n                insert_entry_one(object: $entry) {\n                    id\n                }\n            }\n         "
): saveEntryStore;

export function graphql(
    str: "\n\t\tsubscription EntryUpdates($id: uuid!) {\n\t\t\tentry: entry_by_pk(id: $id) {\n\t\t\t\tid\n\t\t\t\ttext\n\t\t\t\tdate\n\t\t\t\temotions {\n\t\t\t\t\tid\n\t\t\t\t\tlove\n\t\t\t\t\tjoy\n\t\t\t\t\tsurprise\n\t\t\t\t\tsadness\n\t\t\t\t\tfear\n\t\t\t\t\tanger\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"
): EntryUpdatesStore;

export function graphql(
    str: "\n\t\tmutation deleteEntry($id: uuid!) {\n\t\t\tdelete_entry_by_pk(id: $id) {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t"
): deleteEntryStore;

export function graphql(
    str: "query Entry($id: uuid!) {\n\t\t\t\tentry: entry_by_pk(id: $id) {\n\t\t\t\t\tid\n\t\t\t\t\ttext\n\t\t\t\t\tdate\n\t\t\t\t}\n\t\t\t}\n\t"
): EntryStore;

export function graphql(
    str: "\n\t\tsubscription SubscriptionEmotionsTimeline {\n\t\t\ttimeline: emotions_timeline {\n\t\t\t\tentries\n\t\t\t\tlove\n\t\t\t\tjoy\n\t\t\t\tsurprise\n\t\t\t\tsadness\n\t\t\t\tfear\n\t\t\t\tanger\n\t\t\t}\n\t\t}\n\t"
): SubscriptionEmotionsTimelineStore;

export function graphql(
    str: "query EmotionsTimeline {\n  timeline: emotions_timeline {\n    entries\n    love\n    joy\n    surprise\n    sadness\n    fear\n    anger\n  }\n}\n"
): EmotionsTimelineStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;