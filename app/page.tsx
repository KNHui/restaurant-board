'use client';;
import './page.module.css';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container fixed>
      <header>Main Header</header>
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
