import { env } from 'cloudflare:workers';
export function getWaitlistDb(){if(!env.DB)throw new Error('Waitlist database is unavailable');return env.DB;}
