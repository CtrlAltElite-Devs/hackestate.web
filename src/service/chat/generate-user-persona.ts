import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiExpress } from "@/lib/axios";

export const generateUserPersonaSchema = z.object({
  query: z.string()
})

export type GenerateUserPersonaSchema = z.infer<typeof generateUserPersonaSchema>;

export interface BuyerPersona {
  verdict: "High Potential" | "Medium Potential" | "Low Potential" | "Not a Buyer";
  confidence: "High" | "Medium" | "Low";
  reason: string;
  profile?: {
    budget?: string;
    propertyType?: string;
    locationPriorities?: string;
    mustHaveFeatures?: string[];
    dealBreakers?: string[];
    timeline?: string;
  };
  positiveIndicators?: string,
  negativeIndicators?: string
}

const generateUserPersonaV2 = async (messages: string) => {
  const response = await apiExpress.post<BuyerPersona>("/api/personas/generate", {
    messages: messages
  });

  return response.data;
}

export const useGenerateUserPersona = () => useMutation({
  mutationFn: generateUserPersonaV2
});


// - Budget range (if mentioned)
// - Property type preferences
// - Location priorities
// - Must-have features
// - Deal-breakers
// - Timeline (urgency)

// Format concisely in bullet points. Example:
// "• Budget: $500k-$600k
// • Seeks: 3BR suburban home with backyard
// • Priorities: Good school district, quiet neighborhood
// • Timeline: Buying in 3-6 months"
