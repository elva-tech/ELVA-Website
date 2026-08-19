import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { trackEvent } from "../utils/analytics";
import {
  formatINR,
  annualSaving,
  pricingModels,
  developmentPlans,
  careGroups,
  recurringComparison,
  enterpriseRequirements,
  additionalServices,
  usageBasedServices,
  engagementModels,
  paymentTerms,
  pricingFaqs
} from "../data/pricingConfig";
import "../styles/pricing-plans.css";

const PAGE_TITLE =
  "ELVA Service & Pricing Plans | Software Development & Digital Solutions";

const PAGE_DESCRIPTION =
  "Explore ELVA's software development, managed services, application support and custom engineering engagement models.";

/** Every CTA on this page leads to the contact page, and reports the click. */
function QuoteLink({ children, event = "pricing_cta_click", label, variant = "primary" }) {
  return (
    <Link
      to="/contact"
      className={`pp-btn pp-btn-${variant}`}
      onClick={() => trackEvent(event, { label })}
    >
      {children}
      <span className="pp-arrow" aria-hidden="true">&rarr;</span>
    </Link>
  );
}

function PriceTag({ prefix, price, billingLabel }) {
  return (
    <div className="pp-price">
      {prefix && <span className="pp-price-prefix">{prefix}</span>}
      <span className="pp-price-value">{formatINR(price)}</span>
      <span className="pp-price-billing">{billingLabel}</span>
    </div>
  );
}

/** Website plans are annual only; application/platform plans show both cycles. */
function RecurringPrice({ monthly, annual }) {
  const saving = annualSaving(monthly, annual);

  if (!monthly) {
    return (
      <div className="pp-price">
        <span className="pp-price-value">{formatINR(annual)}</span>
        <span className="pp-price-billing">/ year</span>
      </div>
    );
  }

  return (
    <div className="pp-price">
      <span className="pp-price-value">{formatINR(monthly)}</span>
      <span className="pp-price-billing">/ month</span>
      <span className="pp-price-alt">or {formatINR(annual)} / year</span>
      {saving && (
        <span className="pp-price-save">Save {formatINR(saving)}</span>
      )}
    </div>
  );
}

