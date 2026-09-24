import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-6 max-w-md mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="font-sans text-muted-foreground text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-8">
          <Link 
            href="/"
            className="font-mono text-sm uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
          >
            Return to Homepage &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
