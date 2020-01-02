# Sorting Algorithms in

Algorithms are fun. Here is a collection of sorting algorithms in JavaScript.

Beware: lots of recursion afoot!

## Quicksort

[JavaScript implementation](./quicksort.js)

[Quicksort](https://en.wikipedia.org/wiki/Quicksort) is based on partitioning.

Suppose we start with an array of integers that need sorting, e.g. [6, 4, 3, 1, 5].

First, we choose a __pivot__, ideally the number at the middle which in this case is __3__ (note, in case of an even number array, e.g. [4, 5, 2, 1] we'd choose the middle number with the lower index, in this example it would be 5).

Next, we start from either end of the array and compare the numbers on either side to the pivot and order them to be on the correct side of the central value.

[__6__, 4, 3, 1, __5__]

Above, 6 is larger than 3 so it needs to be on the right, but 5 is already on the correct side of 3, so we skip that and move inwards.

[__6__, 4, 3, __1__, 5]

Here, 6 needs to be on the right and 1 needs to be on the left, so we swap them and move both sides along.

[1, __4__, __3__, 6, 5]

Here, we can see that 4 and 3 need to be swapped so we do that and are done.

[1, 3, 4, 6, 5]

This is where the recursion comes in. We now also need to sort the sub-arrays on either side of the pivot, namely [1, 3, 4] and [6, 5].

We do this using the same logic as before. [1, 2, 3] are already ordered and [6, 5] will be swapped around.

The base case for the recursion is based on the length of the array to be left to check. An array of length 1 is by definition ordered, which makes it the end case.

## Mergesort
[JavaScript implementation](./mergesort.js)

[Mergesort](https://en.wikipedia.org/wiki/Merge_sort) is a merging based sorting algorithm. It's main selling point is that it is "highly parallelisable", which is very handy in with Node (insert sarcasm flag). The implementation for it is pretty straightforward though.

Let's start with the same array of integers that need sorting - [6, 4, 3, 1, 5].

First we halve the array:

[6, 4] [3, 1, 5]

Then we halve the remaining arrays:

[6] [4] [3] [1, 5]

We keep going until we are left with only single item arrays:

[6] [4] [3] [1] [5]

An array of one item is intrinsically sorted so that's out starting point. Now we take two arrays at the time and merge them into one sorted array:

[4, 6] [3] [1, 5]

And we keep going until the array is sorted

[4, 6] [1, 3, 5]

1, 3, 4, 5, 6
