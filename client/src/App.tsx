import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SEODashboardPage from "@/pages/seo-dashboard";
import ContactSuccess from "@/pages/contact-success";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/seo-dashboard" component={SEODashboardPage} />
      <Route path="/contact-success" component={ContactSuccess} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
