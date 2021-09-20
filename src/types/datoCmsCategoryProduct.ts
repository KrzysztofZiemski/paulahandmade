
export enum SubCategoryBraceles{
    string = "sznurkowe", 
    fromBeads = "z koralików"
}

export enum SubCategoryScarves{
    availableImmediately = "dostępne od ręki", 
    toOrder = "na zamówienie"
}
export enum SubCategoryEarrings{
    tassels = "chwosty", 
    indian = "indiańce",
    retro = "retro",
    other = "inne"
}
export enum SubCategoryMascots{
    forestAnimals = "zwierzaki leśne", 
    seaAnimals = "zwierzaki morskie",
    pets = "zwierzaki domowe",
    occasional = "okazjonalne"
}

export enum NameOfCategory{
    bracelets_category= 'bransoletki',
    scarves_category = "chusty",
    earrings_category = "kolczyki   ",
    mascots_category = "maskotki",
    necklaces_category = "naszyjniki",
    handbags_category = "torebki"
}


export type datoCmsCategoryProduct = [{
    subcategory?: SubCategoryMascots | SubCategoryEarrings | SubCategoryScarves | SubCategoryBraceles
    model:{
        apiKey:NameOfCategory
    }
}]