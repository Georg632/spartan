import { Component } from '@angular/core';
import { HlmToggleDirective } from '@ng-spartan/ui/toggle/helm';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixFontItalic } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-toggle-outline',
  standalone: true,
  imports: [HlmToggleDirective, HlmIconComponent],
  providers: [provideIcons({ radixFontItalic })],
  template: `
    <button hlmToggle variant="outline">
      <hlm-icon size="sm" name="radixFontItalic" />
    </button>
  `,
})
export class ToggleOutlinePreviewComponent {}

export const outlineCode = `
import { Component } from '@angular/core';
import { HlmToggleDirective } from '@ng-spartan/ui/toggle/helm';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixFontItalic } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-toggle-outline',
  standalone: true,
  imports: [HlmToggleDirective, HlmIconComponent],
  providers: [provideIcons({ radixFontItalic })],
  template: \`
    <button hlmToggle variant="outline">
      <hlm-icon size="sm" name="radixFontItalic" />
    </button>
  \`,
})
export class ToggleOutlinePreviewComponent {}

`;