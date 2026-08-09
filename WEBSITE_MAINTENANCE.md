# IM Lab Website Maintenance

## Project structure

imlab-website/
    Astro source

imlab-nycu.github.io/
    Published HTML

## First-time setup

npm install

## Preview

npm run dev

## Build

npm run build

## Deploy

npm run deploy-local

## Publish

cd ../imlab-nycu.github.io
git status
git add .
git commit -m "Describe the update"
git push

## Common tasks

- Add a new member
- Update a photo
- Add a publication
- Add news
- Change homepage text

## Troubleshooting

- astro: not found
    rm -rf node_modules
    npm install

- Image not showing
    Check the path in public/images and people.json

- Local preview works but website unchanged
    Remember to deploy and push the Pages repository.


# IM Lab Website Maintenance Guide

## Overview

The IM Lab website is built using **Astro**, a static site generator.

Think of Astro as a compiler:

```
Source (JSON + Astro)
        │
        ▼
Astro
        │
        ▼
Static HTML/CSS/JS
```

I **never edit the HTML directly**. I always edit the source and let Astro generate the website.

---

# Repository Structure

There are **two Git repositories**.

## 1. Source Repository

```
~/Websites/imlab-website
```

GitHub repository:

```
imlab-nycu/imlab-website
```

This contains:

* Astro source
* JSON data
* images in `public/`
* package.json
* documentation

This is the only place I should edit.

---

## 2. Published Website

```
~/Websites/imlab-nycu.github.io
```

GitHub repository:

```
imlab-nycu/imlab-nycu.github.io
```

This contains the generated HTML that is served at

https://imlab-nycu.github.io/

Never edit these HTML files manually unless there is a very good reason.

---

# Typical Workflow

## 1. Update the source

Examples:

* Add a new member
* Update a photo
* Add publications
* Add news

Usually I edit:

```
src/data/
```

and/or

```
public/images/
```

---

## 2. Preview locally

```
npm run dev
```

Open the local website in the browser.

Verify:

* correct content
* images appear
* layout looks correct

Nothing online changes during this step.

---

## 3. Build

```
npm run build
```

Astro generates

```
dist/
```

Think of `dist/` as the compiled executable of the website.

---

## 4. Deploy locally

```
npm run deploy-local
```

This copies the contents of

```
dist/
```

into

```
~/Websites/imlab-nycu.github.io
```

using rsync.

---

## 5. Publish

```
cd ~/Websites/imlab-nycu.github.io

git status
git add .
git commit -m "Describe the update"
git push
```

After GitHub finishes processing, the website is updated.

---

# First-Time Setup

After cloning the source repository:

```
npm install
```

This installs Astro and all required packages.

If `node_modules` is accidentally copied from another machine or the NAS, simply remove it and reinstall:

```
rm -rf node_modules
npm install
```

---

# Common Files

```
src/data/site.json
```

General site information.

```
src/data/people.json
```

Lab members.

```
public/images/
```

Photos and static images.

---

# Things to Remember

* Always edit the source repository.
* Never edit generated HTML unless absolutely necessary.
* Always preview before publishing.
* GitHub stores the source history.
* The Pages repository stores the generated website.

---

# Mental Model

```
Edit
        │
        ▼
Source Repo
(imlab-website)
        │
        ▼
Astro
(npm run build)
        │
        ▼
dist/
        │
        ▼
Pages Repo
(imlab-nycu.github.io)
        │
        ▼
https://imlab-nycu.github.io/
```

If something goes wrong, remember:

**The source repository is the important one.**

Everything in the published website can always be regenerated from the source.
