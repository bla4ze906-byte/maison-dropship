import { Eyebrow } from './eyebrow'

const steps = [
  {
    num: '01',
    tag: 'Cadrage',
    title: 'Choix de la niche et étude du marché',
    text: "Nous analysons avec vous la demande réelle, la concurrence et la marge potentielle avant tout investissement — pour partir sur des bases solides plutôt que sur une intuition.",
  },
  {
    num: '02',
    tag: 'Fondations',
    title: 'Sourcing des produits et fournisseurs',
    text: "Sélection de fournisseurs fiables, négociation des délais et des tarifs, mise en place d'un circuit logistique cohérent avec votre niche.",
  },
  {
    num: '03',
    tag: 'Mise en ligne',
    title: 'Construction de la boutique',
    text: "Structure du site, fiches produits, tunnel d'achat et identité visuelle — pensés pour convertir, pas seulement pour exister.",
  },
  {
    num: '04',
    tag: 'Croissance',
    title: 'Acquisition et scaling',
    text: "Mise en place des premières campagnes publicitaires, lecture des indicateurs clés, puis passage à l'échelle progressif.",
  },
]

export function Methode() {
  return (
    <section id="methode" className="relative z-1 py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-[70px] max-w-[640px]">
          <Eyebrow className="mb-5">La méthode</Eyebrow>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-medium leading-[1.15] text-balance text-ivoire">
            Un parcours en quatre étapes, pensé comme un plan de route.
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ivoire-dim text-pretty">
            Chaque étape correspond à une décision concrète que vous devez prendre — dans
            l&apos;ordre — avant de passer à la suivante.
          </p>
        </div>

        <ol className="border-t border-border">
          {steps.map((step) => (
            <li
              key={step.num}
              className="grid grid-cols-[60px_1fr] items-start gap-x-7 gap-y-4 border-b border-border py-11 md:grid-cols-[110px_1fr_1fr] md:gap-8"
            >
              <span className="font-serif text-3xl text-or/55 md:text-[44px]">{step.num}</span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-or-clair">
                  {step.tag}
                </div>
                <h3 className="mt-3 font-serif text-2xl text-ivoire">{step.title}</h3>
              </div>
              <p className="col-start-2 max-w-[420px] text-[15px] leading-[1.75] text-ivoire-dim md:col-start-3">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
