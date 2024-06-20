export default {
    "name": "UserEmotions",
    "kind": "HoudiniQuery",
    "hash": "0eea68f45fe1e1410b2e2bd265ac5873bd0cb858c9c4e1dbe4e2f0ed07e308ee",

    "raw": `query UserEmotions {
  emotions {
    entries
    series {
      name
      data
    }
  }
}
`,

    "rootType": "query_root",

    "selection": {
        "fields": {
            "emotions": {
                "type": "TimeLine",
                "keyRaw": "emotions",
                "nullable": true,

                "selection": {
                    "fields": {
                        "entries": {
                            "type": "String",
                            "keyRaw": "entries",
                            "visible": true
                        },

                        "series": {
                            "type": "Series",
                            "keyRaw": "series",

                            "selection": {
                                "fields": {
                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
                                        "visible": true
                                    },

                                    "data": {
                                        "type": "Float",
                                        "keyRaw": "data",
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
        "houdini-svelte": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=00e216c4586d8e31b1d573e088e8254f0294c7c24e325cfb7695b1238486724a";