const instructorsName = process.env.NAME;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`${instructorsName} rocks`);
    await sleep(5000);
  }
}

main();
