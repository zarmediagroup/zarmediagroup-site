<template>
  <div
    class="relative flex flex-col"
    :class="
      variant === 'floating'
        ? 'h-full min-h-0 flex-1 overflow-hidden p-3 sm:p-4'
        : 'bg-white border border-navy-900/8 p-5 sm:p-8 lg:p-10 min-h-[560px] max-h-[min(720px,calc(100vh-12rem))]'
    "
  >
    <div :class="variant === 'floating' ? 'mb-3 flex-shrink-0' : 'mb-5 flex-shrink-0'">
      <h2
        class="font-serif text-navy-900 mb-0"
        :class="variant === 'floating' ? 'text-lg' : 'text-display-sm'"
      >
        {{ variant === 'floating' ? 'Chat' : 'Chat with us' }}
      </h2>
      <p v-if="variant === 'page'" class="font-sans text-charcoal-500 text-sm mt-2">
        Questions or a free audit.
      </p>
    </div>

    <!-- Bot trap -->
    <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
      <label :for="trapId" class="sr-only">Leave this field blank</label>
      <input
        :id="trapId"
        v-model="websiteTrap"
        type="text"
        tabindex="-1"
        autocomplete="off"
      />
    </div>

    <div
      ref="scrollRef"
      class="flex-1 overflow-y-auto pr-1 mb-3"
      :class="variant === 'floating' ? 'min-h-[88px] space-y-2' : 'min-h-[280px] space-y-3'"
      role="log"
      aria-relevant="additions"
      aria-live="polite"
      aria-label="Conversation"
    >
      <div
        v-for="(m, idx) in messages"
        :key="idx"
        class="flex"
        :class="m.role === 'user' ? 'justify-end' : 'justify-start'"
      >
        <div
          class="max-w-[90%] sm:max-w-[85%] font-sans leading-snug whitespace-pre-wrap rounded-2xl"
          :class="[
            variant === 'floating' ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm leading-relaxed',
            m.role === 'user'
              ? 'bg-navy-900 text-white rounded-br-md'
              : 'bg-cream text-navy-900 border border-navy-900/10 rounded-bl-md',
          ]"
        >
          <span v-if="m.role === 'bot'" class="sr-only">Assistant: </span>
          <span v-else class="sr-only">You: </span>
          {{ m.text }}
        </div>
      </div>
      <div v-if="isTyping" class="flex justify-start" aria-hidden="true">
        <div
          class="bg-cream border border-navy-900/10 rounded-2xl rounded-bl-md flex gap-1.5 items-center"
          :class="variant === 'floating' ? 'px-3 py-2' : 'px-4 py-3'"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-navy-900/40 animate-pulse" />
          <span class="w-1.5 h-1.5 rounded-full bg-navy-900/40 animate-pulse" style="animation-delay: 150ms" />
          <span class="w-1.5 h-1.5 rounded-full bg-navy-900/40 animate-pulse" style="animation-delay: 300ms" />
        </div>
      </div>
    </div>

    <!-- Success -->
    <div v-if="phase === 'done'" class="text-center py-5 border-t border-navy-900/10" role="status">
      <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gold-500 border border-gold-500" aria-hidden="true">
        <svg class="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h3 class="font-serif text-navy-900 text-lg mb-1">Sent</h3>
      <p class="font-sans text-charcoal-500 text-xs">
        We’ll reply within 1 business day{{ form.firstName ? `, ${form.firstName}` : '' }}.
      </p>
    </div>

    <!-- Intent: what do you want first? -->
    <div v-else-if="phase === 'intent'" class="border-t border-navy-900/10 pt-3 flex-shrink-0">
      <div class="flex flex-col gap-2">
        <button
          v-for="opt in intentOptions"
          :key="opt.id"
          type="button"
          class="text-left w-full px-3 py-2.5 border border-navy-900/20 font-sans text-sm font-semibold text-navy-900 transition hover:border-gold-500 hover:bg-gold-500/5"
          @click="selectIntent(opt.id)"
        >
          {{ opt.title }}
        </button>
      </div>
    </div>

    <!-- Q&A about services -->
    <div v-else-if="phase === 'qa'" class="border-t border-navy-900/10 pt-3 flex-shrink-0 space-y-2">
      <div class="grid grid-cols-2 gap-1.5 max-h-[7.5rem] overflow-y-auto pr-0.5">
        <button
          v-for="t in KNOWLEDGE_TOPICS"
          :key="t.id"
          type="button"
          class="text-left px-2 py-1.5 border text-[11px] font-sans font-medium text-navy-900 border-navy-900/20 hover:border-gold-500/60 transition leading-tight"
          @click="answerTopic(t.id)"
        >
          {{ t.label }}
        </button>
      </div>
      <textarea
        :id="qaInputId"
        v-model="qaDraft"
        rows="2"
        class="w-full px-3 py-2 font-sans text-navy-900 bg-white border border-navy-900/20 focus:border-gold-500 focus:outline-none text-xs resize-none"
        placeholder="Type a question…"
        @keydown.enter.exact.prevent="submitQaQuestion"
      />
      <div class="flex gap-2">
        <button type="button" class="btn-primary flex-1 text-xs py-2.5" @click="submitQaQuestion">Reply</button>
        <button type="button" class="btn-ghost flex-1 text-xs py-2.5 border border-navy-900/15" @click="goToAuditFromQa">
          Audit
        </button>
      </div>
    </div>

    <!-- Intro CTA -->
    <div v-else-if="phase === 'intro'" class="border-t border-navy-900/10 pt-3 flex-shrink-0">
      <button type="button" class="btn-primary w-full text-sm py-2.5" @click="beginIntentStep">
        Start
      </button>
    </div>

    <!-- Composer -->
    <div v-else-if="phase === 'chat'" class="border-t border-navy-900/10 pt-3 flex-shrink-0 space-y-2">
      <!-- Text steps -->
      <template v-if="textStepKinds.has(step.kind)">
        <label v-if="step.label" :for="inputId" class="font-sans text-navy-900/60 text-[10px] font-semibold uppercase tracking-wider block mb-1">
          {{ step.label }}
        </label>
        <div class="flex flex-col sm:flex-row gap-2">
          <input
            :id="inputId"
            v-model="draft"
            :type="step.inputType || 'text'"
            class="flex-1 px-3 py-2 font-sans text-navy-900 bg-transparent border border-navy-900/20 focus:border-gold-500 focus:outline-none text-sm"
            :placeholder="step.placeholder"
            :autocomplete="step.autocomplete"
            @keydown.enter.prevent="submitTextStep"
          />
          <div class="flex gap-2">
            <button
              v-if="step.optional"
              type="button"
              class="btn-ghost flex-1 sm:flex-none text-xs py-2 px-3"
              @click="skipTextStep"
            >
              Skip
            </button>
            <button type="button" class="btn-primary flex-1 sm:flex-none text-xs py-2 px-4" @click="submitTextStep">
              Next
            </button>
          </div>
        </div>
      </template>

      <!-- Firm type chips -->
      <template v-else-if="step.kind === 'firmType'">
        <div class="grid grid-cols-1 xs:grid-cols-2 gap-1.5">
          <button
            v-for="opt in firmTypeOptions"
            :key="opt.value"
            type="button"
            class="text-left px-2.5 py-2 border text-xs font-sans transition-colors leading-snug"
            :class="form.firmType === opt.value ? 'border-gold-500 bg-gold-500/5 text-navy-900' : 'border-navy-900/20 text-navy-900 hover:border-navy-900/40'"
            @click="selectFirmType(opt)"
          >
            {{ opt.label }}
          </button>
        </div>
      </template>

      <!-- Services multi -->
      <template v-else-if="step.kind === 'services'">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2">
          <button
            v-for="s in serviceOptions"
            :key="s.id"
            type="button"
            class="text-left px-2.5 py-2 border text-xs font-semibold font-sans transition-colors"
            :class="form.services.includes(s.id) ? 'border-gold-500 bg-gold-500/5' : 'border-navy-900/20 hover:border-navy-900/40'"
            @click="toggleService(s.id)"
          >
            {{ s.label }}
          </button>
        </div>
        <button type="button" class="btn-primary w-full text-sm py-2.5" @click="finishServices">Next</button>
      </template>

      <!-- Consent + submit -->
      <template v-else-if="step.kind === 'consent'">
        <div class="flex items-start gap-2">
          <input
            :id="consentId"
            v-model="form.consent"
            type="checkbox"
            class="mt-0.5 accent-gold-500 flex-shrink-0"
          />
          <label :for="consentId" class="font-sans text-charcoal-500 text-[11px] leading-snug cursor-pointer">
            I agree to the
            <a href="/privacy-policy" class="text-gold-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </label>
        </div>
        <div v-if="submitError" class="bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-xs font-sans" role="alert">
          {{ submitError }}
        </div>
        <button
          type="button"
          class="btn-primary w-full text-sm py-2.5"
          :disabled="!form.consent || isSubmitting"
          @click="submitEnquiry"
        >
          <span v-if="isSubmitting">…</span>
          <span v-else>Send</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { KNOWLEDGE_TOPICS, matchKnowledge } from '@/composables/useContactChatKnowledge.js'

