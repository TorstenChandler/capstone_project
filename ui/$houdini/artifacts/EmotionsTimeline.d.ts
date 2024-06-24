export type EmotionsTimeline = {
    readonly "input": EmotionsTimeline$input;
    readonly "result": EmotionsTimeline$result | undefined;
};

export type EmotionsTimeline$result = {
    /**
     * fetch data from the table: "emotions_timeline"
    */
    readonly timeline: ({
        readonly entries: any | null;
        readonly love: any | null;
        readonly joy: any | null;
        readonly optimism: any | null;
        readonly anticipation: any | null;
        readonly surprise: any | null;
        readonly trust: any | null;
        readonly sadness: any | null;
        readonly pessimism: any | null;
        readonly fear: any | null;
        readonly disgust: any | null;
        readonly anger: any | null;
    })[];
};

export type EmotionsTimeline$input = null;

export type EmotionsTimeline$artifact = {
    "name": "EmotionsTimeline";
    "kind": "HoudiniQuery";
    "hash": "a1bb9c01017180e54231891af541192ec338b67608ff2d5efcecfb6da1325761";
    "raw": `query EmotionsTimeline {
  timeline: emotions_timeline {
    entries
    love
    joy
    optimism
    anticipation
    surprise
    trust
    sadness
    pessimism
    fear
    disgust
    anger
  }
}
`;
    "rootType": "query_root";
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
                        "optimism": {
                            "type": "json";
                            "keyRaw": "optimism";
                            "nullable": true;
                            "visible": true;
                        };
                        "anticipation": {
                            "type": "json";
                            "keyRaw": "anticipation";
                            "nullable": true;
                            "visible": true;
                        };
                        "surprise": {
                            "type": "json";
                            "keyRaw": "surprise";
                            "nullable": true;
                            "visible": true;
                        };
                        "trust": {
                            "type": "json";
                            "keyRaw": "trust";
                            "nullable": true;
                            "visible": true;
                        };
                        "sadness": {
                            "type": "json";
                            "keyRaw": "sadness";
                            "nullable": true;
                            "visible": true;
                        };
                        "pessimism": {
                            "type": "json";
                            "keyRaw": "pessimism";
                            "nullable": true;
                            "visible": true;
                        };
                        "fear": {
                            "type": "json";
                            "keyRaw": "fear";
                            "nullable": true;
                            "visible": true;
                        };
                        "disgust": {
                            "type": "json";
                            "keyRaw": "disgust";
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
        "houdini-svelte": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};