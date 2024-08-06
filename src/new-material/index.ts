import { apply, chain, externalSchematic, MergeStrategy, mergeWith, move, Rule, SchematicContext, strings, template, Tree, url } from '@angular-devkit/schematics';

type Options = {
  // these depend on the input parameters of the schematic
  projectName: string;
  defaultPageName: string;
};
// the factory function that creates the rule for the new-material schematic
export function newMaterial(_options: Options): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    console.log(`Options are ${JSON.stringify(_options)}`);

    const templateSource = apply(
      url('./files'), [
      template({
        ...strings,
        ..._options
      }),
      move('.'),
    ],
    );
    // run the external schematic to add Angular Material to the project, then merge with the files
    // from this schematic.  
    //
    // there is currently an issue with this code because the files from ths echmatic are being merged
    // into the project before the Angular Material schematic has finished running.  This means that
    // any files it updates may be incorrect.  currently the only known issue is with styles.scss
    return chain([
      externalSchematic('@angular/material', 'ng-add', {
      theme: 'custom',
      typography: true,
      animations: 'y'
    }),
    mergeWith(templateSource, MergeStrategy.Overwrite)
    ]);
  }
}
