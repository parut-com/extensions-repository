import fs from 'fs';
import YAML from 'yaml'

const extensionsYml = fs.readFileSync('./extensions.yml', 'utf8');
const extensions = YAML.parse(extensionsYml)

fs.writeFileSync('./extensions.json', JSON.stringify(extensions, null, 2));
