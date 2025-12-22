import React from 'react';
import FadeInSection from '../components/FadeInSection';

export const metadata = {
  title: 'A Special Christmas Gift',
  description: 'A love story',
};

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <FadeInSection>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black">
              <img
                src="./IMG_5815.jpeg"
                alt="Us"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
                style={{ transform: 'scale(1.10)', transformOrigin: 'center center', objectPosition: 'center 30%' }}
              />
            </div>
          </div>

          <div className="relative z-10 text-center px-6 md:px-4 max-w-4xl mx-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Unsere Geschichte</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Dieses Weihnachten wollte ich dir etwas Besonderes schenken
            </p>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 animate-bounce">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14l-7 7-7-7m7 7V3" />
            </svg>
          </div>
        </section>
      </FadeInSection>

      {/* DER ANFANG */}
      <FadeInSection>
        <section className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
          <div className="max-w-4xl text-center mx-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Der Anfang</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Von dem Moment an, als wir uns trafen, wusste ich, dass etwas Besonderes zwischen uns ist. Dein Lächeln erhellte den Raum und dein Lachen wurde mein liebster Klang.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* UNSERE REISE */}
      <FadeInSection>
        <section className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Unsere Reise</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Jede gemeinsame Abenteuer mit dir war magisch. Von spontanen Roadtrips bis zu ruhigen Abenden zu Hause — jeder Moment ist ein Schatz.
              </p>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="./IMG_5739.jpeg"
                alt="Us together"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* DIE KLEINEN DINGE */}
      <FadeInSection>
        <section className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
          <div className="max-w-4xl text-center mx-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Die kleinen Dinge</h2>
            <div className="mb-6 rounded-xl overflow-hidden h-64 md:h-80">
              <img
                src="./IMG_5429.jpeg"
                alt="Small moments"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Es sind die kleinen Momente, die am meisten zählen. Dein morgendliches Kaffee-Ritual, wie du tanzt, wenn du denkst, niemand sieht zu, und wie du immer weißt, wie du mich zum Lächeln bringst.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* GESCHENK */}
      <FadeInSection>
        <section className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20 bg-gradient-to-b from-gray-900 to-red-950">
          <div className="max-w-4xl text-center mx-4">
            <div className="mb-12 text-6xl">🎁</div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-red-100">Dein Geschenk von Herzen</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8">
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8">
                Dieses Jahr wollte ich dir etwas schenken, das von Herzen kommt...
              </p>
              <div className="text-xl md:text-2xl font-semibold text-red-200 mt-8">
                🎄 [Ein Ski Trip auf eine Hütte] 🎄
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ABSCHLUSS */}
      <FadeInSection>
        <section className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
          <div className="max-w-3xl text-center mx-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ich liebe dich</h2>
            <div className="mb-6 rounded-xl overflow-hidden h-64 md:h-80">
              <img src="./IMG_5861.jpeg" alt="Together" className="w-full h-full object-cover" />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Auf viele weitere Abenteuer zusammen. Frohe Weihnachten, meine Liebe. ❤️
            </p>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
