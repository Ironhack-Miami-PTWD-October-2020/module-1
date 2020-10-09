## Checking for understanding - `if`/`switch`

For this activity, create a new variable called `language` . Then create a conditional that handles printing:
<br />

- _Hola, Martin_ if language is equal to `"spanish"`
- _Salut, Martin_ if language is equal to `"french"`
- _Hello, Martin_ if language is equal to `"english"`
- _I am not sure what are you trying to do, sorry!_ 🍺 if language is equal to anything else.

## Solution

```javascript
// 1: if...else - simple solution

if (language === 'spanish') console.log(`Hola, Martin`);
else if (language === 'french') console.log(`Salut, Martin`);
else if (language === 'english') console.log(`Hello, Martin`);
else console.log('I am not sure what are you trying to do, sorry! 🍺');
```

```javascript
// 2: switch
switch (language) {
  case 'spanish':
    console.log(`Hola, ${name}`);
    break;
  case 'french':
    console.log(`Salut, ${name}`);
    break;
  case 'english':
    console.log(`Hello, ${name}`);
    break;
  default:
    console.log('I am not sure what are you trying to do, sorry! 🍺');
}
```
