import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-quest.jpg";
import { SiteShell, TOPICS } from "@/components/vq/SiteShell";
import { InteractivePhoneSimulator } from "@/components/vq/screens";
import {
  Zap,
  Coffee,
  Target,
  Sprout,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Quest — Less scrolling. More living. Real-World Social Quests." },
      {
        name: "description",
        content:
          "Vibe Quest turns everyday life into real-world quests: meet people, build skills, earn XP and unlock rewards at local places in Cyprus.",
      },
      { property: "og:title", content: "Vibe Quest — Less scrolling. More living." },
      {
        property: "og:description",
        content:
          "Real-world quests, skill matching, XP and a QR-powered local partner ecosystem. A reason to go outside.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vibequest.vercel.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vibequest.vercel.app/" }],
  }),

  component: Landing,
});

function Landing() {
  // Business ROI Calculator State
  const [visitors, setVisitors] = useState<number>(150);
  const [ticketSize, setTicketSize] = useState<number>(12);
  const projectedRevenue = Math.round(visitors * ticketSize * 0.85);

  return (
    <SiteShell>
      {/* HERO SECTION */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            MOBILE SOCIAL ADVENTURE PLATFORM
          </div>

          <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">Less scrolling.</span>
            <br />
            More living.
            <br />
            <span className="text-slate-200">More growing.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed sm:text-xl">
            Vibe Quest turns everyday life into meaningful real-world experiences — connecting
            people through fun skill quests, coffee jams, photo shoots, and local venue rewards.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/app"
              className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-extrabold text-slate-950 shadow-glow-cyan transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Full App Simulator
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/flow"
              className="glass-card rounded-full px-8 py-4 text-sm font-bold text-white hover:border-cyan-400/50 hover:bg-white/10"
            >
              See Core Quest Flow
            </Link>
          </div>

          {/* Key Metrics Grid */}
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["18–32", "Core Audience"],
              ["3", "Ecosystem Layers"],
              ["Cyprus", "Launch Market"],
            ].map(([v, l]) => (
              <div key={l} className="glass-card rounded-2xl p-4 text-center border border-white/10">
                <dt className="font-display text-xl font-bold text-cyan-400">{v}</dt>
                <dd className="mt-1 text-xs font-semibold text-slate-400">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero Interactive Phone Simulator Stage */}
        <div className="relative flex justify-center lg:col-span-5">
          {/* Floating pill badges around the phone */}
          <div className="pointer-events-none absolute -left-6 top-10 z-20 hidden rounded-2xl border border-cyan-400/30 bg-slate-900/90 p-3 shadow-glow-cyan backdrop-blur-xl sm:block animate-float-slow">
            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-cyan-500/20 p-1.5 text-cyan-400">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-cyan-400">Quest Verified</p>
                <p className="text-xs font-bold text-white">+120 XP · Sunset Photography</p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-6 bottom-16 z-20 hidden rounded-2xl border border-amber-400/30 bg-slate-900/90 p-3 shadow-glow-gold backdrop-blur-xl sm:block animate-float-delayed">
            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-amber-500/20 p-1.5 text-amber-400">
                <Coffee className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-amber-400">Reward Unlocked</p>
                <p className="text-xs font-bold text-white">Free Espresso @ Kordon Cafe</p>
              </div>
            </div>
          </div>

          {/* Interactive Phone Simulator */}
          <InteractivePhoneSimulator />
        </div>
      </section>

      {/* LIVE QUEST RADAR BANNER */}
      <section className="relative my-12 border-y border-white/10 bg-slate-950/60 py-16 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-400">
                REAL-TIME SOCIAL ENGINE
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Turn your city into an active quest map.
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                No endless scrolling. Vibe Quest scans your local Cyprus area for real-world groups, photo walks, skill swaps, and coffee meetups happening right now.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <div>
                  <p className="font-display text-2xl font-bold text-cyan-400">45+</p>
                  <p className="text-xs text-slate-400">Weekly Quests</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="font-display text-2xl font-bold text-orange-400">12</p>
                  <p className="text-xs text-slate-400">Cyprus Partners</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="font-display text-2xl font-bold text-amber-400">94%</p>
                  <p className="text-xs text-slate-400">Show-up Rate</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900 p-6 shadow-glow-cyan lg:col-span-6">
              <img
                src={heroImage}
                alt="Vibe Quest Cyprus adventurers at golden hour"
                className="w-full rounded-2xl object-cover opacity-80"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-bold text-white">Karaoğlanoğlu Beach Shoot</p>
                  <p className="text-[11px] text-slate-400">Cyprus · 4 Adventurers Joined</p>
                </div>
                <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-extrabold text-slate-950">
                  +120 XP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID FEATURE SHOWCASE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            THE ARCHITECTURE
          </p>
          <h2 className="mt-3 font-display text-3xl font-black text-white sm:text-5xl">
            Built for real connection & growth.
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-400">
            Four core pillars designed to replace digital burnout with offline adventures.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {/* Card 1: Skill Matcher */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-7 hover:border-cyan-400/50 hover:shadow-glow-cyan">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Skill Matching Engine
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Match with peers, guides, or certified coaches based on skill level, location proximity, and vibe preference.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Guitar Open Chords Match</span>
                <span className="text-cyan-400">Match score: 98%</span>
              </div>
              <div className="mt-3 flex items-center justify-around gap-2 text-center text-xs">
                <div className="rounded-xl bg-white/5 p-2 w-full">
                  <p className="font-bold text-white">Deniz (You)</p>
                  <p className="text-[10px] text-slate-400">Lv 2 Novice</p>
                </div>
                <span className="text-cyan-400 font-bold">↔</span>
                <div className="rounded-xl bg-cyan-500/20 border border-cyan-400/30 p-2 w-full">
                  <p className="font-bold text-cyan-300">Alex M.</p>
                  <p className="text-[10px] text-cyan-400">Lv 3 Peer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: QR Partner Commerce */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-5 hover:border-amber-400/50 hover:shadow-glow-gold">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
              <Coffee className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              QR-Powered Local Rewards
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Verify attendance at partner cafes & gyms via QR codes to earn real XP and unlock food, drink & activity perks.
            </p>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4">
              <div>
                <p className="text-xs font-bold text-amber-300">Voucher Unlocked</p>
                <p className="text-sm font-extrabold text-white">Free Artisan Filter Coffee</p>
              </div>
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950">
                CLAIMED
              </span>
            </div>
          </div>

          {/* Card 3: Gamified XP Progression */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-5 hover:border-purple-400/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Gamified XP & Leveling
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Build your character in real life. Level up from Novice Explorer to Master Mentor with verified real-world proof.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-300">Level 9 Explorer</span>
                <span className="text-purple-400">2,480 XP</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>
            </div>
          </div>

          {/* Card 4: Anti-Burnout Social Proof */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-7 hover:border-orange-400/50 hover:shadow-glow-orange">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400">
              <Sprout className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Anti-Burnout Social Proof
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Designed explicitly to get you off screen and out into the real world. No infinite algorithmic feeds or doomscrolling.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="font-display text-3xl font-extrabold text-orange-400">-45%</p>
                <p className="text-xs text-slate-400">Daily Screen Time</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="font-display text-3xl font-extrabold text-cyan-400">4.2x</p>
                <p className="text-xs text-slate-400">Real Meetups / Month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B BUSINESS PARTNER ROI CALCULATOR */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0B0F17] p-8 shadow-glow-cyan md:p-12">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-400">
                LOCAL PARTNER ECONOMY
              </span>
              <h2 className="mt-4 font-display text-3xl font-black text-white sm:text-4xl">
                Partner with Vibe Quest Cyprus
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Bring high-intent young adults (18-32) straight to your cafe, gym, or venue during off-peak hours with verified QR quest redemptions.
              </p>

              {/* Slider Controls */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-300">
                    <span>Monthly Quest Visitors</span>
                    <span className="text-cyan-400 font-display text-base">{visitors} adventurers</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="500"
                    step="10"
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value))}
                    className="mt-2 w-full accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-300">
                    <span>Average Ticket / Order</span>
                    <span className="text-cyan-400 font-display text-base">€{ticketSize}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={ticketSize}
                    onChange={(e) => setTicketSize(Number(e.target.value))}
                    className="mt-2 w-full accent-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Calculated ROI Box */}
            <div className="glass-card rounded-2xl p-8 border border-white/20 text-center lg:col-span-6 shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Projected Extra Monthly Venue Revenue
              </p>
              <p className="mt-4 font-display text-5xl font-black text-gradient-brand sm:text-6xl">
                +€{projectedRevenue.toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Based on 85% average QR voucher redemption & repeat visit rate.
              </p>

              <Link
                to="/business"
                className="mt-8 inline-block w-full rounded-full bg-gradient-brand py-3.5 text-xs font-black text-slate-950 shadow-glow-cyan transition-transform hover:scale-105"
              >
                Become a Cyprus Venue Partner →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE TOPICS GRID */}
      <section className="bg-slate-950/80 border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Explore Product Pillars</h2>
          <p className="mt-2 text-slate-400">
            Learn more about Vibe Quest&apos;s product model, matching algorithm, and Cyprus market rollout.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group glass-card rounded-2xl p-6 transition-all hover:border-cyan-400/50 hover:shadow-glow-cyan"
              >
                <p className="font-display text-lg font-bold text-white group-hover:text-cyan-400">{t.label}</p>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{t.blurb}</p>
                <p className="mt-4 text-xs font-bold text-cyan-400">Read detail →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
