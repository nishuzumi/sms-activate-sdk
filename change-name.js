/* only for sms-activate package publish script */
/* DONT USE IT IN ANY PRODUCTION */

const fs = require('fs')
const package = JSON.parse(fs.readFileSync('./package.json'))
package.name = 'sms-activate-sdk'

fs.writeFileSync('./package.json',JSON.stringify(package,null,2))
console.log('Change Done')