const props = defineProps({
  variant: {
    type: String,
    default: 'page',
    validator: (v) => ['page', 'floating'].includes(v),
  },
  instanceId: {
    type: String,
    default: 'page',
  },
  /** POST body `source` for api/contact.js (e.g. chat vs chat_float) */
  submitSource: {
    type: String,
    default: 'chat',
    validator: (v) => ['chat', 'chat_float'].includes(v),
  },
})

const scrollRef = ref(null)
const messages = ref([])
/** intro → intent (what first?) → qa (optional) → chat (intake) → done */
const phase = ref('intro')
const stepIndex = ref(0)
const draft = ref('')
const qaDraft = ref('')
const isTyping = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')
const websiteTrap = ref('')

const intentChoice = ref(null)
/** direct: user chose audit first; via_qa: explored then audit */
const leadPath = ref('direct')

const discussedTopicLabels = ref([])

const intentOptions = [
  { id: 'services', title: 'Questions' },
  { id: 'audit', title: 'Free audit' },
  { id: 'general', title: 'Other' },
]

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  firmName: '',
  firmType: '',
  website: '',
  services: [],
  message: '',
  consent: false,
})

const trapId = computed(() => `chatWebsiteTrap-${props.instanceId}`)
const consentId = computed(() => `chatConsent-${props.instanceId}`)
const inputId = computed(() => `contact-chat-input-${props.instanceId}`)
const qaInputId = computed(() => `contact-chat-qa-${props.instanceId}`)