export default function PricingPlans() {

  const pageRef = useRef(null);

  /* SEO metadata (spec 29) — applied without adding a helmet dependency. */
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    const previousDescription = meta.getAttribute("content");
    meta.setAttribute("content", PAGE_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (createdMeta) {
        meta.remove();
      } else if (previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, []);

  /* Page + section view events (spec 28). */
  useEffect(() => {
    trackEvent("pricing_plans_view");

    const sections = pageRef.current?.querySelectorAll("[data-view-event]");
    if (!sections?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          trackEvent(entry.target.dataset.viewEvent);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* Reveal animations, matching the GSAP pattern used elsewhere on the site. */
  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".pp-hero > *", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12
      });

      gsap.utils.toArray(".pp-reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%"
          }
        });
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  return (
    <div ref={pageRef} className="pp-container">

      {/* 3 — HERO */}
      <header className="pp-hero">
        <span className="pp-eyebrow">Pricing Plans</span>
        <h1 className="pp-title">Build What Your Business Needs</h1>
        <p className="pp-lead">
          From a professional website to a complete business platform, ELVA
          helps businesses build, launch and operate digital products without
          unnecessary complexity.
        </p>
        <p className="pp-lead-secondary">
          One-time development. Transparent recurring services.
          Flexible engagement.
        </p>
        <div className="pp-hero-actions">
          {/* <QuoteLink event="pricing_quote_click" label="hero">
            Get a Quote
          </QuoteLink> */}
          <QuoteLink
            event="pricing_contact_click"
            label="hero"
            variant="ghost"
          >
            Talk to ELVA
          </QuoteLink>
        </div>
      </header>

      {/* 4 — PRICING MODEL INTRODUCTION */}
      <section className="pp-section">
        <h2 className="pp-section-title pp-reveal">How ELVA Pricing Works</h2>

        <div className="pp-grid pp-grid-3">
          {pricingModels.map((model) => (
            <article key={model.tag} className="pp-card pp-model-card pp-reveal">
              <span className="pp-tag">{model.tag}</span>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              {model.examples.length > 0 && (
                <div className="pp-chips">
                  {model.examples.map((example) => (
                    <span key={example}>{example}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 5, 6, 7 — ONE-TIME DEVELOPMENT */}
      <section className="pp-section" data-view-event="pricing_development_view">
        <span className="pp-step pp-reveal">01 — Build</span>
        <h2 className="pp-section-title pp-reveal">One-Time Development</h2>
        <p className="pp-section-intro pp-reveal">
          Every ELVA project begins with a defined scope. The development fee
          covers the agreed design, engineering, testing and initial production
          deployment.
        </p>

        <div className="pp-grid pp-grid-3">
          {developmentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`pp-card pp-plan-card pp-reveal${plan.label ? " pp-card-featured" : ""}`}
            >
              {plan.label && <span className="pp-label">{plan.label}</span>}

              <span className="pp-card-category">{plan.category}</span>
              <h3>{plan.name}</h3>
              <p className="pp-card-desc">{plan.description}</p>

              <PriceTag
                prefix={plan.pricePrefix}
                price={plan.price}
                billingLabel={plan.billingLabel}
              />

              <p className="pp-list-label">{plan.featuresLabel}</p>
              <ul className="pp-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {plan.useCases.length > 0 && (
                <>
                  <p className="pp-list-label">Typical use cases</p>
                  <div className="pp-chips">
                    {plan.useCases.map((useCase) => (
                      <span key={useCase}>{useCase}</span>
                    ))}
                  </div>
                </>
              )}

              <QuoteLink
                event="pricing_quote_click"
                label={plan.id}
                variant="outline"
              >
                {plan.cta}
              </QuoteLink>
            </article>
          ))}
        </div>

        <p className="pp-disclaimer pp-reveal">
          Starting prices are indicative and are not final quotations. Final
          development pricing depends on scope, number of applications,
          features, integrations, user roles, infrastructure and delivery
          requirements.
        </p>
      </section>

      {/* 8–13 — ELVA MANAGED SERVICES */}
      <section className="pp-section" data-view-event="pricing_recurring_view">
        <span className="pp-step pp-reveal">02 — Operate</span>
        <h2 className="pp-section-title pp-reveal">ELVA Managed Services</h2>
        <p className="pp-section-intro pp-reveal">
          Building your product is only the beginning. ELVA can continue to
          host, operate, maintain and support your digital product after launch.
          Recurring plans are based on the type and operational complexity of
          the product.
        </p>

        {careGroups.map((group) => (
          <div key={group.id} className="pp-care-group">

            <div className="pp-care-head pp-reveal">
              <h3>{group.heading}</h3>
              <p>{group.description}</p>
              <p className="pp-billing-note">{group.billingNote}</p>
            </div>

            <div
              className={`pp-grid ${group.plans.length === 2 ? "pp-grid-2" : "pp-grid-3"}`}
            >
              {group.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`pp-card pp-plan-card pp-reveal${plan.label ? " pp-card-featured" : ""}`}
                >
                  {plan.label && <span className="pp-label">{plan.label}</span>}

                  <span className="pp-card-category">{group.heading}</span>
                  <h4>{plan.name}</h4>

                  <RecurringPrice monthly={plan.monthly} annual={plan.annual} />

                  <p className="pp-list-label">{plan.featuresLabel}</p>
                  <ul className="pp-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  {plan.recommendedFor && (
                    <p className="pp-recommended-for">
                      Recommended for: {plan.recommendedFor}
                    </p>
                  )}

                  <QuoteLink
                    event="pricing_quote_click"
                    label={`${group.id}-${plan.name}`}
                    variant="outline"
                  >
                    Get a Quote
                  </QuoteLink>
                </article>
              ))}
            </div>

            {group.footnote && (
              <p className="pp-footnote pp-reveal">{group.footnote}</p>
            )}

          </div>
        ))}

        {/* 13 — comparison table */}
        <div className="pp-reveal">
          <h3 className="pp-subsection-title">Recurring Pricing Comparison</h3>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Plan</th>
                  <th>Monthly</th>
                  <th>Annual</th>
                </tr>
              </thead>
              <tbody>
                {recurringComparison.map((row) => (
                  <tr key={`${row.product}-${row.plan}`}>
                    <td data-label="Product">{row.product}</td>
                    <td data-label="Plan">{row.plan}</td>
                    <td data-label="Monthly">
                      {row.monthly ? formatINR(row.monthly) : "—"}
                    </td>
                    <td data-label="Annual">
                      {row.annual ? formatINR(row.annual) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 14 — enterprise */}
        <div className="pp-card pp-enterprise pp-reveal">
          <h3>Enterprise &amp; Custom Support</h3>
          <p>
            Large or business-critical systems may require a support model
            designed around the customer's infrastructure, security, SLA and
            operational requirements.
          </p>

          <p className="pp-list-label">Possible requirements</p>
          <div className="pp-chips">
            {enterpriseRequirements.map((requirement) => (
              <span key={requirement}>{requirement}</span>
            ))}
          </div>

          <div className="pp-price">
            <span className="pp-price-value">Custom Quote</span>
          </div>

          <QuoteLink
            event="pricing_contact_click"
            label="enterprise"
            variant="outline"
          >
            Talk to ELVA
          </QuoteLink>
        </div>
      </section>

      {/* 15 — ADDITIONAL SERVICES */}
      <section className="pp-section" data-view-event="pricing_addon_view">
        <span className="pp-step pp-reveal">03 — Extend</span>
        <h2 className="pp-section-title pp-reveal">Extend Your Platform</h2>
        <p className="pp-section-intro pp-reveal">
          Add new capabilities whenever your business needs them.
        </p>

        <div className="pp-reveal">
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Additional Service</th>
                  <th>Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map((service) => (
                  <tr key={service.name}>
                    <td data-label="Additional Service">{service.name}</td>
                    <td data-label="Starting Price">
                      {formatINR(service.price)}
                      {service.plus ? "+" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="pp-footnote pp-reveal">
          Final pricing depends on technical complexity and third-party
          requirements.
        </p>
      </section>

      {/* 16 — USAGE-BASED SERVICES */}
      <section className="pp-section">
        <span className="pp-step pp-reveal">04 — Usage</span>
        <h2 className="pp-section-title pp-reveal">Usage-Based Services</h2>
        <p className="pp-section-intro pp-reveal">
          Some services depend on actual usage and are therefore billed
          separately from ELVA development and managed-service fees.
        </p>

        <div className="pp-grid pp-grid-3">
          {usageBasedServices.map((service) => (
            <article key={service.title} className="pp-card pp-reveal">
              <h3>{service.title}</h3>
              <p className="pp-list-label">Examples</p>
              <div className="pp-chips">
                {service.examples.map((example) => (
                  <span key={example}>{example}</span>
                ))}
              </div>
              <p className="pp-usage-note">{service.note}</p>
            </article>
          ))}
        </div>

        {/* 17 — commercial notice */}
        <div className="pp-notice pp-reveal">
          <h3>ELVA Service Fees and Third-Party Usage Charges Are Separate</h3>
          <p>
            ELVA's development and managed-service fees cover the work and
            services provided by ELVA. Third-party infrastructure, API and
            usage charges are billed separately based on actual consumption.
          </p>
        </div>
      </section>

      {/* 18 — ENGAGEMENT MODELS */}
      <section className="pp-section">
        <span className="pp-step pp-reveal">05 — Engagement</span>
        <h2 className="pp-section-title pp-reveal">
          Choose the Right Engagement Model
        </h2>

        <div className="pp-grid pp-grid-3">
          {engagementModels.map((model) => (
            <article key={model.title} className="pp-card pp-reveal">
              <h3>{model.title}</h3>
              <p>{model.description}</p>

              {model.flow.length > 0 && (
                <ol className="pp-flow">
                  {model.flow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}

              {model.includes && (
                <>
                  <p className="pp-list-label">Includes potentially</p>
                  <ul className="pp-list">
                    {model.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              <p className="pp-list-label">Commercial model</p>
              <p className="pp-model-line">{model.model}</p>

              {model.bestFor.length > 0 && (
                <>
                  <p className="pp-list-label">Best for</p>
                  <div className="pp-chips">
                    {model.bestFor.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 19 — PAYMENT TERMS */}
      <section className="pp-section">
        <span className="pp-step pp-reveal">06 — Payment</span>
        <h2 className="pp-section-title pp-reveal">Payment Terms</h2>

        <div className="pp-grid pp-grid-3">
          {paymentTerms.map((tier) => (
            <article key={tier.range} className="pp-card pp-reveal">
              <h3 className="pp-terms-range">{tier.range}</h3>
              <ul className="pp-list">
                {tier.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pp-footnote pp-reveal">
          Exact payment milestones will be defined in the project proposal and
          agreement. Development fees are non-refundable once development has
          commenced, subject to the terms of the signed agreement.
        </p>
      </section>

      {/* 20 — FAQ */}
      <section className="pp-section">
        <span className="pp-step pp-reveal">07 — FAQ</span>
        <h2 className="pp-section-title pp-reveal">Frequently Asked Questions</h2>

        <div className="pp-faq pp-reveal">
          {pricingFaqs.map((faq) => (
            <details
              key={faq.q}
              className="pp-faq-item"
              onToggle={(e) => {
                if (e.currentTarget.open) {
                  trackEvent("pricing_faq_open", { question: faq.q });
                }
              }}
            >
              <summary>
                {faq.q}
                <span className="pp-faq-icon" aria-hidden="true"></span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 21 — FINAL CTA */}
      <section className="pp-final-cta pp-reveal">
        <h2>Have a Project in Mind?</h2>
        <p>
          Tell us what you're trying to build. We'll understand your
          requirements, recommend the right approach and provide a detailed
          proposal.
        </p>
        <div className="pp-hero-actions">
          {/* <QuoteLink
            event="pricing_quote_click"
            label="final"
            variant="invert"
          >
            Get a Quote
          </QuoteLink> */}
          <QuoteLink
            event="pricing_contact_click"
            label="final"
            variant="invert-ghost"
          >
            Talk to ELVA
          </QuoteLink>
        </div>
      </section>

    </div>
  );
}
