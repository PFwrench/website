---
title: Creating fwren.ch
description: I created this website from scratch - come see the process that went into making it.
date: 11 14 2017
---
## Goals
The goal of this project was to make a personal website/blog that looked clean, minimal, responsive, and be easy to maintain.
- #### Goals for personal website
  I initially created the business-card-like personal website section around a year ago but abandoned the project after finals rolled around last fall. I didn't really have a plan of attack, I had an idea for a personal website that looked like a business card and just started coding. After picking the project back up again, I had to fix and add a few features to that part of the website. While the first stint of working on this had no goal besides a design, the second stint was more focused.

  After digging through the codebase to see where to start, my goals for the personal website were:
  - Make the animations as smooth as possible
  - Make the website easy to use
  - Keep everything simple
  - Refactor the code as much as possible

- #### Goals for the blog
  I decided to create a blog section of the website after I finished the personal website section. After interacting with my poorly documented and messy leftovers from the first stint of creating the personal website, you better believe I planned in advance this time. :smile:

  I wanted the blog to be:
  - Simple
  - 2 layers deep (all posts => post view)
  - Similar business card style to the personal website
  - More cleanly designed

## Implementation

#### Front-end technologies
| Technology | Usage | Pros | Cons |
| --- | --- | --- | --- |
| [Node.js](//nodejs.org/en/) | Templating | Familiarity, wide usage, number of npm modules available | Familiarity (I didn't learn that much new about node) |
| [Pug](//pugjs.org/api/getting-started.html) | Templating | Familiarity | Familiarity |
| CSS3 | Style, animations | Usability across browsers, performance | CSS3 animations only perform well for a few attributes (transform, opacity) |
| Flexbox | Responsive design | Speed of development, support across modern browsers | Lack of standard across older browsers (notably Safari 6) |
Next project, I'm planning to learn a CSS pre-processor in order to prevent massive CSS files with lots of overriding and unnecessary lines of code. I also plan to learn a major frontend framework (i.e. React, Angular, etc.)

#### Back-end technologies
| Technology | Usage | Pros | Cons |
| --- | --- | --- | --- |
| [Markdown-it](//www.npmjs.com/package/markdown-it) | Rendering HTML from Markdown | Extensibility, ease of use | Plugins can only get you so far |
| Markdown | Blog posts | Popularity, simplicity, extensibility | None that I can think of! |
| [Express](//www.npmjs.com/package/express) | Routing, server | Familiarity, simplicity | Familiarity |
| [JS promises](//developers.google.com/web/fundamentals/primers/promises) | handling asynchronous JS functions | Improves readability, industry standard | Development time, learning how to debug |
| [Nginx](//www.nginx.com) | Proxy | Ease of use, familiarity | Familiarity |

In addition to these mentioned, I tried my hand at writing my own JS modules in order to encapsulate different functions. I wrote a module for reading the markdown blog files, converting them to html through a pug template, and populating the correct file path so they can be served statically. I also wrote a module to clear the rendered posts from the file directory in order to re-render the posts and have no conflicts.

#### Development technologies
| Technology | Usage | Pros | Cons |
| --- | --- | --- | --- |
| [Git hooks](//git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks) | Development automation | Never have to ssh into my server to update the live site again! | Honestly, none that I can think of. |
| [AWS EC2](//aws.amazon.com/ec2/) | Hosting | Robust, scale as needed, free tier for a year | Is a little robust for just a personal website/blog |

I had never used git hooks before, and my god they are fantastic. I've experienced CI before in more robust DevOps environments, but I never went from no CI to CI. Moving from doing everything by hand (manually ssh-ing into the server, pulling down the updated code from Github or wherever, restarting the app, checking to make sure everything still works, etc.) to just doing a git push has been amazing. You don't really appreciate something until you've done it yourself!

## Major Lessons Learned
- #### Plan before you jump into coding
  If I had planned the initial design of the business card side, I could've saved an embarrassing amount of time. I was told this years ago by my boss, yet I didn't really take it to heart until now. Defining what you want to do with what you code also takes a major role. If I just wanted to mess around with CSS transitions and never publish anything, what I did would've been completely acceptable -- yet here we are. If there's one thing to take out of this project, it's that planning goes a long way.
- #### Research before implementing
  While I was investigating technologies and libraries to convert markdown files into HTML, I ran across lots of different ways to do the same thing. Most of them didn't do exactly what I wanted, which was to read the markdown files, convert them to HTML, place them in a specific file path, and aggregate the metadata from the markdown files to send to the main blog page. I found one, however, that seemed to do exactly what I wanted -- [Metalsmith](//www.metalsmith.io/). The idea is really cool: provide a markdown to HTML converter and allow others to create plugins to create additional features to the converter. I was convinced that this was the best way to move forward, so I went with it. It did everything I wanted to, except the metadata aggregating. It actually did aggregate data, it just was not accessible when you were outside the Metalsmith function. I stayed up until 2:30AM trying to figure out how to get this goddamn metadata out of Metalsmith, but alas my sleep-deprived brain couldn't figure it out.

  I'm sure there's a way to accomplish what I wanted with Metalsmith, but I should've just put in the work myself to get exactly the features I wanted. In today's world where millions of plugins, libraries, and modules are available to developers across almost all languages and platforms, we all hope there's one out there that is the exact piece of the puzzle we've been missing. I spent more time searching for that one plugin and trying to force it to work than the time it took to write exactly what I needed. From now on, I'm going to a quick search to see if I get lucky. If I don't find it quickly, I'm just going to start implementing it myself.

## Conclusion
  1. Plan more
  2. Research more
  3. Don't be afraid to put the work in yourself
  4. Automate as much of the development process as you can
  5. Who needs cross-browser functionality anyway?

Thanks for reading!
