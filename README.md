# This is a Random Sentence Machine
## Generate weird sentences with fake authors

***Click on the image to access :***
[![RandomSentenceMachine](https://github.com/ShayReichert/random_quote_machine/blob/master/screen%20generator.png)](https://shayreichert.github.io/random_quote_machine/)


## Description

- Generate sentences with fake authors.
- You can tweet (or post on tumblr) sentences.
- [FreeCodeCamp Final Project #01](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine)

---

## Built With

* [React](https://fr.reactjs.org/) - JavaScript Framework

---


## What you'll learn by making this app
- Manipulate props and state in React
- Links to post App's elements on Twitter and Tumblr
- JS function to generate random colors and make it appears to the DOM
- Same for generate random quotes and authors from a JSON file
- Build and deploey an app on GitHub

---


## Tuto : Comment mettre son projet React sur GitHub facilement ? 
*Pré-requis : Git, compte Github, Node.js, npm*

- 1 - Faire un projet "create-react-app".


&nbsp;


- 2 - **Installer GitHub Pages** avec la commande :  
```sh
npm install gh-pages --save-dev
```


&nbsp;


- 3 - Ajouter **"homepage", predeploy" et "deploy"** au fichier package.json à ces endroits : 

```sh
    . {
  "name": "random-quote-machine", 
  "version": "0.1.0",
  "private": true,
  "homepage": "https://[user_name].github.io/[repo_name]/",
  
    . "scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
  }
```

&nbsp;


- 4 - Créer un dépot GitHub et l'ajouter dans son son dépôt local.

&nbsp;


- 5 - Initialiser git avec la commande :
```sh
git init
```
puis faire un premier dépôt avec :
```sh
git remote add origin git@github.com:[user_name]/[my-app.git]
```

&nbsp;


- 6 - **Déployer le projet** sur GitHub Pages :
```sh
npm run deploy
```
*Cette commande crée une branche appelé **gh-pages**, qu'on pourra ensuite sélectionné comme branch dans les paramètres GitHub.*

&nbsp;


- 7 - Commiter et pusher sur GitHub (*optionnel*) :
```sh
git add .
git commit -m "Your awesome message"
git push origin master
```

---


**Support**

Reach out to me at one of the following places :

- Twitter at <a href="https://twitter.com/ShayReichert" target="_blank">`@shayreichert`</a>
- CodePen at <a href="https://codepen.io/Shay_Reichert" target="_blank">`Shay Reichert`</a>

---
---
