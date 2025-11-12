import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Trusted by 5,000+ Nigerian borrowers</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Get Your Loan
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Approved in Minutes
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Fast, simple, and secure loan applications for Nigerians with competitive rates. 
            Join thousands who trust CrediFlow for their financial needs.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/apply">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:shadow-strong transition-all"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/calculator">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all"
              >
                Calculate Your Loan
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-soft transition-all">
              <div className="p-3 bg-primary/10 rounded-full">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Quick Approval</h3>
              <p className="text-sm text-muted-foreground">Get decision in 5 minutes</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-soft transition-all">
              <div className="p-3 bg-accent/10 rounded-full">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Best Rates</h3>
              <p className="text-sm text-muted-foreground">Competitive interest rates</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-soft transition-all">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">100% Secure</h3>
              <p className="text-sm text-muted-foreground">Bank-level encryption</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
