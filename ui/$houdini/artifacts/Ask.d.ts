export type Ask = {
    readonly "input": Ask$input;
    readonly "result": Ask$result | undefined;
};

export type Ask$result = {
    readonly ask: {
        readonly answer: string;
    } | null;
};

export type Ask$input = {
    question: string;
};

export type Ask$artifact = {
    "name": "Ask";
    "kind": "HoudiniQuery";
    "hash": "377cbc0241377ec91b9150fc6b8610333460437ba69a78933a1d627486a24877";
    "raw": `query Ask($question: String!) {
  ask(question: $question) {
    answer
  }
}
`;
    "rootType": "query_root";
    "selection": {
        "fields": {
            "ask": {
                "type": "QuestionResponse";
                "keyRaw": "ask(question: $question)";
                "nullable": true;
                "selection": {
                    "fields": {
                        "answer": {
                            "type": "String";
                            "keyRaw": "answer";
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
    "input": {
        "fields": {
            "question": "String";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};