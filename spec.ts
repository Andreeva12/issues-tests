import { test, expect } from '@playwright/test';
import { GitHubPage } from '../pages/github.page';

test.describe('GitHub Issues Management', () => {
  let githubPage: GitHubPage;
  const owner = 'Andreeva12';
  const repo = 'YOUR_REPO';
  const issueTitle = 'Issue 1';
  const issueBody = 'Я нашел баг';
  const newIssueBody = 'Я нашел новый баг';
  const labels = ['bug'];
  const assignee = 'Andreeva12';

  test.beforeEach(async ({ page }) => {
    githubPage = new GitHubPage(page);
    await page.goto('https://github.com/Andreeva12');
    await page.fill('input[name="login"]', 'Andreeva12');
    await page.fill('input[name="password"]', 'PASSWORD');
    await page.click('text=Sign in');
  });

  test('should create an issue', async ({ page }) => {
    await githubPage.gotoRepo(owner, repo);
    await githubPage.createIssue(issueTitle, issueBody, labels, assignee);
    expect(await githubPage.checkIssueExists(issueTitle)).toBeTruthy();
  });

  test('should edit an issue', async ({ page }) => {
    await githubPage.gotoRepo(owner, repo);
    await githubPage.editIssue(issueTitle, newIssueBody);
    expect(await page.isVisible(`text=${newIssueBody}`)).toBeTruthy();
  });

  test('should close an issue', async ({ page }) => {
    await githubPage.gotoRepo(owner, repo);
    await githubPage.closeIssue(issueTitle);
    expect(await page.isVisible(`text=Closed`)).toBeTruthy();
  });
});
