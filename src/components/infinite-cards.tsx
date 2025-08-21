"use client"

import { motion } from 'framer-motion'

interface ReviewCard {
  critic: string
  publication: string
  type: string
  score: string
  review: string
  date: string
  isFresh: boolean
}

const reviews: ReviewCard[] = [
  {
    critic: "Michael Ordoña",
    publication: "San Francisco Chronicle",
    type: "TOP CRITIC",
    score: "4/4",
    review: "The visuals are never less than inspired.",
    date: "Aug 20, 2025",
    isFresh: true
  },
  {
    critic: "Qina Liu",
    publication: "Seattle Times",
    type: "TOP CRITIC",
    score: "3.5/4",
    review: "Ne Zha II deserves all the attention and accolades: It's an empowering film that makes you believe that you, too, can change your fate.",
    date: "Aug 20, 2025",
    isFresh: true
  },
  {
    critic: "Justin Clark",
    publication: "Slant Magazine",
    type: "TOP CRITIC",
    score: "3/5",
    review: "Jiaozi's film is a sprawling, hyperkinetic exercise in mythological storytelling.",
    date: "Aug 20, 2025",
    isFresh: true
  },
  {
    critic: "Nick Schager",
    publication: "The Daily Beast",
    type: "TOP CRITIC",
    score: "Rotten",
    review: "Despite attractive aesthetics, its fights grow wearisome, especially as the material crosses the two-hour mark.",
    date: "Aug 20, 2025",
    isFresh: false
  },
  {
    critic: "John Nugent",
    publication: "Empire Magazine",
    type: "TOP CRITIC",
    score: "3/5",
    review: "At once awe-inspiring, jaw-dropping, eye-rolling and head-scratching, this is animated cinema on a scale rarely seen.",
    date: "Mar 25, 2025",
    isFresh: true
  },
  {
    critic: "Kevin Maher",
    publication: "The Times (UK)",
    type: "TOP CRITIC",
    score: "4/5",
    review: "There's soul too, and a deep sense of family, plus a poignantly symbolic sequence where a mother insists on embracing her son.",
    date: "Mar 25, 2025",
    isFresh: true
  },
  {
    critic: "Phil Hoad",
    publication: "Guardian",
    type: "TOP CRITIC",
    score: "4/5",
    review: "If the story is Chinese, this rather token plea in favour of misunderstood outsiders and acknowledging difference feels pure Hollywood.",
    date: "Mar 20, 2025",
    isFresh: true
  },
  {
    critic: "Robbie Collin",
    publication: "Daily Telegraph (UK)",
    type: "TOP CRITIC",
    score: "1/5",
    review: "By turns frantic, gaudy and puerile, it's supremely hard to latch onto emotionally, despite the scads of roared exposition.",
    date: "Mar 17, 2025",
    isFresh: false
  },
  {
    critic: "Elizabeth Kerr",
    publication: "The Hollywood Reporter",
    type: "TOP CRITIC",
    score: "Fresh",
    review: "Simultaneously fresh and enlightening but familiar -- in both negative and positive ways -- Ne Zha 2 is a distinct fantasy epic.",
    date: "Mar 11, 2025",
    isFresh: true
  },
  {
    critic: "Carlos Aguilar",
    publication: "Variety",
    type: "TOP CRITIC",
    score: "Fresh",
    review: "Surpassing its predecessor in all manner of visual ambition and kinetic intensity, the stereoscopic 3D and Imax-released 'Ne Zha 2' is breathtaking.",
    date: "Mar 4, 2025",
    isFresh: true
  },
  {
    critic: "Tasha Robinson",
    publication: "Polygon",
    type: "TOP CRITIC",
    score: "82/100",
    review: "It's a lot to take in, but it's joyously and creatively rendered, a fantasy epic brought to life in vivid color and with all the visual creativity a fantasy fan could want.",
    date: "Feb 21, 2025",
    isFresh: true
  },
  {
    critic: "Simon Abrams",
    publication: "RogerEbert.com",
    type: "TOP CRITIC",
    score: "3/4",
    review: "'Ne Zha 2' is a rare sequel that amplifies both its action and drama without sacrificing much of what already worked in the last movie.",
    date: "Feb 20, 2025",
    isFresh: true
  }
]

function ReviewCard({ review }: { review: ReviewCard }) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[320px] max-w-[320px]"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
              <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{review.critic}</h4>
            <p className="text-gray-600 text-xs">{review.publication}</p>
            <p className="text-xs font-semibold text-gray-700 mt-1">{review.date}</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-medium text-gray-500">{review.type}</span>
            <div className={`text-sm font-bold ${review.isFresh ? 'text-green-600' : 'text-red-600'}`}>
              {review.isFresh ? 'Fresh' : 'Rotten'}
            </div>
          </div>
        </div>

      <p className="text-gray-800 text-sm leading-relaxed mb-3 line-clamp-3">
        {review.review}
      </p>

      <div className="flex items-center justify-start text-xs text-gray-500">
        <span className="font-medium">Score: {review.score}</span>
      </div>
    </motion.div>
  )
}

export function InfiniteCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4">
            Critical Acclaim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ne Zha II has captured the hearts of critics worldwide, earning praise for its stunning visuals, empowering story, and technical achievements.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {/* First set of cards */}
            {reviews.map((review, index) => (
              <ReviewCard key={`first-${index}`} review={review} />
            ))}
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <ReviewCard key={`second-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
