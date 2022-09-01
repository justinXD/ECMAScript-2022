const boton = document.getElementById('btn')
boton.addEventListener('click', async function() {
    const module = await import('./module.js')  //muy util para mejorar el rendimiento de un sitio web
    console.log(module)
    module.hello()
})