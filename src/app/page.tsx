import { Button } from '@/components/ui/button';
import { FormDesignMocks } from '@/components/form-design-mocks';

export default function Home() {
  return (
    <div className="space-y-8 full-w py-12">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl font-bold">Bring People Together,</h1>
        <h1 className="text-6xl font-bold">Create Memorable Events</h1>
        <p className="text-muted-foreground w-1/2 text-center">
          Conveen makes it easy to organize social events, connect with friends, and create
          unforgettable memories together.
        </p>
        <div className="flex gap-4 pt-4">
          <Button size="lg">Start Planning</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      <FormDesignMocks />
    </div>
  );
}
