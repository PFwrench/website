---
title: Creating fwren.ch
description: I created this website from scratch - come see the process that went into making it.
date: 11 14 2017
---
### Goals
The goal of this project was to make a personal website/blog that looked clean and minimal that would scale and be easy to maintain.
 - #### Goals for personal website
 I initially created the business-card-like personal website section around a year ago but abandoned the project after finals rolled around last fall. I didn't really have a plan of attack, I had an idea for a personal website that looked like a business card and just started coding. After picking the project back up again, I had to fix and add a few features to that site of the website. While the first stint of working on this had no goal besides a design, the second stint was more focused.

 After digging through the codebase to see where to start, my goals for the personal website were:
  - Make the animations as smooth as possible
  - Make the website easy to use
  - Keep everything simple
  - Refactor the code as much as possible

 - #### Goals for the blog
 I decided to create a blog section of the website after I finished the personal website section. After interacting with my poorly documented and messy leftovers from the first stint of creating the personal website, you better believe I planned in advance this time :smile:

 I wanted the blog to be:
  - Simple
  - 2 layers deep (all posts => post view)
  - Similar business card style to the personal website
  - More cleanly designed

***

### Implementation

#### Front-end technologies
| Technology | Usage | Pros | Cons |
| --- | --- | --- | --- |
| Node.js | Templating | Familiarity, wide usage, number of npm modules available | Familiarity (I didn't learn that much new about node) |
| Pug | Templating | Familiarity | Familiarity |
| CSS3 | Style, animations | Usability across browsers, performance | CSS3 animations only perform well for a few attributes (transform, opacity) |
| Flexbox | Responsive design | Speed of development, support across modern browsers | Lack of standard across older browsers (notably Safari 6) |
Next project, I'm planning to learn a CSS pre-processor in order to prevent massive CSS files with lots of overriding and unnecessary lines of code. I also plan to learn a major frontend framework (i.e. React, Angular, etc.)

#### Back-end technologies
| Technology | Usage | Pros | Cons |
| --- | --- | --- | --- |
| [Markdown-it](https://www.npmjs.com/package/markdown-it) | Rendering HTML from Markdown | Extensibility, ease of use | Plugins can only get you so far |
| Markdown | Blog posts | Popularity, simplicity, extensibility | None that I can think of! |
| [Express](https://www.npmjs.com/package/express) | Routing, server | Familiarity, simplicity | Familiarity |
| JS promises | handling asynchronous JS functions | Improves readability, industry standard | development time, learning how to debug |

In addition to these mentioned, I tried my hand at writing my own JS modules in order to encapsulate different functions. I wrote a module for reading the markdown blog files, converting them to html through a pug template, and populating the correct file path so they can be served statically. I also wrote a module to clear the rendered posts from the file directory in order to re-render the posts and have no conflicts.

#### Development technologies
| Technology | Usage | Pros | Cons |
| --- | --- | --- | --- |
| --- | --- | --- | --- |
