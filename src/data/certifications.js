/**
 * verifyUrl: null renders a non-interactive card — no hover lift, no cursor
 * pointer, nothing implying a click. A dead "Verify" button is worse than none.
 */
export const certifications = [
  {
    id: 'cdac',
    name: 'CDAC — Java Full Stack Development',
    issuer: 'Sunbeam Institute',
    year: '2025',
    note: 'Hands-on training in Java full stack development.',
    credentialId: null,
    verifyUrl: null,
  },
  {
    id: 'minnalearn',
    name: 'Elements of AI & Agentic AI',
    issuer: 'MinnaLearn Academy',
    year: '2026',
    note: null,
    credentialId: null,
    verifyUrl: null,
  },
  {
    id: 'hackerrank-java',
    name: 'Certified Java Developer',
    issuer: 'HackerRank',
    year: '2025',
    note: null,
    credentialId: null,
    verifyUrl: null,
  },
]

export const achievements = [
  {
    id: 'leetcode',
    name: '600+ LeetCode problems solved',
    issuer: 'LeetCode',
    year: '2025',
    note: 'Consistent participation, earned the LeetCode T-shirt.',
    verifyUrl: 'https://leetcode.com/u/bhaveshgupta1811',
  },
]

export const certificationGaps = [
  'No credential verification URLs for CDAC, MinnaLearn or HackerRank. Those three cards are non-interactive until you supply real ones.',
]
