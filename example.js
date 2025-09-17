const [currentMajor] = process.versions.node.split('.').map(Number);

if (currentMajor < 20) {
  console.error(`
  🚫 Unsupported Node.js version detected!
  
     • Required : Node.js v20 or newer
     • Current  : v${process.versions.node}
     
  👉 Please install Node.js 20+ to continue.
  `);
  process.exit(1);
}
