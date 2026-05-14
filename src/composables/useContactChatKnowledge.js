/**
 * Local knowledge for the marketing chat assistant (not an LLM).
 * Answers are factual summaries aligned with site positioning; edge cases → human follow-up.
 */

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'is', 'are', 'we', 'you', 'your', 'our', 'do', 'does',
  'how', 'what', 'when', 'where', 'why', 'can', 'could', 'would', 'with', 'from', 'about', 'into', 'at', 'by', 'it',
  'if', 'as', 'be', 'this', 'that', 'have', 'has', 'will', 'my', 'me', 'us', 'they', 'their', 'i', 'am',
])

function tokenize(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s/+-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
}

/** @typedef {{ id: string, label: string, keywords: string[], answer: string }} KnowledgeTopic */

/** @type {KnowledgeTopic[]} */
export const KNOWLEDGE_TOPICS = [
  {
    id: 'overview',
    label: 'Overview',
    keywords: [
      'zar media', 'who are you', 'what do you do', 'agency', 'overview', 'about', 'help accounting', 'financial firm',
      'south africa', 'practice',
    ],
    answer:
      'We help accounting and financial practices cut admin with managed firm sites, client portals, and CRM-linked intake—usually in one programme. SA-based; specifics need a quick human reply.',
  },
  {
    id: 'waas',
    label: 'Firm website',
    keywords: [
      'website as a service', 'waas', 'managed website', 'firm website', 'hosting', 'update my site', 'redesign',
      'seo', 'content', 'monthly', 'domain',
    ],
    answer:
      'Website as a Service = we design, host, and keep your public site updated and on-brand next to your portal work. Scope and price depend on pages and integrations—free audit gives real numbers.',
  },
  {
    id: 'portals',
    label: 'Portals & CRM',
    keywords: [
      'portal', 'client portal', 'document', 'vault', 'upload', 'secure', 'intake', 'onboarding', 'crm', 'hubspot',
      'salesforce', 'directory', 'queue', 'popia', 'gdpr', 'compliance portal',
    ],
    answer:
      'Portals handle structured intake and documents; we tie them to CRM so nothing lives in email silos. Build depends on your tools and POPIA-style rules—we scope that in discovery.',
  },
  {
    id: 'workflow',
    label: 'Workflows',
    keywords: [
      'workflow', 'integration', 'xero', 'quickbooks', 'automation', 'calendly', 'form', 'sync', 'api', 'zapier',
      'manual data', 'duplicate', 'handoff',
    ],
    answer:
      'We connect site and portal events to CRM, calendars, and practice tools you already use—simple routing is quick; deep sync needs proper mapping and testing.',
  },
  {
    id: 'compliance',
    label: 'Compliance',
    keywords: [
      'compliance', 'regulator', 'wcag', 'accessibility', 'disclaimer', 'privacy', 'cookie', 'trust', 'risk', 'audit',
      'regulated', 'financial services',
    ],
    answer:
      'We implement disclosures, cookies/consent, and accessibility-minded patterns—not legal advice. Your advisers sign off; we ship what you agree.',
  },
  {
    id: 'process',
    label: 'How we work',
    keywords: [
      'process', 'how long', 'timeline', 'phase', 'discovery', 'contract', 'month to month', 'retainer', 'onboarding',
      'support', 'sla',
    ],
    answer:
      'Discovery first, then phased delivery (often intake wins before heavy integration). Ongoing management available so nothing drifts.',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    keywords: [
      'price', 'pricing', 'cost', 'how much', 'quote', 'proposal', 'budget', 'ballpark', 'discount', 'retainer',
    ],
    answer:
      'No public price list—work varies too much. Free website audit → scoped quote for your firm.',
  },
]

const FALLBACK_ANSWER =
  'Need a person for that—tap Free audit below or email info@zarmediagroup.com.'

function scoreTopic(textNorm, tokens, topic, topicIdBoost) {
  let score = 0
  if (topicIdBoost && topic.id === topicIdBoost) score += 8
  for (const kw of topic.keywords) {
    if (textNorm.includes(kw)) score += 3
  }
  const labelNorm = topic.label.toLowerCase()
  if (textNorm.includes(labelNorm)) score += 2
  for (const tok of tokens) {
    for (const kw of topic.keywords) {
      if (kw.length > 2 && (kw.includes(tok) || tok.includes(kw))) score += 0.5
    }
  }
  return score
}

/**
 * @param {string} userText
 * @param {string} [topicIdBoost] - optional selected topic id (strong boost)
 */
export function matchKnowledge(userText, topicIdBoost) {
  const raw = String(userText || '').trim()
  if (!raw && topicIdBoost) {
    const t = KNOWLEDGE_TOPICS.find((x) => x.id === topicIdBoost)
    if (t) return { answer: t.answer, matchedIds: [t.id], usedFallback: false }
  }
  if (!raw) {
    return { answer: FALLBACK_ANSWER, matchedIds: [], usedFallback: true }
  }

  const textNorm = raw.toLowerCase()
  const tokens = tokenize(raw)

  const rescored = KNOWLEDGE_TOPICS.map((t) => ({
    topic: t,
    score: scoreTopic(textNorm, tokens, t, topicIdBoost),
  })).sort((a, b) => b.score - a.score)

  const top = rescored[0]
  if (!top || top.score < 1.5) {
    return { answer: FALLBACK_ANSWER, matchedIds: [], usedFallback: true }
  }

  const parts = [top.topic.answer]
  const matchedIds = [top.topic.id]

  return {
    answer: parts.join('\n\n'),
    matchedIds,
    usedFallback: false,
  }
}
