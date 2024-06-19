export type Entries = {
    readonly "input": Entries$input;
    readonly "result": Entries$result | undefined;
};

export type Entries$result = {
    /**
     * fetch data from the table: "entry"
    */
    readonly entries: ({
        readonly id: string;
        readonly date: Date;
        readonly text: string;
    })[];
};

export type Entries$input = null;

export type Entries$artifact = {
    "name": "Entries";
    "kind": "HoudiniQuery";
    "hash": "7a6e06e7328ab78a5f1d9208e64597e5983128a0876d964c88c8f6483ef1c80a";
    "raw": `query Entries {
  entries: entry {
    id
    date
    text
  }
}
`;
    "rootType": "query_root";
    "selection": {
        "fields": {
            "entries": {
                "type": "entry";
                "keyRaw": "entries";
                "selection": {
                    "fields": {
                        "id": {
                            "type": "uuid";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "date": {
                            "type": "timestamptz";
                            "keyRaw": "date";
                            "visible": true;
                        };
                        "text": {
                            "type": "String";
                            "keyRaw": "text";
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