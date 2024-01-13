import * as client from 'prom-client';
import * as os from 'os';

export async function getMetrics() {
  const register = new client.Registry();

  register.setDefaultLabels({
    app: 'test_owner_app',
  });
  client.collectDefaultMetrics({ register });

  const cpuCountInfo = new client.Gauge({
    name: 'app_cpu_count',
    help: 'Cpu count',
    labelNames: ['cpu'],
    registers: [register],
    collect() {
      this.set(os.cpus().length);
    },
  });

  return { contentType: register.contentType, metrics: await register.metrics() };
}
