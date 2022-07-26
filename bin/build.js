/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import fs from 'fs';
import format from 'prettier-eslint';
import processSvg from './processSVG.js';
import parseName from './utils.js';
const defaultStyle = process.env.npm_package_config_style || 'stroke';
import temp from './template.js';
import icons from '../src/data.json' assert {type: "json"};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// where icons code in
const srcDir = join(rootDir, 'src')
const iconsDir = join(rootDir, 'src/icons')

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
    fs.mkdirSync(iconsDir)
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir)
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `;

  fs.writeFileSync(join(rootDir, 'src', 'icons.js'), '', 'utf-8');
  fs.writeFileSync(
    join(rootDir, 'src', 'icons.d.ts'),
    initialTypeDefinitions,
    'utf-8',
  );
}

// generate attributes code
const attrsToString = (attrs, style) => {
  console.log('style: ', style)
  return Object.keys(attrs).map((key) => {
    // should distinguish fill or stroke
    if (key === 'width' || key === 'height' || key === style) {
      return key + '={' + attrs[key] + '}';
    }
    if (key === 'otherProps') {
      return '{...otherProps}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

// generate icon code separately
const generateIconCode = async ({ name }) => {
  const names = parseName(name, defaultStyle)
  console.log(names)
  const location = join(rootDir, 'src/svg', `${names.name}.svg`)
  const destination = join(rootDir, 'src/icons', `${names.name}.js`)
  const code = fs.readFileSync(location)
  const svgCode = await processSvg(code)
  const ComponentName = names.componentName
  const element = temp.getElementCode(ComponentName, attrsToString(temp.getAttrs(names.style), names.style), svgCode)
  const component = format({
    text: element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  });

  fs.writeFileSync(destination, component, 'utf-8');

  console.log('Successfully built', ComponentName);
  return { ComponentName, name: names.name }
}

// append export code to icons.js
const appendToIconsIndex = ({ ComponentName, name }) => {
  const exportString = `export { default as ${ComponentName} } from './icons/${name}';\r\n`;
  fs.appendFileSync(
    join(rootDir, 'src', 'icons.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    join(rootDir, 'src', 'icons.d.ts'),
    exportTypeString,
    'utf-8',
  );
}

generateIconsIndex()

Object
  .keys(icons)
  .map(key => icons[key])
  .forEach(({ name }) => {
    generateIconCode({ name })
      .then(({ ComponentName, name }) => {
        appendToIconsIndex({ ComponentName, name })
      })
  })
