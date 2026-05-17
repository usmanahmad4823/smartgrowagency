import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const projects = [
  {
    slug: "helio-labs-site",
    title: "Helio Labs — enterprise site relaunch",
    category: "Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Helio’s product was category-defining, but the marketing site read like a brochure. Demos were strong, yet inbound quality trailed paid spend.",
    solution:
      "We rebuilt the IA around buyer jobs-to-be-done, shipped a Next.js experience with sub-second LCP, and instrumented funnel events end-to-end for sales.",
    results:
      "Demo requests rose 182% in 8 weeks while CAC fell 34%. Sales adopted the new narrative within one enablement session.",
    techStack: JSON.stringify(["Next.js", "Tailwind CSS", "Segment", "HubSpot"]),
    testimonial:
      "Smart Grow Agency gave us a site that finally matches the product. Pipeline quality is night-and-day better.",
    metrics: JSON.stringify([
      { label: "Demo lift", value: "+182%" },
      { label: "CAC", value: "-34%" },
      { label: "Sales cycle", value: "-12 days" },
    ]),
    featured: true,
  },
  {
    slug: "vertex-automation-hub",
    title: "Vertex Labs — AI operations hub",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Vertex’s support team was buried in repetitive triage. Leadership needed automation without risking compliance or customer trust.",
    solution:
      "We mapped workflows, introduced human-in-the-loop automations, and connected CRM, billing, and ticketing with auditable logs.",
    results:
      "Thirty-two hours per week returned to senior agents. CSAT climbed 6 points while error rates stayed flat.",
    techStack: JSON.stringify(["Node.js", "Prisma", "OpenAI API", "Zendesk"]),
    testimonial: "Finally, automation that legal could sign off on in days, not months.",
    metrics: JSON.stringify([
      { label: "Hours saved / week", value: "32" },
      { label: "CSAT", value: "+6 pts" },
      { label: "Escalations", value: "-41%" },
    ]),
    featured: true,
  },
  {
    slug: "brightline-paid-growth",
    title: "Brightline — paid social acceleration",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Brightline’s creative fatigued quickly on Meta. CPA was acceptable, but pipeline coverage was shrinking quarter over quarter.",
    solution:
      "We rebuilt creative testing lanes, paired landing experiences with each angle, and synchronized offline conversions for better signal.",
    results:
      "Blended CPA dropped 28% while SQL volume grew 64%. Leadership renewed the engagement within 48 hours of the readout.",
    techStack: JSON.stringify(["Meta Ads", "Google Ads", "Webflow", "BigQuery"]),
    testimonial: "They run paid like product—structured tests, crisp reporting, and creative that converts.",
    metrics: JSON.stringify([
      { label: "SQL volume", value: "+64%" },
      { label: "CPA", value: "-28%" },
      { label: "ROAS", value: "+22%" },
    ]),
    featured: true,
  },
  {
    slug: "aperture-brand-system",
    title: "Aperture Finance — brand system rollout",
    category: "Brand",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f7d83?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Aperture raised a Series B and needed a visual system that could flex across events, product UI, and partner collateral without diluting equity.",
    solution:
      "We codified positioning, rebuilt the identity kit, and delivered templates for decks, social, and paid placements with motion guidelines.",
    results:
      "Launch materials shipped two weeks faster per sprint. NPS for brand clarity jumped 18 points among enterprise buyers.",
    techStack: JSON.stringify(["Figma", "After Effects", "Notion", "Adobe CC"]),
    testimonial: "Our partners finally see the same Aperture everywhere—from the keynote to the invoice.",
    metrics: JSON.stringify([
      { label: "Launch velocity", value: "+2 wks" },
      { label: "Brand NPS", value: "+18" },
      { label: "Partner recall", value: "+27%" },
    ]),
    featured: true,
  },
  {
    slug: "northwind-email-kit",
    title: "Northwind — lifecycle email overhaul",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1523475472560d2df98f9d2?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Northwind’s onboarding drips were outdated, and win-back paths barely fired. Revenue leakage showed up in cohort curves, not dashboards.",
    solution:
      "We audited deliverability, rewrote high-intent flows, and introduced experimentation on subject lines, offers, and cadence.",
    results:
      "Lifecycle-attributed revenue rose PKR 60M in the first quarter post-launch with higher engagement across every stage.",
    techStack: JSON.stringify(["Customer.io", "Snowflake", "dbt", "Iterable"]),
    testimonial: "They speak lifecycle in revenue, not opens and clicks.",
    metrics: JSON.stringify([
      { label: "Lifecycle revenue", value: "+PKR 60M" },
      { label: "Win-back rate", value: "+3.4 pts" },
      { label: "Spam complaints", value: "-62%" },
    ]),
    featured: true,
  },
  {
    slug: "signal-commerce-refresh",
    title: "Signal Commerce — storefront performance",
    category: "Web",
    image: "https://images.unsplash.com/photo-1523473827534-83a7f27f0452?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Mobile conversion lagged desktop by double digits. Core Web Vitals failed silently during peak traffic windows.",
    solution:
      "We refactored critical rendering paths, optimized media, and introduced edge caching with observability tied to checkout success.",
    results:
      "Mobile conversion climbed 19% and checkout errors dropped 41% during the holiday peak.",
    techStack: JSON.stringify(["Next.js", "Vercel", "Shopify Hydrogen", "Datadog"]),
    testimonial: "Our storefront finally feels as premium as the product.",
    metrics: JSON.stringify([
      { label: "Mobile CVR", value: "+19%" },
      { label: "Checkout errors", value: "-41%" },
      { label: "LCP", value: "-1.1s" },
    ]),
    featured: true,
  },
  {
    slug: "foundry-mobile-app",
    title: "Foundry — mobile companion app",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Foundry’s field teams needed offline-friendly workflows that synced cleanly with SAP and their internal approvals engine.",
    solution:
      "We shipped a cross-platform app with resilient sync, biometric auth, and role-aware tasking tied to backend policies.",
    results:
      "Field completion rates improved 27% while support tickets related to sync fell by half.",
    techStack: JSON.stringify(["React Native", "GraphQL", "SAP BTP", "Auth0"]),
    testimonial: "Smart Grow Agency shipped mobile like a product team, not a vendor.",
    metrics: JSON.stringify([
      { label: "Field completion", value: "+27%" },
      { label: "Sync tickets", value: "-50%" },
      { label: "Rollout", value: "6 regions" },
    ]),
    featured: false,
  },
  {
    slug: "kite-seo-program",
    title: "Kite — SEO authority program",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855836?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Kite competed in a noisy category. Paid spend worked, but organic was an afterthought—thin pages and fractured internal linking.",
    solution:
      "We executed a technical remediation, built topical clusters, and paired editorial with product-led landing experiences.",
    results:
      "Organic traffic climbed 340% YoY with a 4.2x lift in non-branded pipeline contribution.",
    techStack: JSON.stringify(["Contentful", "Next.js", "Ahrefs", "Looker"]),
    testimonial: "Organic finally feels like a compounding channel—not a side project.",
    metrics: JSON.stringify([
      { label: "Organic traffic", value: "+340%" },
      { label: "Non-brand pipeline", value: "4.2x" },
      { label: "Indexed pages", value: "+180" },
    ]),
    featured: false,
  },
];

