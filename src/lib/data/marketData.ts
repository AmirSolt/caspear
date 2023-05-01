
export const getCategoryIds = () => {
    return categories.map(category => category.id)
}

export const getCategoryById = (categoryId:string) => {
    return categories.find(category => category.id === categoryId)
}

export const getBrandByIds = (brandIds:string[]) => {
    return brands.filter(brand => brandIds.includes(brand.id))
}



// ====================================

export const getBrandsByCategoryId = (categoryId:string) => {
    return brands.filter(brand => brand.category === categoryId)
}

export const getEventsByBrandId = (brandId:string) => {
    return events.filter(event => event.brand === brandId)
}

export const getEventsByCategoryId = (categoryId:string) => {
    return events.filter(event => event.category === categoryId)
}


// ====================================


export class Category{
    id:string;
    name:string;
    img:string;
    constructor(id:string, name:string, img:string){
        this.id = id;
        this.name = name;
        this.img = img;
    }
}

export class Brand{
    id:string;
    name:string;
    img:string;
    category:string;
    constructor(id:string, name:string, img:string, category:string){
        this.id = id;
        this.name = name;
        this.img = img;
        this.category = category;
    }
}

export class Event{
    id:string;
    name:string;
    img:string;
    brand:string;
    category:string;
    date:string;
    desc:string;
    constructor(id:string, name:string, img:string, brand:string, category:string, date:string, desc:string){
        this.id = id;
        this.name = name;
        this.img = img;
        this.brand = brand;
        this.category = category;
        this.date = date;
        this.desc = desc;
    }
}


// ====================================

export const categories = [
    new Category("clothing", "Clothing", ""),
    new Category("electronics", "Electronics", ""),
]

export const brands = [
    new Brand("nike", "Nike", "", "clothing"),
    new Brand("adidas", "Adidas", "", "clothing"),
    new Brand("apple", "Apple", "", "electronics"),
    new Brand("samsung", "Samsung", "", "electronics"),
]

export const events = [
    new Event("nike-summer-sales", "Summer Sales", "", "nike", "clothing", "2021-01-01", "Summer Sales"),
    new Event("nike-winter-sales", "Winter Sales", "", "nike", "clothing", "2021-01-01", "Winter Sales"),
    new Event("adidas-summer-sales", "Summer Sales", "", "adidas", "clothing", "2021-01-01", "Summer Sales"),
    new Event("adidas-winter-sales", "Winter Sales", "", "adidas", "clothing", "2021-01-01", "Winter Sales"),
    new Event("apple-summer-sales", "Summer Sales", "", "apple", "electronics", "2021-01-01", "Summer Sales"),
    new Event("apple-winter-sales", "Winter Sales", "", "apple", "electronics", "2021-01-01", "Winter Sales"),
    new Event("samsung-summer-sales", "Summer Sales", "", "samsung", "electronics", "2021-01-01", "Summer Sales"),
    new Event("samsung-winter-sales", "Winter Sales", "", "samsung", "electronics", "2021-01-01", "Winter Sales"),
]