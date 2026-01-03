
import { Article, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Intelligence', href: '#' },
  { label: 'Web3', href: '#' },
  { label: 'Infrastructure', href: '#' },
  { label: 'Hardware', href: '#' },
  { label: 'SaaS', href: '#' },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Silicon Singularity: Why 2025 is the Last Year of Human Coding',
    excerpt: 'As LLMs evolve into specialized agentic architectures, the traditional role of a software engineer is undergoing a radical metamorphosis.',
    author: 'Elena Vance',
    date: 'Oct 14, 2024',
    category: 'AI',
    image: 'https://picsum.photos/800/600?random=1',
    readTime: '8 min',
  },
  {
    id: '2',
    title: 'DeFi 3.0: The Institutional Adoption of Liquid Staking Derivatives',
    excerpt: 'Major banking conglomerates are finally looking at Ethereum’s yield-bearing layers as a viable alternative to traditional treasury bonds.',
    author: 'Marcus Thorne',
    date: 'Oct 12, 2024',
    category: 'Blockchain',
    image: 'https://picsum.photos/800/600?random=2',
    readTime: '12 min',
  },
  {
    id: '3',
    title: 'Zero-Knowledge Proofs are Solving the SaaS Privacy Paradox',
    excerpt: 'How ZK-rollups are enabling a new generation of privacy-first cloud applications that never store unencrypted user data.',
    author: 'Sarah Chen',
    date: 'Oct 11, 2024',
    category: 'SaaS',
    image: 'https://picsum.photos/800/600?random=3',
    readTime: '6 min',
  },
  {
    id: '4',
    title: 'Quantum Advantage: IBM’s Heron Processor Changes Everything',
    excerpt: 'The leap from 433 to 1,000+ qubits isn’t just incremental—it’s the dawn of a new era in molecular modeling and cryptography.',
    author: 'David Wu',
    date: 'Oct 10, 2024',
    category: 'FutureTech',
    image: 'https://picsum.photos/800/600?random=4',
    readTime: '15 min',
  },
  {
    id: '5',
    title: 'The Rise of Sovereign AI: Why Nations are Building Their Own LLMs',
    excerpt: 'Data sovereignty has moved from a policy concern to a national security priority as countries race to localize computational intelligence.',
    author: 'Anita Ray',
    date: 'Oct 09, 2024',
    category: 'AI',
    image: 'https://picsum.photos/800/600?random=5',
    readTime: '10 min',
  },
  {
    id: '6',
    title: 'The Death of the Dashboard: How Generative UI is Reshaping UX',
    excerpt: 'Static interfaces are being replaced by dynamic, intent-based views that assemble themselves based on real-time user needs.',
    author: 'Liam Frost',
    date: 'Oct 08, 2024',
    category: 'SaaS',
    image: 'https://picsum.photos/800/600?random=6',
    readTime: '7 min',
  },
];

export const FILLER_TEXT = {
  ai_trends: `
    The trajectory of Artificial Intelligence in the mid-2020s is characterized by a shift from broad generative capabilities to specialized, high-reliability autonomous agents. While the initial wave of LLM excitement focused on chat interfaces, the current frontier lies in agentic workflows where models can plan, use tools, and correct their own errors across long time horizons. This evolution is fundamentally changing the SaaS landscape. Instead of tools that require manual input, we are seeing the rise of "Self-Operating Systems" where the user provides an objective, and the AI manages the sub-tasks across various API boundaries.

    Technically, the move toward Retrieval-Augmented Generation (RAG) and long-context windows (exceeding 1M tokens) has mitigated many of the hallucination issues that plagued early iterations. Large-scale models are no longer just probabilistic text generators; they are becoming the reasoning engines for complex enterprise logic. However, the energy consumption required for these massive deployments has sparked a renewed interest in "Small Language Models" (SLMs). These models, often under 10B parameters, are trained on high-quality, curated datasets and can run locally on consumer-grade hardware, providing a blend of performance and privacy that enterprises crave.

    Furthermore, the intersection of AI and robotics is beginning to yield fruit in the physical world. Foundation models for motor control are allowing robots to learn tasks through imitation and reinforcement learning in simulation, drastically reducing the time needed to deploy automation in logistics and manufacturing. This convergence suggests that the "Intelligence" part of AI is finally gaining the "Body" it needs to impact the physical economy directly.
  `,
  blockchain: `
    Blockchain technology has matured past the speculative hype cycles of the previous decade into a foundational layer for digital trust and value transfer. The focus has pivoted toward scalability through Layer 2 (L2) and Layer 3 (L3) solutions. These modular blockchains separate the functions of execution, settlement, and data availability, allowing for thousands of transactions per second while maintaining the security of the underlying base layer, such as Ethereum.

    Decentralized Finance (DeFi) is seeing a resurgence through the tokenization of Real-World Assets (RWAs). Treasury bills, real estate, and carbon credits are being brought on-chain, providing deep liquidity and transparent tracking for assets that were previously siloed in legacy systems. This institutional adoption is being facilitated by standardized protocols that bridge the gap between regulatory compliance and permissionless technology.

    Simultaneously, the concept of Decentralized Identity (DID) is becoming crucial as AI-generated content makes online verification harder. Cryptographic proofs of personhood and verifiable credentials allow users to own their data and reputation without relying on centralized tech giants. This shift toward a "User-Owned Internet" (Web3) is not just about financial gain; it is about rebuilding the social contract of the web in a way that prioritizes transparency and autonomy.
  `,
  future_outlook: `
    Looking ahead, the synergy between AI, Blockchain, and Quantum Computing will define the next industrial revolution. Quantum-resistant cryptography is already being integrated into blockchain protocols to safeguard against the theoretical capabilities of future quantum computers. Meanwhile, AI is being used to optimize blockchain networks, predicting congestion and dynamically adjusting gas fees.

    The economic impact of these technologies is projected to be in the tens of trillions. As automation replaces routine cognitive tasks, the value of unique human creativity and verified data will skyrocket. Companies that successfully navigate this "Triple Threat" of innovation—AI for intelligence, Blockchain for trust, and SaaS for delivery—will be the undisputed leaders of the next decade. 
    
    The transition will not be without friction. Ethical considerations regarding data privacy, algorithmic bias, and energy efficiency are at the forefront of global discourse. Regulators are racing to keep pace with the speed of innovation, attempting to create frameworks that protect consumers without stifling the creative destruction that drives progress. Ultimately, the future of technology is not just about faster processors or larger datasets; it is about creating systems that amplify human potential while safeguarding our fundamental values.
  `
};
