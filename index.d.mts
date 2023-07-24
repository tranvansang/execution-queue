export default function makeQueue(skipError?: boolean): <T>(cb: () => T) => Promise<void>;
