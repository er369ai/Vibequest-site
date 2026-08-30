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
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  Quote,
  Users,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Quest — Stop scrolling alone. Find your crowd in Cyprus." },
      {
        name: "description",
        content:
          "Vibe Quest brings people together in the real world in Cyprus: photo walks, coffee jams, language swaps, and local venue perks.",
      },
      { property: "og:title", content: "Vibe Quest — Stop scrolling alone. Find your crowd." },
      {
        property: "og:description",
        content:
          "Real-world meetups, skill practice, and local cafe perks across Cyprus. A reason to go outside.",
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
            CYPRUS OFFLINE COMMUNITY
          </div>

          <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">Stop scrolling alone.</span>
            <br />
            Find your crowd in Cyprus.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed sm:text-xl">
            Vibe Quest brings people together for sunset photography, acoustic jams, language swaps, and coffee meetups at local spots across Cyprus.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/app"
              className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-extrabold text-slate-950 shadow-glow-cyan transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try Interactive App Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/flow"
              className="glass-card rounded-full px-8 py-4 text-sm font-bold text-white hover:border-cyan-400/50 hover:bg-white/10"
            >
              How It Works
            </Link>
          </div>

          {/* Key Metrics Grid */}
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["18–32", "Young Adults"],
              ["100% Real", "In-Person Meetups"],
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
                <p className="text-[10px] font-bold uppercase text-cyan-400">Verified Meetup</p>
                <p className="text-xs font-bold text-white">+120 XP · Sunset Photo Walk</p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-6 bottom-16 z-20 hidden rounded-2xl border border-amber-400/30 bg-slate-900/90 p-3 shadow-glow-gold backdrop-blur-xl sm:block animate-float-delayed">
            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-amber-500/20 p-1.5 text-amber-400">
                <Coffee className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-amber-400">Cafe Reward</p>
                <p className="text-xs font-bold text-white">Free Filter Coffee @ Nicosia</p>
              </div>
            </div>
          </div>

          {/* Interactive Phone Simulator */}
          <InteractivePhoneSimulator />
        </div>
      </section>

      {/* REAL STORIES & COMMUNITY TESTIMONIALS */}
      <section className="relative my-12 border-y border-white/10 bg-slate-950/60 py-16 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-400">
              <Heart className="h-3.5 w-3.5 text-cyan-400" /> REAL PEOPLE IN CYPRUS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
              Stories from our community.
            </h2>
            <p className="mt-2 text-slate-400">
              Here is what happens when people step away from feeds and meet up in real life.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "I was tired of spending Friday nights scrolling alone. Vibe Quest helped me meet three local photographers in Kyrenia on my very first weekend.",
                name: "Eleni P.",
                role: "Kyrenia · Photographer",
                badge: "Found Her Crew",
              },
              {
                quote:
                  "Instead of paying for expensive solo guitar lessons, I found a peer to practice open chords with every Thursday at Kordon Cafe.",
                name: "Marcus T.",
                role: "Nicosia · Music Enthusiast",
                badge: "Skill Practice",
              },
              {
                quote:
                  "Our cafe got 40+ new regular customers during off-peak Tuesdays simply by hosting weekly acoustic coffee hours.",
                name: "Kosta M.",
                role: "Venue Owner · Nicosia Roastery",
                badge: "Local Business Partner",
              },
            ].map((story) => (
              <div key={story.name} className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-cyan-400/40">
                <div>
                  <Quote className="h-6 w-6 text-cyan-400/60" />
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-white text-sm">{story.name}</p>
                    <p className="text-[11px] text-slate-400">{story.role}</p>
                  </div>
                  <span className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-bold text-cyan-400 border border-cyan-400/30">
                    {story.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PILLARS SHOWCASE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            WHY PEOPLE LOVE IT
          </p>
          <h2 className="mt-3 font-display text-3xl font-black text-white sm:text-5xl">
            Real moments, real skills, real perks.
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-400">
            Built to make going outside effortless and rewarding.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {/* Pillar 1 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-7 hover:border-cyan-400/50 hover:shadow-glow-cyan">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Skill Swap & Practice
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Find a practice partner at your level or learn from someone a step ahead. No pressure, just mutual learning over coffee.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Guitar Practice Pair</span>
                <span className="text-cyan-400">Match score: 98%</span>
              </div>
              <div className="mt-3 flex items-center justify-around gap-2 text-center text-xs">
                <div className="rounded-xl bg-white/5 p-2 w-full">
                  <p className="font-bold text-white">Deniz (You)</p>
                  <p className="text-[10px] text-slate-400">Learner</p>
                </div>
                <span className="text-cyan-400 font-bold">↔</span>
                <div className="rounded-xl bg-cyan-500/20 border border-cyan-400/30 p-2 w-full">
                  <p className="font-bold text-cyan-300">Alex M.</p>
                  <p className="text-[10px] text-cyan-400">Practice Peer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-5 hover:border-amber-400/50 hover:shadow-glow-gold">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
              <Coffee className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Free Local Perks
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Show up to partner cafes & climbing gyms, scan a quick QR code, and unlock free coffee, discounts, or pass upgrades.
            </p>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4">
              <div>
                <p className="text-xs font-bold text-amber-300">Reward Unlocked</p>
                <p className="text-sm font-extrabold text-white">Free Artisan Filter Coffee</p>
              </div>
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950">
                CLAIMED
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-5 hover:border-purple-400/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Real-World Milestones
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Build your character in real life. Track your real-world show-ups, unlock level badges, and keep your weekly streak alive.
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

          {/* Pillar 4 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-7 hover:border-orange-400/50 hover:shadow-glow-orange">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400">
              <Sprout className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Less Screen Time
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Designed explicitly to get you off screen and out into the real world. No infinite doomscrolling feeds or algorithmic noise.
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

      {/* B2B BUSINESS PARTNER CALCULATOR */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0B0F17] p-8 shadow-glow-cyan md:p-12">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-400">
                LOCAL BUSINESS PARTNERS
              </span>
              <h2 className="mt-4 font-display text-3xl font-black text-white sm:text-4xl">
                Partner with Vibe Quest Cyprus
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Bring high-intent young adults straight to your cafe, gym, or venue during off-peak hours with verified QR quest redemptions.
              </p>

              {/* Slider Controls */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-300">
                    <span>Monthly Quest Visitors</span>
                    <span className="text-cyan-400 font-display text-base">{visitors} visitors</span>
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
                    <span>Average Order Value</span>
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
                Projected Extra Monthly Revenue
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

      {/* FOUNDER & COMMUNITY NOTE */}
      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <div className="glass-card rounded-3xl p-8 border border-white/10">
          <Heart className="mx-auto h-8 w-8 text-cyan-400" />
          <h3 className="mt-4 font-display text-2xl font-bold text-white">Built for real-world connection.</h3>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We built Vibe Quest in Cyprus because we missed genuine in-person connection. Our goal isn&apos;t to keep you glued to your phone — it&apos;s to give you a reason to go outside, meet great people, and learn something new.
          </p>
          <p className="mt-4 text-xs font-bold text-cyan-400">— The Vibe Quest Cyprus Team</p>
        </div>
      </section>
    </SiteShell>
  );
}
