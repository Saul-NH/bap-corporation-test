const { readFileSync, writeFileSync, existsSync } = require('fs');
const Path = require('path');

const envFilePath = Path.join(process.cwd(), '.env');

const newEnvVariables = [
    {
        name: 'NODE_ENV',
        value: 'development',
    },
    {
        name: 'PORT_DEV',
        value: 3000,
    },
    {
        name: 'DATABASE_NAME',
        value: 'bap-corporativo',
    },
    {
        name: 'DATABASE_USERNAME',
        value: 'root',
    },
    {
        name: 'DATABASE_PASSWORD',
        value: '',
    },
    {
        name: 'DATABASE_HOST',
        value: 'localhost',
    },
    {
        name: 'DATABASE_DIALECT',
        value: 'mysql',
    },
    {
        name: 'PORT_PRODUCTION',
        value: '8081',
    },
    {
        name: 'JWT_SECRET',
        value: 'secret phrase',
    },
    {
        name: 'NODE_CONFIG_DIR',
        value: Path.join(process.cwd(), 'src/config/'),
    },
];

try {
    //Create empty .env file if not exists
    if (!existsSync(envFilePath)) {
        writeFileSync(envFilePath, '');
    }

    //Getting the original data from the .env file
    let envDataFile = readFileSync(envFilePath, 'utf8');

    //Adding the new environment variables to the envDataFile string
    newEnvVariables.forEach((variable) => {
        envDataFile.includes(variable.name)
            ? envDataFile
            : (envDataFile +=
                  '\n' + variable.name + '=' + variable.value + '\n');
    });

    //Writting the new .env file
    writeFileSync(envFilePath, envDataFile);

    console.log('.env file built successfully');
} catch (error) {
    console.log(error.message);
}
