# Klepon

Klepon is a boilerplate for rapidly building modern business web applications. It is built upon NX and uses Angular as the frontend and has included boilerplate code for Express.JS backend services. Klepon includes Google's Material Design and Tailwind CSS. 

[Preview](https://klepon-e36c3.web.app/) this web app

## Projects
```
apps/
|-- svc-people
|-- svc-profile
`-- web
```
- web is the boilerplate for the frontend application using Angular
- svc-people and svc-profile are boileplates for the backend services running Express.JS

## Development

To run multiple projects for development purposes run the following command:

```
nx run-many --parallel --target=serve --projects=svc-profile,svc-people,web
```

and navigate to http://localhost:4200/.

## Adding a new project

To add a new project run the following command:

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## License
Klepon is licensed under the MIT License.

## Acknowledgments
Klepon is based on the following projects:

- [Angular](https://angular.io)
- [NX](https://nx.dev)
- [Express.JS](https://expressjs.com)
- [Google's Material Design](https://material.io)
- [Tailwind CSS](https://tailwindcss.com)

We would like to thank the authors of these projects for their hard work and dedication.