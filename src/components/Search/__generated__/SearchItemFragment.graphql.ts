/**
 * @generated SignedSource<<471f442c81abb8222a1e86c8179310c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchItemFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly name: string;
  readonly stargazerCount: number;
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "SearchItemFragment";
};
export type SearchItemFragment$key = {
  readonly " $data"?: SearchItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "stargazerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasStarred",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "1564c49a929ba2c891c3430bd37b474a";

export default node;
