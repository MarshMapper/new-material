# new-material

NewMaterial is an Angular schematics that generates a new Angular Material module with several standard components
and a "progress" service that can be shared by all components to show when the application is busy.

The schematic is intended to be used right after creating a new Angular project, to add Angular Material and the
CDK, as well as creating a top-level layout for the application using CSS Grid Layout.

**Important:** This schematic will currently overwrites any existing files with the same name as files it generates.

## Using

For local development, clone this repo and run "npm run build" in the top-level folder. Then, in the project where you want to use the schematic, run:

    ng g path/to/new-material:new-material

where "path/to" is the path to the folder where you cloned and built this repo.

Currently there is one issue with the generated code.  The global styles.scss is a merger of the default one and the one
provided in this template.  Delete everything before the line around line 41 that says:
    
    @use '@angular/material' as mat;

This issue will be corrected in a future version.   Similarly, the default landing page generated does not currently work and will be fixed in a future version.  Templates will also be added to make the schematic more flexible.