export async function GET(request: Request) {
  return new Response("ping", {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request) {

  console.log(request)
  // Parse the request body
  const body = await request.json();
  const { name, email, message }: { name: string, email: string, message: string } = body;

  const webhookurl: string = 'https://discord.com/api/webhooks/1430626072470487121/UIZXTS0nezcLKDoTYG0t8EMzFF1Mf3yCctQVHOMucL87ZdaeVrD2cuLF3FipE9qsCJFH';

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

