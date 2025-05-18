'use client';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 py-20">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Organize Your Group Activities
      </h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        Plan, schedule, and manage your group activities with ease. From sports teams to book clubs,
        Conveen helps you stay organized and connected.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </div>
  );
}
