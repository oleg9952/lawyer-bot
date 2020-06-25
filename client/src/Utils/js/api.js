import { serv } from '../../config'

export const sudZbitAPI = (step, selection, api) => {
    return new Promise((resolve, reject) => {
        fetch(`${serv.DEV}api/${api === 1 ? 'spravy' : 'documents'}?step=${step}&selection=${selection}`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}