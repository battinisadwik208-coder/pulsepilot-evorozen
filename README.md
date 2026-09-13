# PulsePilot

PulsePilot is an adaptive student productivity companion for Evorozen Apex. It turns a user's focus signal into a small, explainable queue instead of an overwhelming task list.

## Neural Pulse integration

PulsePilot uses Evorozen Neural Pulse as its virtual database and memory layer. The integration registers two LivingDNA tables:

- `pulsepilot_tasks`: title, status, priority, estimated minutes, focus score, created timestamp
- `pulsepilot_profiles`: user id, preferred session length, energy pattern, update timestamp

The integration proof is in `neural-pulse-integration.mjs`. Keep `EVOROZEN_API_KEY` in an environment variable; never commit `.env.local`.

## Run

Open `index.html` for the polished deterministic demo. To validate the Neural Pulse connection:

```powershell
$env:EVOROZEN_API_KEY='your-key'
node neural-pulse-integration.mjs
```

This prototype is a productivity aid, not a mental-health or medical diagnostic tool.
