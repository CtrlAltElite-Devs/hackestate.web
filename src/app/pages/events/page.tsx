import { LayoutHeader } from "@/components/layouts/LayoutHeader";
import { Calendar } from "lucide-react";

export function Events() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <LayoutHeader />
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-muted/30 rounded-full p-6 mb-4">
          <Calendar className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Events</h2>
        <p className="text-xl text-muted-foreground max-w-md">
          This feature is coming soon! Stay tuned for upcoming real estate events and webinars.
        </p>
      </div>
    </div>
  );
}
