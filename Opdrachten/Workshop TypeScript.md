# Workshop TypeScript

### Installeren omgeving

In eerste instantie moet node geïnstalleerd zijn daarop wordt TypeScript geïnstalleerd.

Installeren van TypeScript: `npm install -g typescript`.

Vervolgens kan met het commando `tsc` TypeScript.ts files worden gecompileerd naar JavaScript.

### Hello World

We beginnen met een simpele HelloWorld:

```javascript
function greeter(person) {
    return"Hello, " + person;
}
var user = "Jane User";

document.body.innerHTML = greeter(user); 
```

Hiervoor hebben we uiteraard nog een pagina nodig:

```html
<!DOCTYPE html>
<html>
   <head><title>TypeScript tester</title></head>
    <body>
       <script src="greeter.js"></script>
    </body>
</html>
```

In `tsconfig.json` moet er verwezen worden  naar es5 en commonjs:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
    },
    "exclude": []
}
```



## Opdrachten

#### Inheritance

- Maak een class `Animal` en gebruik deze voor een `Dog` en `Cat`.
- Maak een methode `getType` en laat deze `Dog` of `Cat` teruggeven met daarachter de naam.

#### Arrays

- Roep dezelfde `getType` aan maar print een array waar een willekeurig aantal Animal kan worden meegegeven
- Hint: `function print(animals: Animal[])`

#### Opdrachtsnelheid auto’s

- Maak een class auto en geefdeze een maximum snelheid
- Maak een array van auto’s en sorteer deze op maximum snelheid
  - hint : de sort functie heeft een car als input en geeft 1,0,-1 terug.
- Maak een class race geef deze een methode die een lijst retourneert met een ranglijst dus op volgorde en de tijd die de auto achter loopt

#### Opdracht: Stack

- Maak een `Stack` data class met `push` en `pop` methodes
- En nu de challenge: De `Stack` moet generiek zijn
- Maak 2 stacks die om kunnen gaan met Animals en Auto's





