# Project memory

## Product intent & audience

- Web-based invoice/sale system with print output for shop owners.
- Goal: produce professional printed invoices with correct formatting and branding.

## Brand personality & voice

- Practical, direct guidance; user-focused on visible print results.

## Visual design & UX direction

- Print layout must fit on a single page without content cutoff.
- Watermark logo: faint, centered on the printed page.
- Contact block below shop name: two phone numbers, email, Facebook name — each paired with small icons.
- Social media logos/icons included in contact section.
- Watermark/logo also appears below the print section.
- Adjustments driven by user feedback on printed output (opacity, contact appearance).

## Decisions, constraints & rationale

- Fix existing print formatting issues before adding new elements.
- Watermark opacity intentionally subtle; tunable if too faint or too strong.
- Contact icons kept small to preserve layout space on paper.
- Print preview is the primary validation method.

## Open questions & assumptions

- Exact logo asset and placement dimensions not yet specified.
- Preferred phone/email/Facebook formatting style on paper unconfirmed.
- Whether watermark should appear on every print or only certain document types is assumed (every print).
- Browser print CSS media queries may need tuning for cross-browser consistency.