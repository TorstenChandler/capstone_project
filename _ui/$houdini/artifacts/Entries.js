export default {
    "name": "Entries",
    "kind": "HoudiniQuery",
    "hash": "7a6e06e7328ab78a5f1d9208e64597e5983128a0876d964c88c8f6483ef1c80a",

    "raw": `query Entries {
  entries: entry {
    id
    date
    text
  }
}
`,

    "rootType": "query_root",

    "selection": {
        "fields": {
            "entries": {
                "type": "entry",
                "keyRaw": "entries",

                "selection": {
                    "fields": {
                        "id": {
                            "type": "uuid",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "date": {
                            "type": "timestamptz",
                            "keyRaw": "date",
                            "visible": true
                        },

                        "text": {
                            "type": "String",
                            "keyRaw": "text",
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

"HoudiniHash=1ae6f06d84385b35942312e73bd47e2d2cd71484ba1737080d92f07ce0abfce3";