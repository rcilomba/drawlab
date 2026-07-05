"use client";

import { type FormEvent, useState } from "react";

import { ArrowIcon } from "@/components/arrow-icon";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type FormStatus = "idle" | "submitting" | "success" | "error";

function validateForm(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    errors.name = "Skriv venligst dit navn.";
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Skriv en gyldig e-mailadresse.";
  }

  if (message.length < 10) {
    errors.message = "Fortæl lidt mere om dit projekt.";
  }

  return errors;
}

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-foreground outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/30 focus:border-accent-secondary/60 focus:bg-white/[0.065] focus:shadow-[0_0_0_3px_rgba(56,189,248,0.1)]";

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    const encodedData = new URLSearchParams();
    formData.forEach((value, key) => {
      encodedData.append(key, String(value));
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-surface p-5 shadow-2xl shadow-black/20 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Udfyld ikke dette felt: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Navn <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Dit navn"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClassName}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-xs text-red-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            E-mail <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="navn@eksempel.dk"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClassName}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-xs text-red-300">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-white/80">
            Telefon <span className="text-white/35">(valgfrit)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Dit telefonnummer"
            className={fieldClassName}
          />
        </div>

        <div>
          <label
            htmlFor="project-type"
            className="text-sm font-medium text-white/80"
          >
            Hvad handler det om?
          </label>
          <select
            id="project-type"
            name="project-type"
            defaultValue=""
            className={`${fieldClassName} appearance-none`}
          >
            <option value="" disabled className="bg-surface">
              Vælg en mulighed
            </option>
            <option value="boligejer" className="bg-surface">
              Boligejer
            </option>
            <option value="husejer" className="bg-surface">
              Husejer
            </option>
            <option value="boligforening" className="bg-surface">
              Boligforening
            </option>
            <option value="kursus" className="bg-surface">
              Kursus
            </option>
            <option value="andet" className="bg-surface">
              Andet
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-white/80">
          Besked <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Fortæl kort om din idé, dine behov og hvor du er i processen."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClassName} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-xs text-red-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-white/40">
          Oplysningerne bruges kun til at besvare din henvendelse.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-w-40 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-[transform,opacity] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Sender..." : "Send besked"}
          {status !== "submitting" ? (
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          ) : null}
        </button>
      </div>

      <div aria-live="polite" className="mt-5 min-h-6 text-sm">
        {status === "success" ? (
          <p className="text-emerald-300">
            Tak for din besked. Vi vender tilbage hurtigst muligt.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-red-300">
            Beskeden kunne ikke sendes. Prøv igen eller skriv direkte til
            info@drawlab.dk.
          </p>
        ) : null}
      </div>
    </form>
  );
}

