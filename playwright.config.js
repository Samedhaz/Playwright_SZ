// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  
  
  // @ts-ignore
//  const config= ({

  testDir: './tests',
  timeout:40*1000,
    expect: {
      timeout: 40*10000

    },
  reporter :'html',

  use: {
    browserName : 'firefox',
    headless: false
  },

  
});

//module.exports= config

