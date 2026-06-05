// Configure your quote here
const QUOTE = {
  text: "The best way to predict the future is to invent it.",
  author: "Alan Kay",
  context: "Computer Scientist & Visionary",
};

export default function QuoteSection() {
  return (
    <section className="relative py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect p-12 md:p-16 rounded-2xl text-center border-2 border-(--border-color)">
          <svg
            className="w-16 h-16 mx-auto mb-6 text-accent opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>

          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground mb-6 leading-relaxed">
            &ldquo;{QUOTE.text}&rdquo;
          </blockquote>

          <div className="text-lg text-(--foreground-secondary)">
            <p className="font-semibold gradient-text">- {QUOTE.author}</p>
            <p className="text-sm mt-1">{QUOTE.context}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
