export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-lg py-16">
        {/* Name */}
        <h1 className="font-[family-name:var(--font-heading)] text-5xl text-warm-dark tracking-tight font-medium">
          Jason Osteen
        </h1>

        {/* Identity */}
        <p className="mt-4 text-lg text-warm-medium leading-relaxed">
          I build things I actually want to use.
        </p>

        {/* M stripe divider */}
        <div className="mt-10 mb-10 flex gap-[3px]">
          <div className="h-[3px] w-8 bg-m-blue rounded-full" />
          <div className="h-[3px] w-8 bg-m-dark-blue rounded-full" />
          <div className="h-[3px] w-8 bg-m-red rounded-full" />
        </div>

        {/* Personal */}
        <div className="space-y-2 text-sm text-warm-medium">
          <p>
            <span className="text-warm-light">interests</span> — cars, coffee, and games
          </p>
          <p>
            <span className="text-warm-light">learning</span> — how to be a better engineer
          </p>
          <p>
            <span className="text-warm-light">based in</span> — the Bay Area
          </p>
        </div>
        {/* Projects */}
        <div className="mt-10 space-y-2 text-sm">
          <p className="text-warm-light text-xs uppercase tracking-widest mb-3">building</p>
          <p>
            <a
              href="https://weft.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-dark font-medium hover:underline"
            >
              weft.us
            </a>
            <span className="text-warm-medium"> — fitness tools built around understanding, not guesswork</span>
          </p>
          <p>
            <span className="text-warm-lighter">wip · </span>
            <a
              href="https://github.com/neppyindigo/forge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-dark font-medium hover:underline"
            >forge</a>
            <span className="text-warm-medium"> — a system for turning ideas into shipped projects</span>
          </p>
        </div>

        {/* Links */}
        <div className="mt-10 flex gap-6 text-sm">
          <a
            href="https://x.com/neppyindigo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-medium transition-colors hover:text-warm-dark hover:underline"
          >
            X
          </a>
          <a
            href="https://github.com/neppyindigo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-medium transition-colors hover:text-warm-dark hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jto24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-medium transition-colors hover:text-warm-dark hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://substack.com/@neppyindigo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-medium transition-colors hover:text-warm-dark hover:underline"
          >
            Substack
          </a>
        </div>
      </div>
    </main>
  );
}
