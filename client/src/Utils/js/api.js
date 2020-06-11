import { serv } from '../../config'

export const sudZbitAPI = (step, selection) => {
    return new Promise((resolve, reject) => {
        fetch(`${serv.PROD}api/sudovyi-zbir?step=${step}&selection=${selection}`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}