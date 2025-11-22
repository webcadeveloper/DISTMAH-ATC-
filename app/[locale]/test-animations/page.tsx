'use client';

import { AnimatedElement } from '@/components/animations/AnimatedElement';
import { AnimatedLogo } from '@/components/ui/AnimatedLogo';

export default function TestAnimationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Anime.js Test Page
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Testing AnimatedElement triggers: mount, scroll, hover
          </p>
        </div>

        {/* 1. AnimatedLogo Test */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            1. AnimatedLogo (mount trigger)
          </h2>
          <div className="flex justify-center">
            <AnimatedLogo size="lg" animated={true} />
          </div>
        </section>

        {/* 2. Mount Trigger Test */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            2. Mount Trigger (animates on page load)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnimatedElement
                key={i}
                animation={{
                  translateY: [50, 0],
                  opacity: [0, 1],
                  scale: [0.8, 1],
                  duration: 600,
                  ease: 'outExpo',
                }}
                delay={i * 150}
                trigger="mount"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-2">Card {i}</div>
                  <p className="text-blue-100">Mount animation</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </section>

        {/* 3. Scroll Trigger Test */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            3. Scroll Trigger (animates when scrolling into view)
          </h2>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <AnimatedElement
                key={i}
                animation={{
                  translateX: [i % 2 === 0 ? 100 : -100, 0],
                  opacity: [0, 1],
                  duration: 800,
                  ease: 'outExpo',
                }}
                trigger="scroll"
              >
                <div
                  className={`p-6 rounded-lg ${
                    i % 2 === 0
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-gradient-to-r from-green-500 to-teal-500'
                  } text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Scroll Item {i}
                      </h3>
                      <p className="text-white/90">
                        Animates from {i % 2 === 0 ? 'right' : 'left'} when
                        visible
                      </p>
                    </div>
                    <div className="text-5xl">🎬</div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </section>

        {/* 4. Hover Trigger Test */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            4. Hover Trigger (animates on mouse hover)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <AnimatedElement
                key={i}
                animation={{
                  scale: [1, 1.2],
                  rotate: [0, 360],
                  duration: 500,
                  ease: 'outExpo',
                }}
                trigger="hover"
                className="cursor-pointer"
              >
                <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-8 rounded-xl text-center hover:shadow-2xl transition-shadow">
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="font-bold">Hover {i}</div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </section>

        {/* 5. Complex Animation Test */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            5. Complex Animations (scroll trigger)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement
              animation={{
                translateY: [100, 0],
                opacity: [0, 1],
                scale: [0.5, 1],
                rotate: [-45, 0],
                duration: 1000,
                ease: 'outExpo',
              }}
              trigger="scroll"
            >
              <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">
                  Multi-property Animation
                </h3>
                <p className="text-white/90 mb-4">
                  translateY, opacity, scale, rotate combined
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    1000ms
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    outExpo
                  </span>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement
              animation={{
                translateX: [50, 0],
                opacity: [0, 1],
                duration: 800,
                ease: 'outExpo',
              }}
              delay={200}
              trigger="scroll"
            >
              <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">With Delay</h3>
                <p className="text-white/90 mb-4">
                  Simple animation with 200ms delay
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    800ms
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    delay: 200ms
                  </span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Spacer for scroll testing */}
        <div className="h-64"></div>

        {/* Footer */}
        <footer className="text-center text-gray-500 dark:text-gray-400 pb-8">
          <p>
            Scroll down to see scroll-triggered animations • Hover over hover
            cards
          </p>
          <p className="text-sm mt-2">
            DISTMAH Universidad Autodesk • Anime.js v4.2.2
          </p>
        </footer>
      </div>
    </div>
  );
}
