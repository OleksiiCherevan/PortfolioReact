const serverAPI = 'https://acherevan-api.herokuapp.com'


const currentRoute = () => {
    var reUrl = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/
    const currentURL = window.location.href
    const url = reUrl.exec(currentURL)

    if(null === url || null === url[1] || null === url[2] || null === url[3])
        throw 'url or http or link was null'

    let [, http, link, route] = url || ''

    return [, http, link, route] 
}

export { serverAPI, currentRoute }