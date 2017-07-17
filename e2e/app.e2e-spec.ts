import { Ngrx4ReducerPage } from './app.po';

describe('ngrx4-reducer App', () => {
  let page: Ngrx4ReducerPage;

  beforeEach(() => {
    page = new Ngrx4ReducerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
