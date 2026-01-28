const { test, expect } = require('@playwright/test'); 

test('Client application assignment', async ({page})=>
{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   

   await page.locator("#userEmail").fill('Zapardesamedha@gmail.com');
   await page.locator ("#userPassword").fill('Learning10');
   await page.locator('[value="Login"]').click();
   await page.waitForLoadState(('networkidle'));
    await page.locator('.card-body b').last().waitFor();
// waitfor will only works if locator return one element
 const titlelist=(await page.locator('.card b').allTextContents());
 console.log(titlelist);



});


test.only('Client application add product to cart ', async ({page})=>
{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const productname ="ADIDAS ORIGINAL"
    const products =page.locator(".card-body");

   await page.locator("#userEmail").fill('Zapardesamedha@gmail.com');
   await page.locator ("#userPassword").fill('Learning10');
   await page.locator('[value="Login"]').click();
   await page.waitForLoadState(('networkidle'));
    await page.locator('.card-body b').last().waitFor();
// waitfor will only works if locator return one element
 const titlelist=(await page.locator('.card b').allTextContents());
 console.log(titlelist);
const count =await products.count();
    for(let i=0;i<count;i++){

        if(await products.nth(i).locator("b").textContent()==productname)
        {

            await products.nth(i).locator("text=Add to Cart").click();
            break;
        }

    }

    await page.locator("[routerlink='/dashboard/cart']").click();
    await page.locator("div li").last().waitFor();// this will wait for cart items to load as is visible method doesnot come under playwright autowait
    const bool =await page.locator('h3', { hasText: 'ADIDAS ORIGINAL' }).isVisible();
     await expect(bool).toBeTruthy();

   await page.locator('button', { hasText: 'Checkout' }).click();


  // const cvv=await page.locator('.title', { hasText: 'CVV Code ' });
   //await cvv.waitFor();
    // await cvv.locator("input").fill("233");
   //await page.locator('div', { hasText:'Name on Card ' }).locator('input').fill("Sam- Z");
   await page.locator("input[placeholder='Select Country']").pressSequentially("IND");
   const options= page.locator (".ta-results");
   await options.waitFor();
 const countryname = " India";
   const optcount= options.locator("button");
   for(let i=0;i<optcount;i++)
    {
     const text =  await options.locator("button").nth(i).textContent();

        if (text===countryname )
            {

                await options.locator("button").nth(i).click();
                break;
            }

   }
   await page.pause();



  

 














});