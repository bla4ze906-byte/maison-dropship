import { Eyebrow } from './eyebrow'

const manifest = [
  { num: '03', label: "Piliers d'accompagnement" },
  { num: 'A → Z', label: 'Du sourcing au scaling' },
  { num: '1:1', label: 'Suivi personnalisé' },
  { num: '∞', label: 'Accès à vie au contenu' },
]

export function Hero() {
  return (
    <section className="relative z-1 flex min-h-screen flex-col justify-center pb-20 pt-32">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <Eyebrow className="mb-8 animate-rise">Cabinet de conseil en e-commerce</Eyebrow>

        <h1 className="max-w-[920px] animate-rise font-serif text-[clamp(42px,7vw,96px)] font-medium leading-[1.02] text-balance text-ivoire [animation-delay:0.15s]">
          Nous structurons les projets <em className="italic text-or-clair">dropshipping</em> qui
          durent.
        </h1>

        <p className="mt-7 max-w-[560px] animate-rise text-lg leading-[1.7] text-ivoire-dim text-pretty [animation-delay:0.3s]">
          Nous accompagnons des porteurs de projet dans le sourcing, la mise en place de leur
          boutique et la stratégie d&apos;acquisition — avec la rigueur d&apos;un cabinet de conseil,
          pas les promesses d&apos;un tutoriel gratuit.
        </p>

        <div className="mt-11 flex animate-rise flex-wrap items-center gap-5 [animation-delay:0.45s]">
          <a
            href="#formation"
            className="bg-gradient-to-br from-or-clair to-or px-10 py-4 text-xs font-medium uppercase tracking-[0.1em] text-noir shadow-[0_8px_30px_-6px_rgba(198,161,91,0.5)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-6px_rgba(198,161,91,0.65)]"
          >
            Accéder à la formation
          </a>
          <a
            href="#methode"
            className="border-b border-border pb-1 text-xs uppercase tracking-[0.06em] text-ivoire transition-colors hover:border-or hover:text-or-clair"
          >
            Découvrir la méthode
          </a>
        </div>

        <dl className="mt-[90px] grid animate-rise grid-cols-2 gap-5 border-t border-border pt-6 [animation-delay:0.6s] sm:grid-cols-4">
          {manifest.map((item, i) => (
            <div
              key={item.label}
              className={i === 0 ? 'pl-0' : 'border-l border-border pl-[18px]'}
            >
              <dt className="font-serif text-3xl text-or-clair">{item.num}</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-[0.1em] text-ivoire-dim">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
