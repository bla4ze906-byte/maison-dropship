'use client'

import { useState } from 'react'
import { Eyebrow } from './eyebrow'

const inclus = [
  'Les 4 modules de la méthode, du cadrage au scaling',
  'Gabarits de sourcing et de suivi des marges',
  'Accès aux mises à jour du programme',
  "Groupe d'échange avec les autres porteurs de projet",
  "Accès illimité et sans date d'expiration",
]

// —— Configuration des moyens de paiement ——
// Remplacez ces valeurs par vos propres liens / coordonnées.
// Tant qu'un lien contient "votre-lien" ou "votrecompte", il est considéré
// comme non configuré et affiche un message au lieu d'envoyer vers une erreur.
const PAIEMENT = {
  // Lien de paiement Stripe (Payment Link) — https://dashboard.stripe.com/payment-links
  stripeLink: 'https://buy.stripe.com/test_9B63cu5dj84S6wHfTc4wM00',
  // Lien PayPal.me ou bouton PayPal
  paypalLink: 'https://paypal.me/votrecompte/40',
  // Coordonnées bancaires pour le virement
  iban: 'FR76 0000 0000 0000 0000 0000 000',
  beneficiaire: 'Waron',
}

// Un lien est valide s'il ne contient plus les mots-clés d'exemple.
function estConfigure(href: string) {
  return !href.includes('votre-lien') && !href.includes('votrecompte')
}

const moyens = [
  {
    id: 'carte',
    label: 'Carte Mastercard',
    detail: 'Paiement sécurisé par carte Mastercard',
    href: PAIEMENT.stripeLink,
  },
  {
    id: 'paypal',
    label: 'PayPal',
    detail: 'Réglez en quelques clics',
    href: PAIEMENT.paypalLink,
  },
]

export function Offre() {
  const [ouvert, setOuvert] = useState(false)

  return (
    <section id="formation" className="relative z-1 py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid items-start gap-[70px] md:grid-cols-2">
          <div>
            <Eyebrow className="mb-5">La formation</Eyebrow>
            <h2 className="mb-6 font-serif text-[clamp(28px,3.6vw,40px)] font-medium leading-[1.2] text-balance text-ivoire">
              Tout ce que nous transmettons en accompagnement, réuni dans un seul programme.
            </h2>
            <p className="mb-4.5 text-[15.5px] leading-[1.8] text-ivoire-dim">
              Conçue pour ceux qui veulent avancer par eux-mêmes tout en gardant un cadre sérieux :
              les mêmes étapes que celles de notre méthode, détaillées et applicables dès le premier
              module.
            </p>
            <p className="text-[15.5px] leading-[1.8] text-ivoire-dim">
              Ce n&apos;est pas une promesse de revenu facile. C&apos;est une méthode de travail,
              avec ses exigences — que nous vous aidons à tenir.
            </p>
          </div>

          <div className="relative border border-or bg-gradient-to-b from-or/5 to-transparent px-10 py-12">
            <div className="absolute -top-3.5 left-10 border border-or bg-noir px-3.5 py-1 text-[11px] uppercase tracking-[0.14em] text-or-clair">
              Formation complète
            </div>
            <h3 className="mb-2 font-serif text-3xl text-ivoire">Programme Waron</h3>
            <div className="mb-1.5 mt-5.5 font-serif text-[52px] text-or-clair">
              40&nbsp;€ <span className="font-sans text-base text-ivoire-dim">paiement unique</span>
            </div>
            <ul className="my-7 list-none">
              {inclus.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-border py-3 text-[14.5px] text-ivoire-dim"
                >
                  <span className="text-or" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOuvert(true)}
              className="mt-3.5 w-full bg-gradient-to-br from-or-clair to-or px-10 py-4 text-center text-xs font-medium uppercase tracking-[0.1em] text-noir shadow-[0_8px_30px_-6px_rgba(198,161,91,0.5)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-6px_rgba(198,161,91,0.65)]"
            >
              Acheter la formation
            </button>
            <div className="mt-4 text-center text-xs tracking-[0.02em] text-ivoire-dim">
              Accès immédiat après paiement · Support inclus
            </div>
          </div>
        </div>
      </div>

      {ouvert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="paiement-titre"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-noir/80 px-6 backdrop-blur-sm"
          onClick={() => setOuvert(false)}
        >
          <div
            className="relative w-full max-w-md border border-or bg-noir-2 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOuvert(false)}
              aria-label="Fermer"
              className="absolute right-4 top-4 text-ivoire-dim transition-colors hover:text-or-clair"
            >
              ✕
            </button>
            <Eyebrow className="mb-4">Paiement · 40 €</Eyebrow>
            <h3 id="paiement-titre" className="mb-1 font-serif text-2xl text-ivoire">
              Choisissez votre moyen de paiement
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-ivoire-dim">
              Accès immédiat au programme après confirmation du paiement.
            </p>

            <div className="flex flex-col gap-3">
              {moyens.map((m) => {
                const actif = estConfigure(m.href)

                if (!actif) {
                  return (
                    <div
                      key={m.id}
                      className="flex items-center justify-between border border-dashed border-border bg-noir-3/50 px-5 py-4 opacity-60"
                    >
                      <span>
                        <span className="block text-[15px] text-ivoire">{m.label}</span>
                        <span className="block text-xs text-ivoire-dim">{m.detail}</span>
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.08em] text-ivoire-dim">
                        Bientôt disponible
                      </span>
                    </div>
                  )
                }

                return (
                  <a
                    key={m.id}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-border bg-noir-3 px-5 py-4 transition-colors hover:border-or"
                  >
                    <span>
                      <span className="block text-[15px] text-ivoire">{m.label}</span>
                      <span className="block text-xs text-ivoire-dim">{m.detail}</span>
                    </span>
                    <span
                      className="text-or-clair transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                )
              })}
            </div>

            <div className="mt-5 border-t border-border pt-5">
              <div className="mb-1 text-[11px] uppercase tracking-[0.1em] text-or-clair">
                Virement bancaire
              </div>
              <p className="text-xs leading-relaxed text-ivoire-dim">
                Bénéficiaire : <span className="text-ivoire">{PAIEMENT.beneficiaire}</span>
                <br />
                IBAN : <span className="font-mono text-ivoire">{PAIEMENT.iban}</span>
                <br />
                Envoyez votre justificatif pour recevoir vos accès.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
