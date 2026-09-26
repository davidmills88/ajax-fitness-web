"use client";

import { FormEvent, useState } from "react";
import {
  membershipPlans,
  site,
  temporaryPasses,
  type Plan,
  type PlanId,
} from "@/lib/site";

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
      <PlanGroup
        legend="Membership"
        plans={membershipPlans}
        selected={plan}
        onSelect={setPlan}
      />
      <PlanGroup
        legend="Temporary passes"
        plans={temporaryPasses}
        selected={plan}
        onSelect={setPlan}
      />
      <button className="button" type="submit">
        Continue to Stripe Checkout
      </button>
      <p className="muted">
        Online checkout is coming soon. To join now, call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>
      {message ? (
        <p className="form-note" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function PlanGroup({
  legend,
  plans,
  selected,
  onSelect,
}: {
  legend: string;
  plans: Plan[];
  selected: PlanId;
  onSelect: (id: PlanId) => void;
}) {
  return (
    <fieldset className="plan-picker">
      <legend className="plan-picker-legend">{legend}</legend>
      {plans.map((item) => (
        <label
          key={item.id}
          className={selected === item.id ? "plan-option is-selected" : "plan-option"}
        >
          <input
            type="radio"
            name="plan"
            value={item.id}
            checked={selected === item.id}
            onChange={() => onSelect(item.id)}
          />
          <span>
            <strong>{item.name}</strong>
            <span className="plan-price">
              {item.price}
              {item.cadence ? <span>{item.cadence}</span> : null}
            </span>
            <span className="muted">{item.detail}</span>
          </span>
        </label>
      ))}
    </fieldset>
  );
}
