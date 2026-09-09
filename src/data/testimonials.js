/**
 * Ships empty on purpose.
 *
 * The Testimonials section renders `null` while this array has no entries, so
 * the site never displays an empty shell — and never displays a quote nobody
 * said. Attributing words to a named colleague who did not say them is the one
 * kind of placeholder that can actually damage you if a recruiter checks.
 *
 * To populate, add entries in this shape:
 *
 *   {
 *     id: 'unique-slug',
 *     quote: 'What they actually wrote or said.',
 *     name: 'Their full name',
 *     role: 'Their title',
 *     company: 'Their company',
 *     source: 'https://linkedin.com/in/...',  // optional, where it can be checked
 *   }
 *
 * Ask for them on LinkedIn — a recommendation you can link to is worth more
 * than an unattributed quote.
 */
export const testimonials = []

export const testimonialGaps =
  testimonials.length === 0
    ? [
        'Testimonials section is built but hidden — src/data/testimonials.js is empty. Add real quotes (see the shape documented in that file) and the section appears automatically.',
      ]
    : []
