(async () => {
  try {
    const serve = require('./packages/server/serve');
    if (typeof serve === 'function') {
      await serve({ dev: false });
    } else if (serve && typeof serve.default === 'function') {
      await serve.default({ dev: false });
    } else {
      console.error('serve module does not export a function');
      process.exit(1);
    }
  } catch (e) {
    console.error(e && e.stack ? e.stack : e);
    process.exit(1);
  }
})();
