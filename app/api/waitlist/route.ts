import { getWaitlistDb } from '@/db/waitlist';
export async function POST(request:Request){
 try {
  const origin=request.headers.get('origin');
  if(origin && origin!==new URL(request.url).origin)return Response.json({error:'Please submit the form from this website.'},{status:403});
  if(!request.headers.get('content-type')?.includes('application/json'))return Response.json({error:'Invalid request.'},{status:415});
  const raw=await request.text();
  if(raw.length>2048)return Response.json({error:'Request is too large.'},{status:413});
  let body;try{body=JSON.parse(raw)}catch{return Response.json({error:'Invalid request.'},{status:400})}
  if(!body||typeof body!=='object')return Response.json({error:'Invalid request.'},{status:400});
  if(body.website)return Response.json({ok:true});
  const email=typeof body.email==='string'?body.email.trim().toLowerCase():'';
  if(email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return Response.json({error:'Please enter a valid email address.'},{status:400});
  if(body.consent!==true)return Response.json({error:'Please agree to receive launch updates.'},{status:400});
  await getWaitlistDb().prepare('INSERT INTO waitlist (email, created_at, consent_version) VALUES (?, ?, ?) ON CONFLICT(email) DO NOTHING').bind(email,new Date().toISOString(),'launch-updates-v1').run();
  return Response.json({ok:true},{headers:{'Cache-Control':'no-store'}});
 } catch(error){console.error('Waitlist storage unavailable',error instanceof Error?error.message:'Unknown error');return Response.json({error:'The waitlist is temporarily unavailable. Please try again shortly.'},{status:503});}
}
