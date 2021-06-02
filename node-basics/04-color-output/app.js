// // Modifiers
// reset - Resets the current color chain.
// bold - Make text bold.
// dim - Emitting only a small amount of light.
// italic - Make text italic. (Not widely supported)
// underline - Make text underline. (Not widely supported)
// inverse- Inverse background and foreground colors.
// hidden - Prints the text, but makes it invisible.
// strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
// visible- Prints the text only when Chalk has a color level > 0. Can be useful for things that are purely cosmetic.
// // Colors
// black red green yellow blue magenta cyan white   
// blackBright (alias: gray, grey)
// redBright greenBright yellowBright blueBright magentaBright cyanBright whiteBright
// // Background colors
// bgBlack bgRed bgGreen bgYellow bgBlue bgMagenta bgCyan bgWhite 
// bgBlackBright (alias: bgGray, bgGrey)
// bgRedBright bgGreenBright bgYellowBright bgBlueBright bgMagentaBright bgCyanBright bgWhiteBright 

const chalk = require('chalk') // https://www.npmjs.com/package/chalk
const log = console.log; // usage - log("Nodejs");

const useChalk = function() {
    // Combine styled and normal strings
    log(chalk.blue('Hello') + ' World' + chalk.red('!'));
    
    // Compose multiple styles using the chainable API
    log(chalk.blue.bgRed.bold('Hello world!'));
    
    // Pass in multiple arguments
    log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
    
    // Nest styles
    log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
    
    // Nest styles of the same type even (color, underline, background)
    log(chalk.green(
        'I am a green line ' +
        chalk.blue.underline.bold('with a blue substring') +
        ' that becomes green again!'
    ));
}

const useChalkIntemplate01 = function() {
    const cpu = {totalPercent: 40};
    const ram = {used: 7, total: 16}
    const disk = {used: 700, total: 1000}
    // // ES2015 template literal
    // log(`
    // CPU: ${chalk.red('90%')}
    // RAM: ${chalk.green('40%')}
    // DISK: ${chalk.yellow('70%')}
    // `);
    // ES2015 tagged template literal
    log(chalk`
    CPU: {red ${cpu.totalPercent}%}
    RAM: {green ${ram.used / ram.total * 100}%}
    DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
    `);
}

const useChalkInDefinedColors = function() {
    log(chalk.keyword('orange')('Yay for orange colored text!')); // css colors
    // Use RGB colors in terminal emulators that support it.
    log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
    log(chalk.hex('#DEADED').bold('Bold gray!'));
}

const useChalkInDefinedThemes = function() {
    const error = chalk.bold.red;
    const warning = chalk.keyword('orange');

    console.log(error('Error!'));
    console.log(warning('Warning!'));
}
const useChalkIntemplate02 = function() {
    const miles = 18;
    const calculateFeet = miles => miles * 5280;
    
    console.log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
    `);
}
useChalk();
useChalkIntemplate01();
useChalkIntemplate02();
useChalkInDefinedColors();
useChalkInDefinedThemes();