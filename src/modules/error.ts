import { useToast } from "@/hooks/useToast";

const toast = useToast();

export async function tryCatch(handler: () => void): Promise<boolean> {
  try {
    await handler();
    return true;
  } catch (error) {
    const err = error as Error;
    toast.do.error(err.message);
    return false;
  }
}
