const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
  test('should have the correct title and hero heading', async ({ page }) => {
    // Navigate to the index.html page within the components directory
    // Adjust the path as necessary based on how files are served during testing.
    // For local testing, you might run a server from the project root.
    // For GitHub Actions, files are checked out, so relative paths from the root should work.
    await page.goto('/components/index.html', { waitUntil: 'networkidle' });

    // Check the page title
    await expect(page).toHaveTitle('CrazyCook');

    // Check for the hero section heading
    const heroHeading = page.locator('section.hero h2');
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toHaveText('Éveillez vos papilles avec nos recettes exclusives !');

    // Optional: Check if the main navigation links are present
    const navLinks = page.locator('header nav ul li a');
    await expect(navLinks.first()).toBeVisible();
  });

  test('should navigate to signup page from hero button', async ({ page }) => {
    await page.goto('components/index.html', { waitUntil: 'networkidle' });

    // Click the "Créer un compte" button
    // Assuming the button has an onclick attribute that changes window.location or similar
    // For robustness, it's better to use a more specific selector if available (e.g., an ID)
    const createAccountButton = page.locator('button:has-text("Créer un compte")');

    // Using page.waitForNavigation is important if the click triggers a full page load
    await Promise.all([
      page.waitForNavigation({ url: /\/components\/signup\.html$/, waitUntil: 'networkidle' }),
      createAccountButton.click()
    ]);

    // Check if the URL is the signup page
    await expect(page).toHaveURL(/\/components\/signup\.html$/);

    // Check for a unique element on the signup page, e.g., the form title
    const signupHeading = page.locator('h1'); // Adjust selector if needed
    await expect(signupHeading).toHaveText('Inscription');
  });
});
