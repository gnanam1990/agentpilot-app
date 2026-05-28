"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || status !== "ready") return;
    sendMessage({ text: input });
    setInput("");
  }

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <div className="kite-gradient flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {messages.length === 0 && (
            <div className="flex min-h-[calc(100vh-11rem)] items-center justify-center">
              <Card className="max-w-xl border-border/80 bg-card/85 p-8 text-center shadow-sm backdrop-blur">
                <Image
                  src="/kite-logo-mark-black.png"
                  alt="Kite"
                  width={44}
                  height={44}
                  priority
                  className="mx-auto mb-4 h-11 w-11 object-contain"
                />
                <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                  Kite Mainnet AI assistant
                </p>
                <h2 className="mb-2 text-2xl font-bold">AgentPilot</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Your AI assistant for Kite Mainnet. Ask me anything about
                  wallets, transactions, or the Kite ecosystem.
                </p>
                <div className="mt-6 grid gap-2 text-left sm:grid-cols-2">
                  {[
                    "Check this wallet balance",
                    "Show active sessions",
                    "Explain a Kite tx",
                    "Create a test session",
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      className="rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      onClick={() => setInput(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg border px-4 py-2 shadow-sm ${
                  message.role === "user"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/90"
                }`}
              >
                <div className="text-sm whitespace-pre-wrap">
                  {message.parts.map((part, i) =>
                    part.type === "text" ? <span key={i}>{part.text}</span> : null
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-lg border border-border bg-card/90 px-4 py-2 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-border bg-background/90 p-4 backdrop-blur">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-4xl gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Kite Mainnet..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
