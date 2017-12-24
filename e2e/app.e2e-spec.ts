import { WmnguiPage } from './app.po';

describe('wmngui App', () => {
  let page: WmnguiPage;

  beforeEach(() => {
    page = new WmnguiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
