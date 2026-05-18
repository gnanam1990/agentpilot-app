export interface MCPTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

export interface MCPToolResult {
  content: Array<{ type: string; text: string }>;
  isError?: boolean;
}

export class MCPClient {
  private tools: MCPTool[] = [];

  async listTools(): Promise<MCPTool[]> {
    return this.tools;
  }

  async callTool(name: string, args: Record<string, unknown>): Promise<MCPToolResult> {
    // In production, this would call the actual MCP server
    return {
      content: [{ type: "text", text: `Tool ${name} called with args: ${JSON.stringify(args)}` }],
    };
  }

  setTools(tools: MCPTool[]) {
    this.tools = tools;
  }
}

export const mcpClient = new MCPClient();
