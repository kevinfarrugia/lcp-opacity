## Demo

### Baseline

- Navigate to https://kevinfarrugia.github.io/lcp-opacity/
- The page contains a hero image `img.hero__img` with `opacity:0` and a card image `img.card__img` with `opacity:1`. The hero image is faded in after 2 seconds after which the CSS class `.completed` is applied.
- In Chrome, the LCP element is `img.hero__img` (at around 2.1 seconds) even though the image starts with `opacity:0`. According to the spec, the `img.hero__img` should be ineligible as an LCP candidate since it is first painted at `opacity:0`.

### Transform

- Navigate to https://kevinfarrugia.github.io/lcp-opacity/transform
- This example is identical to the Baseline example, except that it has a `transform: scale(1)` applied to `img.hero__img`. 
- In Chrome, the LCP element is now `img.card__img` (at around 0.1 seconds) and `img.hero__img` is no longer the LCP element.

### `opacity:0.01`

- Navigate to https://kevinfarrugia.github.io/lcp-opacity/opaque
- This example is similar to the Baseline example, except that it has `opacity:0.01` applied to `img.hero__img`. When the fade in animation is complete, the CSS class `.completed` applies a `border: 2px solid #f00` to the image element.
- In Chrome, the LCP element is `img.hero__img` (at around 0.1 seconds). This is the intended behavior because the image is visible at its first paint making it an eligible LCP candidate.

### LCP

- Navigate to https://kevinfarrugia.github.io/lcp-opacity/lcp
- This example is similar to the Transform example. The `img.hero__img` starts with `opacity:0` and has a `transform: scale(1)` applied. However, when the fade in animation is complete, the CSS class `.completed` applies a `border: 2px solid #f00` to the image element—similarly to the `opacity:0.01` example.
- In Chrome, the LCP element is `img.hero__img` (at around 2.1 seconds). Considering that the image is not visible at its first paint, it should not be an eligible LCP candidate. However, adding the border on `transitionend` makes it eligible.
