import { Component, createNgModuleRef, Injector, ViewChild, ViewContainerRef,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private readonly injector: Injector,
  ) {}

  @ViewChild("dynamicCompContainer", { read: ViewContainerRef })
  container!: ViewContainerRef;

  async loadComponent() {
    const dynamicModule = await import(`./dynamic/dynamic.module`).then(m => m.DynamicModule);
    const comp = await import(`./dynamic/dynamic.component`).then(c => c.DynamicComponent);
    const moduleRef = createNgModuleRef(dynamicModule, this.injector);

    this.container.clear();
    this.container.createComponent(comp, { ngModuleRef: moduleRef });

  }

}
