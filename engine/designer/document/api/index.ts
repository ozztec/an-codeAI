
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://an-code-ai-theta.vercel.app:3000/api',
});
/* GET /edit/insertNode */
export async function editInsertNode(options?: { [key: string]: any }) {
    return request('/edit/insertNode', {
      method: 'GET',
      params: options,
    });
}

/* GET /edit/insertNode */
export async function editDeleteNode(options?: { [key: string]: any }) {
  return request('/edit/deleteNode', {
    method: 'GET',
    params: options,
  });
}

