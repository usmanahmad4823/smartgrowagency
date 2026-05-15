"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

const services = [
  "Web Design & Development",
  "AI Automation Services",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Graphic Design",
  "Video Editing & Content Creation",
  "Paid Advertising",
  "Branding & Brand Identity",
  "App Development",
  "Email Marketing",
  "Other / Not sure yet",
];

const budgets = ["Under PKR 100k", "PKR 100k – 300k", "PKR 300k – 500k", "PKR 500k – 1M", "PKR 1M – 3M", "PKR 3M+", "Prefer to discuss"];

const referrals = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Instagram / Facebook",
  "YouTube",
  "Event / Conference",
  "Other",
];

type FieldErrors = Partial<Record<keyof ContactFormInput, string>>;

export function ContactForm() {
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<ContactFormInput>({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    referral: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    firstFieldRef.current?.focus();
  }, []);

  const onChange =
    (field: keyof ContactFormInput) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setValues((prev) => ({ ...prev, [field]: e.target.value }));
      };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key as keyof ContactFormInput]) {
          fieldErrors[key as keyof ContactFormInput] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json: { success?: boolean; message?: string } = await res.json();
      if (!res.ok || !json.success) {
        setServerError(json.message ?? "Something went wrong. Please try again.");
        return;
      }
      setSuccess(true);
      setValues({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        referral: "",
      });
    } catch {
      setServerError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card space-y-4 p-8 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(48,209,88,0.15)] text-[#30d158]">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em]">You are officially on our radar</h2>
        <p className="text-[16px] text-[var(--text-secondary)]">
          We will be in touch within 24 hours with next steps. If your timeline is urgent, message us on WhatsApp from
          the floating button.
        </p>
        <Button type="button" variant="ghost" onClick={() => setSuccess(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-5 p-8" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-[var(--text-tertiary)]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            ref={firstFieldRef}
            className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 text-[12px] text-[var(--text-primary)]"
            value={values.name}
            onChange={onChange("name")}
            autoComplete="name"
          />
          {errors.name ? <p className="text-[13px] text-[#ff453a]">{errors.name}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-[var(--text-tertiary)]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 text-[12px] text-[var(--text-primary)]"
            value={values.email}
            onChange={onChange("email")}
            autoComplete="email"
          />
          {errors.email ? <p className="text-[13px] text-[#ff453a]">{errors.email}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[var(--text-tertiary)]" htmlFor="phone">
          Phone (optional)
        </label>
        <input
          id="phone"
          className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 text-[12px] text-[var(--text-primary)]"
          value={values.phone}
          onChange={onChange("phone")}
          autoComplete="tel"
        />
        {errors.phone ? <p className="text-[13px] text-[#ff453a]">{errors.phone}</p> : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-[var(--text-tertiary)]" htmlFor="service">
            Service interested in
          </label>
          <select
            id="service"
            className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 text-[12px] text-[var(--text-primary)]"
            value={values.service}
            onChange={onChange("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service ? <p className="text-[13px] text-[#ff453a]">{errors.service}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-[var(--text-tertiary)]" htmlFor="budget">
            Budget range
          </label>
          <select
            id="budget"
            className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 text-[12px] text-[var(--text-primary)]"
            value={values.budget}
            onChange={onChange("budget")}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.budget ? <p className="text-[13px] text-[#ff453a]">{errors.budget}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[var(--text-tertiary)]" htmlFor="message">
          Project description
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 text-[12px] text-[var(--text-primary)]"
          value={values.message}
          onChange={onChange("message")}
        />
        {errors.message ? <p className="text-[13px] text-[#ff453a]">{errors.message}</p> : null}
      </div>

      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[var(--text-tertiary)]" htmlFor="referral">
          How did you hear about us?
        </label>
        <select
          id="referral"
          className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 text-[12px] text-[var(--text-primary)]"
          value={values.referral}
          onChange={onChange("referral")}
        >
          <option value="" disabled>
            Select an option
          </option>
          {referrals.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.referral ? <p className="text-[13px] text-[#ff453a]">{errors.referral}</p> : null}
      </div>

      {serverError ? <p className="text-[14px] text-[#ff453a]">{serverError}</p> : null}

      <Button type="submit" variant="primary" className="w-full justify-center md:w-auto" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending
          </>
        ) : (
          "Submit project details"
        )}
      </Button>
    </form>
  );
}
