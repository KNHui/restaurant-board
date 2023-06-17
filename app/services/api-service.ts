export async function getRemoteApi(url: string) {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        return await res.json();
    } catch (error) {
        console.error(error);
    }
}
