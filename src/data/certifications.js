/**
 * verifyUrl: null renders a non-interactive card — no hover lift, no cursor
 * pointer, nothing implying a click. A dead "Verify" button is worse than none.
 *
 * Prefer an issuer verification URL over a self-hosted PDF: anyone can host a
 * PDF, so only the issuer's own page actually verifies anything.
 */
export const certifications = [
  {
    id: 'cdac',
    name: 'PG Diploma in Advanced Computing (PG-DAC)',
    issuer: 'Sunbeam Institute of Information Technology, Karad — C-DAC ATC',
    year: '2025',
    note: '900-hour full-time postgraduate diploma. Grade A.',
    credentialId: 'B369761',
    // Self-hosted certificate page only — C-DAC provides no public verification
    // endpoint. The marks statement is deliberately not included in this PDF.
    verifyUrl: '/Bhavesh_Gupta_CDAC.pdf',
    verifyLabel: 'View certificate',
  },
  {
    id: 'minnalearn',
    name: 'Elements of AI',
    issuer: 'MinnaLearn & University of Helsinki',
    year: '2026',
    note: '2 ECTS credits.',
    credentialId: null,
    verifyUrl: 'https://certificates.mooc.fi/validate/bc92b1m5xo7',
  },
  {
    id: 'hackerrank-java',
    // The certificate reads "Java (Basic)" — a HackerRank skill certification
    // test. Titled to match, because the card links to it and a visitor can
    // check.
    name: 'Java (Basic)',
    issuer: 'HackerRank',
    year: '2025',
    note: 'Skill certification test.',
    credentialId: 'B04568616C8A',
    verifyUrl: 'https://www.hackerrank.com/certificates/B04568616C8A',
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
  'Resume lists "Agentic AI by MinnaLearn" alongside Elements of AI, but only the Elements of AI certificate was supplied. Add it as a separate entry if you have it.',
]
