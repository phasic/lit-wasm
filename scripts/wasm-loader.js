(() => {
  const wasmLoader = document.getElementsByTagName('wasm-loader')[0];
  const head = document.getElementsByTagName('head')[0];

  const elementToImport = wasmLoader
    .innerHTML
    .replace(/\n/g, '')
    .split(' ')
    .filter((el) => { return !!el });

  elementToImport.forEach(element => {
    let wasmScript = document.createElement('script');
    wasmScript.src = `./src/${element}/wasm/${element}.js`
    head.appendChild(wasmScript);
  })
})()