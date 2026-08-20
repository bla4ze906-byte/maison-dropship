export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center gap-3.5 text-xs uppercase tracking-[0.22em] text-or ${className}`}
    >
      <span className="h-px w-11 bg-or" aria-hidden="true" />
      {children}
    </div>
  )
}
