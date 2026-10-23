import React from "react";
import { Button, Card, Input, colors, typography, spacing, radius } from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f8] text-text-muted">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="asana-display mb-2">Asana Design System</h1>
          <p className="asana-body text-text-muted/70">
            Work management software for teams and AI agents. Calm, muted,
            professional.
          </p>
          <p className="asana-body text-text-muted/50 mt-2">
            Version: alpha · Source: asana.com
          </p>
        </header>

        <section className="mb-12">
          <h2 className="asana-heading mb-4">Color system</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {Object.entries(colors).map(([name, value]) => (
              <div
                key={name}
                className="flex items-center gap-3 p-4 rounded-md border border-border bg-background"
              >
                <div
                  className="w-10 h-10 rounded-sm"
                  style={{ backgroundColor: value }}
                ></div>
                <div>
                  <div className="text-xs font-medium text-text-muted">{name}</div>
                  <div className="text-[11px] text-text-muted/50">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="asana-heading mb-4">Typography</h2>
          <div className="space-y-4">
            <h1 className="asana-display">Display — 30px · w 400 · 1.2 lh</h1>
            <h2 className="asana-heading">Heading — 24px · w 500 · 1.2 lh</h2>
            <p className="asana-body">
              Body — 16px · w 400 · 1.5 lh. Standard copy for sustained reading
              in a work-management tool.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="asana-heading mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary button</Button>
            <Button variant="ghost">Ghost button</Button>
            <Button variant="outline">Outline button</Button>
            <Button variant="icon" aria-label="Menu">
              ☰
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" loading>
              Saving…
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="asana-heading mb-4">Inputs</h2>
          <div className="max-w-md">
            <Input
              label="Task name"
              helper="Give your task a clear, descriptive name."
              placeholder="Enter task name"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="asana-heading mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default">
              <h3 className="asana-heading mb-2">Project kickoff</h3>
              <p className="asana-body text-text-muted/80 mb-4">
                Align the team on goals, timeline, and owners before work
                begins.
              </p>
              <Button variant="primary" size="sm">
                View project
              </Button>
            </Card>
            <Card variant="raised">
              <h3 className="asana-heading mb-2">Raised card</h3>
              <p className="asana-body text-text-muted/80 mb-4">
                Surface-colored card with elevated shadow for secondary zones.
              </p>
              <Button variant="ghost" size="sm">
                Open
              </Button>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="asana-heading mb-4">Spacing &amp; radius scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[4, 8, 12, 16, 24, 32, 48, 64, 112].map((val) => (
              <div
                key={val}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-md border border-border bg-background"
              >
                <div
                  className="w-8 h-8 rounded-sm bg-primary"
                  style={{ height: `${val}px`, width: `${val}px` }}
                ></div>
                <span className="text-[10px] text-text-muted/50">{val}px</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-4 gap-2">
            {["sm", "md", "lg", "xl"].map((r) => (
              <div
                key={r}
                className={`flex items-center justify-center p-2 rounded border border-border bg-background ${radius[r] === "64px" ? "rounded-full" : ""}`}
                style={{ borderRadius: radius[r as keyof typeof radius] }}
              >
                <span className="text-[10px] text-text-muted/50">{r}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


