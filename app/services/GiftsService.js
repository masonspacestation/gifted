import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"

class GiftsService {

    async getSandboxGifts() {
        const response = await api.get('api/gifts')
        console.log('here are the gifts', response.data)
        const gifts = response.data.map(gift => new Gift(gift))
        AppState.gifts = gifts
        console.log('appstate', AppState.gifts)
    }

    async openGift(id) {
        // console.log(id)
        const giftToOpen = AppState.gifts.find(gift => gift.id == id)
        console.log('gift to open', giftToOpen)
        giftToOpen.opened = true
        console.log(giftToOpen)
        const response = await api.put(`api/gifts/${id}`, giftToOpen)
        console.log('did the gift open?', response.data)
        AppState.emit('gifts')
    }

    async giveGift(formData) {
        AppState.giftToGive = new Gift(formData)
        console.log(AppState.giftToGive)
        const response = await api.post('api/gifts', AppState.giftToGive)
        console.log(response)
    }
}

export const giftsService = new GiftsService()