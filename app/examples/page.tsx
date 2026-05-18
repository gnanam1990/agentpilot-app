import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Examples — AgentPilot",
};

const examples = [
  {
    title: "Check Wallet Balance",
    prompt: "What's my Kite wallet balance?",
    description: "Ask the AI to check your KITE and USDC.e balances",
  },
  {
    title: "List Active Sessions",
    prompt: "Show me my active sessions",
    description: "View all your active agent spending sessions",
  },
  {
    title: "Create a Session",
    prompt: "Create a $0.001 session for 1 hour for testing",
    description: "Create a new spending session with specified limits",
  },
  {
    title: "Check Health",
    prompt: "Is the Kite Passport backend healthy?",
    description: "Check the health status of the Kite Passport backend",
  },
];

export default function ExamplesPage() {
  return (
    <div className="container max-w-screen-2xl py-6 space-y-6">
      <h1 className="text-3xl font-bold">Example Prompts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examples.map((ex) => (
          <Card key={ex.title}>
            <CardHeader>
              <CardTitle className="text-lg">{ex.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{ex.description}</p>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &quot;{ex.prompt}&quot;
              </code>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
