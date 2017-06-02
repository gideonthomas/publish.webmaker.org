"use strict";

const DEFAULT_CACHE_EXPIRY_MS = 15 * 60 * 1000;
const DEFAULT_CACHE_REQUEST_TIMEOUT_MS = 60 * 1000;

class BaseCache {
  constructor(cache) {
    this.cache = cache;
  }

  get name() {
    throw new Error(`name property has not been set in subclass`);
  }

  get config() {
    return {
      expiresIn: DEFAULT_CACHE_EXPIRY_MS,
      generateTimeout: DEFAULT_CACHE_REQUEST_TIMEOUT_MS
    };
  }

  run() {
    throw new Error(`run function has not been implemented in subclass or has been called incorrectly`);
  }
}

module.exports = BaseCache;
