export default function Id({ params }: { params: { id: string } }) {
    return (
        <>
            <h1>/app/sub/[id]/page.tsx</h1>
            <p>Parameter ID: {params.id}</p>
        </>
    );
}
