export type deleteEntry = {
    readonly "input": deleteEntry$input;
    readonly "result": deleteEntry$result;
};

export type deleteEntry$result = {
    /**
     * delete single row from the table: "entry"
    */
    readonly delete_entry_by_pk: {
        readonly id: any;
    } | null;
};

export type deleteEntry$input = {
    id: any;
};

export type deleteEntry$optimistic = {
    /**
     * delete single row from the table: "entry"
    */
    readonly delete_entry_by_pk?: {
        readonly id?: any;
    } | null;
};

export type deleteEntry$artifact = {
    "name": "deleteEntry";
    "kind": "HoudiniMutation";
    "hash": "371f60b3ba0148e7a0ad54a89115829b28b5fb0579f01fab7772ab049596c8a4";
    "raw": `mutation deleteEntry($id: uuid!) {
  delete_entry_by_pk(id: $id) {
    id
  }
}
`;
    "rootType": "mutation_root";
    "selection": {
        "fields": {
            "delete_entry_by_pk": {
                "type": "entry";
                "keyRaw": "delete_entry_by_pk(id: $id)";
                "nullable": true;
                "selection": {
                    "fields": {
                        "id": {
                            "type": "uuid";
                            "keyRaw": "id";
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {
            "isManualLoad": true;
        };
    };
    "input": {
        "fields": {
            "id": "uuid";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};