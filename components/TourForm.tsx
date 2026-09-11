"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function TourForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(json.error || "Please call us to book a tour.");
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
        <p className="eyebrow">Tour request received</p>
        <h2>We’ll confirm a time shortly.</h2>
        <p className="muted">
          Or call <a href={site.phoneHref}>{site.phoneDisplay}</a> to schedule
          now.
        </p>
      </div>
    );
  }

  return (
    <form className="stack-form" onSubmit={onSubmit}>
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
      <div className="form-row">
        <label>
          Preferred date
          <input name="date" type="date" required />
        </label>
        <label>
          Preferred time
          <input name="time" type="time" required />
        </label>
      </div>
      <label>
        Notes
        <textarea name="notes" rows={4} placeholder="Anything we should know before you visit." />
      </label>
      {status === "error" ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a tour"}
      </button>
      <p className="muted">
        This is a Phase 1 stub. We’ll wire scheduling when membership checkout
        moves off Wellyx.
      </p>
    </form>
  );
}
