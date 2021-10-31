import { useToast } from "@/hooks/useToast";

const toast = useToast();

export async function tryCatchBoolean(handler: () => void): Promise<boolean> {
  try {
    await handler();
    return true;
  } catch (error) {
    const err = error as Error;
    toast.do.error(err.message);
    return false;
  }
}

export async function tryCatch<T>(
  handler: () => Promise<T>
): Promise<T | false> {
  try {
    return await handler();
  } catch (error) {
    const err = error as Error;
    toast.do.error(err.message);
    return false;
  }
}
