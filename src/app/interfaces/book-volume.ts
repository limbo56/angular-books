export interface VolumeInfo {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {
        type: string;
        identifier: string;
    }[];
    readingModes: {
        text: boolean;
        image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
    };
    imageLinks?: {
        smallThumbnail: string;
        thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface ListPrice {
    amount: number;
    currencyCode: string;
}

export interface Offer {
    finskyOfferType: number;
    listPrice: {
        amountInMicros: number;
        currencyCode: string;
    };
    retailPrice: {
        amountInMicros: number;
        currencyCode: string;
    };
    giftable: boolean;
}

export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: ListPrice;
    retailPrice: ListPrice;
    buyLink: string;
    offers: Offer[];
}

export interface Epub {
    isAvailable: boolean;
    acsTokenLink: string;
}

export interface Pdf {
    isAvailable: boolean;
}

export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface BookVolume {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
}

export interface BookVolumesResponse {
    kind: string;
    totalItems: number;
    items: BookVolume[];
}