import {test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('standard_user can login', async({ page })=>{
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

});