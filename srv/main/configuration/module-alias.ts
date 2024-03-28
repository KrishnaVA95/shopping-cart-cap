// Dentro deste arquivo vamos dizer que sempre que utilizarmos no import o caracter @, ele deverá referenciar a pasta srv como base:
import moduleAlias from 'module-alias';
import { join } from 'path';

moduleAlias.addAlias('@', join(__dirname, '..', '..'));