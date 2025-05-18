'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for small groups just getting started',
    features: [
      'Up to 5 groups',
      'Basic activity scheduling',
      'Email notifications',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$9',
    description: 'Everything you need for growing groups',
    features: [
      'Unlimited groups',
      'Advanced activity scheduling',
      'Custom notifications',
      'Priority support',
      'Activity analytics',
      'Custom branding',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantees',
      'Advanced security',
      'Custom development',
    ],
  },
];

export function Pricing() {
  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Choose the plan that's right for your group
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`flex flex-col p-6 rounded-lg border bg-card ${
              plan.popular ? 'border-primary' : ''
            }`}
          >
            {plan.popular && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-2">{plan.price}</div>
            <p className="text-muted-foreground mb-6">{plan.description}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-auto" variant={plan.popular ? 'default' : 'outline'}>
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
