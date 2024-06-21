export default {
    "name": "EntryUpdates",
    "kind": "HoudiniSubscription",
    "hash": "8e7212fd3fe73704610e6319d16de551f41a4b0d0a03b7970e297b4140127409",

    "raw": `subscription EntryUpdates($id: uuid!) {
  entry: entry_by_pk(id: $id) {
    id
    text
    date
    emotions {
      joy
      love
      optimism
      trust
      surprise
      sadness
      anger
      disgust
      fear
      pessimism
      id
    }
  }
}
`,

    "rootType": "subscription_root",

    "selection": {
        "fields": {
            "entry": {
                "type": "entry",
                "keyRaw": "entry(id: $id)",
                "nullable": true,

                "selection": {
                    "fields": {
                        "id": {
                            "type": "uuid",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "text": {
                            "type": "String",
                            "keyRaw": "text",
                            "visible": true
                        },

                        "date": {
                            "type": "timestamptz",
                            "keyRaw": "date",
                            "visible": true
                        },

                        "emotions": {
                            "type": "emotion",
                            "keyRaw": "emotions",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "joy": {
                                        "type": "float8",
                                        "keyRaw": "joy",
                                        "visible": true
                                    },

                                    "love": {
                                        "type": "float8",
                                        "keyRaw": "love",
                                        "visible": true
                                    },

                                    "optimism": {
                                        "type": "float8",
                                        "keyRaw": "optimism",
                                        "visible": true
                                    },

                                    "trust": {
                                        "type": "float8",
                                        "keyRaw": "trust",
                                        "visible": true
                                    },

                                    "surprise": {
                                        "type": "float8",
                                        "keyRaw": "surprise",
                                        "visible": true
                                    },

                                    "sadness": {
                                        "type": "float8",
                                        "keyRaw": "sadness",
                                        "visible": true
                                    },

                                    "anger": {
                                        "type": "float8",
                                        "keyRaw": "anger",
                                        "visible": true
                                    },

                                    "disgust": {
                                        "type": "float8",
                                        "keyRaw": "disgust",
                                        "visible": true
                                    },

                                    "fear": {
                                        "type": "float8",
                                        "keyRaw": "fear",
                                        "visible": true
                                    },

                                    "pessimism": {
                                        "type": "float8",
                                        "keyRaw": "pessimism",
                                        "visible": true
                                    },

                                    "id": {
                                        "type": "uuid",
                                        "keyRaw": "id",
                                        "visible": true
                                    }
                                }
                            },

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
    },

    "input": {
        "fields": {
            "id": "uuid"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=89cd7e0ba39f0a78206aa1f083fe367a48e2b5f35aba75c239aa0ae26795c17e";