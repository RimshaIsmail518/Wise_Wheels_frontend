export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* Main Heading */}
        <h1 className="text-[48px] leading-tight font-bold tracking-tight text-foreground">
          Welcome to Wise Wheels
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] leading-relaxed font-normal text-secondary">
          Your trusted car marketplace
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <button className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary-hover hover:shadow-lg">
            Get Started
          </button>
          <button className="rounded-lg border-2 border-border-primary px-6 py-3 text-base font-semibold text-primary transition-all duration-200 hover:bg-background-secondary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
