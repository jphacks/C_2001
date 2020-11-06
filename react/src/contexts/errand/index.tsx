import React from "react";
import { useErrandUsecase } from "../../services/usecase/Errand";
import { createCtx } from "../../services/utils/createCtx";

export interface CandidateFriend {
  uid: string;
  updatedAt: Date;
}

export interface Candidates {
  [k: string]: {
    now: Array<CandidateFriend>;
    before: Array<CandidateFriend>;
  };
}

export interface ErrandContextInterface {
  candidates: Candidates | null;
  currentRequestLocation: string;
  setCurrentRequestLocation: React.Dispatch<React.SetStateAction<string>>;
  requestToCandidatesFn: (spot: string) => void;
  listenResponseStateFn: (spot: string) => void;
  listen: boolean;
}

const [useErrand, ErrandContext] = createCtx<ErrandContextInterface>();

const ErrandProvider: React.FC = ({ children }) => {
  const errand = useErrandUsecase();
  return (
    <ErrandContext.Provider value={errand}>{children}</ErrandContext.Provider>
  );
};

export { ErrandContext, ErrandProvider, useErrand };
