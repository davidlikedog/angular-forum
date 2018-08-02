import { EbizMaterialModule } from './ebiz-material.module';

describe('EbizMaterialModule', () => {
  let ebizMaterialModule: EbizMaterialModule;

  beforeEach(() => {
    ebizMaterialModule = new EbizMaterialModule();
  });

  it('should create an instance', () => {
    expect(ebizMaterialModule).toBeTruthy();
  });
});
