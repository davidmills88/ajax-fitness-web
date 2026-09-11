"use client";

import { FormEvent, useState } from "react";
import { site, type PlanId } from "@/lib/site";

const plans = [site.plans.monthly, site.plans.annual, site.plans.day];

export function JoinCheckout({ initialPlan }: { initialPlan?: PlanId }) {
  const [plan, setPlan] = useState<PlanId>(initialPlan ?? "monthly");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage("");

    const res = await fetch("/api/join/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    });
    const json = (await res.json()) as { message?: string };
    setMessage(
      json.message ||
        `Stripe Checkout is not live yet. Call ${site.phoneDisplay} to join.`,
    );
  }

  return (
    <form className="join-form" onSubmit={onSubmit}>
      <fieldset className="plan-picker">
        <legend className="sr-only">Choose a plan</legend>
        {plans.map((item) => (
          <label
            key={item.id}
            className={plan === item.id ? "plan-option is-selected" : "plan-option"}
          >
            <input
              type="radio"
              name="plan"
              value={item.id}
              checked={plan === item.id}
              onChange={() => setPlan(item.id)}
            />
            <span>
              <strong>{item.name}</strong>
              <span className="plan-price">
                {item.price}
                <span>{item.cadence}</span>
              </span>
              <span className="muted">{item.detail}</span>
            </span>
          </label>
        ))}
      </fieldset>
      <button className="button" type="submit">
        Continue to Stripe Checkout
      </button>
      <p className="muted">
        Checkout is a placeholder until Wellyx-out / Stripe is wired. To join
        now, call <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>
      {message ? (
        <p className="form-note" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
