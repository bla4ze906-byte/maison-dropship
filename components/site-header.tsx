import { Logo } from './logo'

const navLinks = [
  { href: '#methode', label: 'Méthode' },
  { href: '#piliers', label: 'Accompagnement' },
  { href: '#formation', label: 'Formation' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-border bg-noir/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-5">
        <Logo />
        <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.06em] text-ivoire-dim md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-or-clair">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#formation"
          className="border border-or px-5 py-2.5 text-xs uppercase tracking-[0.08em] text-or-clair transition-colors hover:bg-or hover:text-noir"
        >
          {"Voir l'offre"}
        </a>
      </nav>
    </header>
  )
}
