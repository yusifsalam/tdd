# Level 1: Falling blocks

> Where to start writing a Tetris game? What is the most important behavior, which is not yet implemented?
>
> You can't have a Tetris without falling tetrominoes, so that would be one place to start. But already that is quite a
> complex feature.
>
> With TDD we prefer to _start small_. So let's start by implementing falling 1×1 blocks.

Open the [test/FallingBlocks.test.mjs](../test/FallingBlocks.test.mjs) file.

Run this project's tests in a terminal with the `npm run autotest` command. It'll run the tests automatically whenever a
file is saved, until you stop it with `Ctrl+C`. At first there should be one failing test, "The board starts empty".

Implement enough of [src/Board.mjs](../src/Board.mjs) to make the one failing test pass.

Then uncomment the next test: remove the `/*` `*/` comment marks, or enable a disabled tests by changing `xit` to `it`.
Uncomment and make the tests pass, one test at a time, until all the tests as passing.

P.S. The `equalShape` assertion is a custom assertion to improve the readability of this project's tests. It has been
implemented in [test/testing.mjs](../test/testing.mjs).

## 🚀 [Continue to the next level](level-2.md)
