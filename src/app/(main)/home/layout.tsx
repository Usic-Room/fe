import {
  Navigation,
  SideBar,
  MainView,
  NowPlaying,
} from "@/components/home/navigation";

// TODO: login 여부 저장 or 가져오기

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <div
          className="fixed bg-black p-2 w-full z-10"
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "minmax(200px, auto) 1fr",
            gridTemplateRows: "auto 1fr auto",
            gridTemplateAreas: `
            "navbar navbar navbar"
            "sidebar mainview mainview"
            "nowplaying nowplaying nowplaying"
            `,
            height: "100vh", // Ensures the entire grid layout takes full height
          }}
        >
          {/* Navbar */}
          <div
            className="w-full py-2 sm:px-6 lg:px-8 bg-black"
            style={{ gridArea: "navbar" }}
          >
            <Navigation isLogin={false} />
          </div>

          {/* Sidebar */}
          <div
            className="h-full bg-black-121212 rounded-lg" // Sidebar with bg and padding
            style={{
              gridArea: "sidebar",
            }}
          >
            <SideBar isLogin={false} />
          </div>

          {/* Main View */}
          <div
            className="h-full rounded-lg overflow-y-auto" // Add padding for separation
            style={{ gridArea: "mainview" }}
          >
            <MainView>{children}</MainView>
          </div>

          {/* NowPlaying Bar at the bottom */}
          <div
            className="bottom-0 w-full z-5"
            style={{ gridArea: "nowplaying" }}
          >
            <NowPlaying />
          </div>
        </div>
      </body>
    </html>
  );
}
