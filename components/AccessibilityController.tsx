'use client';

import { useState, useEffect, useCallback, useRef, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

type FontSize = 1 | 2 | 3 | 4; // 1 = default, 2 = +12%, 3 = +25%, 4 = +50%

interface A11ySettings {
  fontSize: FontSize;
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  pauseAnimations: boolean;
  readableFont: boolean;
  textSpacing: boolean;
  highlightFocus: boolean;
}

const DEFAULTS: A11ySettings = {
  fontSize: 1,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  pauseAnimations: false,
  readableFont: false,
  textSpacing: false,
  highlightFocus: false,
};

const STORAGE_KEY = 'rndq-a11y';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function load(): A11ySettings {
  if (typeof window === 'undefined') return DEFAULTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function isDefault(s: A11ySettings): boolean {
  return (Object.keys(DEFAULTS) as Array<keyof A11ySettings>).every(
    (k) => s[k] === DEFAULTS[k],
  );
}

function applyClasses(s: A11ySettings) {
  const el = document.documentElement;

  // Font size
  el.classList.remove('a11y-fs-2', 'a11y-fs-3', 'a11y-fs-4');
  if (s.fontSize > 1) el.classList.add(`a11y-fs-${s.fontSize}`);

  // Boolean flags
  const map: Record<string, boolean> = {
    'a11y-high-contrast': s.highContrast,
    'a11y-grayscale': s.grayscale,
    'a11y-underline-links': s.underlineLinks,
    'a11y-pause-animations': s.pauseAnimations,
    'a11y-readable-font': s.readableFont,
    'a11y-text-spacing': s.textSpacing,
    'a11y-highlight-focus': s.highlightFocus,
  };
  for (const [cls, on] of Object.entries(map)) {
    el.classList.toggle(cls, on);
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Toggle({
  label,
  description,
  icon,
  checked,
  onChange,
}: {
  label: string;
  description?: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/6 text-slate-300">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium leading-tight text-slate-100">{label}</p>
          {description && (
            <p className="mt-0.5 text-xs leading-tight text-slate-500">{description}</p>
          )}
        </div>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${
          checked
            ? 'border-brand-500 bg-brand-500'
            : 'border-white/20 bg-white/10'
        }`}
        aria-label={label}
      >
        <span
          className={`inline-block h-3 w-3 transform rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}

function FontSizeControl({
  value,
  onChange,
}: {
  value: FontSize;
  onChange: (v: FontSize) => void;
}) {
  const levels: { v: FontSize; label: string; aria: string }[] = [
    { v: 1, label: 'A', aria: 'Default' },
    { v: 2, label: 'A', aria: '112%' },
    { v: 3, label: 'A', aria: '125%' },
    { v: 4, label: 'A', aria: '150%' },
  ];
  const sizes = ['text-[11px]', 'text-[13px]', 'text-[15px]', 'text-[18px]'];

  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/6 text-slate-300">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </span>
        <p className="text-sm font-medium leading-tight text-slate-100">Text size</p>
      </div>
      <div className="flex gap-1" role="group" aria-label="Text size">
        {levels.map(({ v, label, aria }, i) => (
          <button
            key={v}
            onClick={() => onChange(v)}
            aria-pressed={value === v}
            aria-label={aria}
            className={`flex h-7 w-7 items-center justify-center rounded-md font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-400 ${sizes[i]} ${
              value === v
                ? 'bg-brand-500 text-white'
                : 'bg-white/8 text-slate-300 hover:bg-white/14'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AccessibilityController() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULTS);
  const [mounted, setMounted] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Hydration: load from localStorage only after mount
  useEffect(() => {
    const saved = load();
    setSettings(saved);
    applyClasses(saved);
    setMounted(true);
  }, []);

  // Persist + apply whenever settings change (after mount)
  useEffect(() => {
    if (!mounted) return;
    applyClasses(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}
  }, [settings, mounted]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    // Slight delay so the open-click doesn't immediately close
    const id = setTimeout(() => document.addEventListener('mousedown', onClick), 50);
    return () => {
      clearTimeout(id);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  // Auto-focus first interactive element in panel when it opens
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('button, [role="switch"]')?.focus();
    }, 80);
    return () => clearTimeout(id);
  }, [open]);

  const update = useCallback(
    <K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
      // Live announce for screen readers
      const labels: Record<string, string> = {
        highContrast: 'High contrast',
        grayscale: 'Grayscale',
        underlineLinks: 'Underline links',
        pauseAnimations: 'Pause animations',
        readableFont: 'Readable font',
        textSpacing: 'Text spacing',
        highlightFocus: 'Highlight focus',
      };
      if (key in labels) {
        setAnnouncement(`${labels[key as string]} ${value ? 'on' : 'off'}`);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setSettings(DEFAULTS);
    setAnnouncement('Accessibility settings reset');
  }, []);

  const hasCustom = !isDefault(settings);

  // Panel animation
  const panelVariants: Variants = {
    hidden: { opacity: 0, y: 8, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: [0.0, 0.0, 0.2, 1] } },
    exit:   { opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.13, ease: [0.4, 0.0, 1, 1] } },
  };

  return (
    <>
      {/* Screen-reader live region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      {/* Floating trigger */}
      <div className="fixed bottom-[5.5rem] left-3 z-50 md:bottom-8 md:left-6">
        {/* Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-label="Accessibility settings"
              aria-modal="true"
              className="absolute bottom-full left-0 mb-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1525]/95 shadow-[0_8px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-brand-400"
                    aria-hidden
                  >
                    <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
                    <path d="M5 8.5h14M8 8.5l1.5 10.5m7-10.5-2.5 5-3.5 1" />
                  </svg>
                  <span className="text-sm font-semibold text-white">Accessibility</span>
                </div>
                <button
                  onClick={() => {
                    setOpen(false);
                    triggerRef.current?.focus();
                  }}
                  className="rounded-md p-1 text-slate-500 transition hover:text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
                  aria-label="Close accessibility panel"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>

              {/* Controls */}
              <div className="divide-y divide-white/5 px-4">
                {/* Font size */}
                <FontSizeControl
                  value={settings.fontSize}
                  onChange={(v) => {
                    setSettings((prev) => ({ ...prev, fontSize: v }));
                    setAnnouncement(
                      `Text size ${['', 'default', '112%', '125%', '150%'][v]}`,
                    );
                  }}
                />

                {/* Toggles */}
                <Toggle
                  label="High contrast"
                  description="Increase contrast for better readability"
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  checked={settings.highContrast}
                  onChange={(v) => update('highContrast', v)}
                />

                <Toggle
                  label="Grayscale"
                  description="Remove colors from the page"
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  }
                  checked={settings.grayscale}
                  onChange={(v) => update('grayscale', v)}
                />

                <Toggle
                  label="Underline links"
                  description="Make all links visually distinct"
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  checked={settings.underlineLinks}
                  onChange={(v) => update('underlineLinks', v)}
                />

                <Toggle
                  label="Pause animations"
                  description="Stop all motion and transitions"
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  checked={settings.pauseAnimations}
                  onChange={(v) => update('pauseAnimations', v)}
                />

                <Toggle
                  label="Readable font"
                  description="Switch to a dyslexia-friendly typeface"
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  checked={settings.readableFont}
                  onChange={(v) => update('readableFont', v)}
                />

                <Toggle
                  label="Text spacing"
                  description="Increase line height and letter spacing"
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  checked={settings.textSpacing}
                  onChange={(v) => update('textSpacing', v)}
                />

                <Toggle
                  label="Highlight focus"
                  description="Show bright outlines on focused elements"
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  checked={settings.highlightFocus}
                  onChange={(v) => update('highlightFocus', v)}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/8 px-4 py-3">
                <a
                  href="/accessibility"
                  className="text-xs text-slate-500 underline-offset-2 hover:text-brand-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400 transition"
                >
                  Accessibility statement
                </a>
                {hasCustom && (
                  <button
                    onClick={reset}
                    className="rounded-md px-2.5 py-1 text-xs font-medium text-slate-400 ring-1 ring-white/10 transition hover:bg-white/6 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
                  >
                    Reset all
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger button */}
        <button
          ref={triggerRef}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="a11y-panel"
          aria-label={open ? 'Close accessibility settings' : 'Open accessibility settings'}
          title="Accessibility settings"
          className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${
            open
              ? 'bg-brand-500 text-white scale-95'
              : 'bg-[#1a2240] text-slate-300 hover:bg-brand-600 hover:text-white hover:scale-105'
          }`}
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.45)' }}
        >
          {/* Wheelchair / person accessibility icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden
          >
            <circle cx="11" cy="4" r="1.5" fill="currentColor" stroke="none" />
            <path d="M6 8h8l-1.5 6H7L5.5 8z" />
            <path d="M7 14l-1 4h8" />
            <path d="M14 18a4 4 0 1 0 0-4" />
          </svg>

          {/* Active indicator dot */}
          {mounted && hasCustom && (
            <span
              className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-[#080d1a] bg-brand-400"
              aria-hidden
            />
          )}
        </button>
      </div>
    </>
  );
}
