import NavTvium from "../componentes/navigation/nav-tvium";


export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <NavTvium/>
        {children}
    </div>
  );
}
