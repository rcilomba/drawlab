type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[76rem] items-center px-5 py-24 sm:px-8 lg:px-10">
      <div className="max-w-4xl">
        <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-accent-secondary uppercase">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}

