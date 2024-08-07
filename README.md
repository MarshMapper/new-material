# new-material

new-material is an Angular schematic that generates a new Angular Material application with several standard components
and a "progress" service that can be shared by all components to show when the application is busy.

The schematic is intended to be used right after creating a new Angular project to add Angular Material and the
CDK, as well as creating a top-level layout for the application using CSS Grid Layout.  Help and Info pages are 
included, as well as a default page you specify when you run the schematic.

**Important:** This schematic will overwrite any existing files with the same name as files it generates.

## Using

For local development, clone this repo and run "yarn install" and "npm run build" in the top-level folder. To use the schematic, create a new angular project using "ng new".  Then cd into the folder for the new project and run the schematic using:

    ng g path/to/new-material:new-material

where "path/to/new-material" is the path to the folder where you cloned and built this repo.  The schematic will prompt you for the name of the project (typically the same name you passed to "ng new") and default page to create, and then it will generate the new application.  You can then run the application using "ng serve -o" and the default page should open in your browser.

The following is a complete example of building the schematic and creating a new Angular project, starting in the folder where you cloned and built this repo (command output is excluded for brevity / clarity):

    c:\src\new-material> yarn install
    c:\src\new-material> npm run build
    c:\src\new-material> cd ..
    c:\src> ng new my-new-app --style=scss --ssr=false --routing=true
    c:\src> cd my-new-app
    c:\src\my-new-app> ng g \src\new-material:new-material
    c:\src\my-new-app> ng serve -o

Note that the files added by the schematic rely on the use of SCSS for styling, so the Angular application must be created with SCSS as the style format as shown above.  