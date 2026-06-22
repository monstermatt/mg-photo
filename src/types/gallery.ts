export interface Photo {
    id: string;
    url: string;
    altText: string;
    width: number;
    height: number;
    caption?: string;
    isFeatured?: boolean;
}

export interface Gallery {
    id: string;
    slug: string;
    title: string;
    coverPhotoUrl: string;
    date: string;
    clientNames?: string;
    photos: Photo[];
}