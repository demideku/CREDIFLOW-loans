import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full shadow-soft">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Trusted by 5,000+ Nigerian borrowers</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
            Get Your Loan
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Approved in Minutes
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fast, simple, and secure loan applications for Nigerians with competitive rates. 
            Join thousands who trust CrediFlow for their financial needs.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
            <Link to="/apply">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-accent hover:shadow-strong hover:scale-105 transition-all duration-300 rounded-full font-bold"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/calculator">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 rounded-full font-semibold"
              >
                Calculate Your Loan
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Quick Approval</h3>
              <p className="text-sm text-muted-foreground text-center">Get decision in 5 minutes</p>
            </div>

            <div className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-card via-card to-accent/5 border border-border/50 backdrop-blur-sm hover:border-accent/50 hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-xl">Best Rates</h3>
              <p className="text-sm text-muted-foreground text-center">Competitive interest rates</p>
            </div>

            <div className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-xl">100% Secure</h3>
              <p className="text-sm text-muted-foreground text-center">Bank-level encryption</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
