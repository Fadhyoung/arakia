export async function generateStaticParams() {

    const ids = ["1", "2", "3"];

    return ids.map((id) => ({ id }));
}