const { 
    pozevach,
    zayavnik,
    zasudzheni,
    mistsevaVlada,
    fopCred,
    viiskovi,
    viiskovyi,
    vyborets,
    osobaZPsykhichnymZakhvoriuvanniam,
    // ----- FALSE -----
    osobaZInvalidnistiu,
    predstavnykDitei,
    invalidViiny,
    zakhystInteresiv
 } = require('./conditionals');

module.exports.getData = (apiData, { step, target }) => {
    switch (step) {
        case 0:
            return {
                final: false,
                step: step,
                options: apiData.static.person
            }
        case 1:
            return apiData.static.persons
        case 2:
            let result = null
            if (
                target === osobaZInvalidnistiu ||
                target === predstavnykDitei ||
                target === invalidViiny ||
                target === zakhystInteresiv
            ) {
                result = {
                    zbir: false,
                    message: 'Ви звільнені від сплати'
                }
            } else if (target === pozevach) {
                result = {
                    
                }
            }

            return result
        default:
            return data
    }
}