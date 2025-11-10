import MainNavbar from "@/components/main-navbar";

export default function MainLayout(props: LayoutProps<"/">) {
    return(
        <>
            <MainNavbar />
            <main className="p-4">{props.children}</main>
        </>
    )
}