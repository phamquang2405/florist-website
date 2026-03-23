'use client';

import { useUiStore } from '@/store/ui-store';

export function DashboardPreferences() {
  const compactMode = useUiStore((state) => state.compactMode);
  const toggleCompactMode = useUiStore((state) => state.toggleCompactMode);

  return (
    <button
      type="button"
      onClick={toggleCompactMode}
      className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition hover:bg-secondary"
    >
      Compact mode: {compactMode ? 'On' : 'Off'}
    </button>
  );
}

