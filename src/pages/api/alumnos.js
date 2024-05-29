export default async function handler(req, res) {
  const {method} = req;

  if(method === 'GET'){
    try {
      const response = await fetch('http://localhost:1973/alumnos');
      const data = await response.json();
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  if(method === 'POST'){
    const data = JSON.parse(req.body);
    // Fetch a backend
    try {
      const response = await fetch('http://localhost:1973/alumnos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const responseData = await response.json();
      res.send(responseData);
    } catch (error) {
      res.status(500).send(error);
    }

  }

  if(method === 'DELETE'){
    const id = req.body;
    try {
      const response = await fetch(`http://localhost:1973/alumnos/${id}`, {
        method: 'DELETE'
      });
      const responseData = await response.json();
      res.send(responseData);
    } catch (error) {
      res.status(500).send(error);
    }
  }

}
