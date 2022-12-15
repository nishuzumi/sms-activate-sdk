import {SMSActivate} from './index'
import 'axios-debug-log'

async function main() {
    const api = new SMSActivate(process.env.TOKEN)
    const result = await api.getNumber({service:'lf',country:0})
    await result.ready()
    console.log(result)
    const code = await result.getCode(180,5000)
    console.log(code)
}

main().catch(console.error)