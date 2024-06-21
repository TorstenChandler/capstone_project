export default {
    "name": "SubscriptionEmotionsTimeline",
    "kind": "HoudiniSubscription",
    "hash": "4c266e5cbb122d5654d71a21998a1fe46330a3a60f7a4f7fa164985c2476b9d2",

    "raw": `subscription SubscriptionEmotionsTimeline {
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
`,

    "rootType": "subscription_root",

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

                        "optimism": {
                            "type": "json",
                            "keyRaw": "optimism",
                            "nullable": true,
                            "visible": true
                        },

                        "anticipation": {
                            "type": "json",
                            "keyRaw": "anticipation",
                            "nullable": true,
                            "visible": true
                        },

                        "surprise": {
                            "type": "json",
                            "keyRaw": "surprise",
                            "nullable": true,
                            "visible": true
                        },

                        "trust": {
                            "type": "json",
                            "keyRaw": "trust",
                            "nullable": true,
                            "visible": true
                        },

                        "sadness": {
                            "type": "json",
                            "keyRaw": "sadness",
                            "nullable": true,
                            "visible": true
                        },

                        "pessimism": {
                            "type": "json",
                            "keyRaw": "pessimism",
                            "nullable": true,
                            "visible": true
                        },

                        "fear": {
                            "type": "json",
                            "keyRaw": "fear",
                            "nullable": true,
                            "visible": true
                        },

                        "disgust": {
                            "type": "json",
                            "keyRaw": "disgust",
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
        "houdini-svelte": {
            "isManualLoad": true
        }
    }
};

"HoudiniHash=08b07dc644520f32e29fc2446b806e37b2b0460ecea8ad6becf0f8f9ac438e0e";