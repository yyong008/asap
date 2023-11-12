function asap(callback) {
  // 根据全局对象的存在性来判断当前环境
  if (typeof window !== 'undefined') {
    // 在浏览器环境中，使用 Promise 的 then 方法
    Promise.resolve().then(callback);
  } else if (typeof global !== 'undefined') {
    // 在 Node.js 环境中，优先使用 setImmediate，如果不支持则使用 process.nextTick
    if (typeof setImmediate === 'function') {
      setImmediate(callback);
    } else {
      process.nextTick(callback);
    }
  } else {
    // 如果无法确定环境，默认使用 setTimeout
    setTimeout(callback, 0);
  }
}
