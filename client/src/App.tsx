import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SEODashboardPage from "@/pages/seo-dashboard";
import ContactSuccess from "@/pages/contact-success";
import Welcome from "@/pages/welcome";

function Router() {
  return (
    <Switch>
      {/* English routes (default) */}
      <Route path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/seo-dashboard" component={SEODashboardPage} />
      <Route path="/contact-success" component={ContactSuccess} />

      {/* Georgian routes under /ge */}
      <Route path="/ge" component={Home} />
      <Route path="/ge/" component={Home} />
      <Route path="/ge/welcome" component={Welcome} />
      <Route path="/ge/seo-dashboard" component={SEODashboardPage} />
      <Route path="/ge/contact-success" component={ContactSuccess} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
