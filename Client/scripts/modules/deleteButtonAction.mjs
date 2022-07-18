export default function deleteThisCard(imageID) {
  
    fetch("http://localhost:3000/", {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: imageID
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
}