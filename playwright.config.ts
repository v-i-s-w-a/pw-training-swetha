import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: 0,

  workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com/',

    screenshot: 'on',

    video: 'on',

    trace: 'on',

    testIdAttribute: 'data-test',
  },

  projects: [
    {
      name: 'setup',

      testMatch: /auth\.setup\.ts/,
    },

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },

      dependencies: ['setup'],


      testIgnore: /problem-user\.spec\.ts/,
    },
      {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], storageState: '.auth/user.json' },
      dependencies: ['setup'],
        testIgnore: /problem-user\.spec\.ts/,
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], storageState: '.auth/user.json' },
      dependencies: ['setup'],
        testIgnore: /problem-user\.spec\.ts/,
    },
   {
  name: 'chromium-problem',
  use: { ...devices['Desktop Chrome'], storageState: '.auth/problem.json' },
  dependencies: ['setup'],
  testMatch: /problem-user\.spec\.ts/,
}
  ],
});