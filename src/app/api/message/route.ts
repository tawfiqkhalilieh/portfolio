export async function GET(request: Request) {
  return new Response("ping", {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { name, email, message }: { name: string, email: string, message: string } = body;

  const webhookurl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookurl) {
    return new Response(JSON.stringify({ error: "Webhook URL not configured" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  await fetch(webhookurl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `@everyone New Portfolio Message Received`,
      embeds: [{
        title: "📩 New Portfolio Message",
        color: 0x3b82f6,
        fields: [
          { name: "Name", value: name || "N/A" },
          { name: "Email", value: email || "N/A" },
          { name: "Message", value: message || "N/A" }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "iHelper Landing Form"
        }
      }]
    }),
  });

  return new Response(JSON.stringify({}), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

