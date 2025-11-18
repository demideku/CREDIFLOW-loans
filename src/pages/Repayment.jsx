import React from "react";
import { useParams } from "react-router-dom";

export default function Repayment() {
  const { id } = useParams();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Repayment</h1>
        <p className="mt-2 text-muted-foreground">Viewing repayment details for application ID: <span className="font-medium">{id}</span></p>
      </section>
    </main>
  );
}
