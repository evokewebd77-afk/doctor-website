import {
  Award,
  ShieldCheck,
  Cpu,
  Microscope,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  Zap,
  Activity,
} from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'

const TECH_PILLARS = [
  {
    id: '01',
    title: 'NABL & ISO Certified Lab',
    desc: 'Adhering to strict international laboratory benchmarks, certified protocols, and gold-standard analyzer calibrations.',
    icon: Award,
    badge: 'Certified',
    border: 'border-blue-400/30',
    iconBg: 'bg-blue-500/20 text-blue-300',
  },
  {
    id: '02',
    title: 'Quality Assured Processes',
    desc: 'Multi-tier internal and external quality control checks on every batch to guarantee consistent reproducibility.',
    icon: ShieldCheck,
    badge: 'Standardized',
    border: 'border-teal-400/30',
    iconBg: 'bg-teal-500/20 text-teal-300',
  },
  {
    id: '03',
    title: 'Automated Analyzers & AI-Assisted Reporting',
    desc: 'Cutting-edge robotic handling and algorithm-assisted verification to eliminate human error and accelerate delivery.',
    icon: Cpu,
    badge: 'AI Powered',
    border: 'border-cyan-400/30',
    iconBg: 'bg-cyan-500/20 text-cyan-300',
  },
  {
    id: '04',
    title: 'Strict Sample Handling Protocols',
    desc: 'End-to-end barcoded tracking, cold-chain preservation, and contamination-free handling from draw to analysis.',
    icon: Microscope,
    badge: 'Zero Error',
    border: 'border-amber-400/30',
    iconBg: 'bg-amber-500/20 text-amber-300',
  },
  {
    id: '05',
    title: 'Expert Pathologist Review',
    desc: 'Every critical or abnormal value is cross-verified and signed off by experienced MD pathologists before dispatch.',
    icon: Stethoscope,
    badge: 'MD Verified',
    border: 'border-purple-400/30',
    iconBg: 'bg-purple-500/20 text-purple-300',
  },
]

const PRECISION_METRICS = [
  { value: '99.8%', label: 'Analytical Precision', note: 'Calibrated Daily', icon: Zap },
  { value: '100%', label: 'Barcoded Tracking', note: 'Zero Specimen Mix-up', icon: CheckCircle2 },
  { value: 'Fast', label: 'Report Turnaround', note: 'Same-Day Digital Delivery', icon: Activity },
]

export default function LabTechnology() {
  return (
    <section className={`${PAGE_MAX} py-10 sm:py-14 lg:py-16 w-full`}>
      <div className="relative overflow-hidden rounded-3xl border border-[#1e3a70] bg-gradient-to-br from-[#081734] via-[#0c224c] to-[#071530] p-6 sm:p-10 lg:p-12 shadow-[0_24px_70px_rgba(7,21,48,0.45)]">
        {/* Ambient atmospheric glows */}
        <div className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        {/* Header Section */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8 sm:mb-10 pb-8 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 backdrop-blur-md mb-3.5 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-bold tracking-[0.2em] text-[10px] sm:text-[11px] uppercase">
                Cutting Edge Technology
              </span>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Technology That Drives{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white">
                Precision
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-blue-100/80 text-sm sm:text-[15px] leading-relaxed">
              Our automated analyzers and AI-assisted reporting systems ensure every test is processed with maximum accuracy, speed, and clinical reliability.
            </p>
          </div>
        </div>

        {/* Quick Highlights / Precision Metrics */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {PRECISION_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/25 flex items-center justify-center shrink-0 text-cyan-300">
                <metric.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg sm:text-xl font-bold text-white leading-none">{metric.value}</span>
                  <span className="text-[10px] uppercase font-bold text-cyan-300 tracking-wider">{metric.note}</span>
                </div>
                <p className="text-xs text-blue-200/70 mt-1 font-medium">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Card Interactive Feature Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5">
          {TECH_PILLARS.map((pillar, index) => {
            const colSpan =
              index < 2
                ? 'md:col-span-3 lg:col-span-3'
                : index === 4
                ? 'md:col-span-6 lg:col-span-2'
                : 'md:col-span-3 lg:col-span-2'

            return (
              <div
                key={pillar.id}
                className={`${colSpan} group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.09] hover:shadow-[0_12px_32px_rgba(37,99,235,0.2)]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${pillar.iconBg} border ${pillar.border} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                        {pillar.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-blue-300/40">
                        {pillar.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-base sm:text-[17px] leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2 text-[11px] font-semibold text-cyan-300/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Standard Diagnostic Protocol</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
