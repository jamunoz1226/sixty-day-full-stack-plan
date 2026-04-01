/**
 * Phase 1 — Day 2: Loops (Break + Conditions)
 *
 * LEARN (plain English)
 * ---------------------
 * A loop keeps running while its condition is true. Inside the loop, you can use `if`
 * to decide *what* to do each time — skip, log, accumulate, etc.
 *
 * `break` means: "Stop the whole loop right now and jump to the code after the loop."
 * Use it when you found what you need, or hit a "stop signal," so you do not waste work.
 *
 * Think of it like: "Keep scanning the line until you see someone wearing a red hat,
 * then stop looking" — that's a condition + early exit (break).
 *
 * Pseudocode — search + break
 * -----------------------------
 * FOR each item in list:
 *   IF item matches what we want:
 *     REMEMBER or PRINT something
 *     BREAK out of loop
 *   ELSE:
 *     KEEP going
 *
 * Pseudocode — guard + break (safety)
 * ------------------------------------
 * SET attempts = 0
 * WHILE true (or while some broad condition):
 *   attempts += 1
 *   IF attempts > MAX:
 *     BREAK   // prevent infinite loop
 *   IF good outcome:
 *     BREAK
 *   DO next try
 */

console.log("---- Day 2: loops (break + conditions) — BUILD then REINFORCE ----\n");

// =============================================================================
// BUILD (guided — fill in the blanks; run with: node practice/loopsBC.js)
// =============================================================================

// Build B1 — First match
// Goal: In `const scores = [12, 45, 30, 70, 22];`, find the FIRST score >= 50.
// Log that number and break. (If none match, log "none" after the loop — hint: use a flag variable.)
//
// Steps (pseudocode you translate to JS):
//   let found = false
//   for ... each score ...
//     if score >= 50 -> log it, set found = true, break
//   if !found -> log "none"

const scores = [12, 45, 30, 70, 22];
// --- your code below ---

// let found = ___;
// for ( ... ) {
//   ...
// }
// if ( ... ) {
//   ...
// }

console.log("--- end B1 ---\n");

// Build B2 — Skip bad data, stop on sentinel
// Goal: Loop through `const tokens = ["ok", "ok", "bad", "stop", "ok"];`
// Rules:
//   - If token is "bad", use `continue` to skip to the next iteration (do not log "bad").
//   - If token is "stop", `break` (do not print "stop").
//   - Otherwise console.log the token.
//
// Expected console order: ok, ok
//
// Note: `continue` skips the rest of *this* loop body and goes to the next iteration.

const tokens = ["ok", "ok", "bad", "stop", "ok"];
// --- your code below ---

// for (...) {
//   if (token === "bad") { ... }
//   if (token === "stop") { ... }
//   console.log(token);
// }

console.log("--- end B2 ---\n");

// Build B3 — Cap how long you search
// Goal: Use a while loop. Start `let guess = 1`. Each iteration, add 7 to guess.
// Stop when guess > 50 OR after at most 5 iterations (whichever comes first).
// Log `guess` after each update. Use a counter and `break` for the 5-iteration cap.
//
// Hint: structure like
//   let guess = 1
//   let rounds = 0
//   while (true) { ... }

// --- your code below ---

console.log("--- end B3 ---\n");

// =============================================================================
// REINFORCE (challenge — you write it; no solution in this file on purpose)
// =============================================================================
//
// R1 — Password attempts (concept you will use in real apps)
// Simulate 3 tries: start `let tries = 0`. While tries < 3:
//   increment tries, check a string `const secret = "letmein"` against a fake input variable
//   (just set `let input = "wrong"` first, then change it once to test success).
//   On correct input: log "in" and break.
//   On third wrong try: log "locked" after the loop.
//
// R2 — Explain back (no code)
// In one sentence each: how is `break` different from `continue`?
//
// R3 — Trace
// Without running, what does this print? Then run and confirm.
//   for (let k = 0; k < 5; k++) {
//     if (k === 2) continue;
//     if (k === 4) break;
//     console.log(k);
//   }
