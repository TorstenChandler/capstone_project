export default {
    "name": "Ask",
    "kind": "HoudiniQuery",
    "hash": "377cbc0241377ec91b9150fc6b8610333460437ba69a78933a1d627486a24877",

    "raw": `query Ask($question: String!) {
  ask(question: $question) {
    answer
  }
}
`,

    "rootType": "query_root",

    "selection": {
        "fields": {
            "ask": {
                "type": "QuestionResponse",
                "keyRaw": "ask(question: $question)",
                "nullable": true,

                "selection": {
                    "fields": {
                        "answer": {
                            "type": "String",
                            "keyRaw": "answer",
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
            "question": "String"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=f11cf13789a2d634839f99d564e1725cdd3e090c38c2b993c0db98acd37f9580";