import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiExpress } from "@/lib/axios";

export const sendAdviserChatSchema = z.object({
  input: z.string()
})

export type SendAdviserChatSchema = z.infer<typeof sendAdviserChatSchema>;

const sendAdviserChatV2 = async (data: SendAdviserChatSchema): Promise<string> => {
  const response = await apiExpress.post("/api/adviser/chat", {
    input: data.input
  });
  return response.data;
}


export const useSendAdviserChat = () => useMutation({
  mutationFn: sendAdviserChatV2
});

