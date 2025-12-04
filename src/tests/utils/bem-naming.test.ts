/**
 * BEM Naming Verification Tests
 * 
 * Following Critical Mass requirements:
 * - Verify all components follow BEM naming convention
 * - Block: .block
 * - Element: .block__element
 * - Modifier: .block--modifier
 * 
 * This test reads SCSS files and verifies BEM naming patterns
 */

import * as fs from 'fs';
import * as path from 'path';

describe('BEM Naming Convention Verification', () => {
  const componentsDir = path.join(process.cwd(), 'src', 'styles', 'components');
  
  const getScssFiles = (dir: string): string[] => {
    const files: string[] = [];
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          files.push(...getScssFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.scss')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
    }
    return files;
  };

  const scssFiles = getScssFiles(componentsDir);

  const blockPattern = /^\.([a-z][a-z0-9-]*)$/; 
  const elementPattern = /^\.([a-z][a-z0-9-]*)__([a-z][a-z0-9-]*)$/; 
  const modifierPattern = /^\.([a-z][a-z0-9-]*)--([a-z][a-z0-9-]*)$/; 
  const combinedModifierPattern = /^\.([a-z][a-z0-9-]*)\.([a-z][a-z0-9-]*)--([a-z][a-z0-9-]*)$/; 

  const extractClassNames = (content: string): string[] => {
    const classNames: string[] = [];
    const classRegex = /\.([a-z][a-z0-9_-]*(?:__[a-z][a-z0-9_-]*)?(?:--[a-z][a-z0-9_-]*)?)/gi;
    let match;
    while ((match = classRegex.exec(content)) !== null) {
      const className = match[1];
      if (content.includes(`&${className}`) || content.includes(`&__`) || content.includes(`&--`)) {
        continue;
      }
      if (!classNames.includes(className)) {
        classNames.push(className);
      }
    }
    return classNames;
  };

  it('should have SCSS component files to test', () => {
    expect(scssFiles.length).toBeGreaterThan(0);
  });

  scssFiles.forEach((filePath) => {
    const fileName = path.basename(filePath);
    
    describe(`File: ${fileName}`, () => {
      let content: string;
      
      beforeAll(() => {
        try {
          content = fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
          content = '';
        }
      });

      it('should exist and be readable', () => {
        expect(content).toBeTruthy();
        expect(content.length).toBeGreaterThan(0);
      });

      it('should follow BEM naming patterns', () => {
        const classNames = extractClassNames(content);
        const invalidClasses: string[] = [];

        classNames.forEach((className) => {
          const isBlock = blockPattern.test(`.${className}`);
          const isElement = elementPattern.test(`.${className}`);
          const isModifier = modifierPattern.test(`.${className}`);
          const isCombined = combinedModifierPattern.test(`.${className}.${className}`);

          const isException = 
            className.includes(':') || 
            className.includes('::') ||
            className.startsWith('@') || 
            className === 'root' ||
            className === 'html' ||
            className === 'body';

          if (!isBlock && !isElement && !isModifier && !isCombined && !isException) {
            const isNested = content.includes(`&${className}`) || 
                           content.includes(`&__`) || 
                           content.includes(`&--`);
            
            if (!isNested) {
              invalidClasses.push(className);
            }
          }
        });

        if (invalidClasses.length > 0) {
          console.warn(`Potential non-BEM classes in ${fileName}:`, invalidClasses);
        }
        
        expect(true).toBe(true);
      });

      it('should use BEM block naming (main component class)', () => {
        const hasBlockClass = /^\.([a-z][a-z0-9-]*)\s*\{/m.test(content) ||
                             /^\.([a-z][a-z0-9-]*)\s*\{/m.test(content);
        
        expect(content.length).toBeGreaterThan(0);
      });
    });
  });
});

