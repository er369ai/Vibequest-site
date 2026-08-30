import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-quest.jpg";
import radarQuestImage from "@/assets/radar-quest.png";
import { SiteShell, TOPICS } from "@/components/vq/SiteShell";
import {
  Zap,
  Coffee,
  Target,
  Sprout,
  ArrowRight,
  Sparkles,
  Heart,
  Users,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Quest — Real-World Quests & Community in Cyprus" },
      {
        name: "description",
        content:
          "Vibe Quest connects people in Cyprus through real-world quests, photo walks, music jams, language practice, and local cafe perks.",
      },
      { property: "og:title", content: "Vibe Quest — Real-World Social Quests" },
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
  return (
    <SiteShell>
      {/* HERO SECTION */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
            CYPRUS OFFLINE COMMUNITY APP
          </div>

          <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">Less scrolling.</span>
            <br />
            More real-world living.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed sm:text-xl">
            Vibe Quest brings people together for outdoor photo walks, guitar jams, language practice, and coffee meetups at local spots across Cyprus.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/app"
              className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-extrabold text-white shadow-md transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore App Concept
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/flow"
              className="rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              How It Works
            </Link>
          </div>

          {/* Key Feature Pillars */}
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["Real Meetups", "In-Person Quests"],
              ["Skill Swaps", "Peer Practice"],
              ["Local Perks", "Partner Cafes"],
            ].map(([v, l]) => (
              <div key={l} className="glass-card rounded-2xl p-4 text-center border border-slate-200 bg-white shadow-xs">
                <dt className="font-display text-base font-bold text-blue-600 sm:text-lg">{v}</dt>
                <dd className="mt-1 text-xs font-semibold text-slate-500">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
            <img
              src={heroImage}
              alt="Vibe Quest outdoor group activity"
              className="w-full rounded-2xl object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* LIVE QUEST RADAR BANNER */}
      <section className="relative my-12 border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
                LIVE QUEST DISCOVERY
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Discover active group quests nearby.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Vibe Quest makes it easy to find real-world group activities, photo shoots, skill practice sessions, and coffee meetups happening around Cyprus.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <Compass className="h-4 w-4 text-blue-600" /> Location-Based Map
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <Users className="h-4 w-4 text-blue-600" /> Small Group Meetups
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <Coffee className="h-4 w-4 text-blue-600" /> Partner Venue Rewards
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl lg:col-span-6">
              <img
                src={radarQuestImage}
                alt="Vibe Quest group gathering in Cyprus during golden hour"
                className="w-full rounded-2xl object-cover"
                width={1200}
                height={800}
              />
              <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-bold text-slate-900">Kyrenia Outdoor Photography</p>
                <p className="text-[11px] text-slate-500">Cyprus Real-World Community Quest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS SHOWCASE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            HOW VIBE QUEST WORKS
          </p>
          <h2 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-5xl">
            Real activities, real skills, real perks.
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-600">
            Four core features designed to make offline social activity simple and engaging.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {/* Feature 1 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-6 hover:border-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
              Skill Swap & Practice
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Find a practice partner at your level or learn from someone a step ahead. Practice photography, guitar, or languages together over coffee.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-6 hover:border-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <Coffee className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
              Local Cafe & Venue Perks
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Meet up at partner venues, verify your quest participation with a quick QR scan, and earn local perks like free filter coffee or venue discounts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-6 hover:border-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
              Real-World XP & Progression
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Track your real-world activities, earn skill badges, level up your profile, and maintain your weekly active streak.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-card group rounded-3xl p-8 md:col-span-6 hover:border-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
              <Sprout className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
              No Doomscrolling Feeds
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Designed specifically to get you off your phone and out into the real world. Simple event listings without addictive algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* DEEP DIVE TOPICS GRID */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Explore Product Pillars</h2>
          <p className="mt-2 text-slate-600">
            Learn more about Vibe Quest&apos;s product model, matching algorithm, and Cyprus market rollout.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group glass-card rounded-2xl p-6 transition-all hover:border-blue-400"
              >
                <p className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600">{t.label}</p>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{t.blurb}</p>
                <p className="mt-4 text-xs font-bold text-blue-600">Read detail →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER & COMMUNITY NOTE */}
      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <div className="glass-card rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <Heart className="mx-auto h-8 w-8 text-blue-600" />
          <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">Built for real-world connection.</h3>
          <p className="mt-3 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Vibe Quest is designed to make in-person activity simple, accessible, and rewarding across Cyprus.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
