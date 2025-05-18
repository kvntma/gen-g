'use client';

import { Calendar, Users, Activity, Bell } from 'lucide-react';

const features = [
  {
    title: 'Group Management',
    description:
      'Create and manage groups with ease. Invite members, set roles, and keep everyone in the loop.',
    icon: Users,
  },
  {
    title: 'Activity Scheduling',
    description:
      'Schedule activities, set recurring events, and manage attendance all in one place.',
    icon: Calendar,
  },
  {
    title: 'Activity Tracking',
    description:
      'Track participation, record results, and maintain activity history for your group.',
    icon: Activity,
  },
  {
    title: 'Smart Notifications',
    description:
      'Get timely reminders and updates about upcoming activities and important announcements.',
    icon: Bell,
  },
];

export function Features() {
  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Everything You Need to Manage Your Group
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Powerful features to help you organize and grow your community
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(feature => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
          >
            <feature.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
