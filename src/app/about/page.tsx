import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Manifesto | OTHO Realty',
  description: 'OTHO exists because the Indian real estate market needed an honest voice. Read our fiduciary commitments.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40 px-6 lg:px-16 max-w-4xl mx-auto">
      <div className="mb-24 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
          The Manifesto
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl text-foreground -tracking-[0.02em] leading-tight mb-12">
          OTHO exists because the Indian real estate market needed an honest voice.
        </h1>
      </div>

      <div className="space-y-16 lg:space-y-24 font-sans text-lg lg:text-xl text-foreground font-light leading-relaxed">
        <section>
          <p className="mb-6">
            For too long, the industry has operated on a foundation of information asymmetry, aggressive sales tactics, and transactional urgency. The objective was never to counsel the buyer, but to liquidate inventory.
          </p>
          <p>
            We fundamentally reject this model. High-value real estate—whether a luxury residence, a commercial floor plate, or a land parcel—is not merely a product. It is a critical financial and lifestyle decision that demands strategic clarity, analytical rigor, and objective counsel.
          </p>
        </section>

        <section className="bg-muted p-10 lg:p-16 rounded-lg border border-border">
          <h2 className="font-serif text-3xl text-foreground mb-10 text-center">Our Fiduciary Commitments</h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-mono text-sm tracking-widest text-accent mb-4">01. RESEARCH OVER RHETORIC</h3>
              <p className="text-base text-muted-foreground">
                We base our recommendations on infrastructure milestones, zoning regulations, and data-driven market cycles—not marketing brochures or manufactured scarcity. We do not invent statistics or purchase fake awards.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm tracking-widest text-accent mb-4">02. ADVISORY OVER BROKERAGE</h3>
              <p className="text-base text-muted-foreground">
                We act as a compass, not a megaphone. Our role is to evaluate risk, verify claims, negotiate terms, and structure acquisitions that align with your long-term objectives. If an asset does not meet our institutional criteria, we will advise you against it.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm tracking-widest text-accent mb-4">03. LONG-TERM VALUE PRESERVATION</h3>
              <p className="text-base text-muted-foreground">
                Real estate is an illiquid asset. We focus on structural fundamentals—developer covenant, legal title, layout density, and spatial efficiency—that ensure your acquisition compounds in value across decades.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-foreground mb-6">Why Advisory, Not Brokerage?</h2>
          <p className="mb-6">
            A broker facilitates a transaction; an advisor safeguards your equity. An advisor examines the development agreement, questions the floor space index (FSI) logic, evaluates the entry pricing relative to the micro-market, and models the exit strategy. 
          </p>
          <p>
            By adopting an institutional framework, OTHO elevates real estate from a speculative gamble into a disciplined asset allocation. We curate. We counsel. We protect.
          </p>
        </section>

        <section className="border-t border-border pt-16">
          <h2 className="font-serif text-3xl text-foreground mb-8">The Headquarters</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <p className="mb-6">
                Our operations are anchored in Kokapet, at the very nexus of Hyderabad's premier growth corridor. This proximity ensures we maintain ground-level intelligence on the most consequential market in South India.
              </p>
              <address className="not-italic font-mono text-sm text-muted-foreground leading-loose">
                <strong className="text-foreground font-normal block mb-2">OTHO Advisory & Consultancy</strong>
                E5, Tapasya Apartments,<br />
                behind ICICI Bank,<br />
                opp. Rockwell International School,<br />
                Kokapet, Hyderabad,<br />
                Telangana 500075
              </address>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
