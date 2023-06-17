'use client';;
import Link from 'next/link';
import './page.module.css';
import { StoreService } from './server/services/store-service';

export default function Home() {
  const storeService = new StoreService();

  return (
    <div>
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
    </div>
  )
}
