declare module 'command-exists' {
  function commandExists (command: string): Promise<boolean>;
  export = commandExists;
}

declare module 'cross-spawn' {
  const anything: any;
  export = anything;
}
