import Vapi from "@vapi-ai/web";

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);

// Helper function to start a Vapi call with dynamic variables
export const startVapiCall = (
  workflowId: string,
  username: string,
  questions?: string[]
) => {
  const formattedQuestions = questions
    ? questions.map((q) => `- ${q}`).join("\n")
    : "";

  return vapi.start(workflowId, {
    variableValues: {
      username: username,
      interviewer_name: "Simona",
      questions: formattedQuestions,
    },
  });
};
