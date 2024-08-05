import { apply, chain, externalSchematic, MergeStrategy, mergeWith, move, Rule, SchematicContext, template, Tree, url, branchAndMerge } from '@angular-devkit/schematics';

type Options = {
  // these depend on the input parameters of the schematic
  projectName: string;
  defaultPageName: string;
};
// the factory function that creates the rule for the new-material schematic
export function newMaterial(_options: Options): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    let templateOptions = {
      name: '',
      path: '.'
    }
    const templateSource = apply(
			url('./files'), [
				template(templateOptions),
				move(templateOptions.path),
			],
		);
    return chain([
      branchAndMerge(chain([externalSchematic('@angular/material', 'ng-add', {
        theme: 'custom',
        typography: true,
        animations: 'y'
      }),
        mergeWith(templateSource, MergeStrategy.Overwrite),
      ]), MergeStrategy.Overwrite),
    ])(_tree, _context);
  }
};
