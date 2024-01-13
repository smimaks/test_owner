import { newsWorker } from '../di';

export function workerInit() {
  setInterval(() => {
    newsWorker
      .run()
      .then(() => console.log('news add to db'))
      .catch(err => {
        console.log('worker init error');
        console.log(err);
      });
  }, 60 * 1000);
}
