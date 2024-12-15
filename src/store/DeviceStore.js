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
        this._sortedDeviceList = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }
    setLimit(limit){
        this._limit = limit
    }

    setType(types){
        this._types= types
    }
    setBrand(brand){
        this._brand= brand
    }
    setDevice(device){
       this._devices = device
    }
    setSelectedType(type){
        this._selectedType = type
        console.log(        toJS(this._selectedType))
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
        console.log(toJS(this._selectedBrand))
    }
    setSortedDeviceList(brandId, typeId){
        console.log(brandId)
        console.log(typeId)
        let sortedList = []
        if(brandId){
            sortedList = this._devices.filter(item=>item.brandId !== brandId)
        }
        if(typeId){
            sortedList = sortedList.filter(item=>item.typeId !== typeId)
        }
        this._sortedDeviceList = sortedList


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
    get sortedDeviceList(){
        return this._sortedDeviceList
    }
    get page(){
        return this._page
    }
    get totalCount(){
        return this._totalCount
    }
    get limit(){
        return this._limit
    }

}