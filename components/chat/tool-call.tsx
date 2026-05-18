"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ToolCallProps {
  toolName: string;
  args: Record<string, unknown>;
  result?: string;
  isLoading?: boolean;
}

export function ToolCall({ toolName, args, result, isLoading }: ToolCallProps) {
  return (
    <Card className="my-2">
      <CardHeader className="py-2 px-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Tool Call
          </Badge>
          <CardTitle className="text-sm font-mono">{toolName}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="py-2 px-3">
        {Object.keys(args).length > 0 && (
          <pre className="text-xs bg-muted p-2 rounded mb-2 overflow-x-auto">
            {JSON.stringify(args, null, 2)}
          </pre>
        )}
        {isLoading && (
          <div className="text-sm text-muted-foreground animate-pulse">
            Executing...
          </div>
        )}
        {result && (
          <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
            {result}
          </pre>
        )}
      </CardContent>
    </Card>
  );
}
