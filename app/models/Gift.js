import { generateId } from "../utils/GenerateId.js"

export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.profileIdsOpened = data.profileIdsOpened
    }


    get UnopenedGiftTemplate() {
        return `
<div class="col-4 p-1">
    <div class="card text-start" onclick="app.GiftsController.openGift('${this.id}')">
        <img class="card-img-bg"
            src="${this.url}"
            alt="unopened gift" />
        <div class="card-body">
            <h4 class="card-title">${this.tag}</h4>
            <p class="card-text">Click to open</p>
        </div>
    </div>
</div>`
    }
}


