import React from "react";
import { useNoticeUsecase } from "../../services/usecase/notice";
import { createCtx } from "../../services/utils/createCtx";
import { NoticesEntity } from "../../services/utils/fireStoreEntity";

export interface Notice extends NoticesEntity {}

export interface NoticeContextInterface {
  notice: Notice;
  removeChatNoticeItem: (id: string) => void;
}

const [useNotice, NoticeContext] = createCtx<NoticeContextInterface>();

const NoticeProvider: React.FC = ({ children }) => {
  const notice = useNoticeUsecase();
  return (
    <NoticeContext.Provider value={notice}>{children}</NoticeContext.Provider>
  );
};

export { NoticeContext, NoticeProvider, useNotice };
