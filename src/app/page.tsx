'use client';

import {useEffect} from 'react';

import {Box, Icon} from '@components/atom';
import {EmptyLayout} from '@components/template';

const Home = () => {
  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      console.log('mobile');
    } else {
      console.log('desktop');
    }
  }, []);
  return (
    <EmptyLayout
      headerShown
      headerLeftProps={{icon: 'Search', disabled: true}}
      headerCenterProps={{title: '바다로 보내는 편지'}}
      headerRightProps={{icon: 'HamburgerButton'}}>
      <Box>hi</Box>
      <Icon.Home />
    </EmptyLayout>
  );
};

export default Home;
