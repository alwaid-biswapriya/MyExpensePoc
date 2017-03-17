import { MyexpensePocPage } from './app.po';

describe('myexpense-poc App', function() {
  let page: MyexpensePocPage;

  beforeEach(() => {
    page = new MyexpensePocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
