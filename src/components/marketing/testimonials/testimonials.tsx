'use client';

const testimonials = [
  {
    quote:
      'Conveen has transformed how our book club operates. Scheduling meetings and tracking attendance has never been easier.',
    author: 'Sarah Johnson',
    role: 'Book Club Organizer',
  },
  {
    quote:
      'As a sports team manager, I love how Conveen helps us coordinate practices and games. The calendar integration is a game-changer.',
    author: 'Mike Thompson',
    role: 'Sports Team Manager',
  },
  {
    quote:
      'Our community group has grown significantly since using Conveen. The activity tracking features help us understand member engagement better.',
    author: 'Lisa Chen',
    role: 'Community Leader',
  },
];

export function Testimonials() {
  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Loved by Groups Everywhere
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          See what our users have to say about Conveen
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(testimonial => (
          <div key={testimonial.author} className="flex flex-col p-6 rounded-lg border bg-card">
            <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
            <div className="mt-auto">
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
