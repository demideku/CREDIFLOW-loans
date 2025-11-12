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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose CrediFlow?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've streamlined the lending process to make it fast, secure, and transparent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-border bg-card hover:border-primary/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-muted-foreground">Nigerian Customers</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">₦2B+</div>
            <div className="text-muted-foreground">Loans Disbursed</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Approval Rate</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5 min</div>
            <div className="text-muted-foreground">Average Approval</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
