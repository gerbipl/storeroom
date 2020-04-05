import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import Title from '../Title/Title';

const Header = ({ createFormToAddProductFn, openSettingFn }) => (
  <header className={styles.wrapper}>
    <Title>Storeroom</Title>
    <HeaderNavigation />
    <Button onClick={createFormToAddProductFn} secondary>New product</Button>
    <Button onClick={openSettingFn} secondary>Settings</Button>
  </header>
);

export default Header;