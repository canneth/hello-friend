
import moduleAlias from 'module-alias';
import path from 'path';

const rootPath = path.resolve(__dirname, '..', '..');
const rootPathDev = path.resolve(rootPath, 'src');
const rootPathProd = path.resolve(rootPath, 'build');

console.log(process.env.NODE_ENV);

moduleAlias.addAliases({
  '@src': process.env.NODE_ENV === 'development' ? rootPathDev : rootPathProd
});
