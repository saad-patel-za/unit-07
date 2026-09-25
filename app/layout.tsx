import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'UNIT 07 — Every Soldier Has a Breaking Point',description:'An original graphic novel about a soldier, a boxer, and the war that follows him home. Issue 001 coming soon.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
