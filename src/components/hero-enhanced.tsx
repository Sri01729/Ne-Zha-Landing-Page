"use client"

import { NezhaModel3D } from "./floating-island-3d"
import { motion } from "framer-motion"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { AnimatedCard } from "./animated-card"
import { Feature239 } from "./feature239"
import BigTypeStrip from "./big-type-strip"
import { InfiniteCards } from "./infinite-cards"
import Image from "next/image"

export function HeroEnhanced() {
  return (
    <>
      <motion.section
        id="origin"
        className="min-h-screen bg-white flex items-center justify-center py-20 mb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-left space-y-8"
            >
             <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter">
            BEHOLD
            <br />
            NE ZHA
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide uppercase">
            THE REBEL GOD. THE LOTUS PRINCE.
          </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed">
             Born of chaos, forged in fire, and reborn to defy the heavens. Discover the myth of a boy who dared to challenge fate itself.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-black"></div>
              <span className="text-sm font-light">SCROLL</span>
            </div>
          </motion.div>

                      {/* Right side - Large 3D Model */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[900px]"
            >
            {/* 3D Model Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <NezhaModel3D />
            </div>
          </motion.div>
        </div>
      </div>
      </motion.section>

      {/* BigType Strip */}
      <BigTypeStrip />

                        {/* Second Section - 3D Card and Content */}
                  <section id="saga" className="py-20 bg-white mt-0">
                    <div className="container px-4 mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left side - 3D Card */}
                        <motion.div
                          initial={{ opacity: 0, x: -150, rotateY: -30, scale: 0.7 }}
                          whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
              <CardContainer className="w-full">
                <CardBody className="w-full h-[500px]">
                  <CardItem
                    translateZ="100"
                    className="w-full h-full"
                  >
                    <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden relative">
                      <Image
                        src="/nezha_childhood.jpeg"
                        alt="Nezha in his childhood - a powerful and rebellious protection deity"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

                                    {/* Right side - Content */}
                        <motion.div
                          initial={{ opacity: 0, x: 150, scale: 0.8, rotateY: 30 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="space-y-8"
                        >
              <h2 className="text-7xl md:text-9xl font-bold tracking-tighter">
                An Unyielding Spirit
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed">
                  He is one of the most powerful and rebellious protection deities in Chinese mythology. Neither fully god nor man, Ne Zha was born a divine warrior in a child body.
                </p>
                <p className="text-lg font-light leading-relaxed">
                  His story is a timeless epic of fierce loyalty, tragic sacrifice, and the relentless struggle against destiny. He is the eternal youth who stands against impossible odds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

                        {/* Third Section - Animated Cards */}
                  <section id="theme" className="py-20 bg-white mt-0">
                    <div className="container px-4 mx-auto">
                      <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -15 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter">
                          A Saga Forged in Fire and Water
                        </h2>
                      </motion.div>
                                              <motion.div
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 200, rotateX: -30, scale: 0.6, rotateZ: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, rotateZ: 0 }}
                            transition={{ duration: 1.8, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <AnimatedCard
                              image="/Nezha_baby.jpeg"
                              alt="Ne Zha as a baby - Divine Birth"
                              chapter="Chapter I"
                              title="Divine Birth"
                              description="Born from a ball of flesh after a three-year pregnancy, Ne Zha was immediately gifted celestial weapons. He was a divine being destined for greatness, but his immense power came with a volatile temper."
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 200, rotateX: -30, scale: 0.6, rotateZ: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, rotateZ: 0 }}
                            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <AnimatedCard
                              image="/nezha_aobing.jpeg"
                              alt="Ne Zha vs Ao Bing - Dragon's Defiance"
                              chapter="Chapter II"
                              title="Dragon's Defiance"
                              description="In a youthful act of fury, he battled and slew the son of the Dragon King of the East Sea. To save his family and his people from the Dragon King's apocalyptic wrath, Ne Zha made the ultimate sacrifice."
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 200, rotateX: -30, scale: 0.6, rotateZ: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, rotateZ: 0 }}
                            transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <AnimatedCard
                              image="/nezha_lotus.jpeg"
                              alt="Ne Zha with lotus - Lotus Rebirth"
                              chapter="Chapter III"
                              title="Lotus Rebirth"
                              description="His spirit was saved by his immortal master and given a new body crafted from sacred lotus blossoms. Reborn stronger and purer, he became the Lotus Prince, armed with new powers and his iconic Wind Fire Wheels."
                            />
                          </motion.div>
                        </motion.div>
        </div>

        {/* SVG Filter for Animation */}
        <svg className="svg-container">
          <defs>
            <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1">
                <animate attributeName="seed" values="1;5;2;1" dur="3s" repeatCount="indefinite" />
              </feTurbulence>
              <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>

              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1">
                <animate attributeName="seed" values="1;3;6;1" dur="3s" repeatCount="indefinite" />
              </feTurbulence>
              <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>

              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2">
                <animate attributeName="seed" values="2;4;1;2" dur="3s" repeatCount="indefinite" />
              </feTurbulence>
              <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>

              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2">
                <animate attributeName="seed" values="2;6;3;2" dur="3s" repeatCount="indefinite" />
              </feTurbulence>
              <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>

              <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
              <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
              <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

              <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="35" xChannelSelector="R" yChannelSelector="B" />
            </filter>
          </defs>
                            </svg>
                  </section>

                  {/* Fourth Section - Feature239 Component */}
                  <motion.section
                    id="enter"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white mt-0"
                  >
                    <Feature239 />
                  </motion.section>

                  {/* Fifth Section - Experience Ne Zha */}
                  <motion.section
                    id="experience"
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 bg-white mt-0"
                  >
                    <div className="container px-4 mx-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 150, scale: 0.7, rotateX: -20 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                      >
                                                <h2 className="text-7xl md:text-9xl font-bold tracking-tighter">
                          Experience Ne Zha
                        </h2>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 200, scale: 0.8, rotateY: 15 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full mb-16"
                      >
                        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden">
                          <iframe
                            src="https://www.youtube.com/embed/ETlOSBR92Fs"
                            title="Ne Zha Experience Video"
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </motion.div>

                      {/* Reviews Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 150, scale: 0.9, rotateX: -10 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16"
                      >
                        <InfiniteCards />
                      </motion.div>

                                            {/* Simple Heading */}
                      <motion.h3
                        className="text-7xl md:text-9xl font-bold tracking-tighter text-black mb-8 text-center"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        His Legend is Eternal
                      </motion.h3>

                      {/* Image Section */}
                                            <motion.div
                        className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8"
                        initial={{ opacity: 0, scale: 0.7, rotateY: -25 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <Image
                          src="/ne_zha_wallpaper.jpeg"
                          alt="Ne Zha Epic Battle Scene"
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>

                      {/* Content Section */}
                      <motion.div
                        className="relative bg-white text-black p-16 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                        initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.05),transparent_50%)]"></div>

                        {/* Corner Decorations */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-500"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-500"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-500"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-500"></div>

                        {/* Floating Elements */}
                        <div className="absolute top-8 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-12 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

                        {/* Content */}
                        <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-center">
                          {/* Decorative Line */}
                          <div className="flex items-center justify-center space-x-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
                            <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
                          </div>

                          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                            The story of Ne Zha has been retold in operas, films, and games, inspiring millions. Now, it&apos;s your turn to explore the full epic.
                          </p>

                          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                            Ready to delve deeper into the realm of the Lotus Prince? Explore his divine arsenal, witness his greatest battles, and see his impact on modern culture.
                          </p>

                          {/* Decorative Line */}
                          <div className="flex items-center justify-center space-x-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
                            <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.section>

                </>
              )
            }
