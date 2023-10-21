import type {ReactNode} from 'react';
import {ComponentPropsWithRef} from 'react';
import styled from 'styled-components';

import {Icon} from '@components/atom';

type HeaderProps = {
  children: ReactNode;
  isClose?: boolean;
  closeHandler?: () => void;
} & ComponentPropsWithRef<'header'>;

const Header = (props: HeaderProps) => {
  const {children, isClose, closeHandler, ...restProps} = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...restProps}>
      {children}
      {isClose && <Icon.Close onClick={closeHandler} />}
    </Container>
  );
};

export default Header;

Header.displayName = 'DialogHeader';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme}) => theme.size[2]}px;
`;
