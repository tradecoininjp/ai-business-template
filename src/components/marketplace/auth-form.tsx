import { uiContent } from "@/data/ui";

type AuthFormProps = {
  title: string;
  subtitle: string;
  submitLabel: string;
  secondaryText: string;
  secondaryLinkLabel: string;
  secondaryHref: string;
  includeBusinessName?: boolean;
};

export function AuthForm({
  title,
  subtitle,
  submitLabel,
  secondaryText,
  secondaryLinkLabel,
  secondaryHref,
  includeBusinessName = false,
}: AuthFormProps) {
  return (
    <section className="mx-auto w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg">
      <h1 className="text-2xl font-semibold tracking-tight text-white">{title}</h1>
      <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
      <form className="mt-6 space-y-4">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          {uiContent.authForm.labels.email}
          <input
            type="email"
            required
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            placeholder={uiContent.authForm.placeholders.email}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          {uiContent.authForm.labels.password}
          <input
            type="password"
            required
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            placeholder={uiContent.authForm.placeholders.password}
          />
        </label>
        {includeBusinessName ? (
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            {uiContent.authForm.labels.businessName}
            <input
              type="text"
              required
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
              placeholder={uiContent.authForm.placeholders.businessName}
            />
          </label>
        ) : null}
        <button
          type="button"
          className="w-full rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          {submitLabel}
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-400">
        {secondaryText} <a href={secondaryHref} className="font-semibold text-cyan-300 hover:text-cyan-200">{secondaryLinkLabel}</a>
      </p>
    </section>
  );
}
