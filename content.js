window.OCTAVE_NAV = [
  { title: "Connected Customer Vision", href: "index.html", group: "Overview" },
  { title: "Journey", href: "journey.html", group: "Overview" },
  { title: "The Coworker Moment — What Does This Customer Actually Own?", href: "vignette-1.html", group: "Vignettes" },
  { title: "The Methodology That Fills Itself In", href: "vignette-2.html", group: "Vignettes" },
  { title: "The Deal That Showed Its Hand Early", href: "vignette-3.html", group: "Vignettes" },
  { title: "The Cross-Sell Motion That Found Itself", href: "vignette-4.html", group: "Vignettes" },
  { title: "Proving It Worked — The CRO Scorecard", href: "vignette-5.html", group: "Vignettes" },
  { title: "Capability Map", href: "capability-map.html", group: "Architecture" },
  { title: "Salesforce Domain Summary", href: "salesforce-summary.html", group: "Architecture" },
  { title: "External Research", href: "external-research.html", group: "Appendix" },
  { title: "Forward Looking Statement", href: "forward-looking-statement.html", group: "Appendix" }
];

window.OCTAVE_PAGES = {
  executive: {
    title: "Connected Customer Vision | Octave",
    showHero: true,
    headline: "A board-relevant growth conversation linking seller behavior, AI-assisted execution, and measurable ARR outcomes.",
    meta: [
      "Audience: CRO, CIO, RevOps, Sales Enablement",
      "Decision Horizon: 90-day pilot to scale program",
      "Primary Goal: Lift cross-sell, forecast accuracy, and play conversion"
    ],
    sections: [
      {
        title: "Purpose of the Discussion",
        bullets: [
          "Align on Octave's three explicit growth blockers: cross-sell execution, pipeline reliability, and growth play conversion.",
          "Demonstrate how Agentforce for Sales converts existing CRM/activity telemetry into daily operating decisions for sellers and managers.",
          "Secure agreement on a 90-day pilot design with clear control group and success thresholds."
        ]
      },
      {
        title: "Executive Stakes by Persona",
        cards: [
          {
            kicker: "CRO",
            title: "Revenue Quality and Scale",
            body: "Needs predictable forecast performance and repeatable cross-portfolio expansion to support medium-term ARR commitments."
          },
          {
            kicker: "CIO",
            title: "Parallel Transformation",
            body: "Needs near-term value without waiting for full ERP/CRM consolidation, while preserving enterprise trust and governance."
          },
          {
            kicker: "VP Revenue Operations",
            title: "Operating Rhythm",
            body: "Needs one system of execution where risk, pipeline movement, and play adoption are visible before forecast meetings."
          },
          {
            kicker: "Sales Enablement",
            title: "Methodology Adoption",
            body: "Needs SPICED to improve deal quality without adding seller admin burden that hurts adoption and data quality."
          }
        ]
      },
      {
        title: "Decision Framing for This Session",
        bullets: [
          "This is a sequencing decision, not an all-or-nothing platform decision.",
          "Vignettes 1-3 prioritize immediate seller/manager value inside current workflows.",
          "Vignettes 4-5 scale impact through Data Cloud signal activation and executive measurement."
        ],
        chips: ["Chapter 1: Seller Intelligence", "Chapter 2: Pipeline Reliability", "Chapter 3: Growth System"]
      },
      {
        title: "Expected Outcomes from the Executive Discussion",
        bullets: [
          "Choose initial pilot division and seller cohort.",
          "Agree on primary KPIs: slippage delta, win-rate lift, SPICED completion quality, and cross-sell pipeline creation.",
          "Confirm leadership sponsor model and weekly operating cadence for 90 days."
        ]
      }
    ]
  },
  journey: {
    title: "Journey | Connected Customer Vision",
    showHero: false,
    headline: "Visual transformation journey connecting current-state friction to future-state operating model outcomes.",
    meta: [
      "Use: Executive alignment artifact",
      "Format: Customer-supplied visual map(s)",
      "Intent: Shared reference point for decision sequencing"
    ],
    sections: [
      {
        title: "Journey Framing",
        bullets: [
          "This page is reserved for the customer-specific transformation journey visual used in the executive conversation.",
          "The journey should show the progression from fragmented seller execution to connected, AI-assisted operating rhythm.",
          "Use this view to align scope, sequence, ownership, and measurable outcomes across business and technology stakeholders."
        ],
        imagePath: "assets/journey-ccv-octave.png",
        imageAlt: "Connected Customer Vision journey for Octave"
      },
      {
        title: "How To Use In The Meeting",
        cards: [
          {
            kicker: "Step 1",
            title: "Anchor Current State",
            body: "Identify where sellers and managers lose decision velocity today (visibility gaps, manual prep, delayed risk signals)."
          },
          {
            kicker: "Step 2",
            title: "Connect To Vignettes",
            body: "Map each vignette as a practical future-state moment on the journey so each page ties to a real operating shift."
          },
          {
            kicker: "Step 3",
            title: "Sequence Decisions",
            body: "Use the journey to confirm phase gates, sponsors, and outcomes before entering detailed implementation planning."
          }
        ]
      },
      {
        title: "Asset Placement Guidance",
        bullets: [
          "Place customer journey visual(s) in the `assets` folder and reference them here for full-width readability.",
          "Keep this page lightweight so visuals remain the focal point during executive sessions.",
          "Avoid embedding confidential numbers in reusable templates; keep sensitive figures in protected customer-specific variants."
        ]
      }
    ]
  },
  research: {
    title: "External Research | Octave Overview",
    showHero: false,
    headline: "Market context and leadership priorities informing the Agentforce for Sales discussion.",
    meta: [
      "Ticker: OCTV",
      "Scale: ~7,200 employees, ~4,500 customers",
      "Portfolio: Design, Build, Operate, Protect"
    ],
    sections: [
      {
        title: "Company Snapshot",
        bullets: [
          "Publicly listed as OCTV with software-first positioning in asset-intensive industries.",
          "Approximate scale references indicate ~$1.6B revenue, ~$1.1B ARR, and global operations.",
          "Portfolio organized across Design, Build, Operate, and Protect workflow environments."
        ]
      },
      {
        title: "Growth Thesis and Pressure Points",
        bullets: [
          "Cross-workflow customer expansion remains the highest-leverage growth surface inside the installed base.",
          "Five-division CRM fragmentation limits seller visibility across the full account relationship.",
          "Telemetry and customer signals exist in data platforms but are not consistently activated in seller workflow."
        ]
      },
      {
        title: "Leadership Signals",
        bullets: [
          "CRO priorities center on cross-sell execution, forecast confidence, and growth play effectiveness.",
          "CIO perspective supports parallel modernization instead of waiting for full ERP consolidation.",
          "Sales enablement emphasis on SPICED creates a time-sensitive opening to pair methodology with AI assistance."
        ]
      },
      {
        title: "Strategic Implication for Salesforce",
        bullets: [
          "Octave's challenge is activation, not awareness: data exists, but decisions are delayed.",
          "Agentforce for Sales can serve as the operating layer between siloed data and seller behavior.",
          "A phased rollout allows business value to materialize before full architectural consolidation."
        ]
      }
    ]
  },
  v1: {
    title: "Vignette 1 | The Coworker Moment",
    showHero: false,
    headline: "From tribal knowledge to account truth in seconds.",
    meta: ["Primary Persona: Account Executive", "Executive Concern: Visibility", "Time to Value: Immediate"],
    sections: [
      {
        title: "Current State Risk",
        bullets: [
          "AE sees only divisional context and enters customer conversations without full relationship intelligence.",
          "Cross-division ownership, maintenance posture, and renewal risk remain hidden or manually assembled.",
          "Pre-call preparation time is spent searching for facts rather than planning strategic conversation."
        ]
      },
      {
        title: "Future State Shift",
        bullets: [
          "AE asks a natural-language question and receives cross-division customer context in-line.",
          "Renewal posture, ownership breadth, and expansion cues are synthesized from connected data sources.",
          "Rep shifts from reactive discovery to proactive value framing in the first executive meeting."
        ]
      },
      {
        title: "Persona Impact",
        cards: [
          { kicker: "AE", title: "Pre-Call Confidence", body: "Enters meetings with complete context and clear expansion hypotheses." },
          { kicker: "RevOps", title: "Data Utilization", body: "Makes existing system data operational instead of archival." },
          { kicker: "CIO", title: "Practical AI Adoption", body: "Validates chat-to-query use case without broad process change." }
        ]
      },
      {
        title: "Salesforce Capabilities Referenced",
        capabilities: [
          { code: "CAF", name: "Agentforce Coworker", domain: "Collaboration", body: "Converts natural-language prompts into actionable account context in the flow of work." },
          { code: "DDH", name: "Data Harmonization", domain: "Data and AI", body: "Unifies divisional sources into a consistent customer context layer for seller consumption." },
          { code: "DUP", name: "Unified Customer Profile", domain: "Data and AI", body: "Synthesizes ownership and relationship signals into one account-level truth." },
          { code: "IMS", name: "Microsoft Ecosystem Integration", domain: "Integration", body: "Extends assistant experience into Teams-first operating environments when preferred." }
        ]
      },
      {
        title: "Value Driver",
        bullets: [
          "Unified intelligence becomes a daily seller behavior, not a quarterly data project."
        ]
      }
    ]
  },
  v2: {
    title: "Vignette 2 | The Methodology That Fills Itself In",
    showHero: false,
    headline: "Methodology discipline without seller tax.",
    meta: ["Primary Persona: Sales Enablement", "Executive Concern: Adoption", "Time to Value: 1-2 weeks"],
    sections: [
      {
        title: "Current State Risk",
        bullets: [
          "SPICED rollout can be perceived as compliance overhead when sellers must manually reconstruct qualification data.",
          "Qualification narratives degrade over time when updates rely on memory versus evidence.",
          "Managers cannot distinguish high-quality SPICED completion from checkbox behavior."
        ]
      },
      {
        title: "Future State Shift",
        bullets: [
          "Agentforce drafts SPICED fields directly from activity, email, and opportunity context.",
          "Sellers edit, validate, and approve drafts rather than writing fields from scratch.",
          "Manager coaching and stage progression are tied to grounded qualification evidence."
        ]
      },
      {
        title: "Persona Impact",
        cards: [
          { kicker: "Sales Enablement", title: "Rollout Durability", body: "SPICED becomes a practical system with higher field adoption and better behavior consistency." },
          { kicker: "AE", title: "Time Recovered", body: "Reduces repetitive updates and returns selling time on every opportunity touchpoint." },
          { kicker: "Sales Manager", title: "Coaching Quality", body: "Uses grounded qualification detail for targeted intervention before stage advancement." }
        ]
      },
      {
        title: "Salesforce Capabilities Referenced",
        capabilities: [
          { code: "DAG", name: "Agentic AI / Autonomous Agents", domain: "Data and AI", body: "Generates first-pass qualification narratives and recommends next actions in context." },
          { code: "DPA", name: "Predictive AI / Einstein Scoring", domain: "Data and AI", body: "Strengthens stage confidence by connecting qualification completeness to risk signals." },
          { code: "SOP", name: "Opportunity Management", domain: "Sales", body: "Embeds SPICED and stage criteria inside daily opportunity workflow." },
          { code: "SEM", name: "Sales Enablement", domain: "Sales", body: "Operationalizes methodology with coachable structure, not one-time training events." }
        ]
      },
      {
        title: "Value Driver",
        bullets: [
          "Methodology becomes a force multiplier when the system contributes evidence before the seller is asked to type."
        ]
      }
    ]
  },
  v3: {
    title: "Vignette 3 | The Deal That Showed Its Hand Early",
    showHero: false,
    headline: "Forecast risk surfaced before it becomes a quarter-end surprise.",
    meta: ["Primary Persona: Frontline Manager", "Executive Concern: Forecast Confidence", "Time to Value: 2-3 weeks"],
    sections: [
      {
        title: "Current State Risk",
        bullets: [
          "Deals can appear healthy until forecast calls reveal late-stage slippage.",
          "Risk indicators are often distributed across activities, emails, and side reporting tools.",
          "Manager time is consumed diagnosing issues too late instead of preventing misses early."
        ]
      },
      {
        title: "Future State Shift",
        bullets: [
          "Pipeline Inspection surfaces at-risk opportunities based on engagement, velocity, and activity change.",
          "Agentforce prompts specific seller actions before the close window is compromised.",
          "Forecast conversations move from status collection to risk mitigation and action accountability."
        ]
      },
      {
        title: "Persona Impact",
        cards: [
          { kicker: "Manager", title: "Early Intervention", body: "Focuses 1:1s on highest-risk deals with clear action plans and timeline discipline." },
          { kicker: "CRO", title: "Forecast Credibility", body: "Reduces commit volatility and board-level surprises through earlier signal visibility." },
          { kicker: "RevOps", title: "Operating Cadence", body: "Consolidates risk and forecast workflow into Salesforce instead of disconnected exports." }
        ]
      },
      {
        title: "Salesforce Capabilities Referenced",
        capabilities: [
          { code: "ARI", name: "Revenue Intelligence", domain: "Analytics and Reporting", body: "Highlights risk patterns, trend movement, and forecast confidence across cohorts." },
          { code: "SSA", name: "Sales Analytics", domain: "Sales", body: "Provides seller and manager visibility into stage flow, cycle speed, and slippage behavior." },
          { code: "DPA", name: "Predictive AI / Einstein Scoring", domain: "Data and AI", body: "Prioritizes deal attention where probability and engagement signals diverge." },
          { code: "AEX", name: "Einstein Conversation Insights", domain: "Analytics and Reporting", body: "Extends risk understanding by layering call and conversation signals where enabled." }
        ]
      },
      {
        title: "Value Driver",
        bullets: [
          "Risk transparency improves forecast quality only when signals are embedded in weekly manager execution."
        ]
      }
    ]
  },
  v4: {
    title: "Vignette 4 | The Cross-Sell Motion That Found Itself",
    showHero: false,
    headline: "From whitespace hypothesis to repeatable cross-portfolio motion.",
    meta: ["Primary Persona: CRO / RevOps", "Executive Concern: Cross-Sell Throughput", "Time to Value: 4-8 weeks"],
    sections: [
      {
        title: "Current State Risk",
        bullets: [
          "Large single-workflow customer base represents growth potential that is hard for sellers to consistently detect.",
          "Telemetry and usage indicators are present in data platforms but not delivered as account-level seller actions.",
          "Growth plays exist as messaging; they do not consistently arrive as prioritized seller work."
        ]
      },
      {
        title: "Future State Shift",
        bullets: [
          "Data Cloud activates usage and readiness signals back into the account record.",
          "Agentforce recommends next-best cross-portfolio motions when signal thresholds are met.",
          "Sales Programs delivers targeted tasks and play content to the rep with account-specific rationale."
        ]
      },
      {
        title: "Persona Impact",
        cards: [
          { kicker: "CRO", title: "Expansion Engine", body: "Converts one-to-two environment adoption thesis into measurable pipeline creation." },
          { kicker: "RevOps", title: "Signal-to-Action", body: "Moves from broad campaign distribution to precision activation by account readiness." },
          { kicker: "AE", title: "Prioritized Opportunity", body: "Receives expansion plays with context and rationale rather than generic collateral." }
        ]
      },
      {
        title: "Salesforce Capabilities Referenced",
        capabilities: [
          { code: "DDH", name: "Data Harmonization", domain: "Data and AI", body: "Connects divisional and telemetry sources into one activation-ready model." },
          { code: "DUP", name: "Unified Customer Profile", domain: "Data and AI", body: "Builds a cross-portfolio account view to expose product footprint and whitespace." },
          { code: "SCU", name: "Cross / Up-Sell Management", domain: "Sales", body: "Converts account readiness into structured opportunity creation and follow-through." },
          { code: "IEP", name: "Enterprise Platform Connectors", domain: "Integration", body: "Accelerates source-to-Salesforce data movement using connector-based integration patterns." }
        ]
      },
      {
        title: "Value Driver",
        bullets: [
          "Cross-sell becomes systematic when account signals trigger action in seller workflow at the right moment."
        ]
      }
    ]
  },
  v5: {
    title: "Vignette 5 | Proving It Worked: The CRO Scorecard",
    showHero: false,
    headline: "Executive scorecard that turns internal proof points into scale decisions.",
    meta: ["Primary Persona: CRO", "Executive Concern: Board-Ready Evidence", "Time to Value: 8-12 weeks"],
    sections: [
      {
        title: "Current State Risk",
        bullets: [
          "Internal wins are visible anecdotally but not instrumented as comparable cohorts.",
          "Executive reviews combine multiple reports without one trusted operating scorecard.",
          "Scale decisions are delayed when impact attribution is unclear."
        ]
      },
      {
        title: "Future State Shift",
        bullets: [
          "CRO scorecard ties seller behavior, pipeline quality, and revenue outcomes in one view.",
          "Cohort comparison shows baseline versus AI-assisted operating model across key KPIs.",
          "Leadership can decide scale based on internal evidence rather than external benchmarks."
        ]
      },
      {
        title: "Persona Impact",
        cards: [
          { kicker: "CRO", title: "Decision Confidence", body: "Uses measurable trend deltas to justify scaling strategy and investment sequence." },
          { kicker: "RevOps", title: "Measurement Integrity", body: "Owns KPI definitions, control groups, and weekly governance cadence for pilot outcomes." },
          { kicker: "CIO", title: "Value Governance", body: "Balances innovation speed with trust, compliance, and operating resiliency requirements." }
        ]
      },
      {
        title: "Salesforce Capabilities Referenced",
        capabilities: [
          { code: "ARI", name: "Revenue Intelligence", domain: "Analytics and Reporting", body: "Tracks forecast reliability and trend deltas by cohort and period." },
          { code: "ABI", name: "Embedded BI & Dashboards", domain: "Analytics and Reporting", body: "Delivers role-specific executive scorecards directly inside operating workflow." },
          { code: "APC", name: "Tableau Pulse / Proactive Insights", domain: "Analytics and Reporting", body: "Pushes material KPI changes to leadership before formal review cycles." },
          { code: "PGV", name: "Data Governance & Privacy", domain: "Platform and Governance", body: "Ensures executive reporting trust through consistent access, quality, and controls." }
        ]
      },
      {
        title: "Value Driver",
        bullets: [
          "Scale decisions accelerate when pilot outcomes are measured with internal cohort evidence, not assumptions."
        ]
      }
    ]
  },
  capability: {
    title: "Capability Map | Sequencing and Dependencies",
    showHero: false,
    headline: "Recommended sequencing to deliver value quickly, then scale with confidence.",
    meta: ["Phase 1: Seller and Manager Quick Wins", "Phase 2: Cross-Sell Signal Activation", "Phase 3: Executive Measurement and Scale"],
    sections: [
      {
        title: "Phased Capability Sequence",
        phases: [
          {
            title: "Phase 1 | Weeks 0-4 | Pipeline and Seller Clarity",
            summary: "Deliver immediate operating value within a single division before cross-division integration complexity.",
            capabilities: [
              { code: "CAF", name: "Agentforce Coworker", domain: "Collaboration", body: "Immediate account intelligence for pre-call planning and executive conversation quality." },
              { code: "SOP", name: "Opportunity Management", domain: "Sales", body: "In-flow SPICED discipline and stage progression tied to evidence." },
              { code: "DPA", name: "Predictive AI / Einstein Scoring", domain: "Data and AI", body: "Risk prioritization to focus manager attention and intervention." },
              { code: "ARI", name: "Revenue Intelligence", domain: "Analytics and Reporting", body: "Early forecast and slippage visibility for frontline operating cadence." }
            ]
          },
          {
            title: "Phase 2 | Weeks 4-8 | Cross-Sell Signal Activation",
            summary: "Activate telemetry and divisional context so expansion plays are triggered, targeted, and measurable.",
            capabilities: [
              { code: "DDH", name: "Data Harmonization", domain: "Data and AI", body: "Integrates divisional and telemetry sources into actionable seller context." },
              { code: "DUP", name: "Unified Customer Profile", domain: "Data and AI", body: "Creates account-level footprint and whitespace visibility across product lines." },
              { code: "SCU", name: "Cross / Up-Sell Management", domain: "Sales", body: "Operationalizes expansion motion with play-to-opportunity workflow." },
              { code: "IEP", name: "Enterprise Platform Connectors", domain: "Integration", body: "Accelerates connection between Snowflake and Salesforce activation layers." }
            ]
          },
          {
            title: "Phase 3 | Weeks 8-12 | Executive Scorecard and Scaling Decision",
            summary: "Instrument outcome measurement for board-ready evidence and scaling confidence.",
            capabilities: [
              { code: "ABI", name: "Embedded BI & Dashboards", domain: "Analytics and Reporting", body: "Delivers executive KPI scorecards with role-based drill-down context." },
              { code: "APC", name: "Tableau Pulse / Proactive Insights", domain: "Analytics and Reporting", body: "Pushes critical KPI movement to sponsors between operating reviews." },
              { code: "PGV", name: "Data Governance & Privacy", domain: "Platform and Governance", body: "Protects trust through data policy, access control, and auditability." },
              { code: "DFC", name: "Flex Credit & AI Consumption Management", domain: "Data and AI", body: "Tracks AI consumption and economics to support scaling decisions." }
            ]
          }
        ]
      },
      {
        title: "Execution Guardrails",
        bullets: [
          "Sequence by business value first; integration depth second.",
          "Preserve transparent measurement with defined baseline and control cohorts.",
          "Keep trust and governance controls explicit in every phase gate."
        ]
      }
    ]
  },
  salesforce: {
    title: "Salesforce Domain Summary",
    showHero: false,
    headline: "Impacted capabilities by domain, with vignette-referenced capabilities highlighted.",
    meta: ["Highlighting: capabilities directly used in Vignettes 1-5", "Grouping: aligned to Salesforce capability domains"],
    sections: [
      {
        title: "Domain Inclusion Logic",
        bullets: [
          "This page intentionally focuses on domains with direct impact on the Octave executive storyline and 90-day pilot outcomes.",
          "Included domains are those required to improve cross-sell execution, forecast reliability, methodology adoption, and executive measurement.",
          "Domains not shown in the primary map are not low-value; they are simply not on the critical path for the initial Agentforce for Sales motion."
        ],
        chips: [
          "In Scope: Direct blocker impact",
          "Adjacent: Valuable but not pilot-critical",
          "Future: Sequence after pilot proof"
        ],
        cards: [
          {
            kicker: "Included Now",
            title: "Directly Impacted Domains",
            body: "Analytics & Reporting, Sales, Data & AI, Integration, Collaboration, and Platform & Governance are shown because they contain the core capabilities used across Vignettes 1-5."
          },
          {
            kicker: "Deferred Scope",
            title: "Adjacent Domains",
            body: "Billing, CPQ, Field Service, Industry Solutions, Marketing, Order, Partner, and Service can be sequenced later as the program expands beyond the first executive use cases."
          },
          {
            kicker: "Coverage Legend",
            title: "How To Explain Scope In The Room",
            body: "In Scope domains are mapped to named blockers and pilot KPIs. Adjacent domains are acknowledged as follow-on value streams. Future domains are addressed after pilot evidence supports scale."
          }
        ]
      },
      {
        title: "Salesforce Capability Map by Domain",
        domainGroups: [
          {
            title: "Analytics & Reporting",
            capabilities: [
              { code: "ABI", name: "Embedded BI & Dashboards", highlight: true },
              { code: "AEX", name: "Einstein Conversation Insights", highlight: true },
              { code: "APC", name: "Tableau Pulse / Proactive Insights", highlight: true },
              { code: "ARI", name: "Revenue Intelligence", highlight: true }
            ]
          },
          {
            title: "Sales",
            capabilities: [
              { code: "SOP", name: "Opportunity Management", highlight: true },
              { code: "SEM", name: "Sales Enablement", highlight: true },
              { code: "SCU", name: "Cross / Up-Sell Management", highlight: true },
              { code: "SSA", name: "Sales Analytics", highlight: true }
            ]
          },
          {
            title: "Data & AI",
            capabilities: [
              { code: "DAG", name: "Agentic AI / Autonomous Agents", highlight: true },
              { code: "DDH", name: "Data Harmonization", highlight: true },
              { code: "DPA", name: "Predictive AI / Einstein Scoring", highlight: true },
              { code: "DUP", name: "Unified Customer Profile", highlight: true },
              { code: "DFC", name: "Flex Credit & AI Consumption Mgmt", highlight: true }
            ]
          },
          {
            title: "Integration",
            capabilities: [
              { code: "IEP", name: "Enterprise Platform Connectors", highlight: true },
              { code: "IEI", name: "Enterprise Integration", highlight: false },
              { code: "IMS", name: "Microsoft Ecosystem Integration", highlight: true },
              { code: "IAM", name: "API Management", highlight: false }
            ]
          },
          {
            title: "Collaboration",
            capabilities: [
              { code: "CAF", name: "Agentforce in Collaboration", highlight: true },
              { code: "CTC", name: "Asynchronous Team Collaboration", highlight: false },
              { code: "CSC", name: "Slack Connect / External Collaboration", highlight: false }
            ]
          },
          {
            title: "Platform & Governance",
            capabilities: [
              { code: "PGV", name: "Data Governance & Privacy", highlight: true },
              { code: "DEL", name: "Einstein Trust Layer", highlight: false },
              { code: "PMD", name: "Multi-Org / Subsidiary Architecture", highlight: false }
            ]
          }
        ]
      },
      {
        title: "How to Read This Map",
        bullets: [
          "Highlighted capabilities are directly referenced inside one or more Octave vignettes.",
          "Non-highlighted capabilities are adjacent enablers that can be sequenced as the program matures.",
          "Domain grouping helps leadership evaluate both quick wins and long-term architecture alignment.",
          "If asked why all Salesforce domains are not shown: this is a deliberate executive scope cut to keep attention on capabilities that move the three named blockers in the next 90 days."
        ]
      }
    ]
  },
  fls: {
    title: "Forward Looking Statement",
    showHero: false,
    headline: "Standardized cautionary language for strategic planning discussions.",
    meta: ["Appendix", "Legal boundary", "Use in executive review materials"],
    sections: [
      {
        title: "Forward Looking Statement",
        bullets: [
          "This content includes forward-looking statements and strategic assumptions for planning purposes only.",
          "Forward-looking statements are based on current expectations and involve risks and uncertainties that may cause actual outcomes to differ materially.",
          "No commitment is made to deliver any specific product capability, timing, or commercial result unless explicitly stated in an executed agreement."
        ]
      },
      {
        title: "Discussion Boundary",
        bullets: [
          "Use this site to guide executive alignment, sequencing, and pilot decisions.",
          "Do not interpret scenario language, sample metrics, or roadmap framing as contractual commitments.",
          "All investment and delivery decisions should follow formal governance, procurement, and legal review processes."
        ]
      }
    ]
  }
};
