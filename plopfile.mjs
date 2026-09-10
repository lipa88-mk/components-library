function clearAndUpper(text) {
    return text.replace(/-/, '').toUpperCase();
}

function toKebabCase(text) {
    return text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}

export default function (plop) {
    plop.setGenerator('Plop generation', {
        description: 'Generation files via plop.js',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: 'What would you like to generate?',
                choices: ['Component'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Name of the component:',
                when: answers => answers.type === 'Component',
                validate: value => {
                    if (/.+/.test(value)) {
                        return true;
                    }
                    return 'Component name is required';
                },
            },
        ],
        actions: answer => {
            const actions = [];

            if (answer.type === 'Component') {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/ui/{{kebabCase name}}/{{pascalCase name}}.tsx',
                        templateFile: 'plop-templates/component/component.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/ui/{{kebabCase name}}/index.ts',
                        templateFile: 'plop-templates/component/index.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/ui/{{kebabCase name}}/docs/config.ts',
                        templateFile: 'plop-templates/component/docs/config.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/ui/{{kebabCase name}}/docs/{{pascalCase name}}.stories.tsx',
                        templateFile: 'plop-templates/component/docs/component.stories.hbs',
                    },
                    {
                        type: 'add',
                        path: 'src/ui/{{kebabCase name}}/docs/Feature.stories.tsx',
                        templateFile: 'plop-templates/component/docs/feature.stories.hbs',
                    }
                );
            }

            return actions;
        },
    });

    plop.setHelper('pascalCase', text => {
        return text.replace(/(^\w|-\w)/g, clearAndUpper);
    });

    plop.setHelper('kebabCase', text => {
        return toKebabCase(text);
    });
}
