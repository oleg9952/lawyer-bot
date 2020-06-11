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

module.exports.getData = (apiData, { step, selection }) => {
    switch (step) {
        case 0:
            return {
                final: false,
                step: step,
                options: apiData.static.person
            }
        case 1:
            return {
                final: false,
                step: step,
                options: apiData.static.persons
            }
        case 2:
            let result = null
            if (
                selection === osobaZInvalidnistiu ||
                selection === predstavnykDitei ||
                selection === invalidViiny ||
                selection === zakhystInteresiv
            ) {
                result = {
                    final: true,
                    step: 3,
                    message: 'Ви звільнені від сплати'
                }
            } else if (selection === pozevach) {
                result = {
                    final: false,
                    step: 2,
                    options: apiData.conditional[selection]
                }
            }

            return result
        default:
            return apiData
    }
}