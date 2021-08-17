import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignIn from './SingIn';
import { ROUTES_PATH } from 'constant/routesPath'

const HeaderWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 0px;
  z-index: 10;
  background-color: #F9F9F9;
`;
const LeftLink = styled(Link)`
  margin-left: 10%;
`;

const Account = styled.div`
  display: flex;
  margin-right: 10%;
`;

function Header({ history }) {
  const pathname = history.location.pathname;

  return (
    <HeaderWrap>
      <LeftLink to={ROUTES_PATH.MAIN}>
        <Button select={pathname === ROUTES_PATH.MAIN}>Main</Button>
      </LeftLink>
      <Account>
        <SignIn />
      </Account>
    </HeaderWrap>
  );
}
export default withRouter(Header);