export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For engineering managers at 20+ person companies
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Turn Slack chaos into{" "}
          <span className="text-[#58a6ff]">executive summaries</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Standup Summarizer monitors your team&apos;s Slack channels and delivers
          crisp daily and weekly reports — progress, blockers, and decisions —
          straight to your inbox. No more reading 500 messages to write your
          Friday update.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $29 / month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to connect Slack.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 text-sm">
          {["Slack OAuth", "OpenAI summaries", "Daily & weekly digests", "Blocker detection", "Decision tracking", "Email delivery"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Up to 10 Slack channels monitored",
              "Daily & weekly AI summaries",
              "Blocker & decision extraction",
              "Email + Slack delivery",
              "Unlimited team members",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">Which Slack channels does it monitor?</h3>
            <p className="text-[#8b949e] text-sm">After connecting via Slack OAuth you choose exactly which channels to monitor. You can add or remove channels at any time from your dashboard.</p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">How are the summaries generated?</h3>
            <p className="text-[#8b949e] text-sm">We use OpenAI&apos;s GPT-4o to read the day&apos;s messages and extract progress updates, blockers, and key decisions into a structured report. Your messages are never stored beyond the processing window.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Your subscription is managed through Lemon Squeezy and you can cancel with one click from the customer portal. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} Standup Summarizer. All rights reserved.
      </footer>
    </main>
  );
}
