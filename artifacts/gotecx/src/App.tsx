import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";

import { Layout } from "@/components/layout/Layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Solutions from "@/pages/solutions";
import Products from "@/pages/products";
import Services from "@/pages/services";
import Industries from "@/pages/industries";
import SuccessStories from "@/pages/success-stories";
import Partners from "@/pages/partners";
import Leadership from "@/pages/leadership";
import Careers from "@/pages/careers";
import Resources from "@/pages/resources";
import Blog from "@/pages/blog";
import Events from "@/pages/events";
import MediaCenter from "@/pages/media-center";
import Investors from "@/pages/investors";
import Contact from "@/pages/contact";
import Support from "@/pages/support";
import Docs from "@/pages/docs";
import Faqs from "@/pages/faqs";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Booking from "@/pages/booking";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/industries" component={Industries} />
        <Route path="/success-stories" component={SuccessStories} />
        <Route path="/partners" component={Partners} />
        <Route path="/leadership" component={Leadership} />
        <Route path="/careers" component={Careers} />
        <Route path="/resources" component={Resources} />
        <Route path="/blog" component={Blog} />
        <Route path="/events" component={Events} />
        <Route path="/media-center" component={MediaCenter} />
        <Route path="/investors" component={Investors} />
        <Route path="/contact" component={Contact} />
        <Route path="/support" component={Support} />
        <Route path="/docs" component={Docs} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/booking" component={Booking} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;