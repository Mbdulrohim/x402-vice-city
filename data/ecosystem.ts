export interface EcosystemProject {
  id: string;
  name: string;
  description: string;
  category: "facilitator" | "service" | "infrastructure" | "integration";
  website: string;
  logoPath: string;
}

export const ecosystemProjects: EcosystemProject[] = [
  // Facilitators (9 projects)
  {
    id: "payai",
    name: "PayAI Facilitator",
    description:
      "Accept x402 payments on all networks including Avalanche, Base, Polygon, Sei, Solana, and more! Get started in less than 1 minute. Supports all tokens. No API Keys required.",
    category: "facilitator",
    website: "https://payai.network",
    logoPath: "/logos/facilitators/payai.svg",
  },
  {
    id: "cdp",
    name: "CDP Facilitator",
    description:
      "Best-in-class x402 facilitator. Fee-free USDC settlement on Base Mainnet. KYT/OFAC checks on every transaction.",
    category: "facilitator",
    website: "https://cdp.coinbase.com",
    logoPath: "/logos/facilitators/cdp.png",
  },
  {
    id: "corbits",
    name: "Corbits",
    description:
      "A production grade facilitator which supports multi-network, multi-token, multi-payment schemes.",
    category: "facilitator",
    website: "https://corbits.xyz",
    logoPath: "/logos/facilitators/corbits.png",
  },
  {
    id: "dexter",
    name: "Dexter.cash",
    description:
      "The first publicly available x402 v2 facilitator. Streamlines blockchain payments for APIs and AI agents, supporting multi-chain transactions and gasless payments via EIP-3009.",
    category: "facilitator",
    website: "https://dexter.cash",
    logoPath: "/logos/facilitators/dexter.jpg",
  },
  {
    id: "mogami-facilitator",
    name: "Mogami Facilitator",
    description:
      "A free, developer-focused, production-ready facilitator for x402 payments. Use it instantly online, or launch your own Docker image in seconds.",
    category: "facilitator",
    website: "https://mogami.dev",
    logoPath: "/logos/facilitators/mogami.png",
  },
  {
    id: "openx402",
    name: "OpenX402.ai Facilitator",
    description:
      "The first permissionless, gasless and omnichain x402 facilitator that any x402 server can use without login.",
    category: "facilitator",
    website: "https://openx402.ai",
    logoPath: "/logos/facilitators/openx402.png",
  },
  {
    id: "treasure",
    name: "Treasure Facilitator",
    description:
      "Treasure x402 Facilitator available on Base and Base Sepolia. Supports EIP-3009 compliant tokens including USDC, MAGIC, SMOL, MIO, AI Frens tokens, and more.",
    category: "facilitator",
    website: "https://treasure.lol",
    logoPath: "/logos/facilitators/treasure.png",
  },
  {
    id: "worldfun",
    name: "WorldFun Facilitator",
    description:
      "AWE World.fun's x402 Facilitator enables fee-free EIP-3009 payments in USDC and other ERC-20 tokens, handling verification and settlement on Base.",
    category: "facilitator",
    website: "https://world.fun",
    logoPath: "/logos/facilitators/worldfun.svg",
  },
  {
    id: "x402org",
    name: "x402.org Facilitator",
    description: "Default testnet facilitator for x402.",
    category: "facilitator",
    website: "https://x402.org",
    logoPath: "/logos/facilitators/x402org.png",
  },
  {
    id: "x402rs",
    name: "x402.rs Facilitator",
    description:
      "Independent, open-source facilitator in Rust. Easy to self-host, extend to new networks, or use via our hosted instance.",
    category: "facilitator",
    website: "https://x402.rs",
    logoPath: "/logos/facilitators/x402rs.svg",
  },

  // Services (21 projects)
  {
    id: "aeon",
    name: "AEON",
    description:
      "The omnichain settlement layer that enables AI agents to seamlessly pay millions of real-world merchants across SEA, LATAM, and Africa — powered by x402 and USDC.",
    category: "service",
    website: "https://aeon.xyz",
    logoPath: "/logos/services/aeon.png",
  },
  {
    id: "aimo",
    name: "AiMo Network",
    description:
      "Through a permissionless API, pay-per-inference via x402, and agent-native interface, AiMo Network connects humans, AI agents, and service providers without censorship, borders, or gatekeepers.",
    category: "service",
    website: "https://aimo.net",
    logoPath: "/logos/services/aimo.png",
  },
  {
    id: "aisa",
    name: "AIsa",
    description:
      "A resource marketplace aggregating core assets such as LLMs, data APIs based on the HTTP 402 standard.",
    category: "service",
    website: "https://aisa.io",
    logoPath: "/logos/services/aisa.png",
  },
  {
    id: "aurracloud",
    name: "AurraCloud",
    description:
      "AI agents hosting and Tooling Platform, with MCP, smartWallets, OpenAI API compatibility and X402 support.",
    category: "service",
    website: "https://aurracloud.com",
    logoPath: "/logos/services/aurracloud.png",
  },
  {
    id: "elsa",
    name: "Elsa x402",
    description:
      "DeFi API endpoints with x402 micropayments. Access portfolio data, token prices, swap quotes, wallet analytics, yield suggestions, and more - pay per request with USDC on Base.",
    category: "service",
    website: "https://elsa.finance",
    logoPath: "/logos/services/elsa.png",
  },
  {
    id: "firecrawl",
    name: "Firecrawl",
    description:
      "Firecrawl is a web scraping API that allows you to turn websites into LLM-ready data.",
    category: "service",
    website: "https://firecrawl.dev",
    logoPath: "/logos/services/firecrawl.png",
  },
  {
    id: "gloria",
    name: "Gloria AI",
    description:
      "Gloria is an AI-powered provider of real-time, high-signal, customizable news data to AI agents and agent systems that need structured signals for any use case.",
    category: "service",
    website: "https://gloria.ai",
    logoPath: "/logos/services/gloria.png",
  },
  {
    id: "grove",
    name: "Grove API",
    description:
      "A unified API you can /fund using x402 to /tip anyone on the internet.",
    category: "service",
    website: "https://grove.dev",
    logoPath: "/logos/services/grove.png",
  },
  {
    id: "heurist-research",
    name: "Heurist Deep Research",
    description:
      "The first Web3 native AI research platform powered by x402. Users can pay per-query with USDC to get comprehensive multi-page research reports generated by AI agents.",
    category: "service",
    website: "https://heurist.ai",
    logoPath: "/logos/services/heurist-research.png",
  },
  {
    id: "imagine",
    name: "Imagine",
    description:
      "Coin it once, remix forever. Use our API to generate media using templates.",
    category: "service",
    website: "https://imagine.art",
    logoPath: "/logos/services/imagine.png",
  },
  {
    id: "minifetch",
    name: "Minifetch",
    description:
      "Fetch rich, structured metadata and clean, token-efficient content summaries from web pages with pay-as-you-go micropayments.",
    category: "service",
    website: "https://minifetch.com",
    logoPath: "/logos/services/minifetch.svg",
  },
  {
    id: "neynar",
    name: "Neynar",
    description:
      "Powering social data on Farcaster for agents and humans. Get cast info and more.",
    category: "service",
    website: "https://neynar.com",
    logoPath: "/logos/services/neynar.png",
  },
  {
    id: "onchain",
    name: "Onchain",
    description:
      "Onchain is x402's Intelligent Intermediary Layer for Aggregating Facilitators.",
    category: "service",
    website: "https://onchain.xyz",
    logoPath: "/logos/services/onchain.png",
  },
  {
    id: "otto",
    name: "Otto AI Agent Swarm",
    description:
      "AI-powered crypto intelligence for Agents and Pros. Real-time crypto news, token analysis, market alpha signals, and AI tools via USDC on Base.",
    category: "service",
    website: "https://otto.bot",
    logoPath: "/logos/services/otto.png",
  },
  {
    id: "pinata",
    name: "Pinata",
    description:
      "Account-free IPFS uploads and retrievals using crypto payments, powered by x402. Pay for private or public IPFS storage and retrieval without an account or API key.",
    category: "service",
    website: "https://pinata.cloud",
    logoPath: "/logos/services/pinata.png",
  },
  {
    id: "proofivy",
    name: "Proofivy",
    description:
      "Attestation and x402 paywalled publishing via a WordPress plugin or custom tools for publishers. iPhone app offering attestation and x402 publication for anyone.",
    category: "service",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/services/proofivy.png",
  },
  {
    id: "questflow",
    name: "Questflow",
    description:
      "The orchestration layer for the multi-agent economy. Orchestrate multiple AI agents to research, take action and earn rewards on-chain, autonomously.",
    category: "service",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/services/questflow.png",
  },
  {
    id: "quicksilver",
    name: "QuickSilver",
    description:
      "Quicksilver serves as the bridge between physical systems and AI to foster real-world applications with perception, reasoning, and adaptability.",
    category: "service",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/services/quicksilver.png",
  },
  {
    id: "snack-money",
    name: "Snack Money API",
    description:
      "Micropayment platform for X, Farcaster, baseapp and verifiable identities.",
    category: "service",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/services/snack-money.png",
  },
  {
    id: "tipmd",
    name: "tip.md",
    description:
      "A crypto tipping service that enables AI assistants to help users send cryptocurrency tips to content creators directly from their chat interface.",
    category: "service",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/services/tipmd.png",
  },
  {
    id: "zyte",
    name: "Zyte API",
    description:
      "Zyte API is a unified Web Scraping API for unblocking, browser rendering and extraction.",
    category: "service",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/services/zyte.png",
  },

  // Infrastructure (29 projects) - I'll add the first 15 here, then continue
  {
    id: "0x402ai",
    name: "0x402.ai",
    description:
      "The Premier Cloud Infrastructure for x402. Empowering anyone to become an x402 Facilitator in seconds with dedicated domains and isolated environments.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/0x402ai.png",
  },
  {
    id: "1shot",
    name: "1Shot API",
    description:
      "A general purpose facilitator to monetize any n8n workflow with your favorite ERC-20 token.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/1shot.png",
  },
  {
    id: "402104",
    name: "402104",
    description:
      "Generate expirable, paywalled links to private ANS-104 DataItems on Arweave. Compatible with both S3 and ANS-104 data standards.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/402104.png",
  },
  {
    id: "altlayer",
    name: "AltLayer",
    description:
      "AltLayer provides an x402 suite including x402 gateway, facilitator, decentralized agent hosting autonome, etc.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/altlayer.png",
  },
  {
    id: "cascade",
    name: "Cascade",
    description:
      "Revenue distribution infrastructure for Solana and Base. Split payments between contributors, partners, and platforms.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/cascade.png",
  },
  {
    id: "codenut",
    name: "CodeNut",
    description:
      "A Web3 vibe-coding platform for building and deploying x402-enabled applications and agents.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/codenut.png",
  },
  {
    id: "dapplooker",
    name: "DappLooker AI",
    description:
      "DappLooker offers unified on-chain and market intelligence APIs with native x402 support, enabling seamless crypto-based pay-per-call access for agents, bots, and apps.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/dapplooker.png",
  },
  {
    id: "daydreams",
    name: "Daydreams Router",
    description:
      "Daydreams router provides x402 enabled LLM inference for agents and applications. All major providers are supported. Build the future of nanoservices.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/daydreams.png",
  },
  {
    id: "faremeter",
    name: "Faremeter",
    description:
      "A lightweight OSS x402 framework powered by client-, middleware-, and server-side plugins ensuring maximum composability and extensibility.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/faremeter.png",
  },
  {
    id: "fluora",
    name: "Fluora",
    description:
      "Fluora is a MonetizedMCP marketplace, enabling AI agents to autonomously find and purchase services. Payments are powered by x402.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/fluora.png",
  },
  {
    id: "fluxa",
    name: "FluxA",
    description:
      "FluxA provides permissionless deferred payment rails for x402. It enables fast, parallel stablecoin micropayments with on-chain batch settlement.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/fluxa.png",
  },
  {
    id: "heurist-mesh",
    name: "Heurist Mesh",
    description:
      "Heurist Mesh provides a library of composable crypto skills for any AI agent with full support for MCP and the X402 payment standard.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/heurist-mesh.png",
  },
  {
    id: "latinum",
    name: "Latinum Agentic Commerce",
    description:
      "An open-source MCP wallet and facilitator that agents can use to pay 402 payment requests.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/latinum.png",
  },
  {
    id: "mcp-server",
    name: "MCP Server Example",
    description:
      "A reference implementation MCP server and wallet to call x402 endpoints. Explore the code and run your own server.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/mcp-server.png",
  },
  {
    id: "mcpay",
    name: "MCPay",
    description: "Build and monetize MCP servers.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/mcpay.png",
  },
  {
    id: "meridian",
    name: "Meridian",
    description: "Multi-chain facilitator with developer-first features.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/meridian.png",
  },
  {
    id: "meson",
    name: "Meson x402",
    description:
      "Chrome extension to connect EVM & Solana wallets, test x402 interfaces, perform payments, and generate X Payment Headers.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/meson.png",
  },
  {
    id: "mogami-java",
    name: "Mogami Java Server SDK",
    description:
      "The Mogami Java Server SDK lets you turn any endpoint of your spring application into a pay-per-call API using the x402 protocol.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/mogami-java.png",
  },
  {
    id: "node-servers",
    name: "Node Servers",
    description:
      "Reference x402 server implementations in Node.js using Hono and Express, plus an advanced example with dynamic pricing and complex logic.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/node-servers.png",
  },
  {
    id: "proxy402",
    name: "Proxy402",
    description:
      "Turn your URLs into paid content. Set a price, share your link, and collect payments instantly.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/proxy402.png",
  },
  {
    id: "x402-secure",
    name: "x402-secure",
    description:
      "Real-time risk control for AI-driven x402 payments. Specifically designed for transactions involving autonomous AI agents.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/x402-secure.jpg",
  },
  {
    id: "thirdweb-infra",
    name: "thirdweb",
    description:
      "Server side TypeScript SDK and facilitator HTTP API supporting 170+ chains and 4000+ tokens.",
    category: "infrastructure",
    website: "https://thirdweb.com",
    logoPath: "/logos/infrastructure/thirdweb.png",
  },
  {
    id: "tokenmesa",
    name: "TokenMesa",
    description:
      "Tokenmesa helps businesses launch service backed token based on x402. Allowing users to pay through x402 with any token and auto convert to service token.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/tokenmesa.png",
  },
  {
    id: "x402-kit",
    name: "X402 Kit",
    description:
      "A fully modular Rust SDK for building complex X402 payment integrations.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/x402-kit.png",
  },
  {
    id: "x402-market",
    name: "x402 Market",
    description:
      "A Permissionless Launchpad for x402-Enabled Services, Powered by the AWE Network.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/x402-market.svg",
  },
  {
    id: "x402list",
    name: "x402list.fun",
    description:
      "Discover and analyze the x402 services ecosystem. Search paid API providers by category, compare pricing and transaction volume.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/x402list.png",
  },
  {
    id: "x402scan",
    name: "x402scan",
    description: "An ecosystem explorer for x402 resources and analytics.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/x402scan.png",
  },
  {
    id: "x402station",
    name: "x402station",
    description:
      "Leading x402 analytics platform with advanced UI for monitoring x402 services.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/x402station.png",
  },
  {
    id: "zkstash",
    name: "zkStash",
    description:
      "zkStash is the permissionless Shared Memory Layer for the Agentic Economy. Give your Agents infinite, intelligent memory with native x402 payment support.",
    category: "infrastructure",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/infrastructure/zkstash.png",
  },

  // Integrations (9 projects)
  {
    id: "axios-fetch",
    name: "Axios & Fetch Clients",
    description:
      "Reference TypeScript clients for x402 using both Axios and Fetch. Easily integrate x402 payments into your own applications.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/axios-fetch.png",
  },
  {
    id: "ekai",
    name: "Ekai Labs",
    description:
      "Ekai is the universal context layer for your AI. Keep your context portable, persistent and yours, even when you switch between LLM models. Pay for inference using x402.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/ekai.png",
  },
  {
    id: "genbase",
    name: "Genbase",
    description: "Next-gen AI video platform with X402.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/genbase.png",
  },
  {
    id: "mogami-java-client",
    name: "Mogami Java Client SDK",
    description:
      "The Mogami Java Client SDK makes it easy to bring x402 payments into your Java application.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/mogami-java-client.png",
  },
  {
    id: "nuwa",
    name: "Nuwa AI",
    description:
      "Nuwa AI introduces xNUWA, a user-friendly AI client that connects you to x402-compatible AI services.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/nuwa.png",
  },
  {
    id: "subnano",
    name: "Subnano",
    description:
      "Subnano is a micropayment content platform enabling creators to earn instantly — readers pay with fee-less Nano (XNO) for what they actually read.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/subnano.png",
  },
  {
    id: "thirdweb-client",
    name: "thirdweb Client SDK",
    description:
      "Client side TypeScript SDK and HTTP API to pay for any x402 compatible endpoint from your apps or agents.",
    category: "integration",
    website: "https://thirdweb.com",
    logoPath: "/logos/integrations/thirdweb-client.png",
  },
  {
    id: "ai-frens",
    name: "AI Frens by Treasure",
    description:
      "AI Frens lets anyone launch an x402-compatible AI character token and grow it with a community.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/ai-frens.png",
  },
  {
    id: "tweazy",
    name: "Tweazy",
    description:
      "The best way to read tweets onchain. Powered by x402, MCP & CDP Smart Wallets.",
    category: "integration",
    website: "https://x402.org/ecosystem",
    logoPath: "/logos/integrations/tweazy.png",
  },
];

// Helper functions to get projects by category
export const getFacilitators = () =>
  ecosystemProjects.filter((p) => p.category === "facilitator");

export const getServices = () =>
  ecosystemProjects.filter((p) => p.category === "service");

export const getInfrastructure = () =>
  ecosystemProjects.filter((p) => p.category === "infrastructure");

export const getIntegrations = () =>
  ecosystemProjects.filter((p) => p.category === "integration");

export const getProjectById = (id: string) =>
  ecosystemProjects.find((p) => p.id === id);
