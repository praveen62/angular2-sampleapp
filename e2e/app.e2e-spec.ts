import { MixiappPage } from './app.po';

describe('mixiapp App', function() {
  let page: MixiappPage;

  beforeEach(() => {
    page = new MixiappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