const serviceOptions = [
  { id: 'waas', label: 'Website as a Service' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'compliance', label: 'Compliance' },
]

const firmTypeOptions = [
  { value: 'accounting', label: 'Accounting Firm (CA/CPA)' },
  { value: 'bookkeeping', label: 'Bookkeeping Practice' },
  { value: 'tax', label: 'Tax Advisory' },
  { value: 'financial-advisory', label: 'Financial Advisory / IFA' },
  { value: 'wealth', label: 'Wealth Management' },
  { value: 'compliance', label: 'Compliance / Risk' },
  { value: 'other', label: 'Other Financial Services' },
]

const steps = [
  { kind: 'fullName', label: 'Name', placeholder: 'Jane Doe', autocomplete: 'name' },
  { kind: 'email', label: 'Email', placeholder: 'you@firm.com', inputType: 'email', autocomplete: 'email' },
  { kind: 'phone', label: 'Phone', placeholder: 'Optional', optional: true, inputType: 'tel', autocomplete: 'tel' },
  { kind: 'firmName', label: 'Firm', placeholder: 'Firm name', autocomplete: 'organization' },
  { kind: 'firmType' },
  { kind: 'website', label: 'Website', placeholder: 'https://…', optional: true, inputType: 'url', autocomplete: 'url' },
  { kind: 'services' },
  { kind: 'consent' },
]