const blogPosts = [
  {
    slug: "growth-experimentation-framework",
    title: "A growth experimentation framework you can run Monday",
    excerpt: "How to pick metrics, design disciplined tests, and avoid false positives when velocity matters.",
    category: "Growth",
    readTimeMins: 6,
    publishedAt: new Date("2026-04-12"),
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    contentMdx: `# A growth experimentation framework you can run Monday

When growth is uncertain, teams either freeze or test randomly. Neither works. You need a lightweight system that ties every experiment to a lagging indicator your leadership already trusts.

## Start with one north-star metric

Pick **one** primary metric per quarter—pipeline, activation, or gross margin per account. Everything ladders to that choice.

\`\`\`ts
type Experiment = {
  name: string;
  primaryMetric: "pipeline" | "activation" | "margin";
};

const nextTest: Experiment = {
  name: "homepage-hero",
  primaryMetric: "pipeline",
};
\`\`\`

## Design tests like product bets

- **Hypothesis** in one sentence  
- **Guardrails** for brand and compliance  
- **Decision window** so tests do not linger  

Ship weekly, review briefly, and promote winners into always-on programs.

## Soft CTA

If you want Smart Grow Agency to pressure-test your roadmap, [request a free proposal](/contact)—we will reply within 24 hours.`,
  },
  {
    slug: "ai-automation-readiness",
    title: "AI automation readiness: the 10-question audit",
    excerpt: "Before you wire LLMs into production, align data, policy, and human fallbacks—here is the audit we run with clients.",
    category: "Automation",
    readTimeMins: 7,
    publishedAt: new Date("2026-04-02"),
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    contentMdx: `# AI automation readiness

Automation fails when teams skip the boring prerequisites: clean IDs, logging, and human review paths.

## The audit in three buckets

1. **Data** — Can you trace outputs back to inputs?  
2. **Policy** — What is allowed to be automated end-to-end?  
3. **People** — Who owns exceptions when confidence drops?

## Example logging snippet

\`\`\`ts
type AutomationEvent = {
  id: string;
  actor: "system" | "human";
  outcome: "success" | "handoff" | "failure";
};

const logEvent = (event: AutomationEvent) => {
  console.info("[automation]", event);
};
\`\`\`

Ready to modernize workflows without chaos? [Start a project](/contact) and we will map ROI before a single line ships.`,
  },
  {
    slug: "paid-social-creative-testing",
    title: "Paid social creative testing that survives iOS privacy shifts",
    excerpt: "Signal loss is permanent—your creative system should assume it. Here is how we structure Meta tests for B2B.",
    category: "Media",
    readTimeMins: 5,
    publishedAt: new Date("2026-03-21"),
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    contentMdx: `# Paid social creative testing

Creative is your new targeting. When signal is partial, winners emerge from structured iteration—not one-off hero shots.

## Cadence that works

- **Weekly** concept drops  
- **Biweekly** learning reviews  
- **Monthly** refresh of master narratives  

## Code-style checklist

\`\`\`ts
const checklist = ["hook clarity", "proof density", "cta friction", "thumb-stop motion"] as const;

export type CreativeReview = (typeof checklist)[number];
\`\`\`

Want us to run this alongside your team? [Book a consult](/contact).`,
  },
  {
    slug: "seo-migration-checklist",
    title: "The enterprise SEO migration checklist we use before go-live",
    excerpt: "Avoid the classic traps: orphaned URLs, botched redirects, and analytics gaps that hide regressions for weeks.",
    category: "Growth",
    readTimeMins: 8,
    publishedAt: new Date("2026-03-05"),
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    contentMdx: `# Enterprise SEO migration checklist

Migrations are where SEO dies quietly. Use this checklist before you flip DNS.

## Technical must-haves

- Redirect map with **no chains** for high-value URLs  
- Canonical policy documented for duplicated paths  
- XML sitemaps segmented by template type  

## Sample redirect tester

\`\`\`ts
const should301 = (path: string) =>
  path.startsWith("/blog/archive/");

console.info(should301("/blog/archive/2024-update"));
\`\`\`

Need a second set of eyes? [Get a free proposal](/contact) and we will sanity-check your cutover plan.`,
  },
  {
    slug: "lifecycle-email-audit",
    title: "Lifecycle email audit: find the hidden revenue leaks",
    excerpt: "Deliverability, segmentation, and offer sequencing matter more than copy tweaks—here is how we prioritize fixes.",
    category: "Product",
    readTimeMins: 6,
    publishedAt: new Date("2026-02-18"),
    coverImage: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80",
    contentMdx: `# Lifecycle email audit

Most revenue leaks hide in the transitions: trial → paid, paid → expansion, active → churn-risk.

## Audit lanes

1. **Deliverability** — bounces, spam placement, domain alignment  
2. **Segmentation** — are triggers based on behavior or vanity?  
3. **Offer logic** — does every email earn its send?

\`\`\`ts
type LifecycleStage = "trial" | "active" | "risk" | "churned";

const stage: LifecycleStage = "risk";
\`\`\`

Want a teardown of your lifecycle map? [Tell us about your funnel](/contact).`,
  },
];

async function main() {
  await prisma.project.deleteMany();
  await prisma.blogPost.deleteMany();

  await prisma.project.createMany({ data: projects });
  await prisma.blogPost.createMany({ data: blogPosts });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
