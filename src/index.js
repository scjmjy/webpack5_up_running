// function component() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
//         let element = document.createElement('div')
//         element.innerHTML = _.join(['Hello', 'webpack5'], '~')
//         return element
//     }).catch(error => {
//         let element = document.createElement('div')
//         element.innerHTML = error.message
//         return element
//     })
// }
async function component() {
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
    let element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack5'], '~')
    return element
}

component().then(c => {
    document.body.appendChild(c)
})
