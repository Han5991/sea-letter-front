'use client';

import type {ReactNode} from 'react';
import styled from 'styled-components';

type NoticeLayoutProps = {
  children: ReactNode;
};

const NoticeLayout = (props: NoticeLayoutProps) => {
  const {children} = props;

  return (
    <>
      <title>마음을 담다(공지사항)</title>
      <BackGround />
      {children}
    </>
  );
};

export default NoticeLayout;

const BackGround = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  z-index: -1;
  background: rgba(241, 212, 220, 1);
`;
