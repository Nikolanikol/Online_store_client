import {makeAutoObservable, toJS} from 'mobx'

export default class DeviceStore{
    constructor(){
        this._types = []
        this._brand = []
        this._devices = [
            {id : 1, name : 'Iphone', price : 3000, rating : 5, img : 'https://optim.tildacdn.com/tild3734-3763-4635-b839-346536343966/-/resize/560x/-/format/webp/serious-about-wallpa.png'},
        
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setType(types){
        this._types= types
    }
    setBrand(brand){
        this._brand= brand
    }
    setDevice(device){
        this._devices = device
        console.log(this._devices)

    }
    setSelectedType(type){
        this._selectedType = type
        console.log(        this._selectedType)
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
        console.log(toJS(this._selectedBrand).id)
    }


    get types(){
        return this._types
    }
    get brand(){
        return this._brand
    }
    get device(){
        return this._device
    }



    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }

}