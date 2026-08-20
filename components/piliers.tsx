import { Sparkle } from 'lucide-react'
import { Eyebrow } from './eyebrow'

const piliers = [
  {
    title: 'Conseil stratégique',
    text: 'Des points réguliers pour challenger vos choix de niche, de positionnement et de pricing, avec un regard extérieur et exigeant.',
  },
  {
    title: 'Outils et gabarits',
    text: 'Les mêmes outils de sourcing, de suivi des marges et de pilotage publicitaire que nous utilisons sur nos propres projets.',
  },
  {
    title: 'Suivi dans la durée',
    text: "Un accompagnement qui ne s'arrête pas au lancement : nous restons présents pour la phase de croissance et d'optimisation.",
  },
]

export function Piliers() {
  return (
    <section id="piliers" className="relative z-1 py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-[70px] max-w-[640px]">
          <Eyebrow className="mb-5">Notre rôle</Eyebrow>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-medium leading-[1.15] text-balance text-ivoire">
            Ce que nous apportons concrètement à votre projet.
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {piliers.map((pilier) => (
            <div key={pilier.title} className="bg-noir px-9 py-11">
              <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-full border border-or text-or-clair">
                <Sparkle className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="mb-3.5 font-serif text-[22px] text-ivoire">{pilier.title}</h3>
              <p className="text-[14.5px] leading-[1.75] text-ivoire-dim">{pilier.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