const textStepKinds = new Set(['fullName', 'email', 'phone', 'firmName', 'website'])

const step = computed(() => steps[stepIndex.value] || { kind: 'consent' })

const contactSubmitUrl =
  import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || '/api/contact'

function scrollToBottom() {
  nextTick(() => {
    const el = scrollRef.value
    if (el) el.scrollTop = el.scrollHeight
  })
}

function pushBot(text) {
  messages.value.push({ role: 'bot', text })
  scrollToBottom()
}

function pushUser(text) {
  messages.value.push({ role: 'user', text })
  scrollToBottom()
}

async function withTyping(fn, delayMs = 90) {
  if (delayMs <= 0) {
    fn()
    scrollToBottom()
    return
  }
  isTyping.value = true
  scrollToBottom()
  await new Promise((r) => setTimeout(r, delayMs))
  isTyping.value = false
  fn()
  scrollToBottom()
}

function recordDiscussedFromMatch(matchedIds) {
  for (const id of matchedIds) {
    const t = KNOWLEDGE_TOPICS.find((x) => x.id === id)
    if (t && !discussedTopicLabels.value.includes(t.label)) discussedTopicLabels.value.push(t.label)
  }
}

function beginIntentStep() {
  phase.value = 'intent'
}

function selectIntent(id) {
  const opt = intentOptions.find((o) => o.id === id)
  if (!opt) return
  pushUser(opt.title)
  intentChoice.value = id === 'services' ? 'services' : id === 'audit' ? 'audit' : 'general'

  if (id === 'audit') {
    leadPath.value = 'direct'
    startIntake()
    return
  }

  leadPath.value = 'qa'
  phase.value = 'qa'
  qaDraft.value = ''
}

function answerTopic(topicId) {
  const topic = KNOWLEDGE_TOPICS.find((t) => t.id === topicId)
  if (!topic) return
  pushUser(topic.label)
  const { answer, matchedIds } = matchKnowledge('', topicId)
  recordDiscussedFromMatch(matchedIds)
  withTyping(() => pushBot(answer), 60)
}

function submitQaQuestion() {
  const text = qaDraft.value.trim()
  if (!text) return
  pushUser(text)
  qaDraft.value = ''
  const { answer, matchedIds } = matchKnowledge(text)
  recordDiscussedFromMatch(matchedIds)
  withTyping(() => pushBot(answer), 60)
}

function goToAuditFromQa() {
  pushUser('Audit')
  leadPath.value = 'via_qa'
  startIntake()
}

function startIntake() {
  phase.value = 'chat'
  stepIndex.value = 0
  draft.value = ''
  prefillServicesFromDiscussed()
  pushBot('Name?')
}

function prefillServicesFromDiscussed() {
  const map = {
    waas: 'waas',
    portals: 'workflow',
    workflow: 'workflow',
    compliance: 'compliance',
  }
  for (const label of discussedTopicLabels.value) {
    const topic = KNOWLEDGE_TOPICS.find((t) => t.label === label)
    if (!topic) continue
    const sid = map[topic.id]
    if (sid && !form.value.services.includes(sid)) form.value.services.push(sid)
  }
}

function buildTranscriptForEmail() {
  const intentLine =
    intentChoice.value === 'audit'
      ? 'Started with: free website audit'
      : intentChoice.value === 'services'
        ? 'Started with: learn about services'
        : intentChoice.value === 'general'
          ? 'Started with: general / unsure'
          : 'Started with: (not recorded)'

  const pathLine =
    leadPath.value === 'via_qa'
      ? 'Path: explored Q&A, then requested a free audit.'
      : 'Path: straight to audit intake.'

  const topicsLine =
    discussedTopicLabels.value.length > 0
      ? `Assistant topics used: ${discussedTopicLabels.value.join('; ')}`
      : null

  const userNote = form.value.message.trim()
  const noteLine = userNote ? `Notes: ${userNote}` : null

  return [intentLine, pathLine, topicsLine, noteLine].filter(Boolean).join('\n')
}

