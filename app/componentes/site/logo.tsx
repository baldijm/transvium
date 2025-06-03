import React from 'react'
import SVGLogo from './svglogo'
import Link from 'next/link';

type LogoProps = {
    className?: string;
    container?: string;
}

export default function LogoTvium({className, container} : LogoProps) {
  return (
    <div className={container}>
    <div className={`flex items-center ${className}`}>
        <SVGLogo/>
        <Link href={'/'}>
            <h1>Transvium</h1>
        </Link>
    </div>
    </div>
  )
}
