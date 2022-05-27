# Gulp Typescript Template

## Motivation

I've always found myself wasting too much time setting up Typescript, a bundler and a local server before putting any real time into coding the project I wanted to. More often than not, I just needed to kickstart something and check on my browser's console if everything was working. I had problems with CORS and local scripts, Typescript files that were not bundled, and file path errors after building phase.

This isn't, by any means, a silver bullet solution. But in order to avoid all the headache that usually ended up sucking all my motivation of starting a new PoC or pet project, I'm creating for myself this template and sharing it to anyone who might need something to start coding a web app with Typescript that, in the end of the day, just bundles everything to a single `index.js` and works.

This approach also makes it easy to publish the result to **Github Pages**, which was also a major motivation.

## How does it work?

The `public/` directory stashes all the static files (`index.html`, assets, stylesheets - if you are not using any preprocessor, and any 3rd party scripts). When either `npm start` or `npm run build` is run, all the contents of `./www` are erased and the files on `public/` are copied to that location. Then, the scripts are bundled into a `index.js` file which is also saved to `./www`.

In summary, `./www` will contain what is on `public/` + `index.js`, but if other files are built from different building processess (such as some JSON or Wasm), just point the target of such processe to `./www`.

If you want to publish to **Github Pages**, remove `./www` from `.gitignore` and point to that location. I recommend using a different branch.

## How to use?

You can either just click **Use this template** on Github (which will prompt you to create a new repo on your account) or clone the repo on your local machine. Using Github's interface has the advantage of quickly setting up everything and letting you clone your repo and start working, but this approach will leave a _generated from victoroliveirab/gulp-typescript-template_ text below your repo's name. If you want to avoid this, just do the following:

```bash
git clone git@github.com:victoroliveirab/gulp-typescript-template.git
mv gulp-typescript-template your-project-name
cd your-project-name/
rm -rf .git
git init
```

This will erase my repo's git history and create an empty one to your brand new project :)

## Limitations

As your project grows, the limitations will start to show up. If performance starts to suffer, look into **Code Splitting** and **Lazy Loading** because this template was setup to be simple, not performant. Gulp's documentation and community posts are more than enough to get you started.

Of course, for small projects or PoCs, there will be no need of over complicating things. But as the code base becomes larger, this concepts are crucial for a smoother user experience.

## Contributing

I'm always open for suggestions and contributions, but this is such a small project that for the day I don't see a reason for contributions. You might as well just copy the code and change to your desire. No need for credit :). Just let me know what you think would improve this template, because I might see the benefits for myself and learn from you. Exchange is key!
