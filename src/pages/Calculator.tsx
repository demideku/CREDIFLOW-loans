import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoanCalculator from "@/components/LoanCalculator";

const Calculator = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Loan Calculator
              </h1>
              <p className="text-lg text-muted-foreground">
                Calculate your monthly payments and see how much you can afford
              </p>
            </div>
            <LoanCalculator />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Calculator;
