'use client';;
import Header from './components/header/header';
import Layout from './components/layout/layout';
import styles from './page.module.css';
import { Container } from '@mui/material';
import { LayoutService } from './services/layout/layout-service';

export default function Home() {

  return (
    <Container
      fixed
      className={styles.container}
      style={{ height: LayoutService.getContainerHeight() }}
    >
      <Header height={LayoutService.getHeaderHeight()} />
      <Layout height={LayoutService.getBodyHeight()} />
    </Container >
  );
}
