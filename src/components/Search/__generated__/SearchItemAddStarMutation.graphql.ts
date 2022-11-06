/**
 * @generated SignedSource<<fa677778a86aac284adfff9bde2b3b5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddStarInput = {
  clientMutationId?: string | null;
  starrableId: string;
};
export type SearchItemAddStarMutation$variables = {
  input: AddStarInput;
};
export type SearchItemAddStarMutation$data = {
  readonly addStar: {
    readonly starrable: {
      readonly stargazerCount: number;
    } | null;
  } | null;
};
export type SearchItemAddStarMutation = {
  response: SearchItemAddStarMutation$data;
  variables: SearchItemAddStarMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchItemAddStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchItemAddStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "937b129a09c44e57c40eccb2ba5a7c20",
    "id": null,
    "metadata": {},
    "name": "SearchItemAddStarMutation",
    "operationKind": "mutation",
    "text": "mutation SearchItemAddStarMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      stargazerCount\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5252c71b59da0af5a39db02cf3cd35cf";

export default node;
