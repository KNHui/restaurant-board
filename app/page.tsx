'use client';;
import Link from 'next/link';
import './page.module.css';
import { StoreService } from './server/services/store-service';
import BasicButtons from './components/buttons';
import BasicButtonGroup from './components/button-group';
import { Container } from '@mui/material';

export default function Home() {
  const storeService = new StoreService();
  const longString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  return (
    <Container fixed>
      <BasicButtons></BasicButtons>
      <hr></hr>
      <BasicButtonGroup></BasicButtonGroup>
      <hr></hr>
      /page.tsx
      <ul>
        <li>
          <Link href="/sub">/sub</Link>
        </li>
        <li>
          <Link href="/sub/1">/sub/1</Link>
        </li>
        <li>
          <Link href="/sub/2">/sub/2</Link>
        </li>

        <li>
          <Link href="/sub/about">/sub/about</Link>
        </li>
      </ul>

    </Container>
  )
}
