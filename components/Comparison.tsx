import { Check, Minus } from "lucide-react";
import { Container } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

type Cell = boolean | string;

const tiers = ["Starter", "Growth", "Scale"] as const;

const rows: [string, Cell, Cell, Cell][] = [
  ["Lead Generation", true, true, true],
  ["Lead Lists", true, true, true],
  ["AI Agent", true, true, true],
  ["Lead Qualification", true, true, true],
  ["Follow-Up", "Basic", "Advanced", "Advanced"],
  ["Inbound AI", false, true, true],
  ["Outbound AI", false, true, true],
  ["Appointment Booking", false, true, true],
  ["CRM Automation", "Basic", "Advanced", "Advanced"],
  ["Multiple AI Agents", false, false, true],
  ["Custom Integrations", false, false, true],
];

function CellValue({ value }: { value: Cell }) {
  if (value === true)
    return (
      <>
        <Check className="mx-auto size-4 text-accent-soft" aria-hidden />
        <span className="sr-only">Included</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Minus className="mx-auto size-4 text-white/20" aria-hidden />
        <span className="sr-only">Not included</span>
      </>
    );
  return <span className="text-[13px] text-ink/80">{value}</span>;
}

export function Comparison() {
  return (
    <section aria-labelledby="compare-title" className="relative bg-surface/40 pb-28 sm:pb-36">
      <Container>
        <Reveal>
          <h2 id="compare-title" className="text-center text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
            Compare plans
          </h2>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-line bg-canvas/70">
            <table className="w-full table-fixed border-collapse text-left">
              <caption className="sr-only">Feature comparison of Starter, Growth, and Scale plans</caption>
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="w-[40%] px-4 py-5 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-muted sm:px-7">
                    Feature
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t}
                      scope="col"
                      className={`px-2 py-5 text-center text-sm font-semibold ${t === "Growth" ? "bg-accent/[0.06] text-ink" : "text-ink/85"}`}
                    >
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, ...cells]) => (
                  <tr key={label} className="border-b border-line last:border-b-0 transition-colors hover:bg-white/[0.02]">
                    <th scope="row" className="px-4 py-4 text-[13.5px] font-normal text-ink/85 sm:px-7 sm:text-[15px]">
                      {label}
                    </th>
                    {cells.map((c, i) => (
                      <td key={tiers[i]} className={`px-2 py-4 text-center ${tiers[i] === "Growth" ? "bg-accent/[0.06]" : ""}`}>
                        <CellValue value={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
