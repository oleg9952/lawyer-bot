import { serv } from '../../config'

export const sudZbitAPI = (step, selection, api) => {
    return new Promise((resolve, reject) => {
        if (api === 1) {
            fetch(`${serv.PROD}api/spravy?step=${step}&selection=${selection}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        } else if (api === 2) {
            fetch(`${serv.PROD}api/documents?step=${step}&selection=${selection}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        }
    })
}