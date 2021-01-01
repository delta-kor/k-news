import { NextApiHandler } from 'next';
import axios from 'axios';

const ProxyApiHandler: NextApiHandler = async (req, res) => {
  const url = req.query.url as string;
  const response = await axios.get(url);
  res.send(response.data);
};

export default ProxyApiHandler;
