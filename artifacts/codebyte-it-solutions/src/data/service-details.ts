import { Cloud, Code2, Database, Headphones, ShieldCheck, type LucideIcon } from "lucide-react";

export type ServiceDetail = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  aside: string;
};

export const detailContent: Record<string, ServiceDetail> = {
  "software-development": { eyebrow: "01 / Software development", title: "Build the thing your business is becoming.", description: "From a first release to a platform your teams rely on, we combine product thinking with engineering discipline to make software that earns adoption.", icon: Code2, bullets: ["Java full stack development — Spring Boot, REST APIs, and enterprise platforms", "Node.js — scalable APIs, microservices, and real-time applications", "Web applications, portals, and product modernization", "Quality engineering and delivery enablement"], aside: "Ship something useful. Then make it better." },
  "cloud-devops": { eyebrow: "02 / Cloud & DevOps", title: "Infrastructure that makes momentum easier.", description: "We design cloud environments and delivery practices that are observable, secure, and proportionate to the way your organization works.", icon: Cloud, bullets: ["Cloud strategy and migration roadmaps", "Platform engineering and infrastructure as code", "CI/CD pipelines, reliability, and observability", "Cost and performance optimization"], aside: "The best infrastructure is quietly dependable." },
  cybersecurity: { eyebrow: "03 / Cybersecurity", title: "Security that belongs in the room early.", description: "Turn security from a late-stage blocker into a clear, shared way of making better decisions about risk.", icon: ShieldCheck, bullets: ["Security posture and risk assessments", "Identity, access, and endpoint strategy", "Secure product and cloud architecture", "Incident readiness and response planning"], aside: "Practical security is a team sport." },
  "managed-it": { eyebrow: "04 / Managed IT", title: "A steadier day for your people.", description: "Responsive support and thoughtful IT operations for the work between the big transformations — delivered by people who learn your environment.", icon: Headphones, bullets: ["Help desk and end-user support", "Device, identity, and collaboration management", "Vendor and lifecycle management", "IT roadmaps and fractional leadership"], aside: "Your team should not need to think about every tool." },
  "data-ai": { eyebrow: "05 / Data & applied AI", title: "Make information useful at the moment of decision.", description: "We create the data foundations and focused AI applications that help teams see clearly, act faster, and keep humans in control.", icon: Database, bullets: ["Data platform and governance strategy", "Reporting and decision intelligence", "Workflow automation and applied AI", "Responsible AI discovery and enablement"], aside: "Intelligence is only valuable when it changes the next move." },
  "sap": { eyebrow: "06 / SAP solutions", title: "SAP that fits the way your business actually runs.", description: "Implementation, integration, migration, and ongoing support across SAP landscapes — practical expertise without the overhead of a large consultancy.", icon: Database, bullets: ["SAP S/4HANA implementation and migration", "SAP integration with third-party systems and APIs", "ABAP development and custom enhancement", "Basis administration and system health management", "Ongoing SAP support, optimisation, and training"], aside: "SAP should work for your people, not around them." },
};