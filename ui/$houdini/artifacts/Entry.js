export default {
    "name": "Entry",
    "kind": "HoudiniQuery",
    "hash": "eee6c069e68265941a11a02ee6eec51b73968dcc92f0959c659a0c7b4cd1c6aa",

    "raw": `query Entry($id: uuid!) {
  entry: entry_by_pk(id: $id) {
    id
    text
    date
  }
}
`,

    "rootType": "query_root",

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

    "input": {
        "fields": {
            "id": "uuid"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=33bbca4cae4a4d056ca7a113c14533fb45a4d65fdc046ed317b68f54d30d0747";