import MasonryGrid from "@/components/MasonryGrid";
import { Photo } from "@/types/gallery";


export default function Home() {

  const portfolioPhotos: Photo[] = [
    {
      id: "smug-1",
      url: "https://photos.smugmug.com/Weddings/Pike/Pike/i-XSk7Mws/2/MWWw9QkwhHfxHQP95ccZSX2DnCLhC4PJ9FVSRwbc3/X2/IMG_0213-2-X2.jpg",
      altText: "Bride kneeling in chruch before ceremony",
      width: 1920,
      height: 1280, // Landscape
    },
    {
      id: "smug-2",
      url: "https://photos.smugmug.com/Weddings/OpokuB/Opoku/i-TsD6NFz/0/LKp8NQMCVXDP8cKMqMwbTzkR5M7jpHpCRkvKBQT2f/X2/IMG_7734-X2.jpg",
      altText: "Copule celebrates with parents after ceremony",
      width: 1280,
      height: 1920, // Portrait
    },
    {
      id: "smug-3",
      url: "https://photos.smugmug.com/Weddings/Lefler/i-NPPN55Z/0/NBB7zSKxQ6JDbnMnf6DN96swGGdQgfWxc5QRb3VC4/X4/3U4A5735-X4.jpg",
      altText: "Close up of jewelry from the bride's parents",
      width: 1920,
      height: 1280,
    },
    {
      id: "smug-4",
      url: "https://photos.smugmug.com/Weddings/Pike/Reception/i-v8rRVQH/0/MvWr39LMHPx7PQtzQ62g7QvWmvcZJWcQtZ6J5SCBK/X2/IMG_0691-X2.jpg",
      altText: "Couple prays prior to the reception dinner",
      width: 1920,
      height: 1280,
    },
    {
      id: "smug-5",
      url: "https://photos.smugmug.com/Weddings/OpokuB/Opoku/i-4hCTcVX/0/KJphQj45Jm5GdKZC7NczGtBWTv5hkCFKQ4nNVfnJZ/X2/IMG_7715-X2.jpg",
      altText: "Bride and Groom sign marriage certificate",
      width: 1920,
      height: 1280,
    },
    {
      id: "smug-6",
      url: "https://photos.smugmug.com/Weddings/AmberMattM/AmberMattMWedding/i-HW7vLGw/0/Kf4HCkRCBwHK6RrgdrgKH8B9Rf5P4kVN4StFgXS5F/X4/IMG_0474-X4.jpg",
      altText: "Bride is escorted in by her father",
      width: 1280,
      height: 1920,
    },
    {
      id: "smug-7",
      url: "https://photos.smugmug.com/Other/n-jFCXx/Seattle-2021/i-Fv358CG/0/LTcCB2ZqkjWpdHQ24sMRkXMmsqBSRJ2H4v5rf7jLG/X4/untitled%20shoot-0145-X4.jpg",
      altText: "Glass sculptures from the Chihuly museum",
      width: 1920,
      height: 1280,
    },
    {
      id: "smug-8",
      url: "https://photos.smugmug.com/Other/n-jFCXx/Seattle-2021/i-MNR94ns/0/MJkW66qkHzS5NttkdkxnzbR9FwRbRbHq6s6h6gPXp/X2/untitled%20shoot-0181-X2.jpg",
      altText: "glass sculpture from the Chihuly museum",
      width: 1920,
      height: 1280,
    },
    {
      id: "smug-9",
      url: "https://photos.smugmug.com/Graduation/n-CmBkB/2023-3-25-Raquel-Sandoval-Graduation/i-jnW3PGx/0/NGfhM8bSpDCnG8wdgNgFD2Hqt7z9s26tCQvZ96fPg/X4/3U4A3571-X4.jpg",
      altText: "Raquel celebrates graduation",
      width: 1280,
      height: 1920,
    }

  ];

  return (
    <main className="min-h-screen py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h1 className="text-4xl font-light tracking-wide text-gray-900 text-center mb-4">
          Matthew Allen Thompson Photography
        </h1>
        <p className="text-center text-gray-500 font-light">
          Selected Works & Wedding Commissions
        </p>
      </div>

      {/* We pass the data to our Client Component. 
        The heavy lifting of state and layout happens inside the grid.
      */}
      <MasonryGrid photos={portfolioPhotos} />
    </main>
  );
}