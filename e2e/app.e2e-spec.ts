import { QuizPage } from './app.po';

describe('quiz App', () => {
  let page: QuizPage;

  beforeEach(() => {
    page = new QuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
