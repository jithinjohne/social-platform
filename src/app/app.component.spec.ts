import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  it('should have a title', () => {
    const app = new AppComponent();
    expect(app.title).toBeDefined();
  });

})