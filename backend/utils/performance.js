// Performance monitoring utilities
const performanceMonitor = (req, res, next) => {
  const start = process.hrtime.bigint();

  res.on('finish', () => {
    const duration = Number(process.hrtime.bigint() - start) / 1000000; // Convert to milliseconds
    console.log(`[Performance] ${req.method} ${req.path} - ${duration.toFixed(2)}ms`);
  });

  next();
};

const measureAsync = async (fn, label) => {
  const start = process.hrtime.bigint();
  const result = await fn();
  const duration = Number(process.hrtime.bigint() - start) / 1000000;
  console.log(`[Performance] ${label} - ${duration.toFixed(2)}ms`);
  return result;
};

module.exports = {
  performanceMonitor,
  measureAsync,
};