function advanceStep() {
  if (stepIndex.value < steps.length - 1) {
    stepIndex.value++
    draft.value = ''
    const s = steps[stepIndex.value]
    const prompts = {
      email: 'Email?',
      phone: 'Phone? (optional)',
      firmName: 'Firm name?',
      firmType: 'Practice type?',
      website: 'Website URL? (optional)',
      services: 'Services?',
      consent: 'Tick Privacy Policy to send.',
    }
    if (s.kind === 'firmType') pushBot(prompts.firmType)
    else if (s.kind === 'services') pushBot(prompts.services)
    else if (s.kind === 'consent') pushBot(prompts.consent)
    else if (prompts[s.kind]) pushBot(prompts[s.kind])
  }
}

function submitTextStep() {
  const s = step.value
  const v = draft.value.trim()
  if (!s.optional && !v) return
  if (s.kind === 'email' && v) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return
  }

  if (s.kind === 'fullName') {
    const parts = v.split(/\s+/).filter(Boolean)
    if (!parts.length) return
    form.value.firstName = parts[0]
    form.value.lastName = parts.length > 1 ? parts.slice(1).join(' ') : ''
  }
  if (s.kind === 'email') form.value.email = v
  if (s.kind === 'phone') form.value.phone = v
  if (s.kind === 'firmName') form.value.firmName = v
  if (s.kind === 'website') {
    if (!v) form.value.website = ''
    else {
      try {
        form.value.website = new URL(v.startsWith('http') ? v : `https://${v}`).href
      } catch {
        return
      }
    }
  }

  pushUser(v || '(skipped)')
  advanceStep()
}

function skipTextStep() {
  const s = step.value
  if (!s.optional) return
  if (s.kind === 'phone') form.value.phone = ''
  if (s.kind === 'website') form.value.website = ''
  pushUser('Skip')
  advanceStep()
}

function selectFirmType(opt) {
  form.value.firmType = opt.value
  pushUser(opt.label)
  advanceStep()
}

function toggleService(id) {
  const arr = form.value.services
  const i = arr.indexOf(id)
  if (i === -1) arr.push(id)
  else arr.splice(i, 1)
}

function finishServices() {
  const labels = serviceOptions.filter((s) => form.value.services.includes(s.id)).map((s) => s.label)
  pushUser(labels.length ? labels.join(', ') : 'General')
  advanceStep()
}

async function submitEnquiry() {
  if (!form.value.consent) return
  if (websiteTrap.value) return
  submitError.value = ''
  isSubmitting.value = true
  try {
    const res = await fetch(contactSubmitUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        phone: form.value.phone,
        firmName: form.value.firmName,
        firmType: form.value.firmType,
        website: form.value.website,
        services: form.value.services,
        message: buildTranscriptForEmail(),
        websiteTrap: websiteTrap.value,
        source: props.submitSource,
      }),
    })
    const result = await res.json()
    if (result.success) {
      if (typeof window.gtag === 'function' && window.__zmgAnalyticsConsentGranted === true) {
        const method = props.submitSource === 'chat_float' ? 'contact_chat_float' : 'contact_chat'
        window.gtag('event', 'generate_lead', {
          method,
          page_path: window.location.pathname,
        })
        window.gtag('event', 'ads_conversion_Submit_lead_form_1', {
          method,
          page_path: window.location.pathname,
        })
      }
      phase.value = 'done'
    } else {
      submitError.value = result.message || 'Something went wrong. Please try again or email us directly.'
    }
  } catch {
    submitError.value = 'Could not reach the server. Please try again or email info@zarmediagroup.com.'
  } finally {
    isSubmitting.value = false
  }
}

watch(messages, () => scrollToBottom(), { deep: true })

onMounted(() => {
  pushBot('Hi — questions or a free audit? Tap Start.')
  phase.value = 'intro'
})
</script>
