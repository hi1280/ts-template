export function main(message: string) {
  console.log(`${message}`);
  return `Hello ${message}`;
}

if (require.main === module) {
  main(process.argv[2]);
}