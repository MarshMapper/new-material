# new-material

new-material is an Angular schematic that generates a new Angular Material application with several standard components
and a "progress" service that can be shared by all components to show when the application is busy.

The schematic is intended to be used right after creating a new Angular project to add Angular Material and the
CDK, as well as creating a top-level layout for the application using CSS Grid Layout.  Help and Info pages are 
included, as well as a default page you specify when you run the schematic.

**Important:** This schematic will overwrite any existing files with the same name as files it generates.

## Using

For local development, clone this repo and run "yarn install" and "npm run build" in the top-level folder. Then, in the project where you want to use the schematic, run:

    ng g path/to/new-material:new-material

where "path/to/new-material" is the path to the folder where you cloned and built this repo.
