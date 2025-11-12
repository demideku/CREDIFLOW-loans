import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Secure & Trustworthy",
      description: "Your data is protected with bank-level encryption and security measures."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize your needs and provide personalized loan solutions."
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Access the most competitive interest rates in the Nigerian market."
    },
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Get loan approvals within 24-48 hours with our streamlined process."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About CrediFlow
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empowering Nigerians with fast, secure, and transparent financial solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    At CrediFlow, we're revolutionizing the lending industry in Nigeria by making loans accessible, 
                    transparent, and hassle-free. We believe everyone deserves access to fair financial services 
                    that help them achieve their dreams.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Founded with the vision of bridging the gap between traditional banking and modern financial needs, 
                    we leverage technology to provide quick loan approvals, competitive interest rates, and exceptional 
                    customer service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">₦5B+</div>
                  <div className="text-muted-foreground">Loans Disbursed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Approval Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
