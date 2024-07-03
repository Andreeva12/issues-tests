import { Page } from '@playwright/test';

export class GitHubPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoRepo(owner: string, repo: string) {
    await this.page.goto(`/repos/${owner}/${repo}/issues`);
  }

  async createIssue(title: string, body: string, labels: string[], assignee: string) {
    await this.page.click('text=New issue');
    await this.page.fill('input[name="issue[title]"]', title);
    await this.page.fill('textarea[name="issue[body]"]', body);
    for (const label of labels) {
      await this.page.click(`text=${label}`);
    }
    await this.page.click(`text=${assignee}`);
    await this.page.click('text=Submit new issue');
  }

  async checkIssueExists(title: string) {
    return this.page.isVisible(`text=${title}`);
  }

  async editIssue(title: string, newBody: string) {
    await this.page.click(`text=${title}`);
    await this.page.click('text=Edit');
    await this.page.fill('textarea[name="issue[body]"]', newBody);
    await this.page.click('text=Save');
  }

  async closeIssue(title: string) {
    await this.page.click(`text=${title}`);
    await this.page.click('text=Close issue');
  }
}
