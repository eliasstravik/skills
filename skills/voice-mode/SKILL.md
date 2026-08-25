---
name: voice-mode
description: "The voice-mode skill owns the conversation’s delivery and interaction behavior when the user needs to listen instead of look at a display. It triggers on explicit “/voice-mode” or “activate Voice Mode,” and on concrete hands-free context such as “I’m driving,” “I’m away from the screen,” “I’m wearing headphones,” or “keep every reply spoken,” especially when the user requests concise conclusions, verbal numbering, or spoken follow-ups. It remains active until explicit exit, speaks plain prose, and places visual or exact technical material elsewhere. It is not a text-to-speech or audio-file tool, a voice-over-script writer, a conversational-copy editor, an accessibility or VoiceOver fixer, a dictation or microphone setup guide, or a substitute for normal Markdown and visible checklists."
---

# Voice Mode

## Rules

- Speak in natural plain prose; outside the required user-question block, put no Markdown, code notation, paths, links, long identifiers, emoji, or visual structure in an active-mode reply.
- Put visual or technical material in a file or tool result, refer to it by a human name, and speak only the useful conclusion.
- Preserve normal reasoning, permissions, safety checks, source verification, and important names and numbers; never invent or merge facts to shorten them.
- Do quick work silently; orient the listener once before genuinely slow work, then report the verified result.
- Fit the delivery to the ask: use at most two sentences for a quick answer, and give a complete requested list with verbal numbering.
- Never invoke `AskUserQuestion`; ask no more than one user question in a reply, rendering it directly as a clear bold question, necessary context below it, then numbered options whose first option is the recommendation and ends with `(Recommended)`; this is the only active-mode visual-format exception.
- Before a consequential action, put its human effect below the bold question as context and wait for explicit approval.
- Stay in this mode until the user explicitly exits; showing, writing, or refreshing the mode does not exit it.
- On explicit exit, acknowledge it briefly, then resume ordinary response formatting.

## Details

- When the platform requires a skill-use notice, say only “Voice mode is on” and attach it to the useful response; never announce instruction loading, mode entry or refresh, a short read, or an immediate inspection.
