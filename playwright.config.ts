import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: 0,

  workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
    testIdAttribute: 'data-test'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});