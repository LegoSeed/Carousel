import http from 'k6/http';
import { sleep } from 'k6'

export const options = {
  vus: 1500,
  duration: '30s',
};

export default function () {
  http.get('http://localhost:3001/carousel');
  sleep(1);
}
