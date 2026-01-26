const {test, expect}=require("@playwright/test");
//const constants = require("node:constants");
test ('first playwright test', async ({browser})=>
   {
    //validate if username or passsword is wrong error message is displayes
     const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
   await page.locator("#username").fill('learning');
   await page.locator ("#password").fill('rahulshetty Xyz');
   await page.locator("#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());

await expect (page.locator("[style*='block']")).toContainText("Incorrect");

//Validate user is able to login if correct username and password  is given
await page.locator("#username").fill('');
await page.locator("#username").fill('rahulshettyacademy');
await page.locator ("#password").fill('learning');
await page.locator("#signInBtn").click();
console.log(await page.title());

});
test('browsercontext', async({page})=>{

await page.goto("https://google.com");

console.log(await page.title());
await expect(page).toHaveTitle("Google");

});
test('Pract test', async ({browser})=>
{
const context= await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.facebook.com/");

});
test ('Ui Controls', async ({page})=>{

 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill('rahulshettyacademy');
await page.locator ("#password").fill('learning');
const dropdown =  page.locator('select.form-control');
await dropdown.selectOption("consult");
await page.locator(".radiotextsty").last().click();
await expect(page.locator(".radiotextsty").last()).toBeChecked();

console.log(page.locator(".radiotextsty").last().isChecked());
console.log("Printed");
await page.locator("#okayBtn").click();
await page.locator("#terms").click();

await expect (page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();

const isChecked = await page.locator("#terms").isChecked();
console.log(isChecked);
expect(isChecked).toBeFalsy();
//expect (await page.locator("#terms").toBeChecked()).tobeFalsy();
await page.locator("#signInBtn").click();
 const doclink= page.locator("[href*='documents-reques']");

await expect (doclink).toHaveAttribute('class','blinkingText');


//await page.pause ();

});

test.only ('Child window handling', async ({browser})=>{

const context= await browser.newContext();
const page= await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const doclink= page.locator("[href*='documents-reques']");
//under the same browser context new page is opening so we will trigget following method from context 
//handling multiple actions (awaiting for completion)  and run parallely--> promise all method 
const [newpage]= await Promise.all([
context.waitForEvent('page'),
doclink.click()
]);
const test =newpage.locator(".red").textContent();
console.log(test);












   });