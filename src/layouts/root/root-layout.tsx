'use client';

import { Users, Calendar, Activity } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { ThemeProvider } from '@/providers/theme-provider';
import { Button } from '@/components/ui/button';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen w-full bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="min-w-full flex h-14 items-center justify-between px-4 lg:px-8">
            <div className="flex w-full items-center space-x-8">
              <a href="/" className="text-xl font-bold text-primary">
                Conveen
              </a>
              <nav className="flex items-center space-x-6">
                <a
                  href="/groups"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Users className="h-4 w-4" />
                  <span>Groups</span>
                </a>
                <a
                  href="/activities"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Activity className="h-4 w-4" />
                  <span>Activities</span>
                </a>
                <a
                  href="/calendar"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Calendar</span>
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button size="sm">Get Started</Button>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="min-w-full">
          <main className="mx-auto max-w-6xl px-4 py-6 lg:px-8">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
