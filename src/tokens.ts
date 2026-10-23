/**
 * Asana Design System — Design Tokens (TypeScript)
 * Source: Asana design system specification (version: alpha)
 * https://asana.com
 */

export const colors = {
  primary: "#646f79",
  onPrimary: "#ffffff",
  background: "#ffffff",
  surface: "#0d0d0d",
  border: "#f3f3f3",
  text: "#ffffff",
  textMuted: "#0d0d0d",
  accent: "#0d0e10",
} as const;

export const typography = {
  display: {
    fontFamily: "TWK Lausanne, Helvetica Neue, Helvetica, sans-serif",
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: "-1.08px",
  },
  heading: {
    fontFamily: "TWK Lausanne, Helvetica Neue, Helvetica, sans-serif",
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: 1.2,
  },
  body: {
    fontFamily: "TWK Lausanne, Helvetica Neue, Helvetica, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
  },
} as const;

export const spacing = {
  base: "4px",
  scale: ["4px", "8px", "12px", "16px", "20px", "24px", "32px", "48px", "64px", "112px"],
} as const;

export const radius = {
  sm: "4px",
  md: "8px",
  lg: "20px",
  xl: "64px",
} as const;

export const shadows = {
  card: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
  elevated: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px",
} as const;

export const motion = {
  durationFast: "100ms",
  durationBase: "200ms",
  durationSlow: "300ms",
  easing: "ease-in-out",
} as const;

export const breakpoints = [
  "1px", "200px", "300px", "350px", "400px", "414px", "480px", "500px", "520px", "550px",
  "560px", "600px", "768px", "769px", "960px", "961px", "1024px", "1100px", "1120px",
  "1125px", "1200px", "1210px", "1280px", "1300px", "1360px", "1400px", "1440px",
  "1441px", "1500px", "1600px", "1680px", "1800px", "1880px", "2000px",
] as const;

export type ColorName = keyof typeof colors;
export type TypographyScale = keyof typeof typography;
export type SpacingScale = (typeof spacing.scale)[number];
export type RadiusName = keyof typeof radius;
export type ShadowName = keyof typeof shadows;
export type MotionDuration = keyof typeof motion;
export type Breakpoint = (typeof breakpoints)[number];
