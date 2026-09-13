import fs from 'node:fs';
const key=process.env.EVOROZEN_API_KEY;
if(!key) throw new Error('Set EVOROZEN_API_KEY first');
const endpoint='https://pulse.evorozen.com/api/neural';
async function neural(body){const r=await fetch(endpoint,{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify(body)});const text=await r.text();if(!r.ok) throw new Error(`${r.status}: ${text}`);return JSON.parse(text)}
const now=new Date().toISOString();
const created=await neural({action_type:'insert_data',prompt:'Add a first PulsePilot task',data_payload:{table:'pulsepilot_tasks',record:{title:'Draft your project walkthrough',status:'open',priority:'high',estimated_minutes:45,focus_score:82,created_at:now}}});
const profile=await neural({action_type:'insert_data',prompt:'Save the user focus profile',data_payload:{table:'pulsepilot_profiles',record:{user_id:'battini-sadwik',preferred_session_minutes:45,energy_pattern:'morning-creative',updated_at:now}}});
console.log(JSON.stringify({ok:true,task:created,profile},null,2));
