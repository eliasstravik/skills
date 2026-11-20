/* Eval case "focus-step": paste into the shell page (index.html#2 of fixtures/focus-step, assets copied in),
   after it has loaded. Resolves to {pass, fails[]}. Checks that an open step shows only its .now part,
   that the closed divider opens the whole step page at the same option, and that switching options
   keeps working in both frames. */
(async () => {
  const wait = ms => new Promise(r => setTimeout(r, ms)), $ = id => document.getElementById(id), fails = [];
  const shown = (d, id) => { const e = d.getElementById(id); return !!e && e.getClientRects().length > 0; };
  const f = $('frame').contentDocument;
  if (!shown(f, 'save')) fails.push('the .now part is not shown');
  for (const id of ['header', 'list', 'footer']) if (shown(f, id)) fails.push(id + ' shows outside the divider');
  if ($('restbar').hidden) fails.push('no "The whole thing" divider');
  if ($('restbtn').getAttribute('aria-expanded') !== 'false' || !$('rest').hidden) fails.push('divider is not closed by default');
  document.querySelector('#seg [data-opt="2"]').click(); await wait(600);
  if (f.documentElement.dataset.option !== '2') fails.push('option 2 did not reach the step frame');
  $('restbtn').click(); await wait(1500);
  const r = $('rest').contentDocument;
  if ($('rest').hidden || !r) fails.push('divider did not open the whole thing');
  else {
    for (const id of ['header', 'list', 'save', 'footer']) if (!shown(r, id)) fails.push(id + ' missing from the whole thing');
    if (r.documentElement.dataset.option !== '2') fails.push('the whole thing is not at option 2');
  }
  if (document.documentElement.scrollWidth > document.documentElement.clientWidth) fails.push('horizontal scroll');
  location.hash = '#1'; await wait(1500);
  const g = $('frame').contentDocument;
  if (!shown(g, 'list') || shown(g, 'header')) fails.push('answered step 1 does not show only its part');
  if (!$('rest').hidden) fails.push('divider did not close on a new step');
  return JSON.stringify({ pass: !fails.length, fails });
})()
