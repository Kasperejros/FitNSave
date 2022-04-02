import { action, computed, makeObservable, observable } from "mobx";

class Store {
    distance = 10;
    price = 5;

    constructor() {
        makeObservable(this, {
            distance: observable,
            price: observable,
            changeDistance: action,
            changePrice: action,
            filteredLists: computed
        });
    }

    changeDistance = (value) => {
        this.distance += value;
    }

    changePrice = (value) => {
        this.price += value;
    }

    get filteredLists () {
        return distance * price;
    }
}

const appStore = new Store();
export default appStore;