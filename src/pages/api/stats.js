export default async function handler(req,res){
  if(req.method === 'GET'){
    const response = await fetch('http://localhost:1973/stats')
    const stats = await response.json();

    res.send(stats);
  }
}
