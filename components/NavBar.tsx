'use client';

import * as React from 'react';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

import { ToggleMode } from './common/ToggleMode';
import { UserNav } from './UserNav';

const myStyles = {
  navContainer:
    'p-4 px-10 pl-14 rounded shadow flex flex-row justify-between items-center fixed top-0 w-full z-50 var(--foreground)',
  navButtons: 'flex flex-row space-x-4',
  link: {
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent' // Fallback for non-webkit browsers
  }
};

export function NavBar({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      className={myStyles.navContainer}
      style={{ ...style, backgroundColor: 'black' }}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <div className={myStyles.navButtons}>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Logo />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/groups"
                      >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          My Groups
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Edit your activities and schedules.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/" title="Home">
                    Back to the home page.
                  </ListItem>
                  <ListItem href="/about" title="About">
                    Learn how to use Conveen.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="New Group"
                  >
                    Create a new group here.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
        <ToggleMode />
      </NavigationMenu>
      {/* <div>
        <Logo />
      </div> */}
      <div className={myStyles.navButtons}>
        <UserNav />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const Logo = () => {
  return (
    <Link href="/" style={myStyles.link}>
      Conveen
    </Link>
  );
};
