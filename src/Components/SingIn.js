import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import { Link, useHistory } from 'react-router-dom';
import LoginModal from '../Pages/Main/LoginModal';
import { userStorage } from 'store';
import { ROLE } from 'constant/role';
import { ROUTES_PATH } from 'constant/routesPath';
import { userListStorage } from 'store';

const PageLink = styled(Link)`
  margin-right: 10px;
`;

const User = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
`;
const SignIn = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const [modal, setModal] = useState(false);
  const isLoggedIn = userStorage.exist();
  const currentUser = userStorage.load();

  const toggleModal = () => {
    setModal(!modal);
  };

  const onLogin = ({ userName, password }) => {
    const user = userListStorage
      .load()
      .find(user => user.userName === userName && user.password === password);

    if (user) {
      userStorage.save(user);
      history.push('/');
    } else {
      throw new Error();
    }
  };

  const onLogout = () => {
    setModal(false);
    localStorage.removeItem('jaranda-user');
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <User>{currentUser.userName}</User>
          <User>{currentUser.isAdmin ? '관리자' : ROLE[currentUser.role]}</User>
          <PageLink to={ROUTES_PATH.MAIN}>
            <Button onClick={onLogout}>Logout</Button>
          </PageLink>
        </>
      ) : (
        <>
          <PageLink to={ROUTES_PATH.MAIN}>
            <Button onClick={toggleModal}>Login</Button>
          </PageLink>
          <PageLink to={ROUTES_PATH.SIGNUP}>
            <Button select={pathname === ROUTES_PATH.SIGNUP}>Sign Up</Button>
          </PageLink>
        </>
      )}
      <LoginModal
        show={modal}
        toggle={toggleModal}
        onLogin={onLogin}
      ></LoginModal>
    </>
  );
};
export default SignIn;
