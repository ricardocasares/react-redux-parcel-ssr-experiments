export function browser(): boolean {
  return typeof window !== "undefined";
}

export function development(): boolean {
  return process.env.NODE_ENV === "development";
}

export function production(): boolean {
  return process.env.NODE_ENV === "production";
}
