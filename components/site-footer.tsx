import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="relative z-1 border-t border-border py-12">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-8">
        <Logo className="text-lg" />
        <div className="text-xs tracking-[0.04em] text-ivoire-dim">
          © 2026 Waron — Conseil en projets e-commerce.
        </div>
      </div>
    </footer>
  )
}
