import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test('user can add a todo', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Buy milk');
  await input.press('Enter');

  await expect(page.getByTestId('todo-title')).toHaveText(['Buy milk']);
  await expect(page.getByTestId('todo-count')).toContainText('1');
});

test('user can complete a todo', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Buy milk');
  await input.press('Enter');

  await page.getByTestId('todo-item').getByRole('checkbox').check();

  await expect(page.getByTestId('todo-item')).toHaveClass(/completed/);
});

test('user can delete a todo', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Buy milk');
  await input.press('Enter');

  const todo = page.getByTestId('todo-item');
  await todo.hover();
  await todo.getByRole('button', { name: 'Delete' }).click();

  await expect(page.getByTestId('todo-title')).toHaveCount(0);
  await expect(page.getByTestId('todo-count')).toBeHidden();
});