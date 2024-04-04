import { AppState } from "../AppState.js"
import { giftsService } from "../services/GiftsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"


export class GiftsController {
    constructor() {
        console.log('gifts controller loaded!')
        AppState.on('account', this.getSandboxGifts)
        AppState.on('gifts', this.drawGifts)

    }

    async getSandboxGifts() {
        try {
            await giftsService.getSandboxGifts()
        } catch (error) {
            console.error("couldn't get gifts", 'error')
        }
    }

    drawGifts() {
        let giftsList = ''
        AppState.gifts.forEach(gift => giftsList += gift.UnopenedGiftTemplate)
        setHTML('gift-list', giftsList)
    }

    async openGift(tag) {
        await giftsService.openGift(tag)
    }

    async giveGift() {
        event.preventDefault()
        let formData = getFormData(event.target)
        console.log(formData)
        await giftsService.giveGift(formData)
    }


}