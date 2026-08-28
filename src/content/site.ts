export const links = {
  github: 'https://github.com/SimranPabla',
  linkedin: 'https://www.linkedin.com/in/simranjit-singh-pabla/',
  email: 'mailto:singhsimranjit9192@gmail.com',
  resume: '/Simranjit-Singh-Resume.pdf',
  openclawPr: 'https://github.com/openclaw/openclaw/pull/111534',
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  status: string;
  stack: string[];
  problem: string;
  architecture: string[];
  decisions: string[];
  boundaries: string[];
  evidence: { label: string; value: string }[];
  source?: string;
};

const pinnedProjectOrder = ['agent-integrity', 'arc', 'cyberflow', 'packet-sniffer', 'videogen'];

export const projects: Project[] = [
  {
    slug: 'agent-integrity',
    name: 'Agent Integrity',
    eyebrow: 'Verifiable AI · release control',
    summary: 'A deterministic release-control engine that checks AI responses against recorded evidence, decisions, and signed receipts before release.',
    status: 'Public alpha v0.1.0-alpha.2; source installation is available while npm publication remains pending.',
    stack: ['TypeScript', 'Node.js', 'JSON Schema', 'Ed25519'],
    problem: 'Agent applications often let the same model gather evidence, interpret policy, write an answer, and declare its own work valid. That makes unsupported claims, hidden contradictions, stale receipts, and post-verification response changes difficult to catch reliably.',
    architecture: ['Trusted policy', 'Source collection', 'Claim + evidence envelope', 'Deterministic verifier', 'PASS / REVIEW / BLOCKED', 'Exact response release'],
    decisions: [
      'Keep verification deterministic and independent of model-provider judgment.',
      'Bind evidence, decisions, and response sections to exact bytes and digests.',
      'Fail closed when input is malformed, verification fails, or released bytes change.',
      'Authenticate producer receipts and enforce atomic single-use consumption on one protected host filesystem.',
    ],
    boundaries: [
      'A PASS proves configured consistency and tamper-resistance checks passed; it does not prove objective truth, safety, or correctness.',
      'The verifier checks declared dependencies and cannot infer evidence or decisions the application omitted.',
      'The current alpha is tested for server-side Node.js and is not published to npm yet.',
    ],
    evidence: [
      { label: 'Outcomes', value: 'PASS · REVIEW · BLOCKED' },
      { label: 'Release', value: 'Exact checked bytes only' },
      { label: 'Receipts', value: 'Ed25519 authenticated' },
      { label: 'Status', value: 'Public alpha' },
    ],
    source: 'https://github.com/SimranPabla/agent-integrity',
  },
  {
    slug: 'arc',
    name: 'Agent Review Control',
    eyebrow: 'AI agent reliability · AI security',
    summary: 'The public Contract + Evidence + Verdict architecture for controlling and reviewing AI coding-agent work.',
    status: 'Public architecture and dogfood evidence; active deterministic implementation remains private.',
    stack: ['TypeScript', 'Node.js', 'GitHub', 'GitLab', 'JSON Schema'],
    problem: 'Coding agents can execute successfully while drifting from the approved assignment or presenting evidence that does not belong to the exact change under review.',
    architecture: ['Frozen contract', 'Execution controls', 'Bound evidence', 'Independent verification', 'Trust Brief', 'Human approval'],
    decisions: [
      'Freeze approved intent and boundaries before implementation begins.',
      'Treat agent claims as untrusted until supported by attributable evidence.',
      'Keep verification independent from the agent that produced the work.',
      'Track evidence through pending, current, stale, and refreshed lifecycle states.',
    ],
    boundaries: [
      'ARC does not prove code correctness, safety, or semantic truth.',
      'Private doctrine, customer evidence, operational controls, and source remain private.',
      'CI, security tools, human review, and ARC evaluate different properties.',
    ],
    evidence: [
      { label: 'Contract', value: 'Frozen before work' },
      { label: 'Evidence', value: 'Bound to exact change' },
      { label: 'Verification', value: 'Independent and fail-closed' },
      { label: 'Decision', value: 'Human-controlled' },
    ],
    source: 'https://github.com/SimranPabla/agent-review-control',
  },
  {
    slug: 'cyberflow',
    name: 'CyberFlow Sentinel',
    eyebrow: 'Automation · APIs · structured data',
    summary: 'A cybersecurity media platform that processes 50+ articles a day. Content produced through the system reaches about 10,000 weekly viewers.',
    status: 'Founder-built production system, operated since 2023; public repository excludes credentials and production configuration.',
    stack: ['n8n', 'Python', 'REST APIs', 'Docker', 'Linux', 'Airtable'],
    problem: 'Publishing cybersecurity coverage across multiple channels was slow and fragile when collection, deduplication, transformation, media generation, and distribution depended on manual work and multiple external services.',
    architecture: ['Source ingestion', 'Extraction', 'Filtering', 'Deduplication', 'Structured state', 'AI processing', 'Media API', 'Publishing'],
    decisions: [
      'Keep workflow stages modular so failures can be isolated and retried.',
      'Store external state explicitly instead of relying on workflow memory.',
      'Use status fields and deduplication to make repeated schedules safe.',
      'Keep provider credentials and production configuration outside the public repository.',
    ],
    boundaries: [
      'Throughput, time-saving, and audience figures come from internal operating records and platform analytics; they have not been independently audited.',
      'External APIs introduce rate limits, schema changes, and partial-failure modes.',
      'The public repository is not a copy of private production configuration.',
    ],
    evidence: [
      { label: 'Throughput', value: '50+ articles / day' },
      { label: 'Manual work', value: '≈90% reduction' },
      { label: 'Audience', value: '≈10,000 weekly viewers' },
      { label: 'Operations', value: '2023 — present' },
    ],
    source: 'https://github.com/SimranPabla/cyberflow-sentinel',
  },
  {
    slug: 'videogen',
    name: 'VideoGen Pro',
    eyebrow: 'Backend · media processing',
    summary: 'A Flask application that combines browser-managed assets, Whisper transcription, background rendering, and live progress reporting.',
    status: 'Single-process prototype with explicit deployment limitations.',
    stack: ['Python', 'Flask', 'Whisper', 'MoviePy', 'FFmpeg', 'SSE'],
    problem: 'Media rendering is too slow for a request path and requires careful handling of uploads, session ownership, progress, and temporary assets.',
    architecture: ['Browser upload', 'Flask session', 'Whisper', 'Background render', 'FFmpeg encoding', 'In-memory progress', 'SSE update'],
    decisions: [
      'Move rendering out of the request path into background work.',
      'Use Server-Sent Events for one-way progress updates.',
      'Associate temporary assets with the initiating session.',
      'Use unique temporary paths to reduce cross-job collisions.',
    ],
    boundaries: [
      'In-memory job state limits the app to one process.',
      'A durable queue and shared state store are required for horizontal scaling.',
      'This is a prototype, not a production media service.',
    ],
    evidence: [
      { label: 'Rendering', value: 'Background thread' },
      { label: 'Progress', value: 'Server-Sent Events' },
      { label: 'Transcription', value: 'Whisper' },
      { label: 'State', value: 'In-memory' },
    ],
    source: 'https://github.com/SimranPabla/VideoGen-Pro',
  },
  {
    slug: 'packet-sniffer',
    name: 'Packet Sniffer',
    eyebrow: 'Python · networking · security',
    summary: 'A Python and Scapy packet-analysis CLI with BPF filtering, protocol inspection, detailed views, and PCAP export.',
    status: 'Public learning project with terminal and text output.',
    stack: ['Python', 'Scapy', 'BPF', 'TCP/IP'],
    problem: 'Network debugging requires a focused way to capture relevant traffic and move between quick summaries and packet-level detail.',
    architecture: ['Network interface', 'Scapy capture', 'BPF filter', 'Packet callback', 'Protocol inspection', 'Terminal, text, or PCAP'],
    decisions: [
      'Use BPF filtering at capture time to reduce irrelevant traffic.',
      'Support both compact summaries and detailed inspection.',
      'Write incrementally to text when persistent output is requested.',
      'Document privilege and responsible-use requirements.',
    ],
    boundaries: [
      'Packet capture and PCAP export require authorization on the network being inspected and may require elevated privileges.',
      'Encrypted payloads remain encrypted; this tool does not bypass transport security.',
    ],
    evidence: [
      { label: 'Capture', value: 'Live interface' },
      { label: 'Filtering', value: 'BPF' },
      { label: 'Views', value: 'Summary and detail' },
      { label: 'Output', value: 'Terminal or text' },
    ],
    source: 'https://github.com/SimranPabla/Packet-Sniffer',
  },
].sort((a, b) => pinnedProjectOrder.indexOf(a.slug) - pinnedProjectOrder.indexOf(b.slug));

export const routes = ['', 'work', ...projects.map((project) => `work/${project.slug}`), 'open-source', 'about', 'resume', 'contact'];
