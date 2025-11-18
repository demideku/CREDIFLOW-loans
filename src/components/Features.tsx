import { Shield, Zap, CreditCard, TrendingUp, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Decisions",
      description: "Get loan approval decisions in just 5 minutes with our automated system.",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with 256-bit encryption and secure servers.",
    },
    {
      icon: CreditCard,
      title: "Flexible Repayment",
      description: "Choose repayment terms from 6 to 60 months that fit your budget.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Enjoy some of the most competitive interest rates in the market.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Apply anytime, anywhere with our fully digital application process.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our loan specialists are here to help you every step of the way.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Why Choose CrediFlow?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've streamlined the lending process to make it fast, secure, and transparent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-10 rounded-3xl border-2 border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">5,000+</div>
            <div className="text-muted-foreground font-semibold">Nigerian Customers</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">₦2B+</div>
            <div className="text-muted-foreground font-semibold">Loans Disbursed</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">98%</div>
            <div className="text-muted-foreground font-semibold">Approval Rate</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">5 min</div>
            <div className="text-muted-foreground font-semibold">Average Approval</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
