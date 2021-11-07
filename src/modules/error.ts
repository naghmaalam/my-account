import { useToast } from "@/hooks/useToast";

const toast = useToast();

export async function tryCatchBoolean(
  handler: () => void,
  notification = true
): Promise<true | Error> {
  try {
    await handler();
    return true;
  } catch (error) {
    const err = error as Error;
    if (notification) toast.do.error(err.message);
    return err;
  }
}

export async function tryCatch<T>(
  handler: () => Promise<T>,
  notification = true
): Promise<T | Error> {
  try {
    return await handler();
  } catch (error) {
    const err = error as Error;
    if (notification) toast.do.error(err.message);
    return err;
  }
}
