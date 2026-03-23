export function DashboardShellSkeleton() {
  return (
    <main className="container py-8">
      <div className="space-y-6 animate-pulse">
        <div className="surface h-40" />
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="surface h-96" />
          <div className="surface h-96" />
        </div>
      </div>
    </main>
  );
}

