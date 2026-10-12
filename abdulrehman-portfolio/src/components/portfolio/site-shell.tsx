import { Link } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { emailLink } from '@/data/projects';
export function SiteShell({ children }: { children: ReactNode }) {
 const [dark, setDark] = useState(false);
 const [menu, setMenu] = useState(false);
 useEffect(() => {
  let theme: string | null = null;
  try { theme = localStorage.getItem('portfolio-theme'); } catch { /* preferences may be unavailable */ }
  const value = theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDark(value); document.documentElement.classList.toggle('dark', value);
 }, []);
 function toggleTheme() { const value = !dark; setDark(value); document.documentElement.classList.toggle('dark',value); try { localStorage.setItem('portfolio-theme',value ? 'dark' : 'light'); } catch { /* theme remains usable */ } }
 return <><header className="header-band" id="top"><div className="container-wide site-header">
 <Link to="/" className="wordmark" aria-label="Abdulrehman home" onClick={() => setMenu(false)}>ABDULREHMAN<span>.</span></Link>
 <div className="header-controls"><nav className="nav-links desktop-nav" aria-label="Main navigation"><Link to="/" activeOptions={{ exact:true }}>Home</Link><Link to="/work">Work</Link><Link to="/about">About</Link></nav>
 <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun/> : <Moon/>}</Button>
 <Button variant="default" asChild className="header-contact"><a href={emailLink}>Let’s talk <ArrowUpRight/></a></Button>
 <Button variant="outline" size="icon" className="mobile-menu-button" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} aria-controls="mobile-nav">{menu ? <X/> : <Menu/>}</Button></div>
 </div>{menu && <nav id="mobile-nav" className="mobile-nav container-wide" aria-label="Mobile navigation"><Link to="/" onClick={() => setMenu(false)}>Home</Link><Link to="/work" onClick={() => setMenu(false)}>Work</Link><Link to="/about" onClick={() => setMenu(false)}>About</Link><a href={emailLink}>Let’s talk <ArrowUpRight size={15}/></a></nav>}</header>
 <main>{children}</main><footer className="container-wide site-footer"><span>© 2026 Abdulrehman. Crafted with care.</span><span className="hidden sm:inline">Thoughtful design. Purposeful code.</span><Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>Back to top <ArrowUp/></Button></footer></>;
}
