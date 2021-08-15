## 1. What would you add to your solution if you had more time?

- The nested reduce calculation (delta diffing) could be moved into a web-worker.
- I would start with handling the totals on the ui side :D
- I would have tested my hooks as well (the useOrderBook hook)
- The semi-transparent bars which visually indicate the number of asks/bids

## 2. What would you have done differently if you knew this page was going to get thousands of views per second vs per week?

### Per second

I think the application itself is suitable for high load, its server-side rendered, next.js prerenders pages, also the lighthouse score is pretty good.
The infrastructure around the application however should be pretty advanced in that case. Caching doesn't help a lot for only this usecase, 
but for example moving the whole thing as a docker container to AWS with N number of instances and using application load-balancing with an instance in each     major geographic region would certainly help.

### Per week

Well for that usecase next.js is probably an overkill, but I like it. So probably nothing.

## 3. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- My chosen language is Javascipt/Typescript 
- For typescript the most useful feature recently was template literal types, like `${eventName}_CHANGED` as const for example.
- For javascript there are a lot of things, like pattern matching, ... operator, but my most used favourite tools are probably `map`, `filter`, and `reduce`
 [snippet](https://gist.github.com/tokdaniel/bc23f7141868da0518832169102b0b32)
- I'm also excited about pattern matching, since I'm a big fan of functional languages like Haskell and Purescript, but they have it better.
- Tagged templates are also very cool, they make styling very convinient for example. There are plenty of snippets in this codebase to show that.

## 4. How would you track down a performance issue in production? Have you ever had to do this?

- The first thing to confirm that is the performance issue client-sided. Obviously if that is not the case, I'll have to look for backend logic issues, db queries or such.
If it is, there is a very good toolset inside Chrome devtools to audit and measure the different processes on the client-side (lighthouse-audit, memory-snaphots, performance-audit). Performance audit is especially helpful, since you can record a content-load or a render with the recording feature, and then analize the data by screenshots network data and memory usage (for example here its pretty obviously shown if there is a memory leak) on the timeline. Of course there are simple things to confirm, like bundle sizes aren't too big etc.
- If everything is fine, then there is only algorythm optimization left, which mostly boils down to data-structures.
- When I was working at Lensa I had a lot of task with optimization, because there the product was a job-site (similar to indeed, or glassdoor) and there were millions of pageviews daily.

## 5. Can you describe common security concerns to consider for a frontend developer?

Depends on the subject, but if we are talking about webapplications

- The most common is compromised credentials, and production environments, that are too lazily configured, and using the same env vars/passowords as the dev version
- No proper secret handling
- npm packages, with malicious code
- Not specifically frontend but related: encrypted connection (https & Man in the Middle attack), Access-Control-Allow-Origin policy, 
- Frontend things: Most attack vectors are related to user inputs, and text sanitization, so special care goes for every kind of user input, but modern frameworks make this hard thankfully. For example: SQL injection (in case of an SQL server), XSS, CSRF etc.

## 6. How would you improve the Kraken API that you just used?

- I'd probably return the types I've created called NBook which has the price as an object key in the result, since this makes its easier to update the current state with the delta, and it's also more efficient than using arrays.
- Im also not sure about what kind of configuration can I send with the connection, but tweaking with the emit frequency should be nice. I'm not sure if there's an option to aggregate things on the backend until a new emit is happening, but it seems like the sample application updated around every second, so that would make things easier on the frontend.
- I would really rather send a different data-structure, which makes the diffing with the state easier, but I'm not sure if I was the one overengineering it.
- The grouping settings of the API are somewhat confusing , 0.5 sends 1, and 1 sends 2, ...etc. I set it as exact values, unlike the demo. Probably that is not entirely correct, but it could be. 