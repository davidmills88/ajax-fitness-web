"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please call us.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <p className="eyebrow">Message sent</p>
        <h2>Thanks — we’ll get back to you shortly.</h2>
        <p className="muted">
          Prefer to talk now? Call{" "}
          <a href={site.phoneHref}>{site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="stack-form" onSubmit={onSubmit} autoComplete="on">
      <div className="form-row">
        <label>
          First name
          <input name="firstName" type="text" required autoComplete="given-name" />
        </label>
        <label>
          Last name
          <input name="lastName" type="text" required autoComplete="family-name" />
        </label>
      </div>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" required autoComplete="tel" />
      </label>
      <label>
        Interested in
        <select name="interest" defaultValue="Membership">
          {site.interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={5} placeholder="Membership, day pass, or a tour — tell us what you need." />
      </label>
      {status === "error" ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
