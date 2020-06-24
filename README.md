<p align="center">
  <img src="https://i.imgur.com/ROJE2rc.png" width="100" alt="bartzalewski.com logo" />
</p>

<h1 align="center">
  bartzalewski.com - v2
</h1>

<p align="center">
  This is a project of my new, refreshed website, that is free to use.
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/eager-lichterman-b07f67/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/84b336d8-8c1f-484e-ad19-efabafc468f0/deploy-status" alt="Netlify Status" />
  </a>
</p>

![demo](https://i.imgur.com/ApY87ek.png)

## ⭐ How To Install?

To be able to use this properly, you need to choose between the three versions of this portfolio. If you want to make sure that it'll work for you, just don't install it via the master branch, because it won't start for you. There are 3 versions down below, depending on what you choose, you will have to do different things to make it fully working.

### Choose your version:

* <a href="#contentful">Contentful blog</a>

* [Markdown blog](https://github.com/bartzalewski/bartzalewski.com-v2/tree/md-blog)

* [No blog](https://github.com/bartzalewski/bartzalewski.com-v2/tree/no-blog)

<h2 id="contentful">
  1️⃣ Contentful Blog Installation
</h2>

1. Create [Contentful](http://contentful.com) account.

2. Create New Content Model with fields:

- title (Short Text)
- slug (Short Text)
- publishedDate (Date & time)
- background (Media)
- Body (Rich text)

3. Add a new post and publish it.

4. In the portfolio root directory, create a file ".env", and paste the following code to it:

   ```
   CONTENTFUL_SPACE_ID=YOUR_CONTENTFUL_SPACE_ID
   CONTENTFUL_ACCESS_TOKEN=YOUR_CONTENTFUL_ACCESS_TOKEN
   ```
   
5. Paste your IDs and re-run the development server.

<h2 id="markdown">
  2️⃣ Markdown blog/No blog Installation
</h2>

No configuration at all. Just install.

### Installation and set up:

1. Install [Node.js](https://nodejs.org)

2. Install the Gatsby CLI

   ```
   npm install -g gatsby-cli
   ```

3. CD to the forked repo

   ```
   cd bartzalewski.com-v2
   ```

4. Install the packages

   ```
   npm install
   ```
   
5. Start the development server

   ```
   npm start
   ```
   
## 📝 How to make the Contact Form work?

[Click here](https://github.com/bartzalewski/bartzalewski.com-v2-mail)

## ⚠️ Using it as Your Portfolio

As I'm making this repo public for all, you can easily get it and use it how you want. But, there is a must. You need to attribute me. You must leave alone the attribution under the copyright statement ("Created By Bart Zalewski").

In the beginning, I created this website only for myself, for portfolio purposes. Now, you can just download it and use it for your purposes.

### TL;DR

You can fork this repository, but please give me proper credit by linking back to my website - [bartzalewski.com](https://bartzalewski.com).

Thank you! ❤️

## ✨ What kind of technologies did I use?

- GatsbyJS
- styled-components
- Contentful
- React Helmet

## Follow me!

[Website](https://www.bartzalewski.com) • [Instagram](https://www.instagram.com/bart.code) • [YouTube](https://www.youtube.com/channel/UCwkU0-_RJbS16X5pbcW-tPQ)
