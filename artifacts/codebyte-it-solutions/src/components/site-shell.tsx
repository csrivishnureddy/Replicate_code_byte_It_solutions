import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { contactInfo, industries, resourceLinks, services } from "@/data/site";

type Group = { label: string; links: { title: string; path: string; description?: string }[] };

const groups: Group[] = [
  { label: "Solutions", links: [{ title: "All services", path: "/services", description: "Capabilities for the moments that matter." }, ...services] },
  { label: "Industries", links: [{ title: "All industries", path: "/industries", description: "Context changes the right answer." }, ...industries] },
  { label: "Company", links: [{ title: "About CodeByte", path: "/about", description: "A partner with a point of view." }, { title: "Careers", path: "/careers", description: "Do work that has somewhere to go." }] },
  { label: "Resources", links: [{ title: "All insights", path: "/insights", description: "Useful thinking, without the theater." }, ...resourceLinks] },
];

function isActive(path: string, current: string) {
  return current === path || (path !== "/" && current.startsWith(path));
}

export function Brand() {
  return <Link href="/" className="brand" data-testid="link-brand"><span className="brand-mark">CB</span><span>CodeByte<span style={{ color: "hsl(var(--primary))" }}>.</span>IT Solutions</span></Link>;
}

export function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const closeMobile = () => { setMobileOpen(false); setOpenGroup(null); };

  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav className="nav" aria-label="Primary navigation">
          {groups.map((group) => (
            <div className={`nav-item ${group.links.some((link) => isActive(link.path, location)) ? "active" : ""}`} key={group.label}>
              <span>{group.label}</span><ChevronDown size={13} className="nav-chevron" />
              <div className="dropdown">
                {group.links.map((link) => <Link key={link.path} href={link.path} className={isActive(link.path, location) ? "active" : ""} data-testid={`link-${link.title.toLowerCase().replaceAll(" ", "-")}`}><strong>{link.title}</strong>{link.description && <small>{link.description}</small>}</Link>)}
              </div>
            </div>
          ))}
        </nav>
        <Link href="/contact" className="button button-primary header-cta" data-testid="link-header-contact">Start a conversation <ArrowUpRight size={14} /></Link>
        <button className="mobile-trigger" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} data-testid="button-mobile-menu">{mobileOpen ? <X size={23} /> : <Menu size={23} />}</button>
      </div>
      {mobileOpen && <div className="mobile-panel" aria-label="Mobile navigation">
        {groups.map((group) => {
          const expanded = openGroup === group.label;
          return <div key={group.label}>
            <button className={`mobile-group-button ${group.links.some((link) => isActive(link.path, location)) ? "active" : ""}`} onClick={() => setOpenGroup(expanded ? null : group.label)} aria-expanded={expanded} data-testid={`button-mobile-${group.label.toLowerCase()}`}>{group.label}<ChevronDown size={16} /></button>
            {expanded && <div className="mobile-children">{group.links.map((link) => <Link key={link.path} href={link.path} onClick={closeMobile} className={isActive(link.path, location) ? "active" : ""} data-testid={`mobile-link-${link.title.toLowerCase().replaceAll(" ", "-")}`}>{link.title}</Link>)}</div>}
          </div>;
        })}
        <Link href="/contact" onClick={closeMobile} className="button button-primary" style={{ marginTop: 14 }} data-testid="mobile-link-contact">Start a conversation <ArrowUpRight size={14} /></Link>
      </div>}
    </header>
  );
}

export function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div><Brand /><p className="footer-intro">Technology should make the important work easier to do. We help growing organizations get there, without the theater.</p></div>
        <div><h4>Explore</h4><div className="footer-links"><Link href="/about" data-testid="footer-link-about">About</Link><Link href="/services" data-testid="footer-link-services">Services</Link><Link href="/industries" data-testid="footer-link-industries">Industries</Link><Link href="/careers" data-testid="footer-link-careers">Careers</Link></div></div>
        <div><h4>Learn</h4><div className="footer-links"><Link href="/insights" data-testid="footer-link-insights">Insights</Link><Link href="/insights/cloud-readiness" data-testid="footer-link-cloud">Cloud readiness</Link><Link href="/insights/secure-by-design" data-testid="footer-link-secure">Secure by design</Link></div></div>
        <div><h4>Talk to us</h4><div className="footer-links"><Link href="/contact/sales" data-testid="footer-link-sales">Sales inquiry</Link><Link href="/contact/support" data-testid="footer-link-support">Support desk</Link><Link href="/contact" data-testid="footer-link-contact">Contact team</Link></div></div>
      </div>
      <div className="footer-bottom"><span>© 2025 CodeByte IT Solutions</span><span>Clear thinking / Better systems / Human support</span></div>
    </div>
  </footer>;
}

export function Shell({ children }: { children: ReactNode }) {
  return <div className="site-shell"><Header /><main>{children}</main><Footer /></div>;
}