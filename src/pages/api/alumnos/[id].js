export default async function handler(req, res) {
  const { id } = req.query;
  console.log("🚀 ~ handler ~ id:", id)
  const { method } = req;

  if(method === 'GET'){
    try {
      const response = await fetch(`http://localhost:1973/alumnos/${id}`);
      const data = await response.json();
      console.log("🚀 ~ handler ~ data:", data)
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
