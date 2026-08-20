export function Logo({ className = 'text-[22px]' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 font-serif tracking-[0.08em] ${className}`}>
      <span className="h-2 w-2 rounded-full bg-or shadow-[0_0_12px_var(--or)]" aria-hidden="true" />
      Waron
    </div>
  )
}
