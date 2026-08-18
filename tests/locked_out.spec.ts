import {test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('locked_out_user can login', async({ page })=>{
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('locked_out_user', 'secret_sauce');

});