import React from 'react';
import Link from 'next/link';

const Header = () => (
    <ul>
        <li><Link href="/"><a>home</a></Link></li>
        <li><Link href="/customers"><a>customers</a></Link></li>
        <li><Link href="/about"><a>about</a></Link></li>
        <li><Link href="/contact"><a>contact</a></Link></li>
    </ul>
);

export default Header;
