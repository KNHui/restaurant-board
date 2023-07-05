"use client";

import { Container } from '@mui/material';
import './globals.css';
import styles from './page.module.css';
import { Inter } from 'next/font/google';
import Header from './components/header/header';
import { LayoutStyleService } from './services/layout/layout-size.service';
import Footer from './components/footer/footer';
import { MetadataService } from './services/metadata/metadata.service';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: MetadataService.getTitle(),
  description: MetadataService.getDescription(),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={LayoutStyleService.getBodyStyle()}
      >
        <Container
          maxWidth={false}
          className={styles.container}
          style={LayoutStyleService.getContainerStyle()}
        >
          <Header height={LayoutStyleService.getHeaderHeight()} />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}
