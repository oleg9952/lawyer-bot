const {
    zaiava,
    pozovnaZaiava,
    klopotannia,
    apeliatsiinaSkarha,
    kasatsiinaSkarha
} = require('../actions/documentsActions')

module.exports.getDataDocuments = (apiData, { step, selection }) => {
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
                options: apiData.static.documents
            }
        case 2:
            let result = null
            if (selection === zaiava) {
                result = {
                    final: false,
                    step: 2,
                    options: apiData.conditional[selection]                    
                }
            } else if (selection === pozovnaZaiava) {
                result = {
                    final: false,
                    step: 2,
                    options: apiData.conditional[selection]                    
                }
            } else if (selection === klopotannia) {
                result = {
                    final: false,
                    step: 2,
                    options: apiData.conditional[selection]                    
                }
            } else if (selection === apeliatsiinaSkarha) {
                result = {
                    final: false,
                    step: 2,
                    options: apiData.conditional[selection]                    
                }
            } else if (selection === kasatsiinaSkarha) {
                result = {
                    final: false,
                    step: 2,
                    options: apiData.conditional[selection]                    
                }
            } else if (selection === 'other') {
                result = {
                    final: true,
                    step: 3,
                    zbir: true,
                    message: 'Потрібно сплатити'              
                }
            } else {
                result = {
                    final: true,
                    step: 3,
                    zbir: false,
                    message: 'Ви звільнені від сплати'              
                }
            }
            return result
        default:
            return apiData
    }
}