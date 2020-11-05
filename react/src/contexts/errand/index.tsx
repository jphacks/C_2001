import React from "react";
import { createCtx } from "../../services/utils/createCtx";

export interface Candidates {
  [k: string]: {
    now: Array<string>;
    before: Array<string>;
  };
}

export interface ErrandContextInterface {
  candidates: Candidates;
  listen: boolean;
}

const [useErrand, ErrandContext] = createCtx<ErrandContextInterface>();

const ErrandProvider: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

export { ErrandContext, ErrandProvider, useErrand };
