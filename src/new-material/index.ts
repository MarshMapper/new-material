import { apply, chain, MergeStrategy, mergeWith, move, Rule, SchematicContext, strings, template, Tree, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
type Options = {
  // these depend on the input parameters of the schematic
  projectName: string;
  defaultPageName: string;
};
// the factory function that creates the rule for the new-material schematic
export function newMaterial(_options: Options): Rule {
  return (_: Tree, context: SchematicContext) => {
    // run npm install for @angular/material @angular/cdk @angular/animations
    let taskId = context.addTask(new NodePackageInstallTask({ packageName: '@angular/material@^17.3.0' }));
    taskId = context.addTask(new NodePackageInstallTask({ packageName: '@angular/cdk@^17.3.0' }), [taskId]);
    context.addTask(new NodePackageInstallTask({ packageName: '@angular/animations@^17.3.0' }), [taskId]);

    const templateSource = apply(
      url('./files'), [
      template({
        ...strings,
        ..._options
      }),
      move('.'),
    ],
    );
    return chain([
      mergeWith(templateSource, MergeStrategy.Overwrite)
    ]);
  }
}
