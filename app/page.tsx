'use client';

import Header from './components/header/header';
import './page.module.css';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container fixed>
      <Header />
      <div>
        <header>Sub Header</header>
        <main>
          Body
        </main>
        <footer>
          Footer
        </footer>
      </div>
    </Container>
  )
}
