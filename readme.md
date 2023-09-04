![trentb-on-gatsby](src/images/headers/header-1.png)

# Trent B on Gatsby!

*Trent B on Gatsby!* is a GatsbyJS implementation of my personal website that 
was developed using HTML, CSS, and JavaScript, and was hosted on 
[Centennial College's Student Web server](http://studentweb.cencol.ca/)!

[*trentb10 on GitHub Pages*](https://trentb10.github.io/studentweb-cencol-github-pages/) 
is a GitHub Pages implementation of my personal website that is used to host my
assignments for COMP213 Web Interface Design and COMP125 Client-Side Development
at Centennial College. I had planned to host all features of my personal website
on GitHub pages before I decided to use GatsbyJS instead.

This repository is used to host the website on the GatsbyJS cloud.

# Release Notes

**2023-09-04**: Version 1.1.2
 - Updated font set for the website:
   - **Navigation Bar, Headers (h1 and h2)**: Barlow --> Overpass
   - **Content Body**: Barlow --> Comme
   - Updated index, about-me, and personal-works/trentb-on-gatsby pages
   - Cleaned up some uneccessary font imports in the SASS

**2023-04-19**: Version 1.1.1
 - Updated font set for the website:
   - **Navigation Bar, Headers (h1 and h2)**: M Plus 1 --> Barlow
   - **Content Body**: Arimo --> Barlow

**2023-02-28**: Version 1.1
 - Using a new set of fonts for the website:
   - **Navigation Bar**: Overpass --> M Plus 1
   - **Headers (h1 and h2)**: Iosevka --> M Plus 1
   - **Content Body**: Overpass --> Arimo
 - Adjusted the HEX colour values in the SASS styling sheet
 - Updated about-me section
 - Updated footer area appearance and disabled text selection for that area

**2022-03-23**: Version 1.0.7
 - Updated fonts
   - Updated customized Iosevka font
   - Switched from PT Sans to Overpass
 - Updated personal-works/trentb-on-gatsby page

**2022-03-19**: Version 1.0.6.1
 - Updated footer to show correct version
 - Took this as an opportunity to see if I properly installed nvm-windows, gatsby, and git on my new laptop 🏃‍♀️

**2021-11-29**: Verison 1.0.6
 - Updated about-me section

**2021-08-10**: Version 1.0.5
 - Updated index

**2021-07-16**: Version 1.0.4
 - Updated about-me section
   - Renamed list of programming languages to list of technologies
   - Added more technologies

**2021-07-13**: Version 1.0.3
 - Updated about-me section

**2021-07-03**: Version 1.0.2
 - Updated education

**2021-07-03**: Version 1.0.1
 - Minor changes made to the About Me page, the footer, and readme

**2021-06-22**: Version 1.0
 - Released on Gatsby Cloud!

# Branch Notes

As soon as Trent B on Gatsby! reaches Version 1.0 release, there will be two 
branches set up to manage the project the rest of the way:

* `main`: The main branch of the project repository that will be used to publish 
the website on the cloud
* `development`: The development branch of the project repository. All changes 
and new features will be developed and pushed to this branch before being 
released and pushed to the `main` branch.

# Feature Overview Summary

*Trent B on Gatsby!* is my personal website implemented using GatsbyJS! During 
development, my site's working title was *Trent B's Dream World!*

## Page Navigation Map

My site may be navigated using the navbar at the top. The navigable pages are:

* `Home`
* `About Me`
* `Assignments`
  * `Centennial College`
  * `University of Toronto`
* `Works`
  * `24Our Music`
  * `Amp the Sound`
  * `Dollar Gamers`
  * `Feed My Curiosity`
  * `Personal Works`

Each bullet point has its own page. `Works` and `Assignments` pages features 
collapsibles. `About Me` has a skillbox, that is also made using collapsibles.

## Fonts

The following fonts were used:

 * [Overpass](https://fonts.google.com/specimen/Overpass)
 * [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono)
 * [Iosevka](https://github.com/be5invis/Iosevka), custom-built from source

![Customized Iosevka](src/images/works/personal-works/trentb-on-gatsby/tbog-iosevka.png)
<center>My custom Iosevka font I built from source using `npm`.</center>

## Plugins

Aside from the necessary GatsbyJS dependencies installed via `npm` at project 
creation, the following plugins were also used:

* [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass) and [sass](https://github.com/sass/sass)
* [react-collapsible](https://github.com/glennflanagan/react-collapsible)
* [react-helmet](https://github.com/nfl/react-helmet)