import { type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Shell } from "@/components/site-shell";
import { AboutPage, ArticlePage, CareersPage, ContactPage, HomePage, IndustriesPage, IndustryDetailPage, InsightsPage, NotFoundPage, ServiceDetailPage, ServicesPage } from "@/pages/site-pages";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";

const queryClient = new QueryClient();

function Router() {
  return <RoutedErrorBoundary><Shell><Switch>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/services" component={ServicesPage} />
    <Route path="/services/software-development"><ServiceDetailPage slug="software-development" /></Route>
    <Route path="/services/cloud-devops"><ServiceDetailPage slug="cloud-devops" /></Route>
    <Route path="/services/cybersecurity"><ServiceDetailPage slug="cybersecurity" /></Route>
    <Route path="/services/managed-it"><ServiceDetailPage slug="managed-it" /></Route>
    <Route path="/services/data-ai"><ServiceDetailPage slug="data-ai" /></Route>
    <Route path="/industries" component={IndustriesPage} />
    <Route path="/industries/healthcare"><IndustryDetailPage slug="healthcare" /></Route>
    <Route path="/industries/finance"><IndustryDetailPage slug="finance" /></Route>
    <Route path="/industries/education"><IndustryDetailPage slug="education" /></Route>
    <Route path="/industries/retail"><IndustryDetailPage slug="retail" /></Route>
    <Route path="/insights" component={InsightsPage} />
    <Route path="/insights/cloud-readiness"><ArticlePage slug="cloud-readiness" /></Route>
    <Route path="/insights/secure-by-design"><ArticlePage slug="secure-by-design" /></Route>
    <Route path="/careers" component={CareersPage} />
    <Route path="/contact"><ContactPage /></Route>
    <Route path="/contact/sales"><ContactPage sales /></Route>
    <Route path="/contact/support"><ContactPage support /></Route>
    <Route component={NotFoundPage} />
  </Switch></Shell></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;