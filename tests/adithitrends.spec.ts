import { test, expect } from '@playwright/test';

test('Verify Adithi Trends homepage loads successfully', async ({ page }) => {
  // Navigate to your e-commerce application URL
  await page.goto('https://adithitrends.com/');

  // Check that the page title matches the live site's branding
  await expect(page).toHaveTitle(/ADITHI WIRE BAGS/i);

  // Check if the header element is visible
  const headerLogo = page.locator('header');
  await expect(headerLogo).toBeVisible();
});