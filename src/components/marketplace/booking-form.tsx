"use client";

import { useState } from "react";
import { uiContent } from "@/data/ui";

type BookingFormProps = {
  listingTitle: string;
};

export function BookingForm({ listingTitle }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-300">{uiContent.bookingForm.successEyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">{uiContent.bookingForm.successTitle}</h2>
        <p className="mt-3 text-sm text-slate-300">
          {uiContent.bookingForm.successDescriptionPrefix} {listingTitle} {uiContent.bookingForm.successDescriptionSuffix}
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setIsSubmitted(true);
      }}
    >
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        {uiContent.bookingForm.fields.fullName}
        <input
          required
          type="text"
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
          placeholder={uiContent.bookingForm.placeholders.fullName}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        {uiContent.bookingForm.fields.email}
        <input
          required
          type="email"
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
          placeholder={uiContent.bookingForm.placeholders.email}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        {uiContent.bookingForm.fields.preferredDate}
        <input
          required
          type="date"
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        {uiContent.bookingForm.fields.notes}
        <textarea
          rows={4}
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
          placeholder={uiContent.bookingForm.placeholders.notes}
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        {uiContent.bookingForm.submitLabel}
      </button>
    </form>
  );
}
