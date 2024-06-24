export default {
    "name": "EmotionsTimeline",
    "kind": "HoudiniQuery",
    "hash": "7ff0effdce28d8da220d5035799e3d598d228f00808f17d7250dcf85274e3a68",

    "raw": `query EmotionsTimeline {
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
`,

    "rootType": "query_root",

    "selection": {
        "fields": {
            "timeline": {
                "type": "emotions_timeline",
                "keyRaw": "timeline",

                "selection": {
                    "fields": {
                        "entries": {
                            "type": "json",
                            "keyRaw": "entries",
                            "nullable": true,
                            "visible": true
                        },

                        "love": {
                            "type": "json",
                            "keyRaw": "love",
                            "nullable": true,
                            "visible": true
                        },

                        "joy": {
                            "type": "json",
                            "keyRaw": "joy",
                            "nullable": true,
                            "visible": true
                        },

                        "surprise": {
                            "type": "json",
                            "keyRaw": "surprise",
                            "nullable": true,
                            "visible": true
                        },

                        "sadness": {
                            "type": "json",
                            "keyRaw": "sadness",
                            "nullable": true,
                            "visible": true
                        },

                        "fear": {
                            "type": "json",
                            "keyRaw": "fear",
                            "nullable": true,
                            "visible": true
                        },

                        "anger": {
                            "type": "json",
                            "keyRaw": "anger",
                            "nullable": true,
                            "visible": true
                        }
                    }
                },

                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=7ff0effdce28d8da220d5035799e3d598d228f00808f17d7250dcf85274e3a68";