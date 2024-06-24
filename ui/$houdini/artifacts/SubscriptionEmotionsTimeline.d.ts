export type SubscriptionEmotionsTimeline = {
    readonly "input": SubscriptionEmotionsTimeline$input;
    readonly "result": SubscriptionEmotionsTimeline$result | undefined;
};

export type SubscriptionEmotionsTimeline$result = {
    /**
     * fetch data from the table: "emotions_timeline"
    */
    readonly timeline: ({
        readonly entries: any | null;
        readonly love: any | null;
        readonly joy: any | null;
        readonly surprise: any | null;
        readonly sadness: any | null;
        readonly fear: any | null;
        readonly anger: any | null;
    })[];
};

export type SubscriptionEmotionsTimeline$input = null;

export type SubscriptionEmotionsTimeline$artifact = {
    "name": "SubscriptionEmotionsTimeline";
    "kind": "HoudiniSubscription";
    "hash": "4090f96dbe2751e3238383cfd57cdbec0d87d2c5d2a6e205ed3140202d065cc0";
    "raw": `subscription SubscriptionEmotionsTimeline {
  timeline: emotions_timeline {
    entries
    love
    joy
    surprise
    sadness
    fear
    anger
  }
}
`;
    "rootType": "subscription_root";
    "selection": {
        "fields": {
            "timeline": {
                "type": "emotions_timeline";
                "keyRaw": "timeline";
                "selection": {
                    "fields": {
                        "entries": {
                            "type": "json";
                            "keyRaw": "entries";
                            "nullable": true;
                            "visible": true;
                        };
                        "love": {
                            "type": "json";
                            "keyRaw": "love";
                            "nullable": true;
                            "visible": true;
                        };
                        "joy": {
                            "type": "json";
                            "keyRaw": "joy";
                            "nullable": true;
                            "visible": true;
                        };
                        "surprise": {
                            "type": "json";
                            "keyRaw": "surprise";
                            "nullable": true;
                            "visible": true;
                        };
                        "sadness": {
                            "type": "json";
                            "keyRaw": "sadness";
                            "nullable": true;
                            "visible": true;
                        };
                        "fear": {
                            "type": "json";
                            "keyRaw": "fear";
                            "nullable": true;
                            "visible": true;
                        };
                        "anger": {
                            "type": "json";
                            "keyRaw": "anger";
                            "nullable": true;
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {
            "isManualLoad": true;
        };
    };
};