





export const mainData:any = {
    "clothing":{
        category: 'clothing',
        brands: {
            'nike':{
                name: 'Nike',
                img: "https://source.unsplash.com/random/1280x540?skeleton",
                events:[
                    {
                        date: '2021-01-01',
                        desc: 'Summer Sales',
                        img:"https://source.unsplash.com/random/1280x540?skeleton",
                    }
                ]
            },
            'adidas':{
                name: 'Adidas',
                date: '2021-01-01',
                desc: 'Summer Sales',
                img:"https://source.unsplash.com/random/1280x540?skeleton",
                events:[
                    {
                        date: '2021-01-01',
                        desc: 'Summer Sales',
                        img:"https://source.unsplash.com/random/1280x540?skeleton",
                    }
                ]
            },
            'puma':{
                name: 'Puma',
                date: '2021-01-01',
                desc: 'Summer Sales',
                img:"https://source.unsplash.com/random/1280x540?skeleton",
                events:[
                    {
                        date: '2021-01-01',
                        desc: 'Summer Sales',
                        img:"https://source.unsplash.com/random/1280x540?skeleton",
                    }
                ]
            },
            'reebok':{
                name: 'Reebok',
                date: '2021-01-01',
                desc: 'Summer Sales',
                img:"https://source.unsplash.com/random/1280x540?skeleton",
                events:[
                    {
                        date: '2021-01-01',
                        desc: 'Summer Sales',
                        img:"https://source.unsplash.com/random/1280x540?skeleton",
                    }
                ]
            },
        }
    },
    "electronics":{
        category: 'electronics',
        brands: {
            'samsung':{
                name: 'Samsung',
                img: "https://source.unsplash.com/random/1280x540?skeleton",
                events:[
                    {
                        date: '2021-01-01',
                        desc: 'Summer Sales',
                        img:"https://source.unsplash.com/random/1280x540?skeleton",
                    }
                ]
            },
            'apple':{
                name: 'Apple',
                img: "https://source.unsplash.com/random/1280x540?skeleton",
                events:[
                    {
                        date: '2021-01-01',
                        desc: 'Summer Sales',
                        img:"https://source.unsplash.com/random/1280x540?skeleton",
                    }
                ]
            },
        }
    },

};






export const brands = Object.keys(mainData).map((category)=>{
    return Object.keys(mainData[category].brands).map((brand)=>{
        return {
            category,
            brand,
            ...mainData[category].brands[brand]
        }
    })
}).flat()



// list all the events
export const events = Object.keys(mainData).map((category)=>{
    return Object.keys(mainData[category].brands).map((brand)=>{
        return mainData[category].brands[brand].events.map((event)=>{
            return {
                category,
                brand,
                ...event
            }
        })
    }).flat()
}).flat()



