export default {
    "name": "EntryUpdates",
    "kind": "HoudiniSubscription",
    "hash": "7fb66c4784c1d39d3aa2a25f8293997038e43c9a05966bf54a2f0069502f859c",

    "raw": `subscription EntryUpdates($id: uuid!) {
  entry: entry_by_pk(id: $id) {
    id
    text
    date
    emotions {
      id
      love
      joy
      surprise
      sadness
      fear
      anger
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
                                    "id": {
                                        "type": "uuid",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "love": {
                                        "type": "float8",
                                        "keyRaw": "love",
                                        "visible": true
                                    },

                                    "joy": {
                                        "type": "float8",
                                        "keyRaw": "joy",
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

                                    "fear": {
                                        "type": "float8",
                                        "keyRaw": "fear",
                                        "visible": true
                                    },

                                    "anger": {
                                        "type": "float8",
                                        "keyRaw": "anger",
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

"HoudiniHash=c58277f8a15700aa870b1f64e24fe5082886195d82ce3b07e65c1902c5647f9b";