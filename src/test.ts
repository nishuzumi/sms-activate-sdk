import {SMSActivate} from './index'


async function main() {
    const api = new SMSActivate(process.env.TOKEN)
    const result = await api.getNumber({service:'tw',country:0})
    await result.ready()
    const code = await result.getCode()
}

main().catch(console.error)