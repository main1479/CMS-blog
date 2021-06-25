---
title: CSS Filter
description: CSS Filters are a powerful tool that authors can use to achieve
  varying visual effects (sort of like Photoshop filters for the browser). The
  CSS filter property provides access to effects like blur or color shifting on
  an element’s rendering before the element is displayed. Filters are commonly
  used to adjust the rendering of an image, a background, or a border.
author: Mainul Islam
date: 2021-06-25T09:40:09.099Z
tags:
  - post
  - featured
image: /assets/blog/screenshot-2021-06-25-154427.png
imageAlt: Css filter examples
---
CSS Filters are a powerful tool that authors can use to achieve varying visual effects (sort of like Photoshop filters for the browser). The CSS filter property provides access to effects like blur or color shifting on an element’s rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border.

### Notes

You may combine any number of functions to manipulate the rendering, but order still matters (i.e., using `grayscale()` after `sepia()` will result in completely gray output).

A computed value of other than “none” results in the creation of a stacking context the same way that CSS opacity does. The filter property has no effect on the geometry of the target element’s box model, even though filters can cause painting outside of an element’s border box. Any parts of the target element are affected by filter functions. This includes any content, background, borders, text decoration, outline and visible scrolling mechanism of the element to which the filter is applied, and those of its descendants. Filters can also be applied to inline content, such as individual text spans.

The specification also introduces a `filter(image-URL, filter-functions)` wrapper function for an image. It would allow you to filter any image at the time you use it within CSS. For example, you could blur a background image without blurring the text. This filter function is not yet supported in browsers. In the meantime, you can apply both the background and the filter to a pseudo-element to create a similar effect.