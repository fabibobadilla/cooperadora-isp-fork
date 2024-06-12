export default async function handler (req,res) {

  if(req.method === 'GET'){

    try {
      const response = await fetch('http://localhost:1973/cobros');
      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({message: 'Server Error', error});
    }

  }

  if(req.method === 'POST'){
    const data = JSON.parse(req.body);
    // Fetch a backend
    try {
      const response = await fetch('http://localhost:1973/cobros', {
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

  if(req.method === 'PUT'){}

  if(req.method === 'DELETE'){}

}
