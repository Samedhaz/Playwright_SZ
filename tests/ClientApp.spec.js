const{test}=require('@playwright/test');

test('Client application assignment', async ({page})=>
{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

   await page.locator("#userEmail").fill('Zapardesamedha@gmail.com');
   await page.locator ("#userPassword").fill('Learning10');
   await page.locator('[value="Login"]').click();
   // await page.waitForLoadState(('networkidle'));
    await page.locator('.card b').last().waitFor();
// waitfor will only works if locator return one element


 const titlelist=(await page.locator('.card b').allTextContents());
 console.log(titlelist);











});