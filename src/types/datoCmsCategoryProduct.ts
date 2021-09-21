
export enum SubCategoryBraceles{
    string = "sznurkowe", 
    fromBeads = "z koralików"
}

export enum SubCategoryScarves{
    availableImmediately = "dostępne od ręki", 
    toOrder = "na zamówienie"
}
export enum SubCategoryOther{
    handbags = "torebki", 
    caps = "czapki",
    remaining = "pozostałe"
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
    farm = "farma",
    occasional = "okazjonalne",
    dolls = "lalki"
}

export enum NameOfCategory{
    bracelets_category= 'bransoletki',
    scarves_category = "chusty",
    earrings_category = "kolczyki   ",
    mascots_category = "maskotki",
    necklaces_category = "naszyjniki",
    other = "inne",
    all = ""
}


export type datoCmsCategoryProduct = [{
    subcategory?: SubCategoryMascots | SubCategoryEarrings | SubCategoryScarves | SubCategoryBraceles
    model:{
        apiKey:NameOfCategory
    }
}]