export default function handler(req, res) {
  const {method} = req;

  if(method === 'GET'){}

  if(method === 'POST'){
    const data = JSON.parse(req.body);
    res.status(200).json({message: 'ok', data});
  }

}
