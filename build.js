// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: "tok_dev_WvE9jTtk6RcuyMgXTVD3ePYvrNLeArTvgaXc3rnR946oRyLTZZoY1gJhgeg3zwTu"});
async function main() {
    let result = await lib.halo.infinite['@1.4.1'].stats.players.matches({
        gamertag: 'iamArcas', // required
        type: 'all',
        language: 'en-us',
        count: 25,
        offset: 0
      });
      console.log(result)
      // endpoints are executed as functions, click [> Run] below to test
      return result;  
}

main()
